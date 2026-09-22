/* three-scene.js — all Three.js-powered enhancement in one place:
   - createViewer(): the one drag-to-rotate WebGL viewer used by the hero
     Venn diagram (app.js), the per-topic explanation diagrams, and the
     results 3D chart
   - topic-aware diagram builders + router (Explain3D.mount)
   - a persistent full-page background of static wireframe shapes
   - a lightweight pointer-tilt effect for cards/chips/pills
   Everything here is a progressive enhancement: if WebGL/Three.js is
   unavailable, the site behaves exactly as it did before this file existed. */
(function () {
  'use strict';

  if (typeof THREE === 'undefined') {
    window.Explain3D = { mount: function(){}, unmount: function(){}, createViewer: function(){ return null; } };
    return;
  }

  var COLORS = {
    a: 0x2C4A9E, aTint: 0xE4E9F5,
    b: 0xC1443D, bTint: 0xF7E6E4,
    overlap: 0x6B3E86,
    correct: 0x2E7D53,
    ink: 0x1B2230,
    inkSoft: 0x4B5266,
    line: 0xDBD8CC
  };

  var reducedMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ================================================================
     SHARED VIEWER — renderer + camera + lights + drag-to-rotate with
     inertia + resize + disposal. Used by every mounted 3D diagram,
     including the start-screen hero (see initVennHero in app.js).
     ================================================================ */
  /**
   * @param {HTMLElement} container
   * @param {Object} [opts]
   * @returns {?Object}
   */
  function createViewer(container, opts) {
    opts = opts || {};
    var w = container.clientWidth, h = container.clientHeight || 220;
    if (!w || !h) return null;

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);
    container.style.cursor = 'grab';

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(opts.fov || 42, w / h, 0.1, 100);
    camera.position.set(0, opts.camY != null ? opts.camY : 0.5, opts.camZ || 6.2);
    camera.lookAt(0, 0, 0);

    var group = new THREE.Group();
    scene.add(group);
    scene.add(new THREE.AmbientLight(0xffffff, 0.65));
    var dir1 = new THREE.DirectionalLight(0xffffff, 0.85); dir1.position.set(3, 4, 5); scene.add(dir1);
    var dir2 = new THREE.DirectionalLight(0xffffff, 0.3); dir2.position.set(-4, -2, -3); scene.add(dir2);

    var dragging = false, lastX = 0, lastY = 0, velX = 0, velY = 0;
    /**
     * @param {PointerEvent|TouchEvent} e
     * @returns {{clientX: number, clientY: number}}
     */
    function pos(e) { return ('touches' in e && e.touches && e.touches.length) ? e.touches[0] : e; }
    /** @param {PointerEvent|TouchEvent} e */
    function onDown(e) { dragging = true; var p = pos(e); lastX = p.clientX; lastY = p.clientY; container.style.cursor = 'grabbing'; }
    /** @param {PointerEvent|TouchEvent} e */
    function onMove(e) {
      if (!dragging) return;
      var p = pos(e);
      velY = (p.clientX - lastX) * 0.007; velX = (p.clientY - lastY) * 0.007;
      group.rotation.y += velY; group.rotation.x += velX;
      lastX = p.clientX; lastY = p.clientY;
    }
    function onUp() { dragging = false; container.style.cursor = 'grab'; }
    renderer.domElement.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    renderer.domElement.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

    function onResize() {
      var w2 = container.clientWidth, h2 = container.clientHeight;
      if (!w2 || !h2) return;
      camera.aspect = w2 / h2; camera.updateProjectionMatrix(); renderer.setSize(w2, h2);
    }
    window.addEventListener('resize', onResize);

    var raf = null, clock = new THREE.Clock(), stopped = false;
    (function loop() {
      if (stopped) return;
      raf = requestAnimationFrame(loop);
      var dt = Math.min(clock.getDelta(), 0.05);
      if (!dragging) {
        if (!reducedMotion) group.rotation.y += dt * (opts.idleSpin != null ? opts.idleSpin : 0.2);
        velX *= 0.94; velY *= 0.94;
        group.rotation.x += velX * 0.4;
        group.rotation.y += velY * 0.4;
      }
      renderer.render(scene, camera);
    })();

    function dispose() {
      stopped = true;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
      window.removeEventListener('resize', onResize);
      scene.traverse(function (obj) {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(function (m) { m.dispose(); });
          else obj.material.dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    }

    return { scene: scene, camera: camera, renderer: renderer, group: group, dispose: dispose };
  }

  /**
   * @param {Object} a - THREE.Vector3
   * @param {Object} b - THREE.Vector3
   * @param {number} color
   * @param {number} radius
   * @returns {Object} THREE.Mesh
   */
  function edgeBetween(a, b, color, radius) {
    var dir = new THREE.Vector3().subVectors(b, a);
    var len = dir.length() || 0.001;
    var geo = new THREE.CylinderGeometry(radius, radius, len, 8);
    var mesh = new THREE.Mesh(geo, new THREE.MeshPhongMaterial({ color: color }));
    mesh.position.copy(a).addScaledVector(dir, 0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    return mesh;
  }

  /**
   * @param {string} text
   * @param {string} [color]
   * @returns {Object} THREE.Sprite
   */
  function makeLabelSprite(text, color) {
    var c = document.createElement('canvas'); c.width = 256; c.height = 96;
    var ctx = c.getContext('2d');
    ctx.font = '600 38px ui-monospace, Menlo, monospace';
    ctx.fillStyle = color || '#1B2230';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 48);
    var tex = new THREE.CanvasTexture(c);
    var spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    spr.scale.set(1.5, 0.56, 1);
    return spr;
  }

  /* ================================================================
     TOPIC DIAGRAM BUILDERS
     ================================================================ */
    /** @param {Object} group - THREE.Group */
  function buildVenn(group) {
    var geo = new THREE.SphereGeometry(1.4, 40, 40);
    var sa = new THREE.Mesh(geo, new THREE.MeshPhongMaterial({ color: COLORS.a, transparent: true, opacity: 0.65, shininess: 50 }));
    var sb = new THREE.Mesh(geo, new THREE.MeshPhongMaterial({ color: COLORS.b, transparent: true, opacity: 0.65, shininess: 50 }));
    sa.position.x = -0.85; sb.position.x = 0.85;
    group.add(sa, sb);
  }

    /** @param {Object} group - THREE.Group */
  function buildMapping(group) {
    var dGeo = new THREE.SphereGeometry(0.22, 20, 20);
    var matA = new THREE.MeshPhongMaterial({ color: COLORS.a });
    var matB = new THREE.MeshPhongMaterial({ color: COLORS.b });
    var domNodes = [], codNodes = [];
    [1.1, 0, -1.1].forEach(function (y) { var m = new THREE.Mesh(dGeo, matA); m.position.set(-2, y, 0); group.add(m); domNodes.push(m); });
    [1.6, 0.5, -0.6, -1.7].forEach(function (y) { var m = new THREE.Mesh(dGeo, matB); m.position.set(2, y, 0); group.add(m); codNodes.push(m); });
    [[0, 0], [1, 2], [2, 1]].forEach(function (p) {
      var a = domNodes[p[0]].position, b = codNodes[p[1]].position;
      var mid = new THREE.Vector3((a.x + b.x) / 2, (a.y + b.y) / 2 + 0.4, 0);
      var curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      var tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.035, 8, false), new THREE.MeshPhongMaterial({ color: COLORS.overlap }));
      group.add(tube);
    });
    var l1 = makeLabelSprite('Domain', '#2C4A9E'); l1.position.set(-2, -2, 0); group.add(l1);
    var l2 = makeLabelSprite('Codomain', '#C1443D'); l2.position.set(2, -2.2, 0); group.add(l2);
  }

    /**
   * @param {Object} group - THREE.Group
   * @param {number} [rows]
   * @param {number} [cols]
   * @param {string} [mode]
   */
  function buildGrid(group, rows, cols, mode) {
    rows = rows || 4; cols = cols || 4;
    var spacing = 0.62;
    var startX = -((cols - 1) * spacing) / 2, startZ = -((rows - 1) * spacing) / 2;
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var h = mode === 'matrix' ? (0.25 + Math.random() * 1.1) : 0.35;
        var color = mode === 'matrix'
          ? new THREE.Color().lerpColors(new THREE.Color(COLORS.aTint), new THREE.Color(COLORS.a), h / 1.35)
          : new THREE.Color(COLORS.overlap);
        var mesh = new THREE.Mesh(new THREE.BoxGeometry(0.46, h, 0.46), new THREE.MeshPhongMaterial({ color: color, shininess: 35 }));
        mesh.position.set(startX + c * spacing, h / 2 - 0.5, startZ + r * spacing);
        group.add(mesh);
      }
    }
    var base = new THREE.Mesh(new THREE.BoxGeometry(cols * spacing + 0.3, 0.05, rows * spacing + 0.3), new THREE.MeshPhongMaterial({ color: COLORS.line }));
    base.position.y = -0.53;
    group.add(base);
    group.rotation.x = -0.35;
  }

    /**
   * @param {Object} group - THREE.Group
   * @param {number} depth
   * @param {number} branch
   */
  function buildCountingTree(group, depth, branch) {
    var nodeMat = new THREE.MeshPhongMaterial({ color: COLORS.a });
    var nodeGeo = new THREE.SphereGeometry(0.16, 16, 16);
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} d
     */
    function place(x, y, z, d) {
      var m = new THREE.Mesh(nodeGeo, nodeMat); m.position.set(x, y, z); group.add(m);
      if (d >= depth) return;
      var n = branch + 1;
      for (var i = 0; i < n; i++) {
        var cx = x + (i - (n - 1) / 2) * (1.5 / (d + 1));
        var cy = y - 0.95, cz = z;
        group.add(edgeBetween(new THREE.Vector3(x, y, z), new THREE.Vector3(cx, cy, cz), COLORS.inkSoft, 0.02));
        place(cx, cy, cz, d + 1);
      }
    }
    place(0, 1.5, 0, 0);
  }

    /** @param {Object} group - THREE.Group */
  function buildPigeonhole(group) {
    var holes = 4, counts = [1, 1, 1, 2];
    var spacing = 0.85, startX = -((holes - 1) * spacing) / 2;
    var boxGeo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    var edgesGeo = new THREE.EdgesGeometry(boxGeo);
    var pigeonGeo = new THREE.SphereGeometry(0.16, 16, 16);
    for (var i = 0; i < holes; i++) {
      var overloaded = counts[i] > 1;
      var box = new THREE.Mesh(boxGeo, new THREE.MeshPhongMaterial({ color: overloaded ? COLORS.bTint : COLORS.aTint, side: THREE.DoubleSide }));
      box.position.set(startX + i * spacing, 0, 0);
      group.add(box);
      var line = new THREE.LineSegments(edgesGeo, new THREE.LineBasicMaterial({ color: COLORS.ink }));
      line.position.copy(box.position);
      group.add(line);
      for (var k = 0; k < counts[i]; k++) {
        var p = new THREE.Mesh(pigeonGeo, new THREE.MeshPhongMaterial({ color: overloaded ? COLORS.b : COLORS.a }));
        p.position.set(startX + i * spacing + (k - (counts[i] - 1) / 2) * 0.22, 0.55, 0);
        group.add(p);
      }
    }
  }

    /** @param {Object} group - THREE.Group */
  function buildHanoi(group) {
    var pegMat = new THREE.MeshPhongMaterial({ color: COLORS.inkSoft });
    [-1.3, 0, 1.3].forEach(function (x) {
      var peg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.6, 12), pegMat);
      peg.position.set(x, 0, 0); group.add(peg);
    });
    var base = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.1, 0.9), new THREE.MeshPhongMaterial({ color: COLORS.line }));
    base.position.set(0, -0.85, 0); group.add(base);
    var discs = 4;
    for (var i = 0; i < discs; i++) {
      var r = 0.55 - i * 0.1;
      var color = new THREE.Color().lerpColors(new THREE.Color(COLORS.a), new THREE.Color(COLORS.b), i / (discs - 1));
      var disc = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.16, 24), new THREE.MeshPhongMaterial({ color: color }));
      disc.position.set(-1.3, -0.77 + i * 0.18, 0);
      group.add(disc);
    }
  }

    /** @param {Object} group - THREE.Group */
  function buildSpiral(group) {
    var steps = 10, prev = null;
    for (var i = 0; i < steps; i++) {
      var angle = i * 0.65, radius = 0.3 + i * 0.13, y = -1.1 + i * 0.22;
      var x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
      var s = 0.14 + i * 0.02;
      var color = new THREE.Color().lerpColors(new THREE.Color(COLORS.a), new THREE.Color(COLORS.b), i / (steps - 1));
      var box = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshPhongMaterial({ color: color }));
      box.position.set(x, y, z);
      group.add(box);
      if (prev) group.add(edgeBetween(prev, box.position, COLORS.line, 0.02));
      prev = box.position;
    }
  }

    /** @param {Object} group - THREE.Group */
  function buildPlanes(group) {
    var geo = new THREE.PlaneGeometry(2.6, 2.6);
    var defs = [[COLORS.a, 0, 0, 0], [COLORS.b, 0, Math.PI / 2.6, 0], [COLORS.overlap, Math.PI / 2.4, 0, 0.3]];
    defs.forEach(function (d) {
      var mesh = new THREE.Mesh(geo, new THREE.MeshPhongMaterial({ color: d[0], transparent: true, opacity: 0.4, side: THREE.DoubleSide }));
      mesh.rotation.set(d[1], d[2], d[3]);
      group.add(mesh);
    });
    group.add(new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), new THREE.MeshPhongMaterial({ color: COLORS.ink })));
  }

    /**
   * @param {Object} group - THREE.Group
   * @param {number} len
   */
  function buildAxes(group, len) {
    var mat = new THREE.LineBasicMaterial({ color: COLORS.line });
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-len, 0, 0), new THREE.Vector3(len, 0, 0)]), mat));
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -len * 0.6, 0), new THREE.Vector3(0, len * 0.6, 0)]), mat));
  }

    /**
   * @param {Object} group - THREE.Group
   * @param {string} kind
   */
  function buildCurve(group, kind) {
    buildAxes(group, 2.7);
    var i;
    if (kind === 'floor') {
      var stepW = 0.8, dotGeo = new THREE.SphereGeometry(0.045, 10, 10), dotMat = new THREE.MeshPhongMaterial({ color: COLORS.a });
      for (i = -3; i <= 3; i++) {
        var xa = i * stepW, xb = xa + stepW, yy = i * 0.4;
        var geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(xa, yy, 0), new THREE.Vector3(xb, yy, 0)]);
        group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: COLORS.a })));
        var dot = new THREE.Mesh(dotGeo, dotMat); dot.position.set(xa, yy, 0); group.add(dot);
      }
      return;
    }
    var n = 44, pts = [];
    for (i = 0; i <= n; i++) {
      var x = -2.6 + (i / n) * 5.2, y;
      if (kind === 'exp') y = Math.min(2.3, 0.22 * Math.exp((x + 2.6) * 0.42)) - 1.1;
      else if (kind === 'log') y = Math.max(-2.2, Math.log(Math.max(0.05, x + 2.8)) * 0.9);
      else y = Math.max(-2.2, Math.min(2.2, 0.11 * x * x * x - 0.35 * x));
      pts.push(new THREE.Vector3(x, y, 0));
    }
    var curve = new THREE.CatmullRomCurve3(pts);
    group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 0.045, 8, false), new THREE.MeshPhongMaterial({ color: COLORS.a })));
  }

    /**
   * @param {Object} group - THREE.Group
   * @param {Object} cfg
   */
  function buildGraph(group, cfg) {
    var n = cfg.nodeCount || 7;
    var nodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
    var nodeMat = new THREE.MeshPhongMaterial({ color: COLORS.a });
    var nodes = [], i, j;

    if (cfg.tree) {
      var positions = [[0, 1.3, 0], [-0.9, 0.4, 0], [0.9, 0.4, 0], [-1.4, -0.6, 0.4], [-0.4, -0.6, -0.4], [0.4, -0.6, 0.4], [1.4, -0.6, -0.4], [-0.9, -1.6, 0], [0.9, -1.6, 0]];
      positions = positions.slice(0, Math.min(n, positions.length));
      positions.forEach(function (p) { var m = new THREE.Mesh(nodeGeo, nodeMat); m.position.set(p[0], p[1], p[2]); group.add(m); nodes.push(m); });
      [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [3, 7], [4, 8]].forEach(function (e) {
        if (nodes[e[0]] && nodes[e[1]]) group.add(edgeBetween(nodes[e[0]].position, nodes[e[1]].position, COLORS.inkSoft, 0.025));
      });
      return;
    }

    for (i = 0; i < n; i++) {
      var phi = Math.acos(1 - 2 * (i + 0.5) / n), theta = Math.PI * (1 + Math.sqrt(5)) * i;
      var r = 1.4;
      var x = r * Math.sin(phi) * Math.cos(theta), y = r * Math.sin(phi) * Math.sin(theta) * 0.8;
      var z = cfg.planar ? (Math.sin(i * 1.7) * 0.15) : r * Math.cos(phi);
      var m = new THREE.Mesh(nodeGeo, nodeMat); m.position.set(x, y, z); group.add(m); nodes.push(m);
    }
    var pairs = [];
    if (cfg.complete) { for (i = 0; i < n; i++) for (j = i + 1; j < n; j++) pairs.push([i, j]); }
    else {
      for (i = 0; i < n; i++) pairs.push([i, (i + 1) % n]);
      for (i = 0; i < Math.floor(n / 2); i++) pairs.push([i, (i + Math.floor(n / 2)) % n]);
    }
    pairs.forEach(function (p) {
      var a = nodes[p[0]].position, b = nodes[p[1]].position;
      group.add(edgeBetween(a, b, COLORS.inkSoft, 0.022));
      if (cfg.directed) {
        var dir = new THREE.Vector3().subVectors(b, a).normalize();
        var tip = new THREE.Vector3().copy(b).addScaledVector(dir, -0.22);
        var cone = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 10), new THREE.MeshPhongMaterial({ color: COLORS.b }));
        cone.position.copy(tip);
        cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        group.add(cone);
      }
    });
  }

  /* ---------------- topic → diagram routing ---------------- */
    /**
   * @param {number} unit
   * @param {string} topic
   * @returns {Object}
   */
  function diagramFor(unit, topic) {
    var t = (topic || '').toLowerCase();
    if (unit === 1) {
      if (/venn|set operations|^sets$|subset|integrated unit i/.test(t)) return { type: 'venn' };
      if (/cartesian|matrix representation/.test(t)) return { type: 'grid', rows: 4, cols: 4, mode: 'cartesian' };
      if (/relation|digraph representation|equivalence|closure|warshall/.test(t)) return { type: 'graph', directed: true, nodeCount: 6 };
      if (/exponential|logarithmic|polynomial/.test(t)) return { type: 'curve', kind: /exponential/.test(t) ? 'exp' : (/logarithmic/.test(t) ? 'log' : 'poly') };
      if (/ceiling|floor/.test(t)) return { type: 'curve', kind: 'floor' };
      return { type: 'mapping' };
    }
    if (unit === 2) {
      if (/pigeonhole/.test(t)) return { type: 'pigeonhole' };
      if (/tower of hanoi|fibonacci/.test(t)) return { type: 'hanoi' };
      if (/recurrence|characteristic|linear homogeneous/.test(t)) return { type: 'spiral' };
      return { type: 'tree', depth: 3, branch: 2 };
    }
    if (unit === 3) {
      if (/system|linear equations/.test(t)) return { type: 'planes' };
      return { type: 'grid', rows: 4, cols: 4, mode: 'matrix' };
    }
    if (unit === 4) {
      if (/tree|spanning/.test(t)) return { type: 'graph', tree: true, nodeCount: 9 };
      if (/complete graph/.test(t)) return { type: 'graph', complete: true, nodeCount: 6 };
      if (/directed|digraph/.test(t)) return { type: 'graph', directed: true, nodeCount: 7 };
      if (/planar/.test(t)) return { type: 'graph', planar: true, nodeCount: 7 };
      return { type: 'graph', nodeCount: 7 };
    }
    if (unit === 5) {
      if (/^sets$/.test(t)) return { type: 'venn' };
      if (/^lists$|^tuples$|slicing/.test(t)) return { type: 'grid', rows: 4, cols: 4, mode: 'cartesian' };
      if (/variables|data types/.test(t)) return { type: 'grid', rows: 3, cols: 3, mode: 'cartesian' };
      if (/conditional/.test(t)) return { type: 'tree', depth: 3, branch: 2 };
      if (/scope|namespaces/.test(t)) return { type: 'tree', depth: 2, branch: 1 };
      if (/loops|loop control|iteration|map, filter|reduce/.test(t)) return { type: 'spiral' };
      return { type: 'mapping' };
    }
    return { type: 'mapping' };
  }

    /**
   * @param {Object} group - THREE.Group
   * @param {Object} cfg
   */
  function build(group, cfg) {
    switch (cfg.type) {
      case 'venn': return buildVenn(group);
      case 'mapping': return buildMapping(group);
      case 'grid': return buildGrid(group, cfg.rows, cfg.cols, cfg.mode);
      case 'tree': return buildCountingTree(group, cfg.depth || 3, cfg.branch || 2);
      case 'pigeonhole': return buildPigeonhole(group);
      case 'hanoi': return buildHanoi(group);
      case 'spiral': return buildSpiral(group);
      case 'planes': return buildPlanes(group);
      case 'curve': return buildCurve(group, cfg.kind);
      case 'graph': return buildGraph(group, cfg);
    }
  }

  /* ================================================================
     PUBLIC API — mount/unmount a topic diagram, or the results chart
     ================================================================ */
    /** @param {?HTMLElement} container */
  function unmount(container) {
    if (!container) return;
    if (container._explain3d) { container._explain3d.dispose(); container._explain3d = null; }
    container._explain3dKey = null;
    container.innerHTML = '';
  }

    /**
   * @param {?HTMLElement} container
   * @param {Object} question
   */
  function mount(container, question) {
    if (!container || !question) return;
    var key = question.unit + ':' + question.topic + ':' + question.num;
    if (container._explain3dKey === key && container._explain3d) return; // same question already showing — skip the flicker
    unmount(container);
    try {
      var viewer = createViewer(container, {});
      if (!viewer) return;
      build(viewer.group, diagramFor(question.unit, question.topic));
      container._explain3d = viewer;
      container._explain3dKey = key;
    } catch (e) { /* fail silently — the text explanation still works */ }
  }

  window.Explain3D = { mount: mount, unmount: unmount, createViewer: createViewer };

  /* ================================================================
     PERSISTENT FULL-PAGE BACKGROUND
     ================================================================ */
  function initBackground() {
    var host = document.getElementById('bg3d');
    if (!host) return;
    try {
      var w = window.innerWidth, h = window.innerHeight;
      var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(w, h);
      host.appendChild(renderer.domElement);

      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
      camera.position.set(0, 0, 14);

      var colors = [COLORS.a, COLORS.b, COLORS.overlap, COLORS.correct];
      var count = w < 700 ? 7 : 14;
      for (var i = 0; i < count; i++) {
        var kind = i % 3;
        var geo = kind === 0 ? new THREE.IcosahedronGeometry(0.55 + Math.random() * 0.5, 0)
          : kind === 1 ? new THREE.TorusGeometry(0.42 + Math.random() * 0.3, 0.11, 8, 20)
          : new THREE.OctahedronGeometry(0.5 + Math.random() * 0.4, 0);
        var mat = new THREE.MeshBasicMaterial({ color: colors[i % colors.length], wireframe: true, transparent: true, opacity: 0.15 });
        var mesh = new THREE.Mesh(geo, mat);
        mesh.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8 - 4);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        scene.add(mesh);
      }

      renderer.render(scene, camera);

      // Redraw only on resize (e.g. rotating the device) — never on a
      // running clock, so there's nothing to perceive as "moving".
      window.addEventListener('resize', function () {
        var w2 = window.innerWidth, h2 = window.innerHeight;
        if (!w2 || !h2) return;
        camera.aspect = w2 / h2; camera.updateProjectionMatrix();
        renderer.setSize(w2, h2);
        renderer.render(scene, camera);
      });
    } catch (e) { /* WebGL unavailable — page still works, just without the background */ }
  }

  /* ================================================================
     3D POINTER-TILT for cards/chips/pills
     ================================================================ */
  function initTilt() {
    var SELECTOR = '.mode-card, .topic-chip, .unit-toggle-btn, .mode-toggle-btn';
    var supportsHover = !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    if (!supportsHover) return;

    var current = null;

    /**
     * @param {HTMLElement} el
     * @param {number} px
     * @param {number} py
     */
    function apply(el, px, py) {
      el.style.transition = 'transform .08s linear, box-shadow .08s linear';
      el.style.transform = 'perspective(700px) rotateX(' + (py * -7) + 'deg) rotateY(' + (px * 9) + 'deg) translateZ(6px)';
      el.style.boxShadow = '0 16px 26px -14px rgba(27,34,48,.35)';
    }
    /** @param {HTMLElement} el */
    function reset(el) {
      el.style.transition = 'transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease';
      el.style.transform = '';
      el.style.boxShadow = '';
    }

    document.addEventListener('mousemove', /** @param {MouseEvent} e */ function (e) {
      var el = e.target && e.target.closest ? e.target.closest(SELECTOR) : null;
      if (el !== current) {
        if (current) reset(current);
        current = el;
      }
      if (!el || el.disabled) return;
      var r = el.getBoundingClientRect();
      apply(el, (e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5);
    });

    document.addEventListener('mouseout', /** @param {MouseEvent} e */ function (e) {
      if (!e.relatedTarget && current) { reset(current); current = null; }
    });
  }

  /** @param {function(): void} fn */
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () { initBackground(); initTilt(); });
})();
