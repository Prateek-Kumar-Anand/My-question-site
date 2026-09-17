/* security.js — best-effort clickjacking guard.
   Static hosts like GitHub Pages can't send an X-Frame-Options or
   Content-Security-Policy: frame-ancestors HTTP header, and the
   <meta http-equiv> form of CSP ignores frame-ancestors entirely, so
   this script is the only self-hosted mitigation available there.
   Hosts that do support custom headers should also deploy the
   included _headers file, which enforces this at the network level. */
(function () {
  try {
    if (window.top !== window.self) {
      window.top.location.href = window.self.location.href;
    }
  } catch (e) {
    // A cross-origin parent blocked access to window.top — that can only
    // happen if the page is framed by another origin. Treat it as hostile
    // and hide the content rather than risk it being used for clickjacking.
    document.documentElement.style.display = 'none';
  }
})();
