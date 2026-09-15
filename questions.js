/* Question bank for the mock test site (Units I, II, III).
   Loaded as a plain script (not fetch/JSON) so the page still works
   when opened directly from disk via file:// with no local server. */
window.QUESTION_DATA = [
  {
    "num": 1,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which is a well-defined set?",
    "options": {
      "A": "All nice students",
      "B": "Prime numbers less than 10",
      "C": "Interesting books",
      "D": "Tall people"
    },
    "answer": "B",
    "solution": "A set must have an unambiguous membership rule. \"Prime numbers less than 10\" gives {2,3,5,7}.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 2,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "If A={1,2,3,4}, what is |A|?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "C",
    "solution": "Cardinality counts distinct elements. A contains four elements, so |A|=4.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 3,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "If A={1,2,3} and B={3,4,5}, which is A∪B?",
    "options": {
      "A": "{3}",
      "B": "{1,2,3,4,5}",
      "C": "{1,2}",
      "D": "{4,5}"
    },
    "answer": "B",
    "solution": "Union contains every element appearing in either set. Hence {1,2,3,4,5}.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 4,
    "topic": "Sets",
    "difficulty": "Hard",
    "question": "If |U|=40 and |A|=22, what is |Aᶜ|?",
    "options": {
      "A": "18",
      "B": "20",
      "C": "22",
      "D": "62"
    },
    "answer": "A",
    "solution": "A and its complement partition U, so |Aᶜ|=|U|−|A|=40−22=18.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 5,
    "topic": "Set Operations & Properties",
    "difficulty": "Easy",
    "question": "If A={1,2,3} and B={2,3,4}, find A∩B.",
    "options": {
      "A": "{1,4}",
      "B": "{2,3}",
      "C": "{1,2,3,4}",
      "D": "∅"
    },
    "answer": "B",
    "solution": "Intersection keeps only common elements. The common elements are 2 and 3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 6,
    "topic": "Set Operations & Properties",
    "difficulty": "Moderate",
    "question": "Which identity is always true?",
    "options": {
      "A": "A∪∅=∅",
      "B": "A∩U=A",
      "C": "A−A=A",
      "D": "A∪U=∅"
    },
    "answer": "B",
    "solution": "The universal set is the identity for intersection, so A∩U=A.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 7,
    "topic": "Set Operations & Properties",
    "difficulty": "Moderate",
    "question": "Which is equivalent to A−B?",
    "options": {
      "A": "A∪Bᶜ",
      "B": "A∩Bᶜ",
      "C": "Aᶜ∩B",
      "D": "A∩B"
    },
    "answer": "B",
    "solution": "A−B means elements in A but not B, exactly A∩Bᶜ.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 8,
    "topic": "Set Operations & Properties",
    "difficulty": "Hard",
    "question": "Which De Morgan identity is correct?",
    "options": {
      "A": "(A∪B)ᶜ=Aᶜ∩Bᶜ",
      "B": "(A∩B)ᶜ=Aᶜ∩Bᶜ",
      "C": "A∪Aᶜ=A",
      "D": "A∩∅=U"
    },
    "answer": "A",
    "solution": "De Morgan's law states that the complement of a union equals the intersection of complements.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 9,
    "topic": "Subset",
    "difficulty": "Easy",
    "question": "If A={1,2} and B={1,2,3}, then:",
    "options": {
      "A": "A⊂B",
      "B": "B⊂A",
      "C": "A=B",
      "D": "A∩B=∅"
    },
    "answer": "A",
    "solution": "Every element of A is in B and B has an extra element, so A is a proper subset of B.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 10,
    "topic": "Subset",
    "difficulty": "Moderate",
    "question": "A set with 5 elements has how many subsets?",
    "options": {
      "A": "10",
      "B": "16",
      "C": "25",
      "D": "32"
    },
    "answer": "D",
    "solution": "An n-element set has 2^n subsets. Thus 2^5=32.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 11,
    "topic": "Subset",
    "difficulty": "Hard",
    "question": "A 6-element set has how many proper subsets?",
    "options": {
      "A": "31",
      "B": "63",
      "C": "64",
      "D": "65"
    },
    "answer": "B",
    "solution": "There are 2^6=64 total subsets. Excluding the set itself leaves 63 proper subsets.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 12,
    "topic": "Subset",
    "difficulty": "Hard",
    "question": "How many subsets of an n-element set contain a fixed element?",
    "options": {
      "A": "n",
      "B": "2^n",
      "C": "2^(n−1)",
      "D": "n−1"
    },
    "answer": "C",
    "solution": "Once the fixed element is required, each of the remaining n−1 elements can be independently chosen or not, giving 2^(n−1).",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 13,
    "topic": "Venn Diagrams",
    "difficulty": "Easy",
    "question": "The overlapping region of A and B represents:",
    "options": {
      "A": "A∪B",
      "B": "A∩B",
      "C": "A−B",
      "D": "Aᶜ"
    },
    "answer": "B",
    "solution": "The overlap consists of elements belonging to both A and B, which is A∩B.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 14,
    "topic": "Venn Diagrams",
    "difficulty": "Moderate",
    "question": "In a class of 50, 30 like Python, 25 like C, and 10 like both. How many like at least one?",
    "options": {
      "A": "35",
      "B": "40",
      "C": "45",
      "D": "50"
    },
    "answer": "C",
    "solution": "Use |A∪B|=30+25−10=45, so the correct option is C.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 15,
    "topic": "Venn Diagrams",
    "difficulty": "Hard",
    "question": "If 60 students are surveyed, 35 like A, 30 like B, and 5 like neither, how many like both?",
    "options": {
      "A": "5",
      "B": "10",
      "C": "15",
      "D": "20"
    },
    "answer": "B",
    "solution": "At least one=60−5=55. Then 35+30−both=55, giving both=10, option B.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 16,
    "topic": "Venn Diagrams",
    "difficulty": "Hard",
    "question": "If |A|=40, |B|=30 and |A∩B|=12 in a universe of 70, how many are outside A∪B?",
    "options": {
      "A": "8",
      "B": "10",
      "C": "12",
      "D": "18"
    },
    "answer": "C",
    "solution": "Union=40+30−12=58. Outside the union=70−58=12, option C.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 17,
    "topic": "Cartesian Products",
    "difficulty": "Easy",
    "question": "If |A|=2 and |B|=3, then |A×B| is:",
    "options": {
      "A": "5",
      "B": "6",
      "C": "8",
      "D": "9"
    },
    "answer": "B",
    "solution": "For finite sets, |A×B|=|A||B|=2×3=6.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 18,
    "topic": "Cartesian Products",
    "difficulty": "Easy",
    "question": "Which ordered pair belongs to {1,2}×{a,b}?",
    "options": {
      "A": "(a,1)",
      "B": "(1,a)",
      "C": "(a,b)",
      "D": "(2,1)"
    },
    "answer": "B",
    "solution": "In A×B the first component must come from A and the second from B. So (1,a) belongs.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 19,
    "topic": "Cartesian Products",
    "difficulty": "Moderate",
    "question": "If |A|=4 and |B|=5, how many elements are in B×A?",
    "options": {
      "A": "9",
      "B": "20",
      "C": "25",
      "D": "64"
    },
    "answer": "B",
    "solution": "|B×A|=|B||A|=5×4=20.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 20,
    "topic": "Cartesian Products",
    "difficulty": "Hard",
    "question": "If |A|=2 and |B|=3, how many subsets does A×B have?",
    "options": {
      "A": "6",
      "B": "12",
      "C": "32",
      "D": "64"
    },
    "answer": "D",
    "solution": "A×B has 2×3=6 ordered pairs. Its power set therefore has 2^6=64 subsets.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 21,
    "topic": "Relations on a Set",
    "difficulty": "Easy",
    "question": "A relation from A to B is any subset of:",
    "options": {
      "A": "A∪B",
      "B": "A×B",
      "C": "B only",
      "D": "A∩B"
    },
    "answer": "B",
    "solution": "By definition, a relation from A to B is a subset of A×B.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 22,
    "topic": "Relations on a Set",
    "difficulty": "Moderate",
    "question": "If |A|=3, how many possible relations are there on A?",
    "options": {
      "A": "9",
      "B": "27",
      "C": "256",
      "D": "512"
    },
    "answer": "D",
    "solution": "A×A has 3×3=9 ordered pairs. Any subset can be a relation, so there are 2^9=512.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 23,
    "topic": "Relations on a Set",
    "difficulty": "Hard",
    "question": "If R on A={1,2,3} contains (1,2) and (2,3), what pair must be present if R is transitive?",
    "options": {
      "A": "(3,1)",
      "B": "(1,3)",
      "C": "(2,1)",
      "D": "(3,2)"
    },
    "answer": "B",
    "solution": "Transitivity says aRb and bRc imply aRc. Therefore (1,3) must be present.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 24,
    "topic": "Relations on a Set",
    "difficulty": "Hard",
    "question": "How many ordered pairs are possible in a relation on a 4-element set?",
    "options": {
      "A": "4",
      "B": "8",
      "C": "12",
      "D": "16"
    },
    "answer": "D",
    "solution": "A relation is a subset of A×A, which has 4×4=16 ordered pairs.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 25,
    "topic": "Properties of Relations",
    "difficulty": "Easy",
    "question": "R is reflexive when:",
    "options": {
      "A": "aRb⇒bRa",
      "B": "aRa for every a",
      "C": "aRb⇒a≠b",
      "D": "No self-pairs exist"
    },
    "answer": "B",
    "solution": "Reflexivity requires every element to be related to itself.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 26,
    "topic": "Properties of Relations",
    "difficulty": "Easy",
    "question": "R is symmetric when:",
    "options": {
      "A": "aRb⇒bRa",
      "B": "aRa for every a",
      "C": "aRb and bRc⇒aRc",
      "D": "aRb⇒a=b"
    },
    "answer": "A",
    "solution": "Symmetry requires the reverse pair whenever a pair is present.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 27,
    "topic": "Properties of Relations",
    "difficulty": "Moderate",
    "question": "R is antisymmetric when:",
    "options": {
      "A": "aRb⇒bRa",
      "B": "aRb and bRa⇒a=b",
      "C": "aRa never holds",
      "D": "All pairs occur"
    },
    "answer": "B",
    "solution": "Antisymmetry states that mutual relation is possible only when the two elements are equal.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 28,
    "topic": "Properties of Relations",
    "difficulty": "Hard",
    "question": "Which set of properties defines an equivalence relation?",
    "options": {
      "A": "Reflexive, symmetric, transitive",
      "B": "Symmetric, antisymmetric",
      "C": "Reflexive only",
      "D": "Transitive only"
    },
    "answer": "A",
    "solution": "An equivalence relation must be reflexive, symmetric, and transitive.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 29,
    "topic": "Matrix Representation",
    "difficulty": "Easy",
    "question": "For A={1,2}, R={(1,1),(2,2)}, the relation matrix is:",
    "options": {
      "A": "[[1,0],[0,1]]",
      "B": "[[0,1],[1,0]]",
      "C": "[[1,1],[0,0]]",
      "D": "[[0,0],[1,1]]"
    },
    "answer": "A",
    "solution": "Rows and columns follow (1,2). Ones occur at (1,1) and (2,2), giving the identity matrix.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 30,
    "topic": "Matrix Representation",
    "difficulty": "Moderate",
    "question": "For R={(1,2),(2,3)} on {1,2,3}, which matrix is correct?",
    "options": {
      "A": "[[0,1,0],[0,0,1],[0,0,0]]",
      "B": "[[1,0,0],[0,1,0],[0,0,1]]",
      "C": "[[0,0,1],[1,0,0],[0,1,0]]",
      "D": "[[0,1,1],[1,0,0],[0,0,0]]"
    },
    "answer": "A",
    "solution": "Put a 1 in row i, column j for (i,j)∈R. Thus entries (1,2) and (2,3) are 1.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 31,
    "topic": "Matrix Representation",
    "difficulty": "Hard",
    "question": "A relation matrix is symmetric when:",
    "options": {
      "A": "mij=0 for all i,j",
      "B": "mij=mji for all i,j",
      "C": "mii=0 always",
      "D": "mij=1 always"
    },
    "answer": "B",
    "solution": "Symmetry of the relation is exactly equality of mirrored matrix entries.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 32,
    "topic": "Matrix Representation",
    "difficulty": "Hard",
    "question": "A relation matrix with every diagonal entry 1 represents a relation that is:",
    "options": {
      "A": "Reflexive",
      "B": "Symmetric necessarily",
      "C": "Transitive necessarily",
      "D": "Antisymmetric necessarily"
    },
    "answer": "A",
    "solution": "Diagonal entry mii=1 means (i,i) is present for every element, which is reflexivity.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 33,
    "topic": "Digraph Representation",
    "difficulty": "Easy",
    "question": "A loop at vertex a represents:",
    "options": {
      "A": "(a,a)",
      "B": "(a,b)",
      "C": "(b,a)",
      "D": "No relation"
    },
    "answer": "A",
    "solution": "A loop is a directed edge from a to itself, representing (a,a).",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 34,
    "topic": "Digraph Representation",
    "difficulty": "Moderate",
    "question": "Edges a→b and b→a together represent:",
    "options": {
      "A": "Only (a,b)",
      "B": "Only (b,a)",
      "C": "Both ordered pairs",
      "D": "A loop"
    },
    "answer": "C",
    "solution": "Each directed edge corresponds to one ordered pair, so both (a,b) and (b,a) are present.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 35,
    "topic": "Digraph Representation",
    "difficulty": "Hard",
    "question": "If every vertex in a relation digraph has a loop, the relation is:",
    "options": {
      "A": "Symmetric",
      "B": "Reflexive",
      "C": "Antisymmetric",
      "D": "Empty"
    },
    "answer": "B",
    "solution": "A loop at every vertex means every (a,a) is present, which is reflexivity.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 36,
    "topic": "Digraph Representation",
    "difficulty": "Hard",
    "question": "If a→b exists but b→a does not, this alone shows the relation is not:",
    "options": {
      "A": "Reflexive",
      "B": "Symmetric",
      "C": "Transitive",
      "D": "A relation"
    },
    "answer": "B",
    "solution": "Symmetry would require b→a whenever a→b exists. Its absence disproves symmetry.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 37,
    "topic": "Types of Relations",
    "difficulty": "Easy",
    "question": "The relation ≤ on real numbers is:",
    "options": {
      "A": "Reflexive only",
      "B": "Reflexive and antisymmetric and transitive",
      "C": "Symmetric only",
      "D": "Neither"
    },
    "answer": "B",
    "solution": "For ≤: x≤x, x≤y and y≤x imply x=y, and x≤y≤z implies x≤z. Thus it has all three properties.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 38,
    "topic": "Types of Relations",
    "difficulty": "Moderate",
    "question": "The equality relation = is:",
    "options": {
      "A": "Only symmetric",
      "B": "Reflexive, symmetric and transitive",
      "C": "Only transitive",
      "D": "Not reflexive"
    },
    "answer": "B",
    "solution": "Equality is reflexive, symmetric, and transitive, so it is an equivalence relation.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 39,
    "topic": "Types of Relations",
    "difficulty": "Hard",
    "question": "A relation that is reflexive, antisymmetric and transitive is called a:",
    "options": {
      "A": "Equivalence relation",
      "B": "Partial order",
      "C": "Symmetric relation",
      "D": "Universal relation"
    },
    "answer": "B",
    "solution": "These three properties define a partial order.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 40,
    "topic": "Types of Relations",
    "difficulty": "Hard",
    "question": "If R is both symmetric and antisymmetric, then whenever aRb and bRa:",
    "options": {
      "A": "a≠b",
      "B": "a=b",
      "C": "R is empty",
      "D": "Nothing follows"
    },
    "answer": "B",
    "solution": "Antisymmetry directly implies a=b when both directions hold.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 41,
    "topic": "Equivalence Relations",
    "difficulty": "Easy",
    "question": "An equivalence relation must be:",
    "options": {
      "A": "Reflexive, symmetric, transitive",
      "B": "Only reflexive",
      "C": "Only symmetric",
      "D": "Only transitive"
    },
    "answer": "A",
    "solution": "These three properties are the defining requirements.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 42,
    "topic": "Equivalence Relations",
    "difficulty": "Moderate",
    "question": "For congruence modulo 2, the equivalence class of 0 contains:",
    "options": {
      "A": "All odd integers",
      "B": "All even integers",
      "C": "Only 0",
      "D": "All integers"
    },
    "answer": "B",
    "solution": "x is equivalent to 0 mod 2 exactly when x−0 is divisible by 2, i.e. x is even.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 43,
    "topic": "Equivalence Relations",
    "difficulty": "Hard",
    "question": "\"Has the same remainder when divided by 4\" on integers has how many equivalence classes?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "Infinitely many"
    },
    "answer": "C",
    "solution": "Possible remainders are 0,1,2,3, so there are four classes.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 44,
    "topic": "Equivalence Relations",
    "difficulty": "Hard",
    "question": "If aRb for an equivalence relation, then:",
    "options": {
      "A": "[a]=[b]",
      "B": "[a] and [b] are disjoint",
      "C": "a cannot equal b",
      "D": "R is not symmetric"
    },
    "answer": "A",
    "solution": "Related elements belong to the same equivalence class, so [a]=[b].",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 45,
    "topic": "Equivalence Relation & Partition",
    "difficulty": "Easy",
    "question": "Equivalence classes of an equivalence relation form a:",
    "options": {
      "A": "Partition",
      "B": "Power set",
      "C": "Cartesian product",
      "D": "Single set"
    },
    "answer": "A",
    "solution": "Equivalence classes are nonempty, pairwise disjoint, and cover the original set, hence a partition.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 46,
    "topic": "Equivalence Relation & Partition",
    "difficulty": "Moderate",
    "question": "Which is a partition of {1,2,3,4}?",
    "options": {
      "A": "{{1,2},{2,3},{4}}",
      "B": "{{1,2},{3,4}}",
      "C": "{{1},{2},{2,3},{4}}",
      "D": "{{1,2,3,4},∅}"
    },
    "answer": "B",
    "solution": "The two blocks are nonempty, disjoint, and their union is the whole set.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 47,
    "topic": "Equivalence Relation & Partition",
    "difficulty": "Hard",
    "question": "In a partition, distinct blocks must be:",
    "options": {
      "A": "Overlapping",
      "B": "Pairwise disjoint",
      "C": "Empty",
      "D": "Identical"
    },
    "answer": "B",
    "solution": "Pairwise disjointness is a defining property of a partition.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 48,
    "topic": "Equivalence Relation & Partition",
    "difficulty": "Hard",
    "question": "Every partition of a set can be used to define an equivalence relation by declaring two elements equivalent when they:",
    "options": {
      "A": "Are in different blocks",
      "B": "Are in the same block",
      "C": "Are numerically equal",
      "D": "Are both outside the set"
    },
    "answer": "B",
    "solution": "Being in the same block is reflexive, symmetric and transitive, so it defines an equivalence relation.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 49,
    "topic": "Closures of Relations",
    "difficulty": "Easy",
    "question": "The reflexive closure adds missing:",
    "options": {
      "A": "Reverse pairs",
      "B": "Diagonal pairs (a,a)",
      "C": "All pairs",
      "D": "No pairs"
    },
    "answer": "B",
    "solution": "To make R reflexive, add every missing self-pair.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 50,
    "topic": "Closures of Relations",
    "difficulty": "Moderate",
    "question": "The symmetric closure of R is:",
    "options": {
      "A": "R∪R⁻¹",
      "B": "R∩R⁻¹",
      "C": "R−R⁻¹",
      "D": "R×R"
    },
    "answer": "A",
    "solution": "R∪R⁻¹ contains every pair and its reverse, ensuring symmetry.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 51,
    "topic": "Closures of Relations",
    "difficulty": "Hard",
    "question": "The transitive closure adds (a,c) when there is a path from a to c of:",
    "options": {
      "A": "No length",
      "B": "Positive length",
      "C": "Only length 1",
      "D": "Only length 2"
    },
    "answer": "B",
    "solution": "Transitive closure captures reachability through paths of one or more edges.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 52,
    "topic": "Closures of Relations",
    "difficulty": "Hard",
    "question": "For R={(1,2),(2,3)}, the smallest transitive closure additionally needs:",
    "options": {
      "A": "(3,1)",
      "B": "(1,3)",
      "C": "(2,1)",
      "D": "(3,2)"
    },
    "answer": "B",
    "solution": "Since 1R2 and 2R3, transitivity requires 1R3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 53,
    "topic": "Warshall's Algorithm",
    "difficulty": "Easy",
    "question": "Warshall's algorithm computes the:",
    "options": {
      "A": "Determinant",
      "B": "Transitive closure/reachability",
      "C": "Matrix inverse",
      "D": "Eigenvalues"
    },
    "answer": "B",
    "solution": "Warshall's algorithm is used to compute transitive closure of a relation or reachability of a directed graph.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 54,
    "topic": "Warshall's Algorithm",
    "difficulty": "Moderate",
    "question": "The Boolean Warshall update is conceptually:",
    "options": {
      "A": "mij=mij OR (mik AND mkj)",
      "B": "mij=mik+mjk",
      "C": "mij=0 always",
      "D": "mij=mik AND mkj only"
    },
    "answer": "A",
    "solution": "Reachability from i to j is true if it was already true or if i reaches k and k reaches j.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 55,
    "topic": "Warshall's Algorithm",
    "difficulty": "Hard",
    "question": "Edges 1→2 and 2→3 imply which pair in the transitive closure?",
    "options": {
      "A": "3→1",
      "B": "1→3",
      "C": "2→1",
      "D": "3→2"
    },
    "answer": "B",
    "solution": "There is a path 1→2→3, so 1 reaches 3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 56,
    "topic": "Warshall's Algorithm",
    "difficulty": "Hard",
    "question": "For a path 1→2→3→4, which set contains reachability pairs that must be present?",
    "options": {
      "A": "1→3, 1→4, 2→4",
      "B": "4→1 only",
      "C": "2→1, 3→2",
      "D": "None"
    },
    "answer": "A",
    "solution": "Every vertex reaches later vertices along the path, so these three new reachability pairs are required.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 57,
    "topic": "Functions, Domain & Range",
    "difficulty": "Easy",
    "question": "A function f:A→B assigns each element of A:",
    "options": {
      "A": "Exactly one element of B",
      "B": "At least two elements",
      "C": "No output",
      "D": "Exactly one element of A"
    },
    "answer": "A",
    "solution": "A function assigns every domain input exactly one codomain output.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 58,
    "topic": "Functions, Domain & Range",
    "difficulty": "Easy",
    "question": "For f(x)=x² on {-2,-1,0,1,2}, the range is:",
    "options": {
      "A": "{-2,-1,0,1,2}",
      "B": "{0,1,4}",
      "C": "{-4,-1,0,1,4}",
      "D": "{1,4}"
    },
    "answer": "B",
    "solution": "Squaring gives 4,1,0,1,4; distinct outputs are {0,1,4}.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 59,
    "topic": "Functions, Domain & Range",
    "difficulty": "Moderate",
    "question": "The real domain of f(x)=1/(x−2) excludes:",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3"
    },
    "answer": "C",
    "solution": "The denominator cannot be zero. x−2=0 at x=2.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 60,
    "topic": "Functions, Domain & Range",
    "difficulty": "Hard",
    "question": "For any function f:A→B, the range is always a subset of the:",
    "options": {
      "A": "Domain",
      "B": "Codomain",
      "C": "Inverse",
      "D": "Empty set"
    },
    "answer": "B",
    "solution": "The range contains outputs actually attained and therefore lies inside the codomain.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 61,
    "topic": "Properties of Functions / Injective",
    "difficulty": "Easy",
    "question": "A function is injective if:",
    "options": {
      "A": "Different inputs have different outputs",
      "B": "Every codomain value is used",
      "C": "It is constant",
      "D": "It has no domain"
    },
    "answer": "A",
    "solution": "Injectivity means f(a)=f(b) implies a=b; distinct inputs cannot share an output.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 62,
    "topic": "Properties of Functions / Injective",
    "difficulty": "Moderate",
    "question": "Which function R→R is injective?",
    "options": {
      "A": "x²",
      "B": "x³",
      "C": "|x|",
      "D": "sin x"
    },
    "answer": "B",
    "solution": "x³ is strictly increasing on R, so different inputs give different outputs.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 63,
    "topic": "Properties of Functions / Injective",
    "difficulty": "Hard",
    "question": "If f is injective and f(a)=f(b), then:",
    "options": {
      "A": "a=b",
      "B": "a≠b",
      "C": "a=0",
      "D": "b=0"
    },
    "answer": "A",
    "solution": "This is exactly the defining implication of injectivity.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 64,
    "topic": "Properties of Functions / Injective",
    "difficulty": "Hard",
    "question": "If f:A→B is injective and |A|=|B| for finite sets, f is also:",
    "options": {
      "A": "Surjective",
      "B": "Constant",
      "C": "Undefined",
      "D": "Neither"
    },
    "answer": "A",
    "solution": "An injective map between finite sets of equal size must hit every element of B, so it is surjective.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 65,
    "topic": "Surjective / Onto",
    "difficulty": "Easy",
    "question": "A function f:A→B is surjective when:",
    "options": {
      "A": "Every element of B has a preimage",
      "B": "Every input has two outputs",
      "C": "A is empty",
      "D": "No element of B is reached"
    },
    "answer": "A",
    "solution": "Surjectivity means range(f)=B; every codomain element is reached.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 66,
    "topic": "Surjective / Onto",
    "difficulty": "Moderate",
    "question": "Which R→R function is surjective?",
    "options": {
      "A": "x²",
      "B": "e^x",
      "C": "x³",
      "D": "x²+1"
    },
    "answer": "C",
    "solution": "For every real y, x=∛y is real and f(x)=y, so x³ is onto R.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 67,
    "topic": "Surjective / Onto",
    "difficulty": "Hard",
    "question": "If f:A→B is surjective and |A|=5 for finite sets, then necessarily:",
    "options": {
      "A": "|B|≤5",
      "B": "|B|=10",
      "C": "|B|\\>5",
      "D": "|B|=0"
    },
    "answer": "A",
    "solution": "Five domain elements cannot cover more than five distinct codomain elements, so |B|≤5.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 68,
    "topic": "Surjective / Onto",
    "difficulty": "Hard",
    "question": "A surjective function from a 3-element set to a 5-element set:",
    "options": {
      "A": "Can exist",
      "B": "Cannot exist",
      "C": "Must be bijective",
      "D": "Must be injective"
    },
    "answer": "B",
    "solution": "Surjectivity would require all 5 codomain elements to be hit, impossible with only 3 inputs.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 69,
    "topic": "Bijective",
    "difficulty": "Easy",
    "question": "A bijection is both:",
    "options": {
      "A": "Injective and surjective",
      "B": "Reflexive and symmetric",
      "C": "Constant and injective",
      "D": "Only surjective"
    },
    "answer": "A",
    "solution": "Bijective means one-to-one and onto.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 70,
    "topic": "Bijective",
    "difficulty": "Moderate",
    "question": "A bijection between finite A and B implies:",
    "options": {
      "A": "|A|\\>|B|",
      "B": "|A|\\<|B|",
      "C": "|A|=|B|",
      "D": "No relation"
    },
    "answer": "C",
    "solution": "A bijection pairs every element of A with exactly one element of B and covers B, so cardinalities are equal.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 71,
    "topic": "Bijective",
    "difficulty": "Hard",
    "question": "If f and g are bijections, then g∘f is:",
    "options": {
      "A": "Only injective",
      "B": "Only surjective",
      "C": "Bijective",
      "D": "Neither"
    },
    "answer": "C",
    "solution": "Composition preserves injectivity and surjectivity, so the composition is bijective.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 72,
    "topic": "Bijective",
    "difficulty": "Hard",
    "question": "A bijection f:A→B guarantees that every b∈B has:",
    "options": {
      "A": "No preimage",
      "B": "Exactly one preimage",
      "C": "At least two preimages",
      "D": "Infinitely many preimages"
    },
    "answer": "B",
    "solution": "Surjectivity gives at least one preimage; injectivity makes it unique.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 73,
    "topic": "Composition of Functions",
    "difficulty": "Easy",
    "question": "If f(x)=x+1 and g(x)=2x, then (g∘f)(x)=",
    "options": {
      "A": "2x+1",
      "B": "2x+2",
      "C": "x+2",
      "D": "2x−1"
    },
    "answer": "B",
    "solution": "g(f(x))=2(x+1)=2x+2.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 74,
    "topic": "Composition of Functions",
    "difficulty": "Moderate",
    "question": "If f(x)=x² and g(x)=x+3, then (f∘g)(2)=",
    "options": {
      "A": "7",
      "B": "10",
      "C": "25",
      "D": "13"
    },
    "answer": "C",
    "solution": "g(2)=5 and f(5)=25.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 75,
    "topic": "Composition of Functions",
    "difficulty": "Hard",
    "question": "If f(x)=2x−1 and g(x)=x+4, then:",
    "options": {
      "A": "f∘g=g∘f",
      "B": "f∘g=2x+7 and g∘f=2x+3",
      "C": "Both are x+3",
      "D": "Both are 2x−1"
    },
    "answer": "B",
    "solution": "f(g(x))=2x+7, while g(f(x))=2x+3. Composition is generally not commutative.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 76,
    "topic": "Composition of Functions",
    "difficulty": "Hard",
    "question": "If f:A→B and g:B→C are injective, then g∘f is:",
    "options": {
      "A": "Injective",
      "B": "Surjective always",
      "C": "Constant",
      "D": "Undefined"
    },
    "answer": "A",
    "solution": "If g(f(a1))=g(f(a2)), injectivity of g gives f(a1)=f(a2), and injectivity of f gives a1=a2.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 77,
    "topic": "Inverse of Functions",
    "difficulty": "Easy",
    "question": "A function has a two-sided inverse between its domain and codomain when it is:",
    "options": {
      "A": "Bijective",
      "B": "Constant",
      "C": "Only quadratic",
      "D": "Never"
    },
    "answer": "A",
    "solution": "A bijection has exactly one preimage for each codomain value, allowing an inverse function.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 78,
    "topic": "Inverse of Functions",
    "difficulty": "Moderate",
    "question": "If f(x)=3x−5, then f⁻¹(x)=",
    "options": {
      "A": "3x+5",
      "B": "(x−5)/3",
      "C": "(x+5)/3",
      "D": "5−3x"
    },
    "answer": "C",
    "solution": "Let y=3x−5. Then x=(y+5)/3, so f⁻¹(x)=(x+5)/3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 79,
    "topic": "Inverse of Functions",
    "difficulty": "Hard",
    "question": "If f(x)=x/2+3, then f⁻¹(x)=",
    "options": {
      "A": "2x+6",
      "B": "2x−6",
      "C": "x/2−3",
      "D": "x−6"
    },
    "answer": "B",
    "solution": "Set y=x/2+3. Then y−3=x/2, hence x=2y−6.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 80,
    "topic": "Inverse of Functions",
    "difficulty": "Hard",
    "question": "For bijective f:A→B, which identity holds for every x∈A?",
    "options": {
      "A": "f⁻¹(f(x))=x",
      "B": "f(f(x))=x always",
      "C": "f⁻¹(x)=x always",
      "D": "f(x)=0"
    },
    "answer": "A",
    "solution": "Applying f and then its inverse returns the original input.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 81,
    "topic": "Exponential Functions",
    "difficulty": "Easy",
    "question": "Which is exponential?",
    "options": {
      "A": "x²",
      "B": "2^x",
      "C": "2x+1",
      "D": "log₂x"
    },
    "answer": "B",
    "solution": "The variable appears in the exponent in 2^x.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 82,
    "topic": "Exponential Functions",
    "difficulty": "Easy",
    "question": "2³ equals:",
    "options": {
      "A": "6",
      "B": "8",
      "C": "9",
      "D": "16"
    },
    "answer": "B",
    "solution": "2×2×2=8.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 83,
    "topic": "Exponential Functions",
    "difficulty": "Moderate",
    "question": "If 2^x=1/8, x is:",
    "options": {
      "A": "−3",
      "B": "−2",
      "C": "2",
      "D": "3"
    },
    "answer": "A",
    "solution": "1/8=2^−3, so x=−3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 84,
    "topic": "Exponential Functions",
    "difficulty": "Hard",
    "question": "Solve 2^(x+1)=16.",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "B",
    "solution": "16=2^4, so x+1=4 and x=3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 85,
    "topic": "Logarithmic Functions",
    "difficulty": "Easy",
    "question": "log₂(8)=",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "8"
    },
    "answer": "B",
    "solution": "2³=8, so log₂(8)=3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 86,
    "topic": "Logarithmic Functions",
    "difficulty": "Easy",
    "question": "For real log_b(x), the argument must satisfy:",
    "options": {
      "A": "x\\<0",
      "B": "x=0",
      "C": "x\\>0",
      "D": "Any x"
    },
    "answer": "C",
    "solution": "Real logarithms require positive arguments.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 87,
    "topic": "Logarithmic Functions",
    "difficulty": "Moderate",
    "question": "Solve log₃(x)=4.",
    "options": {
      "A": "12",
      "B": "27",
      "C": "81",
      "D": "243"
    },
    "answer": "C",
    "solution": "By definition x=3^4=81.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 88,
    "topic": "Logarithmic Functions",
    "difficulty": "Hard",
    "question": "Solve log₅(x)+log₅(x−4)=1 over the reals.",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "−1"
    },
    "answer": "B",
    "solution": "Domain requires x\\>4. Combine logs: x(x−4)=5, giving (x−5)(x+1)=0. Only x=5 satisfies x\\>4.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 89,
    "topic": "Polynomial Functions",
    "difficulty": "Easy",
    "question": "Which is a polynomial?",
    "options": {
      "A": "1/x+2",
      "B": "√x+1",
      "C": "3x³−2x+7",
      "D": "log x"
    },
    "answer": "C",
    "solution": "A polynomial uses nonnegative integer powers of x. 3x³−2x+7 satisfies this.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 90,
    "topic": "Polynomial Functions",
    "difficulty": "Easy",
    "question": "Degree of 5x⁴−3x²+7 is:",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "C",
    "solution": "The highest exponent with a nonzero coefficient is 4.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 91,
    "topic": "Polynomial Functions",
    "difficulty": "Moderate",
    "question": "For p(x)=x²−5x+6, which are roots?",
    "options": {
      "A": "2 and 3",
      "B": "1 and 6",
      "C": "−2 and −3",
      "D": "0 and 6"
    },
    "answer": "A",
    "solution": "p(x)=(x−2)(x−3), so roots are 2 and 3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 92,
    "topic": "Polynomial Functions",
    "difficulty": "Hard",
    "question": "A nonzero polynomial of degree 3 can have at most how many distinct real roots?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "C",
    "solution": "A nonzero degree-n polynomial has at most n distinct roots, so at most 3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 93,
    "topic": "Integrated Unit I Practice",
    "difficulty": "Moderate",
    "question": "If A⊆B, which identity must hold?",
    "options": {
      "A": "A∩B=A",
      "B": "A∪B=A",
      "C": "A−B=A",
      "D": "Aᶜ=Bᶜ"
    },
    "answer": "A",
    "solution": "When A is a subset of B, every element of A is already in B. Therefore A∩B=A.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 94,
    "topic": "Integrated Unit I Practice",
    "difficulty": "Hard",
    "question": "If R is reflexive on a 5-element set, how many diagonal pairs are guaranteed to be in R?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "5",
      "D": "10"
    },
    "answer": "C",
    "solution": "Reflexivity requires (a,a) for every one of the five elements, so five diagonal pairs are guaranteed.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 95,
    "topic": "Integrated Unit I Practice",
    "difficulty": "Hard",
    "question": "Let f(x)=2x−1 and g(x)=x+4. What is (f∘g)(3)?",
    "options": {
      "A": "7",
      "B": "9",
      "C": "13",
      "D": "15"
    },
    "answer": "C",
    "solution": "First apply g: g(3)=7. Then apply f: f(7)=14−1=13.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 96,
    "topic": "Integrated Unit I Practice",
    "difficulty": "Hard",
    "question": "If log₂(x−1)=3, then x equals:",
    "options": {
      "A": "7",
      "B": "8",
      "C": "9",
      "D": "10"
    },
    "answer": "C",
    "solution": "Convert to exponential form: x−1=2³=8, hence x=9. The domain condition x\\>1 is satisfied.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 97,
    "topic": "Ceiling & Floor Functions",
    "difficulty": "Easy",
    "question": "⌊3.7⌋ equals:",
    "options": {
      "A": "3",
      "B": "4",
      "C": "3.7",
      "D": "−3"
    },
    "answer": "A",
    "solution": "Floor is the greatest integer less than or equal to the number, so floor(3.7)=3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 98,
    "topic": "Ceiling & Floor Functions",
    "difficulty": "Easy",
    "question": "⌈3.2⌉ equals:",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "3.2"
    },
    "answer": "C",
    "solution": "Ceiling is the least integer greater than or equal to the number, so ceil(3.2)=4.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 99,
    "topic": "Ceiling & Floor Functions",
    "difficulty": "Moderate",
    "question": "⌊−2.3⌋ equals:",
    "options": {
      "A": "−2",
      "B": "−3",
      "C": "2",
      "D": "3"
    },
    "answer": "B",
    "solution": "The greatest integer ≤−2.3 is −3.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 100,
    "topic": "Ceiling & Floor Functions",
    "difficulty": "Hard",
    "question": "For x=−3.7, ⌈x⌉−⌊x⌋ equals:",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "−1"
    },
    "answer": "B",
    "solution": "ceil(−3.7)=−3 and floor(−3.7)=−4, so the difference is 1.",
    "unit": 1,
    "kind": "mcq"
  },
  {
    "num": 1,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many ways can 5 distinct books be arranged on a shelf?",
    "options": {
      "A": "20",
      "B": "24",
      "C": "3,125",
      "D": "120"
    },
    "answer": "D",
    "solution": "5! = 120.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 2,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many ways can 4 students be selected from 10 students?",
    "options": {
      "A": "40",
      "B": "126",
      "C": "210",
      "D": "5,040"
    },
    "answer": "C",
    "solution": "C(10,4) = 10!/(4!6!) = 210.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 3,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "How many 3-digit numbers can be formed using digits 1,2,3,4,5 without repetition?",
    "options": {
      "A": "10",
      "B": "20",
      "C": "125",
      "D": "60"
    },
    "answer": "D",
    "solution": "5P3 = 5×4×3 = 60.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 4,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "How many 3-digit numbers can be formed using digits 0–9 if repetition is allowed?",
    "options": {
      "A": "1,000",
      "B": "810",
      "C": "900",
      "D": "29"
    },
    "answer": "C",
    "solution": "The hundreds digit has 9 choices and the other two have 10 each: 9×10×10 = 900.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 5,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "How many 4-letter strings can be made from 26 letters when repetition is allowed?",
    "options": {
      "A": "358,800",
      "B": "104",
      "C": "17,576",
      "D": "456,976"
    },
    "answer": "D",
    "solution": "26^4 = 456,976.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 6,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "How many 4-letter strings can be made from 26 letters without repetition?",
    "options": {
      "A": "456,976",
      "B": "104",
      "C": "14,950",
      "D": "358,800"
    },
    "answer": "D",
    "solution": "26P4 = 26×25×24×23 = 358,800.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 7,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "In how many ways can 6 people sit in a row?",
    "options": {
      "A": "30",
      "B": "120",
      "C": "720",
      "D": "1,440"
    },
    "answer": "C",
    "solution": "6! = 720.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 8,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "In how many ways can 6 people sit around a circular table, considering rotations identical?",
    "options": {
      "A": "720",
      "B": "30",
      "C": "120",
      "D": "24"
    },
    "answer": "C",
    "solution": "(6−1)! = 5! = 120.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 9,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many ways can 3 people be selected from 8 people?",
    "options": {
      "A": "56",
      "B": "35",
      "C": "336",
      "D": "24"
    },
    "answer": "A",
    "solution": "C(8,3) = 56.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 10,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many subsets does a set with 7 elements have?",
    "options": {
      "A": "49",
      "B": "64",
      "C": "128",
      "D": "127"
    },
    "answer": "C",
    "solution": "Each element is either included or excluded, so 2^7 = 128.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 11,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many proper subsets does a 7-element set have?",
    "options": {
      "A": "129",
      "B": "128",
      "C": "48",
      "D": "127"
    },
    "answer": "D",
    "solution": "2^7−1 = 127.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 12,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many ways can a committee of 4 be chosen from 9 people?",
    "options": {
      "A": "84",
      "B": "70",
      "C": "3,024",
      "D": "126"
    },
    "answer": "D",
    "solution": "C(9,4) = 126.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 13,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "How many ways can a president and secretary be chosen from 10 people?",
    "options": {
      "A": "720",
      "B": "45",
      "C": "90",
      "D": "100"
    },
    "answer": "C",
    "solution": "The positions are distinct: 10P2 = 10×9 = 90.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 14,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many ways can 5 people be chosen from 12 if a particular person must be included?",
    "options": {
      "A": "495",
      "B": "7,920",
      "C": "462",
      "D": "330"
    },
    "answer": "D",
    "solution": "Choose the remaining 4 from 11: C(11,4) = 330.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 15,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many ways can 5 people be chosen from 12 if a particular person must be excluded?",
    "options": {
      "A": "462",
      "B": "330",
      "C": "55,440",
      "D": "792"
    },
    "answer": "A",
    "solution": "Choose all 5 from the remaining 11: C(11,5) = 462.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 16,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many ways can 4 books be chosen from 10 if two particular books cannot both be chosen?",
    "options": {
      "A": "238",
      "B": "182",
      "C": "28",
      "D": "210"
    },
    "answer": "B",
    "solution": "Total C(10,4)=210. Invalid choices contain both: C(8,2)=28. Answer = 182.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 17,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many nonnegative integer solutions does x1+x2+x3=10 have?",
    "options": {
      "A": "45",
      "B": "220",
      "C": "78",
      "D": "66"
    },
    "answer": "D",
    "solution": "By stars and bars, C(10+3−1,3−1)=C(12,2)=66.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 18,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many positive integer solutions does x1+x2+x3=10 have?",
    "options": {
      "A": "45",
      "B": "66",
      "C": "36",
      "D": "84"
    },
    "answer": "C",
    "solution": "Set yi=xi−1. Then y1+y2+y3=7, giving C(9,2)=36.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 19,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many ways can 10 identical candies be distributed among 4 children, allowing zero candies?",
    "options": {
      "A": "364",
      "B": "715",
      "C": "210",
      "D": "286"
    },
    "answer": "D",
    "solution": "C(10+4−1,4−1)=C(13,3)=286.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 20,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many ways can 10 identical candies be distributed among 4 children if each gets at least one?",
    "options": {
      "A": "84",
      "B": "286",
      "C": "120",
      "D": "126"
    },
    "answer": "A",
    "solution": "Give one to each first; distribute 6: C(9,3)=84.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 21,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "State the multiplication principle of counting.",
    "options": {
      "A": "With m choices then n choices, there are m×n outcomes",
      "B": "With m choices then n choices, there are n^m outcomes",
      "C": "With m choices then n choices, there are m×n×n outcomes",
      "D": "With m choices then n choices, there are m+n outcomes"
    },
    "answer": "A",
    "solution": "If a process has m choices for the first stage and n choices for the second stage for every first-stage choice, there are mn total outcomes.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 22,
    "topic": "Basics of Counting",
    "difficulty": "Moderate",
    "question": "State the addition principle of counting.",
    "options": {
      "A": "If two mutually exclusive cases have m and n outcomes, the total is m+n",
      "B": "If two mutually exclusive cases have m and n outcomes, the total is max(m,n)",
      "C": "If two mutually exclusive cases have m and n outcomes, the total is m-n",
      "D": "If two mutually exclusive cases have m and n outcomes, the total is m×n"
    },
    "answer": "A",
    "solution": "If two cases are mutually exclusive with m and n outcomes respectively, the total is m+n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 23,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "What is the difference between permutation and combination?",
    "options": {
      "A": "Combination considers order; permutation does not",
      "B": "Permutation counts subsets; combination counts arrangements",
      "C": "They are the same when n is large",
      "D": "Permutation considers order; combination does not"
    },
    "answer": "D",
    "solution": "Permutation considers order; combination does not. P(n,r)=n!/(n−r)! and C(n,r)=n!/[r!(n−r)!].",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 24,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Evaluate 10P3.",
    "options": {
      "A": "90",
      "B": "1,000",
      "C": "720",
      "D": "120"
    },
    "answer": "C",
    "solution": "10P3 = 10×9×8 = 720.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 25,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Evaluate 10C3.",
    "options": {
      "A": "90",
      "B": "120",
      "C": "720",
      "D": "1,000"
    },
    "answer": "B",
    "solution": "10C3 = 10×9×8/(3×2×1) = 120.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 26,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Show that C(n,r)=C(n,n−r).",
    "options": {
      "A": "C(n,r) and C(n,n-r) are equal only when n is even",
      "B": "C(n,r) and C(n,n-r) are equal only when r=1",
      "C": "C(n,r) and C(n,n-r) share the same formula with r and n-r swapped",
      "D": "C(n,r) and C(n,n-r) differ by a factor of r!"
    },
    "answer": "C",
    "solution": "C(n,r)=n!/[r!(n−r)!], which is unchanged when r and n−r are interchanged.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 27,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Evaluate C(12,0), C(12,1), and C(12,12).",
    "options": {
      "A": "0, 12, 1",
      "B": "12, 1, 1",
      "C": "1, 12, 12",
      "D": "1, 12, 1"
    },
    "answer": "D",
    "solution": "They are 1, 12, and 1 respectively.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 28,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Find C(10,2)+C(10,3).",
    "options": {
      "A": "5,400",
      "B": "120",
      "C": "165",
      "D": "45"
    },
    "answer": "C",
    "solution": "45+120 = 165.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 29,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Use Pascal's identity to find C(8,3).",
    "options": {
      "A": "70",
      "B": "735",
      "C": "56",
      "D": "84"
    },
    "answer": "C",
    "solution": "C(8,3)=C(7,2)+C(7,3)=21+35=56.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 30,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many diagonals does a convex polygon with n vertices have?",
    "options": {
      "A": "n(n-3)/2",
      "B": "n(n-1)/2",
      "C": "C(n,2)",
      "D": "n(n-2)/2"
    },
    "answer": "A",
    "solution": "Choose any 2 vertices and subtract the n sides: C(n,2)−n = n(n−3)/2.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 31,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many handshakes occur if 15 people each shake hands exactly once with every other person?",
    "options": {
      "A": "455",
      "B": "105",
      "C": "91",
      "D": "210"
    },
    "answer": "B",
    "solution": "Each pair shakes once: C(15,2)=105.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 32,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many edges does the complete graph K_n have?",
    "options": {
      "A": "n(n-1)/2",
      "B": "C(n,3)",
      "C": "n^2/2",
      "D": "n(n+1)/2"
    },
    "answer": "A",
    "solution": "Each edge corresponds to a pair of vertices, so C(n,2)=n(n−1)/2.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 33,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "How many binary strings of length 8 exist?",
    "options": {
      "A": "256",
      "B": "255",
      "C": "64",
      "D": "128"
    },
    "answer": "A",
    "solution": "Each position has 2 choices: 2^8=256.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 34,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many binary strings of length 8 contain exactly three 1s?",
    "options": {
      "A": "336",
      "B": "256",
      "C": "56",
      "D": "70"
    },
    "answer": "C",
    "solution": "Choose the three positions: C(8,3)=56.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 35,
    "topic": "Basics of Counting",
    "difficulty": "Moderate",
    "question": "How many binary strings of length 8 contain at least one 1?",
    "options": {
      "A": "256",
      "B": "127",
      "C": "255",
      "D": "254"
    },
    "answer": "C",
    "solution": "Total 256 minus the all-zero string: 255.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 36,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "How many binary strings of length 10 contain no consecutive 1s?",
    "options": {
      "A": "88",
      "B": "90",
      "C": "55",
      "D": "89"
    },
    "answer": "D",
    "solution": "Let a_n=a_{n−1}+a_{n−2}, with a_1=2,a_2=3. Thus a_10=89.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 37,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many 5-card hands can be dealt from a standard 52-card deck?",
    "options": {
      "A": "311,875,200",
      "B": "2,598,960",
      "C": "270,725",
      "D": "1,712,304"
    },
    "answer": "B",
    "solution": "C(52,5)=2,598,960.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 38,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many 5-card hands contain exactly two aces?",
    "options": {
      "A": "103,776",
      "B": "4,512",
      "C": "6,768",
      "D": "132,600"
    },
    "answer": "A",
    "solution": "Choose 2 of 4 aces and 3 of 48 non-aces: C(4,2)C(48,3)=1,081,344.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 39,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many 5-card hands contain at least one ace?",
    "options": {
      "A": "2,598,960",
      "B": "886,656",
      "C": "778,320",
      "D": "1,712,304"
    },
    "answer": "B",
    "solution": "Total hands minus no-ace hands: C(52,5)−C(48,5)=886,656.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 40,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many ways can 8 people be divided into two groups of 4, where the groups are unlabeled?",
    "options": {
      "A": "56",
      "B": "70",
      "C": "140",
      "D": "35"
    },
    "answer": "D",
    "solution": "C(8,4)/2 = 70/2 = 35.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 41,
    "topic": "Pigeonhole Principle",
    "difficulty": "Moderate",
    "question": "State the pigeonhole principle.",
    "options": {
      "A": "Every box contains exactly the same number of objects",
      "B": "Every box contains at least one object",
      "C": "At least one box contains at least two objects",
      "D": "At least one box is empty"
    },
    "answer": "C",
    "solution": "If more than n objects are placed into n boxes, at least one box contains at least two objects.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 42,
    "topic": "Pigeonhole Principle",
    "difficulty": "Moderate",
    "question": "What is the generalized pigeonhole principle?",
    "options": {
      "A": "At least one box contains at least ⌊N/k⌋ objects",
      "B": "Every box contains at least ⌈N/k⌉ objects",
      "C": "At least one box contains at least ⌈N/k⌉ objects",
      "D": "At least one box contains exactly N/k objects"
    },
    "answer": "C",
    "solution": "If N objects are distributed among k boxes, at least one box contains at least ceil(N/k) objects.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 43,
    "topic": "Pigeonhole Principle",
    "difficulty": "Moderate",
    "question": "Show that among 13 people, at least two have birthdays in the same month.",
    "options": {
      "A": "24",
      "B": "12",
      "C": "14",
      "D": "13"
    },
    "answer": "D",
    "solution": "There are 12 months and 13 people. Since 13>12, the pigeonhole principle guarantees a shared month.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 44,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Among 101 integers, show that two have the same remainder when divided by 100.",
    "options": {
      "A": "200",
      "B": "101",
      "C": "99",
      "D": "100"
    },
    "answer": "B",
    "solution": "There are only 100 possible remainders, 0 through 99. With 101 integers, two share a remainder.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 45,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Show that among 6 integers, two have the same remainder modulo 5.",
    "options": {
      "A": "5",
      "B": "6",
      "C": "10",
      "D": "7"
    },
    "answer": "B",
    "solution": "There are only 5 remainder classes. Six integers force a repeated class.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 46,
    "topic": "Basics of Counting",
    "difficulty": "Moderate",
    "question": "How many people are needed to guarantee that at least 3 have birthdays in the same month?",
    "options": {
      "A": "26",
      "B": "25",
      "C": "36",
      "D": "24"
    },
    "answer": "B",
    "solution": "With at most 2 people per month, 24 people avoid 3 in one month. Therefore 25 people guarantee it.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 47,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "How many integers must be chosen from {1,...,20} to guarantee two differ by 10?",
    "options": {
      "A": "20",
      "B": "10",
      "C": "12",
      "D": "11"
    },
    "answer": "D",
    "solution": "Pair numbers as (1,11),...,(10,20). Choosing 11 numbers guarantees a complete pair.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 48,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Show that among 6 integers, two have difference divisible by 5.",
    "options": {
      "A": "5",
      "B": "7",
      "C": "6",
      "D": "11"
    },
    "answer": "C",
    "solution": "There are 5 residue classes modulo 5. Six integers force two into the same class; their difference is divisible by 5.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 49,
    "topic": "Pigeonhole Principle",
    "difficulty": "Moderate",
    "question": "What is the minimum number of people required to guarantee two have the same first initial, assuming 26 possible initials?",
    "options": {
      "A": "28",
      "B": "27",
      "C": "26",
      "D": "25"
    },
    "answer": "B",
    "solution": "27 people, by the pigeonhole principle.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 50,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "What is the minimum number of socks needed to guarantee a matching pair if there are 5 colors?",
    "options": {
      "A": "5",
      "B": "7",
      "C": "10",
      "D": "6"
    },
    "answer": "D",
    "solution": "6 socks guarantee two of the same color.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 51,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "State the binomial theorem.",
    "options": {
      "A": "(a+b)^n = n × (a+b)^(n-1)",
      "B": "(a+b)^n = Σ P(n,k) a^(n-k) b^k",
      "C": "(a+b)^n = Σ C(n,k) a^k b^k",
      "D": "(a+b)^n = Σ C(n,k) a^(n-k) b^k"
    },
    "answer": "D",
    "solution": "For nonnegative integer n, (a+b)^n = Σ[k=0 to n] C(n,k)a^(n−k)b^k.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 52,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Expand (x+y)^3.",
    "options": {
      "A": "x^3+2x^2y+2xy^2+y^3",
      "B": "x^3+y^3",
      "C": "x^3+3xy^2+y^3",
      "D": "x^3+3x^2y+3xy^2+y^3"
    },
    "answer": "D",
    "solution": "x^3+3x^2y+3xy^2+y^3.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 53,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Expand (x+y)^4.",
    "options": {
      "A": "x^4+4x^3y+6x^2y^2+4xy^3+y^4",
      "B": "x^4+6x^3y+6x^2y^2+6xy^3+y^4",
      "C": "x^4+4x^3y+4x^2y^2+4xy^3+y^4",
      "D": "x^4+3x^3y+3x^2y^2+3xy^3+y^4"
    },
    "answer": "A",
    "solution": "x^4+4x^3y+6x^2y^2+4xy^3+y^4.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 54,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^3y^2 in (x+y)^5.",
    "options": {
      "A": "10",
      "B": "5",
      "C": "15",
      "D": "20"
    },
    "answer": "A",
    "solution": "The coefficient is C(5,2)=10.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 55,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^7 in (1+x)^10.",
    "options": {
      "A": "45",
      "B": "120",
      "C": "240",
      "D": "604,800"
    },
    "answer": "B",
    "solution": "It is C(10,7)=120.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 56,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^4 in (2+x)^6.",
    "options": {
      "A": "60",
      "B": "80",
      "C": "15",
      "D": "30"
    },
    "answer": "A",
    "solution": "Choose x^4: C(6,4)2^2 = 15×4 = 60.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 57,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^3 in (2x−1)^5.",
    "options": {
      "A": "80x^3",
      "B": "40x^3",
      "C": "80x^2",
      "D": "10x^3"
    },
    "answer": "A",
    "solution": "The term is C(5,3)(2x)^3(−1)^2 = 10×8x^3 = 80x^3.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 58,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Find the middle term of (x+y)^8.",
    "options": {
      "A": "56x^4y^4",
      "B": "70x^3y^5",
      "C": "35x^4y^4",
      "D": "70x^4y^4"
    },
    "answer": "D",
    "solution": "Since n=8, there is one middle term at k=4: C(8,4)x^4y^4=70x^4y^4.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 59,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Find the two middle terms of (x+y)^9.",
    "options": {
      "A": "126x^5y^4 only",
      "B": "84x^5y^4 and 84x^4y^5",
      "C": "120x^5y^4 and 120x^4y^5",
      "D": "126x^5y^4 and 126x^4y^5"
    },
    "answer": "D",
    "solution": "There are 10 terms; the middle terms are positions 5 and 6: 126x^5y^4 and 126x^4y^5.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 60,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Find the sum of coefficients in (2x−3)^7.",
    "options": {
      "A": "128",
      "B": "-1",
      "C": "-128",
      "D": "1"
    },
    "answer": "B",
    "solution": "Set x=1: (2−3)^7=−1.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 61,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the sum of all binomial coefficients in row n.",
    "options": {
      "A": "n^2",
      "B": "2n",
      "C": "n!",
      "D": "2^n"
    },
    "answer": "D",
    "solution": "By setting a=b=1 in the binomial theorem, the sum is 2^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 62,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Prove C(n,0)+C(n,1)+...+C(n,n)=2^n.",
    "options": {
      "A": "Both sides equal n!",
      "B": "Both sides equal 2n",
      "C": "Both sides equal 2^n",
      "D": "Both sides equal n^2"
    },
    "answer": "C",
    "solution": "Expand (1+1)^n using the binomial theorem; the left side is the coefficient sum and the right side is 2^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 63,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Find the alternating sum C(n,0)−C(n,1)+...+(−1)^nC(n,n).",
    "options": {
      "A": "1",
      "B": "2",
      "C": "0",
      "D": "-1"
    },
    "answer": "C",
    "solution": "Set x=1,y=−1 in (x+y)^n. For n>0 the result is 0.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 64,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^5 in (1+x)^12.",
    "options": {
      "A": "792",
      "B": "95,040",
      "C": "495",
      "D": "1,584"
    },
    "answer": "A",
    "solution": "C(12,5)=792.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 65,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^8 in (1+2x)^10.",
    "options": {
      "A": "5,760",
      "B": "11,520",
      "C": "46,080",
      "D": "45"
    },
    "answer": "B",
    "solution": "C(10,8)2^8 = 45×256 = 11,520.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 66,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Find the term containing x^4 in (x+2)^7.",
    "options": {
      "A": "280x^3",
      "B": "70x^4",
      "C": "280x^4",
      "D": "56x^4"
    },
    "answer": "C",
    "solution": "For x^4, choose k=4: C(7,4)x^4 2^3 = 35×8x^4 = 280x^4.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 67,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Find the constant term of (x+1/x)^6.",
    "options": {
      "A": "15",
      "B": "64",
      "C": "20",
      "D": "6"
    },
    "answer": "C",
    "solution": "The general term has x^(6−2k). Constant term requires k=3, giving C(6,3)=20.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 68,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Find the constant term of (2x−1/x)^6.",
    "options": {
      "A": "-80",
      "B": "160",
      "C": "-20",
      "D": "-160"
    },
    "answer": "D",
    "solution": "Power of x is 6−2k; k=3. Coefficient = C(6,3)2^3(−1)^3 = −160.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 69,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Write Pascal's identity.",
    "options": {
      "A": "C(n,r)=C(n-1,r-1)+C(n-1,r)",
      "B": "C(n,r)=C(n-1,r-1)-C(n-1,r)",
      "C": "C(n,r)=C(n-1,r)+C(n-1,r+1)",
      "D": "C(n,r)=C(n,r-1)+C(n,r+1)"
    },
    "answer": "A",
    "solution": "C(n,r)=C(n−1,r−1)+C(n−1,r).",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 70,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "What is the relationship between binomial coefficients and Pascal's triangle?",
    "options": {
      "A": "Row n lists C(n,1) through C(n,n+1)",
      "B": "Row n lists C(n,0) through C(n,n)",
      "C": "Row n lists only the even-indexed coefficients",
      "D": "Row n lists P(n,0) through P(n,n)"
    },
    "answer": "B",
    "solution": "The entries in row n of Pascal's triangle are C(n,0),...,C(n,n).",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 71,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "Define a recurrence relation.",
    "options": {
      "A": "A formula that only applies to the first term",
      "B": "A rule defining every term independently of the others",
      "C": "A rule defining a term using only the very first term",
      "D": "A rule defining a term using one or more earlier terms"
    },
    "answer": "D",
    "solution": "A recurrence relation defines a sequence term using one or more earlier terms.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 72,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "Give a simple recurrence for the sequence 2,4,8,16,...",
    "options": {
      "A": "a_n = a_{n-1}+2, a_1=2",
      "B": "a_n = a_{n-1}^2, a_1=2",
      "C": "a_n = 2a_{n-1}, a_1=2",
      "D": "a_n = 2a_{n-1}, a_1=1"
    },
    "answer": "C",
    "solution": "a_n=2a_{n−1}, with a_1=2.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 73,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "Give a recurrence for 1,3,6,10,15,...",
    "options": {
      "A": "a_n = 2a_{n-1}, a_1=1",
      "B": "a_n = a_{n-1}+n, a_1=0",
      "C": "a_n = a_{n-1}+n, a_1=1",
      "D": "a_n = a_{n-1}+n-1, a_1=1"
    },
    "answer": "C",
    "solution": "a_n=a_{n−1}+n, with a_1=1.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 74,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "What are initial conditions in a recurrence relation?",
    "options": {
      "A": "Any values that make the recurrence true",
      "B": "Starting values needed to uniquely generate the sequence",
      "C": "The largest values the sequence can reach",
      "D": "The final values that end the sequence"
    },
    "answer": "B",
    "solution": "They specify starting values needed to uniquely generate the sequence.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 75,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "Find the first six terms of a_n=3a_{n−1}, a_0=2.",
    "options": {
      "A": "3, 6, 18, 54, 162, 486",
      "B": "2, 6, 18, 54, 162, 486",
      "C": "2, 5, 8, 11, 14, 17",
      "D": "2, 6, 12, 24, 48, 96"
    },
    "answer": "B",
    "solution": "2, 6, 18, 54, 162, 486.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 76,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "Find the first six terms of a_n=a_{n−1}+2, a_0=1.",
    "options": {
      "A": "1, 3, 6, 10, 15, 21",
      "B": "2, 4, 6, 8, 10, 12",
      "C": "1, 2, 4, 8, 16, 32",
      "D": "1, 3, 5, 7, 9, 11"
    },
    "answer": "D",
    "solution": "1,3,5,7,9,11.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 77,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Model a savings process where ₹1000 is saved initially and ₹500 is added each month.",
    "options": {
      "A": "S_n = 1000×1.5^n",
      "B": "S_n = 1000n+500",
      "C": "S_n = 500+1000n",
      "D": "S_n = 1000+500n"
    },
    "answer": "D",
    "solution": "Let S_0=1000 and S_n=S_{n−1}+500. Hence S_n=1000+500n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 78,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Model a population that grows by 10% each year from 5000.",
    "options": {
      "A": "P_n = 5000+1.1n",
      "B": "P_n = 5000(0.9)^n",
      "C": "P_n = 5000+10n",
      "D": "P_n = 5000(1.1)^n"
    },
    "answer": "D",
    "solution": "P_0=5000 and P_n=1.1P_{n−1}.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 79,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Model a machine value that loses 20% of its value each year, starting at ₹50,000.",
    "options": {
      "A": "V_n = 50000(0.8)^n",
      "B": "V_n = 50000-0.2n",
      "C": "V_n = 50000(1.2)^n",
      "D": "V_n = 50000(0.2)^n"
    },
    "answer": "A",
    "solution": "V_0=50000 and V_n=0.8V_{n−1}.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 80,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "A bacteria culture doubles every hour from 300 bacteria. Give a recurrence.",
    "options": {
      "A": "B_n = 300(2)^{n-1}",
      "B": "B_n = 300(2)^n",
      "C": "B_n = 2(300)^n",
      "D": "B_n = 300+2n"
    },
    "answer": "B",
    "solution": "B_0=300 and B_n=2B_{n−1}.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 81,
    "topic": "Fibonacci & Tower of Hanoi",
    "difficulty": "Hard",
    "question": "Define the Fibonacci sequence.",
    "options": {
      "A": "F_0=0, F_1=1, F_n=F_{n-1}×F_{n-2}",
      "B": "F_0=0, F_1=1, F_n=F_{n-1}+F_{n-2}",
      "C": "F_0=0, F_1=0, F_n=F_{n-1}+F_{n-2}",
      "D": "F_0=1, F_1=1, F_n=F_{n-1}+F_{n-2}"
    },
    "answer": "B",
    "solution": "F_0=0, F_1=1, and F_n=F_{n−1}+F_{n−2} for n≥2.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 82,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Find F_0 through F_10.",
    "options": {
      "A": "0,1,1,2,3,5,8,13,21,34,55",
      "B": "0,1,1,2,3,5,8,13,21,34,89",
      "C": "1,1,2,3,5,8,13,21,34,55,89",
      "D": "0,1,2,3,5,8,13,21,34,55,89"
    },
    "answer": "A",
    "solution": "0,1,1,2,3,5,8,13,21,34,55.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 83,
    "topic": "Fibonacci & Tower of Hanoi",
    "difficulty": "Hard",
    "question": "Find F_12.",
    "options": {
      "A": "144",
      "B": "121",
      "C": "89",
      "D": "233"
    },
    "answer": "A",
    "solution": "Continuing the Fibonacci recurrence gives F_11=89 and F_12=144.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 84,
    "topic": "Fibonacci & Tower of Hanoi",
    "difficulty": "Hard",
    "question": "Why is the Fibonacci recurrence a second-order recurrence?",
    "options": {
      "A": "F_n depends on all previous terms",
      "B": "F_n depends on the next two terms",
      "C": "F_n depends on the previous two terms",
      "D": "F_n depends only on the previous term"
    },
    "answer": "C",
    "solution": "Because F_n depends on the previous two terms, F_{n−1} and F_{n−2}.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 85,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "Give a recurrence for the number of ways to climb n stairs using steps of size 1 or 2.",
    "options": {
      "A": "a_n = 2a_{n-1}, a_0=1, a_1=1",
      "B": "a_n = a_{n-1}+a_{n-2}, a_0=0, a_1=1",
      "C": "a_n = a_{n-1}+a_{n-2}, a_0=1, a_1=1",
      "D": "a_n = a_{n-1}×a_{n-2}, a_0=1, a_1=1"
    },
    "answer": "C",
    "solution": "a_n=a_{n−1}+a_{n−2}, with a_0=1 and a_1=1.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 86,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "How many ways are there to climb 5 stairs using 1-step and 2-step moves?",
    "options": {
      "A": "7",
      "B": "13",
      "C": "8",
      "D": "5"
    },
    "answer": "C",
    "solution": "The recurrence gives 1,1,2,3,5,8, so a_5=8.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 87,
    "topic": "Fibonacci & Tower of Hanoi",
    "difficulty": "Hard",
    "question": "State the Tower of Hanoi recurrence for n disks.",
    "options": {
      "A": "T_n = 2T_{n-1}, T_1=1",
      "B": "T_n = 2T_{n-1}+1, T_1=1",
      "C": "T_n = T_{n-1}+1, T_1=1",
      "D": "T_n = 2T_{n-1}-1, T_1=1"
    },
    "answer": "B",
    "solution": "T_n=2T_{n−1}+1, with T_1=1 (equivalently T_0=0).",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 88,
    "topic": "Fibonacci & Tower of Hanoi",
    "difficulty": "Hard",
    "question": "How many moves are required for 3 Tower of Hanoi disks?",
    "options": {
      "A": "8",
      "B": "15",
      "C": "6",
      "D": "7"
    },
    "answer": "D",
    "solution": "T_3=2T_2+1=7.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 89,
    "topic": "Fibonacci & Tower of Hanoi",
    "difficulty": "Hard",
    "question": "How many moves are required for 10 Tower of Hanoi disks?",
    "options": {
      "A": "1,022",
      "B": "511",
      "C": "1,023",
      "D": "1,024"
    },
    "answer": "C",
    "solution": "T_n=2^n−1, so T_10=1023.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 90,
    "topic": "Fibonacci & Tower of Hanoi",
    "difficulty": "Hard",
    "question": "Explain the Tower of Hanoi recurrence.",
    "options": {
      "A": "T_n = T_{n-1}+2",
      "B": "T_n = T_{n-1}+1+T_{n-1}",
      "C": "T_n = T_{n-1}+T_{n-2}+1",
      "D": "T_n = 2T_{n-1}-1"
    },
    "answer": "B",
    "solution": "Move n−1 disks to the spare peg, move the largest disk once, then move n−1 disks onto it: T_n=T_{n−1}+1+T_{n−1}.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 91,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=3a_{n−1}, a_0=2.",
    "options": {
      "A": "a_n = 6·3^{n-1}",
      "B": "a_n = 2·3^n",
      "C": "a_n = 2·3^{n-1}",
      "D": "a_n = 3·2^n"
    },
    "answer": "B",
    "solution": "Characteristic equation r−3=0 gives r=3, so a_n=C3^n. Since a_0=2, C=2. Thus a_n=2·3^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 92,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=5a_{n−1}, a_0=7.",
    "options": {
      "A": "a_n = 35·5^{n-1}",
      "B": "a_n = 7·5^{n-1}",
      "C": "a_n = 5·7^n",
      "D": "a_n = 7·5^n"
    },
    "answer": "D",
    "solution": "Characteristic root is r=5, so a_n=C5^n. Using a_0=7 gives a_n=7·5^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 93,
    "topic": "Linear Homogeneous Recurrences",
    "difficulty": "Hard",
    "question": "Solve a_n=2a_{n−1}+3, a_0=1.",
    "options": {
      "A": "a_n = 4·2^{n-1} - 3",
      "B": "a_n = 4·2^n + 3",
      "C": "a_n = 4·2^n - 3",
      "D": "a_n = 2^n - 3"
    },
    "answer": "C",
    "solution": "Homogeneous solution: C2^n. A constant particular solution p satisfies p=2p+3, so p=−3. Thus a_n=C2^n−3. From a_0=1, C=4. Answer: 4·2^n−3.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 94,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "What is the characteristic equation for a_n=5a_{n−1}−6a_{n−2}?",
    "options": {
      "A": "r^2 - 5r + 6 = 0",
      "B": "r^2 - 5r - 6 = 0",
      "C": "r^2 - 6r + 5 = 0",
      "D": "r^2 + 5r + 6 = 0"
    },
    "answer": "A",
    "solution": "Assume a_n=r^n: r^2−5r+6=0=(r−2)(r−3).",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 95,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "Solve a_n=5a_{n−1}−6a_{n−2}, a_0=1, a_1=4.",
    "options": {
      "A": "a_n = -2^n + 2·3^n",
      "B": "a_n = 2·2^n - 3^n",
      "C": "a_n = -2^n + 3^n",
      "D": "a_n = 2^n - 2·3^n"
    },
    "answer": "A",
    "solution": "Roots are 2 and 3, so a_n=A2^n+B3^n. A+B=1 and 2A+3B=4. Solving gives A=−1, B=2. Thus a_n=−2^n+2·3^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 96,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=4a_{n−1}−4a_{n−2}, a_0=1, a_1=4.",
    "options": {
      "A": "a_n = (1+2n)2^n",
      "B": "a_n = (1+n/2)2^n",
      "C": "a_n = (1-n/2)2^n",
      "D": "a_n = (1+n/2)2^{n-1}"
    },
    "answer": "B",
    "solution": "Characteristic equation r^2−4r+4=(r−2)^2. Repeated root 2 gives a_n=(A+Bn)2^n. A=1; 4=(1+B)2 gives B=1/2. Thus a_n=(1+n/2)2^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 97,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "What form is used when a second-order recurrence has two distinct roots r1 and r2?",
    "options": {
      "A": "a_n = (A+B)(r1+r2)^n",
      "B": "a_n = A r1^n + B n r2^n",
      "C": "a_n = A r1^n × B r2^n",
      "D": "a_n = A r1^n + B r2^n"
    },
    "answer": "D",
    "solution": "The general homogeneous solution is a_n=Ar1^n+Br2^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 98,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "What form is used when the characteristic equation has a repeated root r?",
    "options": {
      "A": "a_n = A r^n + B r^{n-1}",
      "B": "a_n = A r^n × B n",
      "C": "a_n = (A+Bn) r^{2n}",
      "D": "a_n = (A+Bn) r^n"
    },
    "answer": "D",
    "solution": "For multiplicity 2, a_n=(A+Bn)r^n. More generally, multiplicity m gives (A0+A1n+...+A_{m−1}n^{m−1})r^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 99,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=7a_{n−1}−12a_{n−2}, a_0=2, a_1=7.",
    "options": {
      "A": "a_n = 3^n + 2·4^n",
      "B": "a_n = 4^n - 3^n",
      "C": "a_n = 3^n + 4^n",
      "D": "a_n = 2(3^n+4^n)"
    },
    "answer": "C",
    "solution": "Characteristic equation r^2−7r+12=(r−3)(r−4). Thus a_n=A3^n+B4^n. A+B=2, 3A+4B=7 gives A=1,B=1. Hence a_n=3^n+4^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 100,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=6a_{n−1}−9a_{n−2}, a_0=1, a_1=6.",
    "options": {
      "A": "a_n = (1+n)3^{n-1}",
      "B": "a_n = (n-1)3^n",
      "C": "a_n = (2n+1)3^n",
      "D": "a_n = (n+1)3^n"
    },
    "answer": "D",
    "solution": "Characteristic equation (r−3)^2=0. Thus a_n=(A+Bn)3^n. A=1 and 3(A+B)=6 gives B=1. Hence a_n=(n+1)3^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 101,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=8a_{n−1}−15a_{n−2}, a_0=2, a_1=7.",
    "options": {
      "A": "a_n = 3^n + 5^n",
      "B": "a_n = (1/2)3^n + (3/2)5^n",
      "C": "a_n = (3/2)3^n + (1/2)5^n",
      "D": "a_n = (3/2)3^n - (1/2)5^n"
    },
    "answer": "C",
    "solution": "Characteristic equation r^2−8r+15=(r−3)(r−5). So a_n=A3^n+B5^n. A+B=2; 3A+5B=7. Hence B=1/2 and A=3/2. Answer: (3/2)3^n+(1/2)5^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 102,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=2a_{n−1}+3a_{n−2}, a_0=1, a_1=2.",
    "options": {
      "A": "a_n = (1/4)3^n + (3/4)(-1)^n",
      "B": "a_n = (3/4)3^n + (1/4)(-1)^n",
      "C": "a_n = 3^n + (-1)^n",
      "D": "a_n = (3/4)3^n - (1/4)(-1)^n"
    },
    "answer": "B",
    "solution": "Characteristic equation r^2−2r−3=(r−3)(r+1). Thus a_n=A3^n+B(−1)^n. A+B=1; 3A−B=2. Therefore A=3/4, B=1/4. Answer: (3/4)3^n+(1/4)(−1)^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 103,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=a_{n−1}+2a_{n−2}, a_0=0, a_1=1.",
    "options": {
      "A": "a_n = (2^n + (-1)^n)/3",
      "B": "a_n = (2^n - (-1)^n)/3",
      "C": "a_n = 2^n - (-1)^n",
      "D": "a_n = (2^n - (-1)^n)/2"
    },
    "answer": "B",
    "solution": "Characteristic equation r^2−r−2=(r−2)(r+1). Thus a_n=A2^n+B(−1)^n. A+B=0 and 2A−B=1. Hence A=1/3,B=−1/3. Answer: (2^n−(−1)^n)/3.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 104,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=4a_{n−1}+5a_{n−2}, a_0=2, a_1=1.",
    "options": {
      "A": "a_n = (1/2)5^n - (3/2)(-1)^n",
      "B": "a_n = (1/2)5^n + (3/2)(-1)^n",
      "C": "a_n = 5^n + (-1)^n",
      "D": "a_n = (3/2)5^n + (1/2)(-1)^n"
    },
    "answer": "B",
    "solution": "Characteristic equation r^2−4r−5=(r−5)(r+1). Thus a_n=A5^n+B(−1)^n. A+B=2; 5A−B=1. Hence A=1/2, B=3/2.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 105,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=3a_{n−1}−2a_{n−2}, a_0=4, a_1=5.",
    "options": {
      "A": "a_n = 3 - 2^n",
      "B": "a_n = 2 + 2^n",
      "C": "a_n = 1 + 3·2^n",
      "D": "a_n = 3 + 2^n"
    },
    "answer": "D",
    "solution": "Characteristic equation r^2−3r+2=(r−1)(r−2). Thus a_n=A+B2^n. A+B=4; A+2B=5. So B=1,A=3. Answer: a_n=3+2^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 106,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=10a_{n−1}−25a_{n−2}, a_0=3, a_1=5.",
    "options": {
      "A": "a_n = (3-2n)5^{n-1}",
      "B": "a_n = (3-2n)5^n",
      "C": "a_n = (3+2n)5^n",
      "D": "a_n = (2-3n)5^n"
    },
    "answer": "B",
    "solution": "Characteristic equation (r−5)^2=0. Thus a_n=(A+Bn)5^n. A=3; 5(A+B)=5 gives B=−2. Hence a_n=(3−2n)5^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 107,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=2a_{n−1}−a_{n−2}, a_0=3, a_1=5.",
    "options": {
      "A": "a_n = 3 + n",
      "B": "a_n = 3 - 2n",
      "C": "a_n = 3 + 2n",
      "D": "a_n = 2 + 3n"
    },
    "answer": "C",
    "solution": "Characteristic equation (r−1)^2=0. Thus a_n=A+Bn. A=3; A+B=5 gives B=2. Hence a_n=3+2n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 108,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=6a_{n−1}−11a_{n−2}+6a_{n−3}.",
    "options": {
      "A": "a_n = A + B2^n + C4^n",
      "B": "a_n = A + B2^n + C3^n",
      "C": "a_n = A2^n + B3^n + C(-1)^n",
      "D": "a_n = (A+Bn+Cn^2)"
    },
    "answer": "B",
    "solution": "Characteristic equation r^3−6r^2+11r−6=(r−1)(r−2)(r−3). Thus a_n=A+B2^n+C3^n; constants require initial conditions.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 109,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "For a_n=7a_{n−1}−10a_{n−2}, find the characteristic roots.",
    "options": {
      "A": "Roots are 2 and 3",
      "B": "Roots are 5 and -2",
      "C": "Roots are -5 and -2",
      "D": "Roots are 5 and 2"
    },
    "answer": "D",
    "solution": "r^2−7r+10=(r−5)(r−2), so roots are 5 and 2.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 110,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "For a_n=4a_{n−1}−4a_{n−2}, identify the root multiplicity.",
    "options": {
      "A": "r=2 has multiplicity 1",
      "B": "r=2 has multiplicity 3",
      "C": "r=2 has multiplicity 2",
      "D": "r=4 has multiplicity 2"
    },
    "answer": "C",
    "solution": "r^2−4r+4=(r−2)^2, so r=2 has multiplicity 2.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 111,
    "topic": "Linear Homogeneous Recurrences",
    "difficulty": "Hard",
    "question": "Solve the recurrence T_n=2T_{n−1}+1 with T_0=0.",
    "options": {
      "A": "T_n = 2^n",
      "B": "T_n = 2^n + 1",
      "C": "T_n = 2^n - 1",
      "D": "T_n = 2^{n-1} - 1"
    },
    "answer": "C",
    "solution": "Unrolling gives T_n=2^n−1. It also follows from the particular solution T_n=C2^n−1 and T_0=0.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 112,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "Solve T_n=T_{n−1}+n, T_0=0.",
    "options": {
      "A": "T_n = n(n+1)/2",
      "B": "T_n = (n+1)(n+2)/2",
      "C": "T_n = n^2/2",
      "D": "T_n = n(n-1)/2"
    },
    "answer": "A",
    "solution": "Summing 1+2+...+n gives T_n=n(n+1)/2.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 113,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "Model the number of comparisons in a process that doubles its work each stage and adds 1.",
    "options": {
      "A": "C_n = 2^n + 1",
      "B": "C_n = 2^n - 1",
      "C": "C_n = 2^{n-1} - 1",
      "D": "C_n = 2^n"
    },
    "answer": "B",
    "solution": "If C_0=0, then C_n=2C_{n−1}+1. Solving gives C_n=2^n−1.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 114,
    "topic": "Basics of Counting",
    "difficulty": "Easy",
    "question": "A loan balance follows B_n=1.05B_{n−1}−500, B_0=10000. What does the recurrence model?",
    "options": {
      "A": "Each period ₹500 is added, then the balance grows by 5%",
      "B": "Each period the balance shrinks by 5%, then ₹500 is paid",
      "C": "Each period the balance grows by 5% only, with no payment",
      "D": "Each period the balance grows by 5%, then ₹500 is paid"
    },
    "answer": "D",
    "solution": "Each period the balance grows by 5%, then ₹500 is paid. The recurrence captures interest followed by the payment.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 115,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=2a_{n−1}+8a_{n−2}, a_0=1, a_1=2.",
    "options": {
      "A": "a_n = (2/3)4^n - (1/3)(-2)^n",
      "B": "a_n = 4^n + (-2)^n",
      "C": "a_n = (1/3)4^n + (2/3)(-2)^n",
      "D": "a_n = (2/3)4^n + (1/3)(-2)^n"
    },
    "answer": "D",
    "solution": "Characteristic equation r^2−2r−8=(r−4)(r+2). Thus a_n=A4^n+B(−2)^n. A+B=1; 4A−2B=2. Hence A=2/3, B=1/3.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 116,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=9a_{n−1}−20a_{n−2}, a_0=3, a_1=8.",
    "options": {
      "A": "a_n = 4·5^n - 7·4^n",
      "B": "a_n = -4·5^n - 7·4^n",
      "C": "a_n = -4·5^n + 7·4^n",
      "D": "a_n = 7·5^n - 4·4^n"
    },
    "answer": "C",
    "solution": "Characteristic equation (r−5)(r−4)=0. Let a_n=A5^n+B4^n. A+B=3 and 5A+4B=8. Thus A=−4, B=7. Answer: −4·5^n+7·4^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 117,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "Solve a_n=2a_{n−1}+3a_{n−2}, a_0=2, a_1=7.",
    "options": {
      "A": "a_n = 3^n - (-1)^n",
      "B": "a_n = (9/4)3^n - (1/4)(-1)^n",
      "C": "a_n = (1/4)3^n - (9/4)(-1)^n",
      "D": "a_n = (9/4)3^n + (1/4)(-1)^n"
    },
    "answer": "B",
    "solution": "Roots are 3 and −1. A+B=2; 3A−B=7. Hence A=9/4, B=−1/4. Answer: (9/4)3^n−(1/4)(−1)^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 118,
    "topic": "Recurrence Relations & Modelling",
    "difficulty": "Moderate",
    "question": "A sequence satisfies a_n=5a_{n−1}−6a_{n−2}, a_0=2, a_1=3. Find a_2 and a_3 directly.",
    "options": {
      "A": "a_2=-3, a_3=3",
      "B": "a_2=9, a_3=-3",
      "C": "a_2=3, a_3=-3",
      "D": "a_2=3, a_3=-9"
    },
    "answer": "C",
    "solution": "a_2=5(3)−6(2)=3. Then a_3=5(3)−6(3)=−3.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 119,
    "topic": "Linear Homogeneous Recurrences",
    "difficulty": "Hard",
    "question": "For the recurrence a_n=3a_{n−1}−2a_{n−2}, a_0=1,a_1=2, verify the closed form.",
    "options": {
      "A": "Incorrect; the correct closed form is a_n = 1+2^{n-1}",
      "B": "Incorrect; the correct closed form is a_n = 2·2^n",
      "C": "Correct as given",
      "D": "Incorrect; the correct closed form is a_n = 2^n"
    },
    "answer": "D",
    "solution": "The closed form is a_n=1+2^n. At n=0 it gives 2, not 1, so it is incorrect. Correctly, A+B=1 and A+2B=2 gives A=0,B=1, hence a_n=2^n.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 120,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Why is the characteristic equation method useful for linear homogeneous recurrences with constant coefficients?",
    "options": {
      "A": "It only works when every term is positive",
      "B": "It eliminates the need for initial conditions",
      "C": "It converts the recurrence into an algebraic equation whose roots give the exponential solution",
      "D": "It converts the recurrence into a differential equation"
    },
    "answer": "C",
    "solution": "It converts the recurrence into an algebraic polynomial equation. Its roots determine exponential solution components, making the recurrence solvable in closed form.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 121,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=3a_{n−1}+4a_{n−2}, a_0=1,a_1=3.",
    "options": {
      "A": "a_n = (4/5)4^n - (1/5)(-1)^n",
      "B": "a_n = (4/5)4^n + (1/5)(-1)^n",
      "C": "a_n = 4^n + (-1)^n",
      "D": "a_n = (1/5)4^n + (4/5)(-1)^n"
    },
    "answer": "B",
    "solution": "Characteristic equation r^2−3r−4=(r−4)(r+1). Thus a_n=A4^n+B(−1)^n. A+B=1; 4A−B=3. So A=4/5,B=1/5.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 122,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=5a_{n−1}+6a_{n−2}, a_0=1,a_1=0.",
    "options": {
      "A": "a_n = (1/7)6^n + (6/7)(-1)^n",
      "B": "a_n = 6^n + (-1)^n",
      "C": "a_n = (1/7)6^n - (6/7)(-1)^n",
      "D": "a_n = (6/7)6^n + (1/7)(-1)^n"
    },
    "answer": "A",
    "solution": "Characteristic equation r^2−5r−6=(r−6)(r+1). Thus a_n=A6^n+B(−1)^n. A+B=1; 6A−B=0. Hence A=1/7,B=6/7.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 123,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=4a_{n−1}−3a_{n−2}, a_0=0,a_1=1.",
    "options": {
      "A": "a_n = (3^n+1)/2",
      "B": "a_n = (3^n-1)/2",
      "C": "a_n = (3^{n-1}-1)/2",
      "D": "a_n = 3^n - 1"
    },
    "answer": "B",
    "solution": "Characteristic equation r^2−4r+3=(r−1)(r−3). A+B=0; A+3B=1. Hence B=1/2,A=−1/2. Answer: (3^n−1)/2.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 124,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "Solve a_n=2a_{n−1}+a_{n−2}, a_0=2,a_1=1.",
    "options": {
      "A": "a_n = A(1+√2)^n - B(1-√2)^n",
      "B": "a_n = (A+Bn)(1+√2)^n",
      "C": "a_n = A(1+√2)^n + B(1-√2)^n",
      "D": "a_n = A(1+√2)^n × B(1-√2)^n"
    },
    "answer": "C",
    "solution": "Characteristic equation r^2−2r−1=0, roots 1+√2 and 1−√2. Therefore a_n=A(1+√2)^n+B(1−√2)^n, with A+B=2 and A(1+√2)+B(1−√2)=1.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 125,
    "topic": "Characteristic Equation & Roots",
    "difficulty": "Hard",
    "question": "What happens when the characteristic equation has complex roots α±βi?",
    "options": {
      "A": "Expressed using n^r(cosθ and sinθ)",
      "B": "Expressed using r^n only, ignoring θ",
      "C": "Expressed using r^n(cos nθ and sin nθ)",
      "D": "The recurrence has no real-valued solution"
    },
    "answer": "C",
    "solution": "The real solution can be expressed using r^n(cos nθ and sin nθ), where r is the root magnitude and θ its angle.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 126,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the number of terms in the expansion of (x+y)^15.",
    "options": {
      "A": "17",
      "B": "8",
      "C": "16",
      "D": "15"
    },
    "answer": "C",
    "solution": "There are n+1 terms, so 16 terms.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 127,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Find C(15,2).",
    "options": {
      "A": "455",
      "B": "105",
      "C": "210",
      "D": "1,365"
    },
    "answer": "B",
    "solution": "15×14/2 = 105.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 128,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "Find C(15,13).",
    "options": {
      "A": "15",
      "B": "1",
      "C": "105",
      "D": "653,837,184,000"
    },
    "answer": "C",
    "solution": "By symmetry, C(15,13)=C(15,2)=105.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 129,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many ways can 7 distinct objects be arranged if two particular objects must be together?",
    "options": {
      "A": "1,440",
      "B": "720",
      "C": "5,040",
      "D": "240"
    },
    "answer": "A",
    "solution": "Treat the pair as one block: 6! arrangements ×2 internal orders = 1440.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 130,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many ways can 7 distinct objects be arranged if two particular objects cannot be together?",
    "options": {
      "A": "4,320",
      "B": "5,040",
      "C": "1,440",
      "D": "3,600"
    },
    "answer": "D",
    "solution": "Total 7!=5040. Together: 6!×2=1440. Not together=5040−1440=3600.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 131,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many ways can 5 men and 4 women sit in a row if all women must sit together?",
    "options": {
      "A": "17,280",
      "B": "362,880",
      "C": "744",
      "D": "2,880"
    },
    "answer": "A",
    "solution": "Treat 4 women as one block: 6! ways for 6 units, times 4! internal arrangements = 17,280.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 132,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many ways can 5 men and 4 women sit alternately in a row, starting with a man?",
    "options": {
      "A": "144",
      "B": "362,880",
      "C": "576",
      "D": "2,880"
    },
    "answer": "D",
    "solution": "The pattern is M W M W M W M W M. Arrange men in 5! and women in 4!: 5!×4!=2880.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 133,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many committees of 5 can be formed from 8 men and 6 women with exactly 3 women?",
    "options": {
      "A": "560",
      "B": "120",
      "C": "48",
      "D": "840"
    },
    "answer": "A",
    "solution": "C(6,3)C(8,2)=20×28=560.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 134,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many committees of 5 can be formed from 8 men and 6 women with at least 3 women?",
    "options": {
      "A": "2,002",
      "B": "560",
      "C": "680",
      "D": "686"
    },
    "answer": "D",
    "solution": "Cases 3,4,5 women: C(6,3)C(8,2)+C(6,4)C(8,1)+C(6,5)C(8,0)=560+120+6=686.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 135,
    "topic": "Permutations & Combinations",
    "difficulty": "Easy",
    "question": "How many integer solutions satisfy x+y+z=12 with x,y,z≥0 and x≤5?",
    "options": {
      "A": "63",
      "B": "91",
      "C": "119",
      "D": "28"
    },
    "answer": "A",
    "solution": "Total C(14,2)=91. Subtract x≥6: let x'=x−6, giving x'+y+z=6, with C(8,2)=28. Answer=63.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 136,
    "topic": "Permutations & Combinations",
    "difficulty": "Moderate",
    "question": "How many nonnegative solutions satisfy x+y+z+w=10?",
    "options": {
      "A": "120",
      "B": "286",
      "C": "364",
      "D": "715"
    },
    "answer": "B",
    "solution": "Stars and bars: C(13,3)=286.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 137,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^6 in (1+x)^14.",
    "options": {
      "A": "2,162,160",
      "B": "3,003",
      "C": "3,432",
      "D": "2,002"
    },
    "answer": "B",
    "solution": "C(14,6)=3003.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 138,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^5 in (2+x)^8.",
    "options": {
      "A": "224",
      "B": "56",
      "C": "448",
      "D": "1,792"
    },
    "answer": "C",
    "solution": "C(8,5)2^3=56×8=448.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 139,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^2 in (3x−2)^5.",
    "options": {
      "A": "720",
      "B": "360",
      "C": "-240",
      "D": "-720"
    },
    "answer": "D",
    "solution": "C(5,2)(3x)^2(−2)^3=10×9×(−8)=−720.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 140,
    "topic": "Binomial Coefficients & Pascal's Identity",
    "difficulty": "Moderate",
    "question": "Find the coefficient of x^3y^4 in (x+y)^7.",
    "options": {
      "A": "21",
      "B": "35",
      "C": "840",
      "D": "70"
    },
    "answer": "B",
    "solution": "C(7,4)=35.",
    "unit": 2,
    "kind": "mcq"
  },
  {
    "num": 1,
    "topic": "Matrix Basics & Types",
    "difficulty": "Easy",
    "question": "The order of a matrix refers to:",
    "options": {
      "A": "The number of rows only",
      "B": "The number of columns only",
      "C": "The number of rows × the number of columns",
      "D": "The sum of rows and columns"
    },
    "answer": "C",
    "solution": "Order describes the size of a matrix as (rows) × (columns), e.g. a matrix with 3 rows and 4 columns has order 3×4.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 2,
    "topic": "Matrix Basics & Types",
    "difficulty": "Easy",
    "question": "Which of the following is a square matrix?",
    "options": {
      "A": "[[1,2,3]]",
      "B": "[[1],[2],[3]]",
      "C": "[[1,2],[3,4],[5,6]]",
      "D": "[[1,2],[3,4]]"
    },
    "answer": "D",
    "solution": "A square matrix has an equal number of rows and columns. [[1,2],[3,4]] is 2×2.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 3,
    "topic": "Matrix Basics & Types",
    "difficulty": "Easy",
    "question": "Which of the following is a diagonal matrix?",
    "options": {
      "A": "[[5,0],[0,7]]",
      "B": "[[5,1],[0,7]]",
      "C": "[[5,0],[1,7]]",
      "D": "[[0,5],[7,0]]"
    },
    "answer": "A",
    "solution": "A diagonal matrix is square with every off-diagonal entry equal to zero. Only [[5,0],[0,7]] satisfies this.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 4,
    "topic": "Matrix Basics & Types",
    "difficulty": "Easy",
    "question": "A scalar matrix is best described as:",
    "options": {
      "A": "Any matrix with a single row",
      "B": "A diagonal matrix whose diagonal entries are all equal",
      "C": "A matrix containing only the number zero",
      "D": "Any square matrix"
    },
    "answer": "B",
    "solution": "A scalar matrix is a diagonal matrix kI where every diagonal entry equals the same scalar k. When k = 1 it is the identity matrix.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 5,
    "topic": "Matrix Basics & Types",
    "difficulty": "Moderate",
    "question": "In an upper triangular matrix:",
    "options": {
      "A": "All entries above the main diagonal are zero",
      "B": "All entries below the main diagonal are zero",
      "C": "Only the diagonal entries are zero",
      "D": "All entries are zero except the corners"
    },
    "answer": "B",
    "solution": "Upper triangular means the non-zero entries sit on or above the main diagonal, so every entry below it must be zero.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 6,
    "topic": "Matrix Basics & Types",
    "difficulty": "Moderate",
    "question": "A square matrix A is called singular if:",
    "options": {
      "A": "det(A) = 0",
      "B": "det(A) = 1",
      "C": "A has only positive entries",
      "D": "A equals its own transpose"
    },
    "answer": "A",
    "solution": "A singular matrix has determinant zero, which is exactly the condition under which it fails to have an inverse.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 7,
    "topic": "Matrix Basics & Types",
    "difficulty": "Easy",
    "question": "Two matrices A and B are said to be equal only when:",
    "options": {
      "A": "They have the same determinant",
      "B": "They have the same order and every corresponding entry is equal",
      "C": "They have the same trace",
      "D": "They have the same number of rows"
    },
    "answer": "B",
    "solution": "Matrix equality requires identical order (same number of rows and columns) and a_ij = b_ij for every position.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 8,
    "topic": "Matrix Basics & Types",
    "difficulty": "Moderate",
    "question": "If A is 3×4 and B is 4×2, what can be said about AB and BA?",
    "options": {
      "A": "AB is 3×2; BA is not defined",
      "B": "AB is 4×4; BA is 3×3",
      "C": "Both AB and BA are 3×2",
      "D": "Neither product is defined"
    },
    "answer": "A",
    "solution": "AB needs A's column count (4) to match B's row count (4), giving a 3×2 result. For BA, B's columns (2) must match A's rows (3); they don't, so BA is undefined.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 9,
    "topic": "Matrix Basics & Types",
    "difficulty": "Easy",
    "question": "If [[x,2],[3,y]] = [[5,2],[3,7]], find x and y.",
    "options": {
      "A": "x = 5, y = 7",
      "B": "x = 7, y = 5",
      "C": "x = 2, y = 3",
      "D": "x = 3, y = 2"
    },
    "answer": "A",
    "solution": "Matrix equality compares corresponding entries directly: the (1,1) entries give x = 5, and the (2,2) entries give y = 7.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 10,
    "topic": "Matrix Basics & Types",
    "difficulty": "Moderate",
    "question": "A 3×3 matrix is built using the rule a_ij = 2i − j. What is the entry a_32?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "2"
    },
    "answer": "B",
    "solution": "Substituting i = 3, j = 2 gives a_32 = 2(3) − 2 = 4.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 11,
    "topic": "Addition & Subtraction",
    "difficulty": "Easy",
    "question": "For A = [[1,2],[3,4]] and B = [[5,6],[7,8]], find A + B.",
    "options": {
      "A": "[[6,8],[10,12]]",
      "B": "[[5,12],[21,32]]",
      "C": "[[4,4],[4,4]]",
      "D": "[[6,8],[10,11]]"
    },
    "answer": "A",
    "solution": "Matrix addition is entrywise: (1+5, 2+6, 3+7, 4+8) gives [[6,8],[10,12]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 12,
    "topic": "Addition & Subtraction",
    "difficulty": "Easy",
    "question": "For A = [[4,−2],[1,3]] and B = [[−1,5],[2,0]], calculate A − B.",
    "options": {
      "A": "[[5,−7],[−1,3]]",
      "B": "[[3,3],[3,3]]",
      "C": "[[5,−7],[1,3]]",
      "D": "[[−5,7],[1,−3]]"
    },
    "answer": "A",
    "solution": "Subtract entrywise: (4−(−1), −2−5, 1−2, 3−0) gives [[5,−7],[−1,3]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 13,
    "topic": "Addition & Subtraction",
    "difficulty": "Easy",
    "question": "For any two matrices of the same order, A + B equals:",
    "options": {
      "A": "B − A",
      "B": "B + A",
      "C": "AB",
      "D": "It depends on the entries"
    },
    "answer": "B",
    "solution": "Matrix addition is commutative because ordinary addition of the corresponding real-number entries is commutative: a_ij + b_ij = b_ij + a_ij.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 14,
    "topic": "Addition & Subtraction",
    "difficulty": "Moderate",
    "question": "For matrices A, B, C of the same order, (A + B) + C equals:",
    "options": {
      "A": "A + (B + C)",
      "B": "A + B − C",
      "C": "(A + C) − B",
      "D": "It is undefined"
    },
    "answer": "A",
    "solution": "Matrix addition is associative, inherited entrywise from the associativity of real-number addition.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 15,
    "topic": "Addition & Subtraction",
    "difficulty": "Moderate",
    "question": "For A = [[1,0],[2,−1]] and B = [[−2,3],[1,4]], find 3A − 2B.",
    "options": {
      "A": "[[7,−6],[4,−11]]",
      "B": "[[1,3],[8,5]]",
      "C": "[[7,6],[4,11]]",
      "D": "[[−7,6],[−4,11]]"
    },
    "answer": "A",
    "solution": "3A = [[3,0],[6,−3]] and 2B = [[−4,6],[2,8]]. Subtracting gives 3A − 2B = [[7,−6],[4,−11]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 16,
    "topic": "Addition & Subtraction",
    "difficulty": "Easy",
    "question": "Is matrix subtraction commutative, i.e. does A − B always equal B − A?",
    "options": {
      "A": "Yes, always",
      "B": "No — A − B = −(B − A), so they're equal only when A = B",
      "C": "Only for square matrices",
      "D": "Only when both matrices are diagonal"
    },
    "answer": "B",
    "solution": "Since A − B and B − A are negatives of each other, they coincide only in the special case A − B = 0, i.e. A = B.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 17,
    "topic": "Addition & Subtraction",
    "difficulty": "Moderate",
    "question": "If A + B = [[7,4],[3,9]] and A = [[2,1],[−1,5]], find B.",
    "options": {
      "A": "[[5,3],[4,4]]",
      "B": "[[9,5],[2,14]]",
      "C": "[[5,3],[4,−4]]",
      "D": "[[5,−3],[4,4]]"
    },
    "answer": "A",
    "solution": "B = (A+B) − A, computed entrywise: [[7−2,4−1],[3−(−1),9−5]] = [[5,3],[4,4]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 18,
    "topic": "Addition & Subtraction",
    "difficulty": "Moderate",
    "question": "Find A satisfying 2A + [[1,2],[3,4]] = [[7,8],[9,10]].",
    "options": {
      "A": "[[3,3],[3,3]]",
      "B": "[[4,3],[3,3]]",
      "C": "[[6,6],[6,6]]",
      "D": "[[3,3],[3,4]]"
    },
    "answer": "A",
    "solution": "2A = [[7,8],[9,10]] − [[1,2],[3,4]] = [[6,6],[6,6]], so A = [[3,3],[3,3]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 19,
    "topic": "Addition & Subtraction",
    "difficulty": "Easy",
    "question": "Why can't matrices of different orders generally be added?",
    "options": {
      "A": "Because addition is only defined for square matrices",
      "B": "Because there is no way to pair up corresponding entries for every position",
      "C": "Because their determinants would differ",
      "D": "Because their traces would differ"
    },
    "answer": "B",
    "solution": "Matrix addition works entry by entry, so both matrices must have exactly the same number of rows and columns for every entry to have a partner.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 20,
    "topic": "Addition & Subtraction",
    "difficulty": "Easy",
    "question": "Find the transpose of [[1,2,3],[4,5,6]] and its order.",
    "options": {
      "A": "[[1,4],[2,5],[3,6]], order 3×2",
      "B": "[[1,4],[2,5],[3,6]], order 2×3",
      "C": "[[1,2,3],[4,5,6]], order 2×3",
      "D": "[[4,5,6],[1,2,3]], order 2×3"
    },
    "answer": "A",
    "solution": "The transpose turns rows into columns. A 2×3 matrix becomes 3×2 after transposing.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 21,
    "topic": "Matrix Multiplication",
    "difficulty": "Easy",
    "question": "Multiply A = [[1,2],[3,4]] by B = [[2,0],[1,3]].",
    "options": {
      "A": "[[4,6],[10,12]]",
      "B": "[[2,0],[3,12]]",
      "C": "[[4,6],[10,13]]",
      "D": "[[3,2],[4,7]]"
    },
    "answer": "A",
    "solution": "Row-by-column: row1·col1 = 1(2)+2(1)=4, row1·col2 = 1(0)+2(3)=6, row2·col1 = 3(2)+4(1)=10, row2·col2 = 3(0)+4(3)=12.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 22,
    "topic": "Matrix Multiplication",
    "difficulty": "Moderate",
    "question": "For A = [[1,1],[0,1]] and B = [[2,0],[3,4]], compute AB and BA.",
    "options": {
      "A": "AB = [[5,4],[3,4]], BA = [[2,2],[3,7]]",
      "B": "AB = BA = [[5,4],[3,4]]",
      "C": "AB = [[2,2],[3,7]], BA = [[5,4],[3,4]]",
      "D": "AB = [[2,0],[3,4]], BA = [[2,0],[3,4]]"
    },
    "answer": "A",
    "solution": "AB = [[1(2)+1(3), 1(0)+1(4)],[0(2)+1(3), 0(0)+1(4)]] = [[5,4],[3,4]]. BA = [[2(1)+0(0), 2(1)+0(1)],[3(1)+4(0), 3(1)+4(1)]] = [[2,2],[3,7]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 23,
    "topic": "Matrix Multiplication",
    "difficulty": "Easy",
    "question": "The result of Q22 (AB ≠ BA) illustrates that matrix multiplication is:",
    "options": {
      "A": "Commutative",
      "B": "Not commutative in general",
      "C": "Always undefined",
      "D": "Associative but not defined"
    },
    "answer": "B",
    "solution": "Since AB and BA came out different for those matrices, this is a direct counterexample showing matrix multiplication is not commutative in general.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 24,
    "topic": "Matrix Multiplication",
    "difficulty": "Easy",
    "question": "The product AB is defined only when:",
    "options": {
      "A": "A and B have the same order",
      "B": "The number of columns of A equals the number of rows of B",
      "C": "The number of rows of A equals the number of rows of B",
      "D": "Both A and B are square"
    },
    "answer": "B",
    "solution": "Row-by-column multiplication requires each row of A to be the same length as each column of B, i.e. cols(A) = rows(B).",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 25,
    "topic": "Matrix Multiplication",
    "difficulty": "Moderate",
    "question": "For matrices of compatible order, A(B + C) equals:",
    "options": {
      "A": "AB + AC",
      "B": "AB + C",
      "C": "BA + CA",
      "D": "A + BC"
    },
    "answer": "A",
    "solution": "Matrix multiplication distributes over addition, just as with real numbers: A(B+C) = AB + AC.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 26,
    "topic": "Matrix Multiplication",
    "difficulty": "Moderate",
    "question": "For compatible matrices A, B, C, (AB)C equals:",
    "options": {
      "A": "A(BC)",
      "B": "C(AB)",
      "C": "(BA)C",
      "D": "It is generally undefined"
    },
    "answer": "A",
    "solution": "Matrix multiplication is associative, so grouping the product either way gives the same result: (AB)C = A(BC).",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 27,
    "topic": "Matrix Multiplication",
    "difficulty": "Moderate",
    "question": "Find A² for A = [[2,1],[0,3]].",
    "options": {
      "A": "[[4,5],[0,9]]",
      "B": "[[4,1],[0,9]]",
      "C": "[[4,5],[0,3]]",
      "D": "[[2,4],[0,9]]"
    },
    "answer": "A",
    "solution": "A² = A·A: row1·col1 = 2(2)+1(0)=4, row1·col2 = 2(1)+1(3)=5, row2·col1 = 0(2)+3(0)=0, row2·col2 = 0(1)+3(3)=9.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 28,
    "topic": "Matrix Multiplication",
    "difficulty": "Hard",
    "question": "Find A³ for A = [[1,1],[0,1]].",
    "options": {
      "A": "[[1,3],[0,1]]",
      "B": "[[1,2],[0,1]]",
      "C": "[[1,1],[0,1]]",
      "D": "[[3,1],[0,1]]"
    },
    "answer": "A",
    "solution": "A² = [[1,2],[0,1]]. Then A³ = A²A = [[1,1(2)+2(1)],[0,1]] = [[1,3],[0,1]] — each power just adds 1 to the top-right entry.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 29,
    "topic": "Matrix Multiplication",
    "difficulty": "Hard",
    "question": "If A = [[1,2],[0,1]], what is A^n for a positive integer n?",
    "options": {
      "A": "[[1,2n],[0,1]]",
      "B": "[[1,2^n],[0,1]]",
      "C": "[[n,2],[0,n]]",
      "D": "[[1,2],[0,1]]"
    },
    "answer": "A",
    "solution": "Each multiplication by A adds another 2 to the top-right entry (as seen for A², A³), giving the general pattern A^n = [[1,2n],[0,1]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 30,
    "topic": "Matrix Multiplication",
    "difficulty": "Hard",
    "question": "Can a non-zero matrix have a zero square (A² = 0)?",
    "options": {
      "A": "No, that's impossible for any matrix",
      "B": "Yes — for example N = [[0,1],[0,0]] gives N² = [[0,0],[0,0]]",
      "C": "Only if the matrix is symmetric",
      "D": "Only if the matrix is the identity matrix"
    },
    "answer": "B",
    "solution": "Such matrices are called nilpotent. N = [[0,1],[0,0]] is non-zero, yet N² = [[0,0],[0,0]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 31,
    "topic": "Determinants",
    "difficulty": "Easy",
    "question": "Find the determinant of [[3,5],[2,7]].",
    "options": {
      "A": "11",
      "B": "31",
      "C": "1",
      "D": "21"
    },
    "answer": "A",
    "solution": "For a 2×2 matrix [[a,b],[c,d]], det = ad − bc = 3(7) − 5(2) = 21 − 10 = 11.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 32,
    "topic": "Determinants",
    "difficulty": "Moderate",
    "question": "Evaluate the determinant of [[1,2,3],[0,4,5],[1,0,6]].",
    "options": {
      "A": "22",
      "B": "24",
      "C": "20",
      "D": "18"
    },
    "answer": "A",
    "solution": "Expanding along the first row: 1(4·6−5·0) − 2(0·6−5·1) + 3(0·0−4·1) = 1(24) − 2(−5) + 3(−4) = 24+10−12 = 22.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 33,
    "topic": "Determinants",
    "difficulty": "Moderate",
    "question": "Expanding a 3×3 determinant along its first row uses:",
    "options": {
      "A": "The sum of all nine entries",
      "B": "Each entry of the first row times its 2×2 minor, with alternating +, −, + signs",
      "C": "The product of the diagonal entries only",
      "D": "The average of the three rows"
    },
    "answer": "B",
    "solution": "Cofactor expansion along a row multiplies each entry by the determinant of the minor left after deleting its row and column, applying the checkerboard sign pattern +, −, +.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 34,
    "topic": "Determinants",
    "difficulty": "Easy",
    "question": "The determinant of a triangular matrix equals:",
    "options": {
      "A": "The sum of its diagonal entries",
      "B": "The product of its diagonal entries",
      "C": "Zero",
      "D": "The largest diagonal entry"
    },
    "answer": "B",
    "solution": "For any triangular (upper or lower) matrix, all cofactor expansions collapse to a single term: the product of the diagonal entries.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 35,
    "topic": "Determinants",
    "difficulty": "Easy",
    "question": "What happens to a determinant when two rows of the matrix are interchanged?",
    "options": {
      "A": "It stays exactly the same",
      "B": "It changes sign",
      "C": "It becomes zero",
      "D": "It doubles"
    },
    "answer": "B",
    "solution": "Swapping any two rows (or columns) of a matrix negates its determinant.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 36,
    "topic": "Determinants",
    "difficulty": "Easy",
    "question": "If one row of a matrix is multiplied by a scalar k, the determinant is:",
    "options": {
      "A": "Unchanged",
      "B": "Multiplied by k",
      "C": "Multiplied by k²",
      "D": "Divided by k"
    },
    "answer": "B",
    "solution": "Determinant is linear in each row separately, so scaling one row by k scales the whole determinant by k.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 37,
    "topic": "Determinants",
    "difficulty": "Moderate",
    "question": "For any square matrix A, det(A) and det(A^T) are related by:",
    "options": {
      "A": "det(A) = det(A^T) always",
      "B": "det(A^T) = −det(A)",
      "C": "det(A^T) = 1/det(A)",
      "D": "They are unrelated in general"
    },
    "answer": "A",
    "solution": "Transposing swaps rows and columns, but the cofactor expansion produces the same value either way, so det(A) = det(A^T).",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 38,
    "topic": "Determinants",
    "difficulty": "Moderate",
    "question": "Evaluate |[[2,1,0],[3,4,5],[1,2,3]]|.",
    "options": {
      "A": "0",
      "B": "4",
      "C": "−4",
      "D": "2"
    },
    "answer": "A",
    "solution": "Expanding along the first row: 2(4·3−5·2) − 1(3·3−5·1) + 0 = 2(2) − 1(4) = 4 − 4 = 0.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 39,
    "topic": "Determinants",
    "difficulty": "Moderate",
    "question": "Find x if det([[x,2],[3,4]]) = 10.",
    "options": {
      "A": "x = 4",
      "B": "x = 2",
      "C": "x = 6",
      "D": "x = 3"
    },
    "answer": "A",
    "solution": "4x − 2(3) = 10 → 4x − 6 = 10 → 4x = 16 → x = 4.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 40,
    "topic": "Determinants",
    "difficulty": "Moderate",
    "question": "For what values of k is [[k,2],[8,k]] singular?",
    "options": {
      "A": "k = ±4",
      "B": "k = ±2",
      "C": "k = 4 only",
      "D": "k = 0"
    },
    "answer": "A",
    "solution": "Singular means det = 0: k² − 16 = 0, so k² = 16 and k = ±4.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 41,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Easy",
    "question": "A square matrix A is called symmetric when:",
    "options": {
      "A": "A = −A^T",
      "B": "A = A^T",
      "C": "A² = A",
      "D": "det(A) = 0"
    },
    "answer": "B",
    "solution": "Symmetric means every entry mirrors across the main diagonal: a_ij = a_ji for all i, j, which is exactly A = A^T.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 42,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Easy",
    "question": "A square matrix A is called skew-symmetric when:",
    "options": {
      "A": "A = A^T",
      "B": "A^T = −A",
      "C": "A is diagonal",
      "D": "det(A) = 1"
    },
    "answer": "B",
    "solution": "Skew-symmetric requires a_ij = −a_ji for all i, j, equivalent to A^T = −A.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 43,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Moderate",
    "question": "Why is every diagonal matrix automatically symmetric?",
    "options": {
      "A": "Because all its entries are 1",
      "B": "Because its off-diagonal entries are all zero, so a_ij = a_ji = 0 whenever i ≠ j",
      "C": "Because its determinant is always zero",
      "D": "It isn't — diagonal matrices are only sometimes symmetric"
    },
    "answer": "B",
    "solution": "For a diagonal matrix, every off-diagonal entry is 0, so a_ij and a_ji are trivially equal (both zero) whenever i ≠ j, and the diagonal entries obviously match themselves.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 44,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Moderate",
    "question": "For a real skew-symmetric matrix, the diagonal entries must be:",
    "options": {
      "A": "Always 1",
      "B": "Always zero",
      "C": "Always negative",
      "D": "Equal to the trace"
    },
    "answer": "B",
    "solution": "The skew-symmetric condition a_ii = −a_ii forces 2a_ii = 0, so every diagonal entry must equal zero.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 45,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Easy",
    "question": "Is [[2,3],[3,5]] symmetric?",
    "options": {
      "A": "Yes, because the (1,2) and (2,1) entries are both 3",
      "B": "No, because the diagonal entries differ",
      "C": "No, because its determinant isn't zero",
      "D": "Cannot be determined"
    },
    "answer": "A",
    "solution": "A 2×2 matrix is symmetric exactly when its off-diagonal pair matches; here both off-diagonal entries equal 3.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 46,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Moderate",
    "question": "Is [[0,4,−2],[−4,0,7],[2,−7,0]] skew-symmetric?",
    "options": {
      "A": "Yes — the diagonal is zero and each pair a_ij, a_ji are negatives of each other",
      "B": "No — the diagonal entries should be 1",
      "C": "No — a_12 and a_21 should be equal",
      "D": "Cannot be determined without computing its determinant"
    },
    "answer": "A",
    "solution": "The diagonal is all zeros, and checking pairs: a_12=4, a_21=−4; a_13=−2, a_31=2; a_23=7, a_32=−7 — every pair is negated, so it is skew-symmetric.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 47,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Hard",
    "question": "Every square matrix A can be written as:",
    "options": {
      "A": "The sum of a symmetric part ½(A+A^T) and a skew-symmetric part ½(A−A^T)",
      "B": "The product of two symmetric matrices",
      "C": "A diagonal matrix plus the identity",
      "D": "This is only possible for invertible matrices"
    },
    "answer": "A",
    "solution": "½(A+A^T) is always symmetric and ½(A−A^T) is always skew-symmetric, and the two parts add back up to A.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 48,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Hard",
    "question": "Find the symmetric part of A = [[1,2],[4,5]].",
    "options": {
      "A": "[[1,3],[3,5]]",
      "B": "[[1,2],[4,5]]",
      "C": "[[0,−1],[1,0]]",
      "D": "[[1,1],[1,5]]"
    },
    "answer": "A",
    "solution": "A^T = [[1,4],[2,5]]. The symmetric part is ½(A+A^T) = ½[[2,6],[6,10]] = [[1,3],[3,5]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 49,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Moderate",
    "question": "If a matrix A is both symmetric and skew-symmetric, what must be true?",
    "options": {
      "A": "A must be the identity matrix",
      "B": "A must be the zero matrix",
      "C": "A must be a diagonal matrix with entries ±1",
      "D": "No such matrix can exist"
    },
    "answer": "B",
    "solution": "A = A^T (symmetric) and A = −A^T (skew-symmetric) together give A = −A, so 2A = 0 and A must be the zero matrix.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 50,
    "topic": "Symmetric & Skew-Symmetric Matrices",
    "difficulty": "Hard",
    "question": "For which value of x is [[1,x],[−x,2]] skew-symmetric?",
    "options": {
      "A": "x = 1",
      "B": "x = −1",
      "C": "x = 0",
      "D": "No such x exists — skew-symmetric matrices must have zero diagonal entries, but this matrix has 1 and 2 on the diagonal"
    },
    "answer": "D",
    "solution": "A skew-symmetric matrix must have every diagonal entry equal to zero. Since this matrix's diagonal is fixed at 1 and 2 regardless of x, it can never be skew-symmetric.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 51,
    "topic": "Orthogonal Matrices",
    "difficulty": "Easy",
    "question": "A square matrix A is called orthogonal when:",
    "options": {
      "A": "A^T A = I",
      "B": "A + A^T = I",
      "C": "det(A) = 0",
      "D": "A is symmetric"
    },
    "answer": "A",
    "solution": "An orthogonal matrix satisfies A^T A = I, which also means A^{-1} = A^T.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 52,
    "topic": "Orthogonal Matrices",
    "difficulty": "Moderate",
    "question": "Is A = [[0,1],[−1,0]] orthogonal?",
    "options": {
      "A": "Yes — A^T A works out to the identity matrix",
      "B": "No — det(A) = 0",
      "C": "No — A is not symmetric so it can't be orthogonal",
      "D": "Cannot be determined"
    },
    "answer": "A",
    "solution": "A^T = [[0,−1],[1,0]]. Computing A^T A gives [[1,0],[0,1]] = I, so A is orthogonal.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 53,
    "topic": "Orthogonal Matrices",
    "difficulty": "Moderate",
    "question": "If A is orthogonal, is A^T also orthogonal?",
    "options": {
      "A": "Yes — (A^T)^T A^T = A A^T = I follows from A being orthogonal",
      "B": "No, generally not",
      "C": "Only if A is also symmetric",
      "D": "Only if A is diagonal"
    },
    "answer": "A",
    "solution": "Since A^T A = I for an orthogonal A, it also follows that A A^T = I, which is precisely the condition for A^T to be orthogonal.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 54,
    "topic": "Orthogonal Matrices",
    "difficulty": "Easy",
    "question": "For an orthogonal matrix A, the inverse A^{-1} equals:",
    "options": {
      "A": "A",
      "B": "A^T",
      "C": "−A",
      "D": "det(A)·A"
    },
    "answer": "B",
    "solution": "Orthogonality means A^T A = I, so multiplying both sides shows A^T is precisely the inverse of A.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 55,
    "topic": "Orthogonal Matrices",
    "difficulty": "Easy",
    "question": "The determinant of a real orthogonal matrix must be:",
    "options": {
      "A": "0",
      "B": "±1",
      "C": "Any positive number",
      "D": "Equal to its trace"
    },
    "answer": "B",
    "solution": "Taking determinants of A^T A = I gives det(A)² = 1, so det(A) = 1 or −1.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 56,
    "topic": "Orthogonal Matrices",
    "difficulty": "Hard",
    "question": "Is A = (1/5)[[3,4],[−4,3]] orthogonal?",
    "options": {
      "A": "Yes — A^T A simplifies to the identity matrix",
      "B": "No — A^T A gives (1/5)I, not I",
      "C": "No — the entries are not integers",
      "D": "Cannot be determined without a calculator"
    },
    "answer": "A",
    "solution": "A^T A = (1/25)[[3,−4],[4,3]][[3,4],[−4,3]] = (1/25)[[25,0],[0,25]] = I, so A is orthogonal.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 57,
    "topic": "Orthogonal Matrices",
    "difficulty": "Moderate",
    "question": "Find the value of k such that [[k,1],[−1,k]] is orthogonal.",
    "options": {
      "A": "k = 0",
      "B": "k = 1",
      "C": "k = −1",
      "D": "k = ±1"
    },
    "answer": "A",
    "solution": "A^T A = [[k²+1, 0],[0, k²+1]]. For this to equal I, k²+1 = 1, so k² = 0 and k = 0.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 58,
    "topic": "Orthogonal Matrices",
    "difficulty": "Easy",
    "question": "Geometrically, a 2×2 orthogonal matrix represents:",
    "options": {
      "A": "A shear transformation",
      "B": "A rotation or reflection that preserves lengths and angles",
      "C": "A projection that shrinks all vectors to a line",
      "D": "A transformation with no geometric meaning"
    },
    "answer": "B",
    "solution": "Because A^T A = I, orthogonal matrices preserve dot products, and hence lengths and angles — exactly what rotations and reflections do.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 59,
    "topic": "Orthogonal Matrices",
    "difficulty": "Moderate",
    "question": "If A and B are orthogonal matrices of the same order, then AB is:",
    "options": {
      "A": "Never orthogonal",
      "B": "Orthogonal",
      "C": "Orthogonal only if A = B",
      "D": "Symmetric"
    },
    "answer": "B",
    "solution": "(AB)^T(AB) = B^T A^T A B = B^T I B = B^T B = I, since A and B are each orthogonal. So the product is also orthogonal.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 60,
    "topic": "Orthogonal Matrices",
    "difficulty": "Moderate",
    "question": "Using orthogonality, find the inverse of A = [[0,−1],[1,0]].",
    "options": {
      "A": "[[0,1],[−1,0]]",
      "B": "[[0,−1],[1,0]]",
      "C": "[[1,0],[0,1]]",
      "D": "[[0,1],[1,0]]"
    },
    "answer": "A",
    "solution": "Since A is orthogonal, A^{-1} = A^T. Transposing [[0,−1],[1,0]] gives [[0,1],[−1,0]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 61,
    "topic": "Rank of a Matrix",
    "difficulty": "Easy",
    "question": "The rank of a matrix is defined as:",
    "options": {
      "A": "The number of columns it has",
      "B": "The number of linearly independent rows (or columns) it has",
      "C": "Its determinant",
      "D": "The sum of its diagonal entries"
    },
    "answer": "B",
    "solution": "Rank measures the maximum number of linearly independent rows (equivalently, columns) in the matrix.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 62,
    "topic": "Rank of a Matrix",
    "difficulty": "Easy",
    "question": "Find the rank of [[1,2],[2,4]].",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "Cannot be determined"
    },
    "answer": "B",
    "solution": "Row 2 = 2 × Row 1, so the rows are linearly dependent. Only one independent row remains, giving rank 1.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 63,
    "topic": "Rank of a Matrix",
    "difficulty": "Moderate",
    "question": "Find the rank of [[1,2,3],[2,4,6],[1,1,1]].",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "0"
    },
    "answer": "B",
    "solution": "Row 2 = 2 × Row 1 (dependent), but Row 1 and Row 3 are not proportional, so exactly two rows are independent: rank = 2.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 64,
    "topic": "Rank of a Matrix",
    "difficulty": "Hard",
    "question": "Reduce [[1,2,3],[2,4,7],[3,6,10]] to echelon form and state its rank.",
    "options": {
      "A": "Rank 3",
      "B": "Rank 2",
      "C": "Rank 1",
      "D": "Rank 0"
    },
    "answer": "B",
    "solution": "R2 − 2R1 and R3 − 3R1 both give [0,0,1], so R3 − R2(new) becomes a zero row. The echelon form has exactly two non-zero rows, so rank = 2.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 65,
    "topic": "Rank of a Matrix",
    "difficulty": "Easy",
    "question": "The rank of a matrix equals:",
    "options": {
      "A": "The maximum number of linearly independent rows (or columns)",
      "B": "The total number of rows",
      "C": "The number of zero rows",
      "D": "Twice the number of columns"
    },
    "answer": "A",
    "solution": "This is precisely the definition of rank — the largest set of rows (or equivalently columns) that are linearly independent.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 66,
    "topic": "Rank of a Matrix",
    "difficulty": "Easy",
    "question": "What is the rank of a 4×5 zero matrix?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "0",
      "D": "1"
    },
    "answer": "C",
    "solution": "A zero matrix has no non-zero rows at all, so it has no linearly independent rows: its rank is 0.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 67,
    "topic": "Rank of a Matrix",
    "difficulty": "Moderate",
    "question": "Find the rank of [[1,0,2],[0,1,3],[2,1,7]].",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "0"
    },
    "answer": "B",
    "solution": "Row 3 = 2(Row 1) + Row 2, so Row 3 is dependent. Rows 1 and 2 are independent, giving rank = 2.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 68,
    "topic": "Rank of a Matrix",
    "difficulty": "Hard",
    "question": "For what values of k does [[1,2,3],[2,4,6],[1,k,3]] have rank less than 3?",
    "options": {
      "A": "Only k = 3",
      "B": "Only k = 1",
      "C": "No real value of k",
      "D": "Every value of k"
    },
    "answer": "D",
    "solution": "Row 2 = 2 × Row 1 regardless of k, so the rows are already dependent no matter what k is. The rank is always less than 3.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 69,
    "topic": "Rank of a Matrix",
    "difficulty": "Easy",
    "question": "Applying elementary row operations to a matrix:",
    "options": {
      "A": "Changes its rank",
      "B": "Leaves its rank unchanged",
      "C": "Always reduces its rank to zero",
      "D": "Doubles its rank"
    },
    "answer": "B",
    "solution": "Elementary row operations (swapping, scaling, adding multiples of rows) preserve the linear-dependence relationships between rows, so rank is unchanged.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 70,
    "topic": "Rank of a Matrix",
    "difficulty": "Hard",
    "question": "Find the rank of [[1,2,1],[2,3,4],[3,5,5]].",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "0"
    },
    "answer": "B",
    "solution": "Row 1 + Row 2 = [3,5,5] = Row 3, so Row 3 is dependent. Rows 1 and 2 are not multiples of each other, so rank = 2.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 71,
    "topic": "Inverse of a Matrix",
    "difficulty": "Easy",
    "question": "The inverse of a square matrix A, when it exists, is the matrix A^{-1} satisfying:",
    "options": {
      "A": "A + A^{-1} = I",
      "B": "A A^{-1} = A^{-1} A = I",
      "C": "A A^{-1} = 0",
      "D": "A^{-1} = A^T always"
    },
    "answer": "B",
    "solution": "By definition, the inverse multiplies with A on either side to produce the identity matrix.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 72,
    "topic": "Inverse of a Matrix",
    "difficulty": "Easy",
    "question": "Find the inverse of [[2,1],[3,2]].",
    "options": {
      "A": "[[2,−1],[−3,2]]",
      "B": "[[2,1],[3,2]]",
      "C": "[[−2,1],[3,−2]]",
      "D": "[[1,2],[2,3]]"
    },
    "answer": "A",
    "solution": "det = 2(2)−1(3) = 1. The inverse of [[a,b],[c,d]] is (1/det)[[d,−b],[−c,a]] = [[2,−1],[−3,2]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 73,
    "topic": "Inverse of a Matrix",
    "difficulty": "Easy",
    "question": "A square matrix A has an inverse if and only if:",
    "options": {
      "A": "A is symmetric",
      "B": "det(A) ≠ 0",
      "C": "A is diagonal",
      "D": "A has all positive entries"
    },
    "answer": "B",
    "solution": "Non-zero determinant (non-singularity) is exactly the condition for a square matrix to be invertible.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 74,
    "topic": "Inverse of a Matrix",
    "difficulty": "Moderate",
    "question": "Find the inverse of [[4,7],[2,6]] using the adjoint method.",
    "options": {
      "A": "[[0.6,−0.7],[−0.2,0.4]]",
      "B": "[[0.6,0.7],[0.2,0.4]]",
      "C": "[[6,−7],[−2,4]]",
      "D": "[[0.4,−0.7],[−0.2,0.6]]"
    },
    "answer": "A",
    "solution": "det = 4(6)−7(2) = 10. The adjoint is [[6,−7],[−2,4]], so the inverse is (1/10)[[6,−7],[−2,4]] = [[0.6,−0.7],[−0.2,0.4]].",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 75,
    "topic": "Inverse of a Matrix",
    "difficulty": "Moderate",
    "question": "Find A^{-1} for A = [[1,2],[3,5]] and verify A A^{-1} = I.",
    "options": {
      "A": "[[−5,2],[3,−1]]",
      "B": "[[5,−2],[−3,1]]",
      "C": "[[−1,2],[3,−5]]",
      "D": "[[5,2],[3,1]]"
    },
    "answer": "A",
    "solution": "det = 1(5)−2(3) = −1, so A^{-1} = (1/−1)[[5,−2],[−3,1]] = [[−5,2],[3,−1]]. Multiplying A by this indeed gives I.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 76,
    "topic": "Inverse of a Matrix",
    "difficulty": "Easy",
    "question": "Why does a singular matrix not have an inverse?",
    "options": {
      "A": "Because its rows are always negative",
      "B": "Because det(A) = 0, and the inverse formula requires dividing by det(A)",
      "C": "Because it is always the zero matrix",
      "D": "Because it has too many rows"
    },
    "answer": "B",
    "solution": "The standard inverse formula involves dividing the adjoint by det(A); when det(A) = 0 that division is undefined, so no inverse exists.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 77,
    "topic": "Inverse of a Matrix",
    "difficulty": "Moderate",
    "question": "The matrix [[k,2],[3,k]] is invertible for all values of k except:",
    "options": {
      "A": "k = ±√6",
      "B": "k = ±6",
      "C": "k = 0",
      "D": "k = ±√3"
    },
    "answer": "A",
    "solution": "det = k² − 6. The matrix fails to be invertible only when det = 0, i.e. k² = 6, so k = ±√6.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 78,
    "topic": "Inverse of a Matrix",
    "difficulty": "Easy",
    "question": "The inverse of a diagonal matrix with non-zero diagonal entries d1, d2, ..., dn is:",
    "options": {
      "A": "The zero matrix",
      "B": "A diagonal matrix with entries 1/d1, 1/d2, ..., 1/dn",
      "C": "The same matrix",
      "D": "A matrix with entries −d1, −d2, ..., −dn"
    },
    "answer": "B",
    "solution": "For a diagonal matrix, inverting each diagonal entry independently gives a matrix that multiplies back to the identity.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 79,
    "topic": "Inverse of a Matrix",
    "difficulty": "Moderate",
    "question": "For invertible matrices A and B of the same order, (AB)^{-1} equals:",
    "options": {
      "A": "A^{-1} B^{-1}",
      "B": "B^{-1} A^{-1}",
      "C": "(A^{-1})(B^{-1})^T",
      "D": "AB"
    },
    "answer": "B",
    "solution": "The order reverses: (AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AA^{-1} = I, confirming (AB)^{-1} = B^{-1}A^{-1}.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 80,
    "topic": "Inverse of a Matrix",
    "difficulty": "Hard",
    "question": "Find the inverse of [[1,1,1],[0,1,2],[0,0,1]].",
    "options": {
      "A": "[[1,−1,1],[0,1,−2],[0,0,1]]",
      "B": "[[1,1,−1],[0,1,2],[0,0,1]]",
      "C": "[[1,−1,−1],[0,1,−2],[0,0,1]]",
      "D": "[[1,−1,1],[0,1,2],[0,0,1]]"
    },
    "answer": "A",
    "solution": "Row-reducing [M | I] to [I | M^{-1}] gives inverse [[1,−1,1],[0,1,−2],[0,0,1]]; multiplying it back by the original confirms the identity.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 81,
    "topic": "Systems of Linear Equations",
    "difficulty": "Moderate",
    "question": "Solve x + y = 5 and 2x − y = 1 using matrix inversion.",
    "options": {
      "A": "x = 2, y = 3",
      "B": "x = 3, y = 2",
      "C": "x = 1, y = 4",
      "D": "x = 4, y = 1"
    },
    "answer": "A",
    "solution": "In matrix form [[1,1],[2,−1]][x;y] = [5;1]. Inverting the coefficient matrix and multiplying gives x = 2, y = 3, which checks: 2+3=5 and 4−3=1.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 82,
    "topic": "Systems of Linear Equations",
    "difficulty": "Moderate",
    "question": "Solve 2x + 3y = 7 and 4x − y = 5 using Cramer's rule.",
    "options": {
      "A": "x = 11/7, y = 9/7",
      "B": "x = 9/7, y = 11/7",
      "C": "x = 1, y = 5/3",
      "D": "x = 2, y = 1"
    },
    "answer": "A",
    "solution": "D = 2(−1)−3(4) = −14. Dx = 7(−1)−3(5) = −22, so x = −22/−14 = 11/7. Dy = 2(5)−7(4) = −18, so y = −18/−14 = 9/7.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 83,
    "topic": "Systems of Linear Equations",
    "difficulty": "Easy",
    "question": "The system 2x+y−z=3, x−y+2z=4, 3x+2y+z=10 can be written in matrix form AX = B where A is:",
    "options": {
      "A": "[[2,1,−1],[1,−1,2],[3,2,1]]",
      "B": "[[2,1,−1,3],[1,−1,2,4],[3,2,1,10]]",
      "C": "[[3],[4],[10]]",
      "D": "[[2,1,3],[1,−1,4],[3,2,10]]"
    },
    "answer": "A",
    "solution": "A is the 3×3 coefficient matrix built from the x, y, z coefficients in each equation, with X = [x;y;z] and B = [3;4;10] kept separate.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 84,
    "topic": "Systems of Linear Equations",
    "difficulty": "Hard",
    "question": "Solve x+y+z=6, 2x−y+z=3, x+2y−z=2 using Gaussian elimination.",
    "options": {
      "A": "x=1, y=2, z=3",
      "B": "x=3, y=2, z=1",
      "C": "x=2, y=1, z=3",
      "D": "x=1, y=3, z=2"
    },
    "answer": "A",
    "solution": "Eliminating x gives 3y+z=9 and y−2z=−4. Solving these two together gives y=2, z=3, and back-substitution gives x = 6−2−3 = 1.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 85,
    "topic": "Systems of Linear Equations",
    "difficulty": "Easy",
    "question": "Is the system x+2y=4, 2x+4y=9 consistent?",
    "options": {
      "A": "Yes, it has a unique solution",
      "B": "Yes, it has infinitely many solutions",
      "C": "No — the left sides are proportional but the right sides are not, so it's inconsistent",
      "D": "Cannot be determined"
    },
    "answer": "C",
    "solution": "The second equation's coefficients are exactly double the first (2×1=2, 2×2=4), but 2×4=8 ≠ 9, so the two lines are parallel and never meet: no solution.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 86,
    "topic": "Systems of Linear Equations",
    "difficulty": "Moderate",
    "question": "Using ranks, a system AX = B in n unknowns has a unique solution when:",
    "options": {
      "A": "rank(A) = rank([A|B]) = n",
      "B": "rank(A) < rank([A|B])",
      "C": "rank(A) = rank([A|B]) < n",
      "D": "rank(A) = 0"
    },
    "answer": "A",
    "solution": "A unique solution requires the coefficient matrix and augmented matrix to have equal rank, and that rank must equal the number of unknowns (no free variables left).",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 87,
    "topic": "Systems of Linear Equations",
    "difficulty": "Moderate",
    "question": "Solve 3x − 2y = 4 and 5x + y = 7 by the matrix method.",
    "options": {
      "A": "x = 18/13, y = 1/13",
      "B": "x = 1/13, y = 18/13",
      "C": "x = 2, y = 1",
      "D": "x = 18/13, y = −1/13"
    },
    "answer": "A",
    "solution": "D = 3(1)−(−2)(5) = 13. Dx = 4(1)−(−2)(7) = 18, so x = 18/13. Dy = 3(7)−4(5) = 1, so y = 1/13.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 88,
    "topic": "Systems of Linear Equations",
    "difficulty": "Hard",
    "question": "How many solutions does x+2y+3z=6, 2x+4y+6z=12, x−y+z=2 have?",
    "options": {
      "A": "Exactly one solution",
      "B": "No solution",
      "C": "Infinitely many solutions",
      "D": "Exactly two solutions"
    },
    "answer": "C",
    "solution": "The second equation is exactly 2 × the first, so it adds no new information — there are really only 2 independent equations for 3 unknowns, leaving one free parameter and infinitely many solutions.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 89,
    "topic": "Systems of Linear Equations",
    "difficulty": "Hard",
    "question": "Use Cramer's rule to solve x+y+z=6, 2x−y+3z=9, 3x+2y−z=4.",
    "options": {
      "A": "x=1, y=2, z=3",
      "B": "x=2, y=1, z=3",
      "C": "x=3, y=2, z=1",
      "D": "x=1, y=3, z=2"
    },
    "answer": "A",
    "solution": "Computing D = 13 and the three numerator determinants Dx = 13, Dy = 26, Dz = 39 gives x = 1, y = 2, z = 3.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 90,
    "topic": "Systems of Linear Equations",
    "difficulty": "Moderate",
    "question": "A shop sells notebooks and pens. Three notebooks and two pens cost ₹78, while two notebooks and five pens cost ₹85. Using matrices, find the price of one notebook.",
    "options": {
      "A": "₹20",
      "B": "₹15",
      "C": "₹18",
      "D": "₹25"
    },
    "answer": "A",
    "solution": "With 3x+2y=78 and 2x+5y=85, Cramer's rule gives D=11, Dx=220, so x = 220/11 = ₹20 (and y works out to ₹9).",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 91,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Easy",
    "question": "For a square matrix A, a non-zero vector v is an eigenvector with eigenvalue λ if:",
    "options": {
      "A": "Av = λv",
      "B": "Av = v + λ",
      "C": "A + v = λ",
      "D": "v^T A = 0"
    },
    "answer": "A",
    "solution": "This is the defining eigenvalue equation: applying A to v simply scales v by the constant λ.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 92,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Easy",
    "question": "Find the eigenvalues of [[2,1],[1,2]].",
    "options": {
      "A": "λ = 1, 3",
      "B": "λ = 2, 2",
      "C": "λ = 0, 4",
      "D": "λ = −1, 3"
    },
    "answer": "A",
    "solution": "The characteristic equation (2−λ)² − 1 = 0 simplifies to λ² − 4λ + 3 = 0, which factors as (λ−1)(λ−3) = 0.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 93,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Moderate",
    "question": "Find the eigenvectors of the diagonal matrix [[3,0],[0,5]].",
    "options": {
      "A": "[1,0]^T for λ=3 and [0,1]^T for λ=5",
      "B": "[0,1]^T for λ=3 and [1,0]^T for λ=5",
      "C": "[1,1]^T for both eigenvalues",
      "D": "[3,0]^T and [0,5]^T"
    },
    "answer": "A",
    "solution": "For a diagonal matrix, the standard basis vectors are automatically eigenvectors, each paired with its corresponding diagonal entry as the eigenvalue.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 94,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Easy",
    "question": "Find the characteristic equation of A = [[1,2],[3,4]].",
    "options": {
      "A": "λ² − 5λ − 2 = 0",
      "B": "λ² + 5λ − 2 = 0",
      "C": "λ² − 5λ + 2 = 0",
      "D": "λ² − 4λ − 2 = 0"
    },
    "answer": "A",
    "solution": "The characteristic equation is λ² − (trace)λ + det = 0. Here trace = 1+4 = 5 and det = 1(4)−2(3) = −2, giving λ² − 5λ − 2 = 0.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 95,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Moderate",
    "question": "Find the eigenvalues of [[0,1],[−2,−3]].",
    "options": {
      "A": "λ = −1, −2",
      "B": "λ = 1, 2",
      "C": "λ = −1, 2",
      "D": "λ = 0, −3"
    },
    "answer": "A",
    "solution": "Trace = −3, det = 0(−3)−1(−2) = 2, giving λ²+3λ+2=0, which factors as (λ+1)(λ+2)=0.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 96,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Easy",
    "question": "The sum of the eigenvalues of a matrix always equals:",
    "options": {
      "A": "Its determinant",
      "B": "Its trace",
      "C": "Its rank",
      "D": "Zero"
    },
    "answer": "B",
    "solution": "This is a standard property: the sum of all eigenvalues (with multiplicity) equals the sum of the diagonal entries, the trace.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 97,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Easy",
    "question": "The product of the eigenvalues of a matrix always equals:",
    "options": {
      "A": "Its trace",
      "B": "Its determinant",
      "C": "Its rank",
      "D": "One"
    },
    "answer": "B",
    "solution": "Multiplying all the eigenvalues together (with multiplicity) always reproduces the determinant of the matrix.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 98,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Hard",
    "question": "Find the eigenvalues and a corresponding eigenvector for each, for A = [[4,1],[2,3]].",
    "options": {
      "A": "λ=5 with eigenvector [1,1]^T; λ=2 with eigenvector [1,−2]^T",
      "B": "λ=5 with eigenvector [1,−2]^T; λ=2 with eigenvector [1,1]^T",
      "C": "λ=7 with eigenvector [1,1]^T; λ=10 with eigenvector [1,−2]^T",
      "D": "λ=4, 3 with eigenvectors [1,0]^T and [0,1]^T"
    },
    "answer": "A",
    "solution": "Trace=7, det=10, giving λ²−7λ+10=0, so λ=5,2. Solving (A−5I)v=0 gives v=[1,1]^T; solving (A−2I)v=0 gives v=[1,−2]^T.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 99,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Moderate",
    "question": "Is [[1,2],[2,1]] diagonalizable?",
    "options": {
      "A": "Yes — it has two distinct real eigenvalues (3 and −1)",
      "B": "No — its eigenvalues are complex",
      "C": "No — it is not square",
      "D": "Cannot be determined"
    },
    "answer": "A",
    "solution": "The characteristic equation λ²−2λ−3=0 factors as (λ−3)(λ+1)=0, giving two distinct real eigenvalues, which guarantees diagonalizability (it also happens to be symmetric).",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 100,
    "topic": "Eigenvalues & Eigenvectors",
    "difficulty": "Hard",
    "question": "If a matrix A satisfies the characteristic equation λ² − 3λ + 2 = 0, what does the Cayley–Hamilton theorem say about A² − 3A + 2I?",
    "options": {
      "A": "It equals the zero matrix",
      "B": "It equals the identity matrix",
      "C": "It equals A itself",
      "D": "It cannot be determined"
    },
    "answer": "A",
    "solution": "The Cayley–Hamilton theorem states that every matrix satisfies its own characteristic equation, so substituting A in place of λ makes A² − 3A + 2I equal the zero matrix — this is also how higher powers and the inverse of A can be found in terms of lower powers.",
    "unit": 3,
    "kind": "mcq"
  },
  {
    "num": 1,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Easy",
    "question": "A graph G = (V, E) consists of:",
    "options": {
      "A": "A set of vertices only",
      "B": "A set of edges only",
      "C": "A set of vertices V and a set of edges E connecting pairs of vertices",
      "D": "A matrix of numbers"
    },
    "answer": "C",
    "solution": "A graph is formally a pair (V, E): a vertex set and an edge set describing which pairs of vertices are connected.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 2,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Easy",
    "question": "A pseudograph is a graph that may contain:",
    "options": {
      "A": "Only simple edges",
      "B": "Loops and multiple edges between the same pair of vertices",
      "C": "Only directed edges",
      "D": "No edges at all"
    },
    "answer": "B",
    "solution": "A simple graph forbids loops and multi-edges; a multigraph allows multiple edges; a pseudograph relaxes both restrictions, allowing loops too.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 3,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Easy",
    "question": "A vertex of degree 0 is called:",
    "options": {
      "A": "An isolated vertex",
      "B": "A pendant vertex",
      "C": "A regular vertex",
      "D": "A cut vertex"
    },
    "answer": "A",
    "solution": "A vertex with no incident edges (degree 0) is isolated; a vertex of degree exactly 1 is instead called pendant.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 4,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Moderate",
    "question": "A loop at a vertex contributes how much to the degree of that vertex?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "Depends on the graph"
    },
    "answer": "C",
    "solution": "By convention a loop is counted twice toward the degree of its vertex, since both its \"ends\" attach to that vertex — this keeps the Handshaking Lemma consistent.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 5,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Easy",
    "question": "Two vertices are said to be adjacent if:",
    "options": {
      "A": "They have the same degree",
      "B": "There is an edge connecting them directly",
      "C": "They belong to different components",
      "D": "They are both isolated"
    },
    "answer": "B",
    "solution": "Adjacency is a direct relationship: two vertices are adjacent exactly when an edge joins them.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 6,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Easy",
    "question": "A graph is called finite if:",
    "options": {
      "A": "It has a finite diameter",
      "B": "Both its vertex set and edge set are finite",
      "C": "It has no cycles",
      "D": "It has an even number of vertices"
    },
    "answer": "B",
    "solution": "Finiteness refers to the sizes of V and E themselves being finite, not to any distance-based property.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 7,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Moderate",
    "question": "A graph in which every vertex has the same degree k is called:",
    "options": {
      "A": "A complete graph",
      "B": "A k-regular graph",
      "C": "A bipartite graph",
      "D": "A planar graph"
    },
    "answer": "B",
    "solution": "\"k-regular\" specifically means every vertex shares the identical degree k; complete graphs are a special case (regular of degree n−1).",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 8,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Moderate",
    "question": "How does a trivial graph differ from a null graph?",
    "options": {
      "A": "A trivial graph has exactly one vertex and no edges, while a null graph has any number of vertices and no edges",
      "B": "They are the same thing",
      "C": "A trivial graph has no vertices",
      "D": "A null graph must be connected"
    },
    "answer": "A",
    "solution": "\"Null graph\" describes any edgeless graph; \"trivial graph\" is the special case with exactly one vertex.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 9,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Easy",
    "question": "In graph theory, the \"order\" of a graph refers to:",
    "options": {
      "A": "The number of edges",
      "B": "The number of vertices",
      "C": "The maximum degree",
      "D": "The number of connected components"
    },
    "answer": "B",
    "solution": "Order counts vertices; \"size\" is the separate term for the number of edges.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 10,
    "topic": "Basic Terminology of Graphs",
    "difficulty": "Moderate",
    "question": "A consequence of the Handshaking Lemma is that in any undirected graph, the number of vertices with odd degree is:",
    "options": {
      "A": "Always odd",
      "B": "Always even",
      "C": "Always zero",
      "D": "Unrelated to the lemma"
    },
    "answer": "B",
    "solution": "Since the sum of all degrees is 2|E| (even), the odd-degree vertices must sum to an even number too, which is only possible if there is an even count of them.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 11,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Easy",
    "question": "A graph is called connected if:",
    "options": {
      "A": "It has no cycles",
      "B": "Every pair of vertices is joined by a path",
      "C": "It has exactly one edge",
      "D": "All vertices have the same degree"
    },
    "answer": "B",
    "solution": "Connectedness means you can reach any vertex from any other by travelling along edges.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 12,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Easy",
    "question": "A connected component of a graph is:",
    "options": {
      "A": "The largest cycle in the graph",
      "B": "A maximal connected subgraph",
      "C": "Any subgraph with one edge",
      "D": "The set of all isolated vertices"
    },
    "answer": "B",
    "solution": "A component is a maximal set of vertices (with their edges) that are mutually reachable — it can't be extended by adding more connected vertices.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 13,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Moderate",
    "question": "If every pair of distinct vertices in a graph G is joined by a path, then G is:",
    "options": {
      "A": "Necessarily disconnected",
      "B": "Necessarily connected",
      "C": "Necessarily a tree",
      "D": "Necessarily a cycle"
    },
    "answer": "B",
    "solution": "This is precisely the definition of connectedness — a path between every pair of vertices.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 14,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Moderate",
    "question": "A graph with exactly 3 connected components must have its vertices split into:",
    "options": {
      "A": "Exactly 3 vertices total",
      "B": "3 nonempty groups, each internally connected, with no edges between groups",
      "C": "3 cycles",
      "D": "3 pendant vertices"
    },
    "answer": "B",
    "solution": "Each component is internally connected, and by definition there are no edges crossing between different components.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 15,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Hard",
    "question": "A graph has n vertices and n−1 edges. Must it be connected?",
    "options": {
      "A": "Yes, always",
      "B": "No — for example, a triangle (3 vertices, 3 edges) plus 1 isolated vertex has n=4 vertices and n−1=3 edges, yet is disconnected",
      "C": "Yes, but only if n is even",
      "D": "No graph like this can exist"
    },
    "answer": "B",
    "solution": "Having exactly n−1 edges is necessary but not sufficient for connectivity — the edges could form a cycle among some vertices while leaving others isolated.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 16,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Moderate",
    "question": "The minimum number of edges needed for a connected simple graph with n vertices is:",
    "options": {
      "A": "n",
      "B": "n − 1",
      "C": "n(n−1)/2",
      "D": "2n"
    },
    "answer": "B",
    "solution": "This minimum is achieved exactly by a tree on n vertices; any fewer edges would leave the graph disconnected.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 17,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Moderate",
    "question": "The maximum number of connected components a simple graph with n vertices can have is:",
    "options": {
      "A": "1",
      "B": "n/2",
      "C": "n (every vertex isolated)",
      "D": "n − 1"
    },
    "answer": "C",
    "solution": "With zero edges, every one of the n vertices is its own component — the most components possible.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 18,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Moderate",
    "question": "If you add a single edge connecting two different connected components of a graph, the total number of components:",
    "options": {
      "A": "Increases by 1",
      "B": "Stays the same",
      "C": "Decreases by exactly 1",
      "D": "Decreases by 2"
    },
    "answer": "C",
    "solution": "The new edge merges exactly those two components into one, reducing the total count by one.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 19,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Moderate",
    "question": "For a connected simple graph with 8 vertices, the maximum possible number of edges is:",
    "options": {
      "A": "7",
      "B": "16",
      "C": "28",
      "D": "56"
    },
    "answer": "C",
    "solution": "The maximum is achieved by the complete graph K8, which has 8·7/2 = 28 edges and is automatically connected.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 20,
    "topic": "Connected & Disconnected Graphs",
    "difficulty": "Hard",
    "question": "A graph has 12 vertices split into 4 connected, nonempty components. What is the minimum possible total number of edges?",
    "options": {
      "A": "4",
      "B": "8",
      "C": "11",
      "D": "12"
    },
    "answer": "B",
    "solution": "Each component needs at least (its size − 1) edges to stay connected (i.e. be a tree). Summed over all 4 components this gives 12 − 4 = 8, regardless of how the 12 vertices are split among them.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 21,
    "topic": "Subgraphs",
    "difficulty": "Easy",
    "question": "A subgraph of G is a graph H such that:",
    "options": {
      "A": "H has more vertices than G",
      "B": "V(H) ⊆ V(G) and E(H) ⊆ E(G), consistent with G",
      "C": "H has no edges",
      "D": "H and G have the same edge set only"
    },
    "answer": "B",
    "solution": "A subgraph simply keeps a subset of the vertices and a subset of the edges (whose endpoints must still be present).",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 22,
    "topic": "Subgraphs",
    "difficulty": "Easy",
    "question": "A spanning subgraph of G is a subgraph that:",
    "options": {
      "A": "Contains all vertices of G but possibly fewer edges",
      "B": "Contains all edges of G but fewer vertices",
      "C": "Is identical to G",
      "D": "Has exactly one vertex"
    },
    "answer": "A",
    "solution": "\"Spanning\" refers to covering every vertex of the original graph; the edge set may be a proper subset.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 23,
    "topic": "Subgraphs",
    "difficulty": "Moderate",
    "question": "An induced subgraph on a vertex subset S contains:",
    "options": {
      "A": "Only some of the edges between vertices in S",
      "B": "All edges of G that have both endpoints in S",
      "C": "No edges at all",
      "D": "All vertices of G, regardless of S"
    },
    "answer": "B",
    "solution": "Induction on S means keeping every original edge whose two endpoints both lie in S — none are left out.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 24,
    "topic": "Subgraphs",
    "difficulty": "Moderate",
    "question": "An edge-induced subgraph on a set of edges F consists of:",
    "options": {
      "A": "The edges in F together with all vertices of G",
      "B": "The edges in F together with exactly the vertices that are endpoints of edges in F",
      "C": "Only isolated vertices",
      "D": "A random subset of vertices"
    },
    "answer": "B",
    "solution": "Edge-induction starts from the chosen edges and includes precisely the vertices needed to support them.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 25,
    "topic": "Subgraphs",
    "difficulty": "Moderate",
    "question": "For G with V={a,b,c,d} and E={ab,bc,cd,da,ac}, which of the following IS a valid subgraph of G?",
    "options": {
      "A": "Vertex set {a,b,c}, edge set {ab,bc,ac}",
      "B": "Vertex set {a,b}, edge set {ab,bc}",
      "C": "Vertex set {a,b,c,d}, edge set {bd}",
      "D": "Vertex set {a,e}, edge set {ae}"
    },
    "answer": "A",
    "solution": "All three edges ab, bc, ac exist in E and both endpoints of each lie in {a,b,c}. Option B includes bc even though c isn't in the vertex set; C uses edge bd, which isn't in E; D introduces vertex e, which isn't in G at all.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 26,
    "topic": "Subgraphs",
    "difficulty": "Moderate",
    "question": "A graph with m edges has how many distinct spanning subgraphs (each formed by keeping all vertices and choosing any subset of the edges)?",
    "options": {
      "A": "m",
      "B": "m²",
      "C": "2^m",
      "D": "m!"
    },
    "answer": "C",
    "solution": "Each of the m edges can independently be included or excluded, giving 2^m possible edge subsets and hence 2^m spanning subgraphs.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 27,
    "topic": "Subgraphs",
    "difficulty": "Easy",
    "question": "Every subgraph of a simple graph is also simple because:",
    "options": {
      "A": "It automatically gains loops",
      "B": "It cannot inherit loops or multiple edges, since the original graph has none",
      "C": "It always has fewer vertices",
      "D": "Subgraphs are never simple"
    },
    "answer": "B",
    "solution": "A subgraph can only keep edges that already existed in G; if G had no loops or multi-edges, none can appear in any subgraph either.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 28,
    "topic": "Subgraphs",
    "difficulty": "Moderate",
    "question": "Can a subgraph of a connected graph be disconnected?",
    "options": {
      "A": "No, never",
      "B": "Yes — for example, removing the middle vertex of a path can split it into two disconnected pieces",
      "C": "Only if the original graph is a tree",
      "D": "Only if the subgraph has zero edges"
    },
    "answer": "B",
    "solution": "Connectivity of G says nothing about every possible subgraph; deleting a well-chosen vertex or edge can easily break connectivity in the remainder.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 29,
    "topic": "Subgraphs",
    "difficulty": "Hard",
    "question": "A connected graph G has 6 vertices and 8 edges. Can a spanning subgraph of G with only 5 edges still be connected?",
    "options": {
      "A": "No, connectivity always requires all 8 edges",
      "B": "No, 5 edges can never connect 6 vertices",
      "C": "Yes — a tree on 6 vertices needs exactly 5 edges, so this is possible if those 5 edges form a spanning tree of G",
      "D": "Yes, but only if G is complete"
    },
    "answer": "C",
    "solution": "A connected graph on 6 vertices needs a minimum of 5 edges (a spanning tree); if such a set of 5 edges exists within G's 8 edges, the resulting spanning subgraph is connected.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 30,
    "topic": "Subgraphs",
    "difficulty": "Moderate",
    "question": "A graph with at least two distinct spanning trees must contain:",
    "options": {
      "A": "At least one cycle",
      "B": "No cycles at all",
      "C": "Exactly n vertices and n−1 edges only",
      "D": "A directed edge"
    },
    "answer": "A",
    "solution": "Extra edges beyond a tree's n−1 create a cycle, and different choices of which cycle-edge to drop yield different spanning trees.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 31,
    "topic": "Paths & Cycles",
    "difficulty": "Easy",
    "question": "Which of the following correctly distinguishes a \"trail\" from a \"path\"?",
    "options": {
      "A": "A trail cannot repeat edges but may repeat vertices; a path cannot repeat either",
      "B": "A trail cannot repeat vertices; a path can",
      "C": "They are exactly the same",
      "D": "A trail must be closed; a path cannot be closed"
    },
    "answer": "A",
    "solution": "A trail's only restriction is no repeated edges; a path is stricter, additionally forbidding repeated vertices.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 32,
    "topic": "Paths & Cycles",
    "difficulty": "Easy",
    "question": "A \"simple path\" additionally requires that:",
    "options": {
      "A": "No edge is repeated only",
      "B": "No vertex is repeated (which also prevents any edge repetition)",
      "C": "The walk must be closed",
      "D": "All vertices have even degree"
    },
    "answer": "B",
    "solution": "Forbidding repeated vertices is the defining feature of a (simple) path, and it automatically rules out repeated edges too.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 33,
    "topic": "Paths & Cycles",
    "difficulty": "Moderate",
    "question": "What is the key difference between a cycle and a circuit?",
    "options": {
      "A": "A cycle repeats no vertices (except start/end); a circuit is any closed trail, which may repeat vertices",
      "B": "A circuit must have odd length",
      "C": "A cycle can repeat edges",
      "D": "There is no difference"
    },
    "answer": "A",
    "solution": "A circuit only forbids repeated edges (it's a closed trail); a cycle is the stricter case where no vertex besides the shared start/end repeats.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 34,
    "topic": "Paths & Cycles",
    "difficulty": "Easy",
    "question": "The \"length\" of a walk, path, or cycle is defined as:",
    "options": {
      "A": "The number of vertices it contains",
      "B": "The number of edges it contains",
      "C": "The sum of vertex degrees",
      "D": "The diameter of the graph"
    },
    "answer": "B",
    "solution": "Length is measured by edge count, not vertex count (a walk with k edges visits up to k+1 vertices).",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 35,
    "topic": "Paths & Cycles",
    "difficulty": "Moderate",
    "question": "In a simple graph, why must the shortest walk between two vertices be a path?",
    "options": {
      "A": "Because paths are always shorter than walks by definition",
      "B": "Because if a vertex repeated, the loop between the repeats could be removed to get a shorter walk, contradicting minimality",
      "C": "Because all walks are automatically paths",
      "D": "Because shortest walks always have even length"
    },
    "answer": "B",
    "solution": "Any repeated vertex creates a detour that can be cut out, so a truly shortest walk can have no repeats — making it a path.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 36,
    "topic": "Paths & Cycles",
    "difficulty": "Moderate",
    "question": "Can a graph contain a closed trail that is NOT a cycle?",
    "options": {
      "A": "No, closed trails and cycles are identical",
      "B": "Yes — a closed trail that revisits a vertex (like a figure-eight shape) is not a cycle, since cycles cannot repeat vertices",
      "C": "Only in directed graphs",
      "D": "Only if the graph has no edges"
    },
    "answer": "B",
    "solution": "A closed trail only avoids repeating edges; revisiting a vertex is allowed, which disqualifies it from being a cycle.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 37,
    "topic": "Paths & Cycles",
    "difficulty": "Moderate",
    "question": "For the graph with edges ab, bc, cd, da, ac, which sequence is a cycle?",
    "options": {
      "A": "a-b-c-a",
      "B": "a-b-a-c",
      "C": "a-b-c-d-a",
      "D": "Both A and C"
    },
    "answer": "D",
    "solution": "a-b-c-a uses edges ab, bc, ac (all present) and revisits no vertex except the shared start/end — a valid triangle cycle. a-b-c-d-a uses ab, bc, cd, da (all present) — a valid 4-cycle. Both qualify.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 38,
    "topic": "Paths & Cycles",
    "difficulty": "Moderate",
    "question": "If two vertices are connected by a walk, why are they also connected by a path?",
    "options": {
      "A": "Because walks are automatically paths",
      "B": "Any repeated vertex in the walk can be \"shortcut\" by removing the loop between the repeats, eventually yielding a path",
      "C": "Because walks must be finite",
      "D": "Because the graph must be a tree"
    },
    "answer": "B",
    "solution": "Repeatedly trimming out repeated-vertex detours from a walk eventually leaves a walk with no repeats — a path — between the same two endpoints.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 39,
    "topic": "Paths & Cycles",
    "difficulty": "Moderate",
    "question": "In a simple graph with n vertices, the maximum possible length of a simple path is:",
    "options": {
      "A": "n",
      "B": "n − 1",
      "C": "n + 1",
      "D": "2n"
    },
    "answer": "B",
    "solution": "A path visiting all n vertices (a Hamiltonian path) uses exactly n−1 edges, which is the longest a simple path can be.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 40,
    "topic": "Paths & Cycles",
    "difficulty": "Moderate",
    "question": "A graph contains a cycle of length 5. What can you conclude about its number of vertices and edges?",
    "options": {
      "A": "The graph has exactly 5 vertices and 5 edges in total",
      "B": "The graph has at least 5 vertices and at least 5 edges",
      "C": "The graph must be complete",
      "D": "The graph must be a tree"
    },
    "answer": "B",
    "solution": "The cycle itself accounts for 5 distinct vertices and 5 edges, but the surrounding graph could well contain more of both.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 41,
    "topic": "Complete Graphs",
    "difficulty": "Easy",
    "question": "A complete graph on n vertices, where every pair of distinct vertices is joined by an edge, is denoted:",
    "options": {
      "A": "Cn",
      "B": "Kn",
      "C": "Pn",
      "D": "Qn"
    },
    "answer": "B",
    "solution": "Kn is the standard notation for the complete graph on n vertices; Cn and Pn instead denote cycle and path graphs.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 42,
    "topic": "Complete Graphs",
    "difficulty": "Easy",
    "question": "How many edges does K4 (the complete graph on 4 vertices) have?",
    "options": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "12"
    },
    "answer": "B",
    "solution": "Using n(n−1)/2 with n=4 gives 4·3/2 = 6 edges.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 43,
    "topic": "Complete Graphs",
    "difficulty": "Moderate",
    "question": "The number of edges in the complete graph Kn is given by:",
    "options": {
      "A": "n²",
      "B": "n(n−1)",
      "C": "n(n−1)/2",
      "D": "2n"
    },
    "answer": "C",
    "solution": "Every pair of the n vertices is joined exactly once, and the number of unordered pairs is n(n−1)/2.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 44,
    "topic": "Complete Graphs",
    "difficulty": "Moderate",
    "question": "In K8, how many edges are there, and what is the degree of every vertex?",
    "options": {
      "A": "28 edges, degree 7",
      "B": "56 edges, degree 8",
      "C": "28 edges, degree 8",
      "D": "16 edges, degree 7"
    },
    "answer": "A",
    "solution": "Edges: 8·7/2 = 28. Each vertex connects to all 7 others, so every vertex has degree 7.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 45,
    "topic": "Complete Graphs",
    "difficulty": "Easy",
    "question": "Is Kn connected for every positive integer n?",
    "options": {
      "A": "No, only for even n",
      "B": "Yes — every pair of vertices in Kn is directly joined by an edge, so it is always connected",
      "C": "No, only for n ≥ 3",
      "D": "It depends on whether n is prime"
    },
    "answer": "B",
    "solution": "With every possible edge present, any vertex can reach any other in a single step, so Kn is connected for all n ≥ 1.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 46,
    "topic": "Complete Graphs",
    "difficulty": "Easy",
    "question": "Kn is a regular graph because:",
    "options": {
      "A": "It has no edges",
      "B": "Every vertex has the same degree, n − 1",
      "C": "It is planar",
      "D": "It has exactly one cycle"
    },
    "answer": "B",
    "solution": "Each vertex is adjacent to all n−1 others, giving every vertex identical degree n−1 — the definition of regularity.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 47,
    "topic": "Complete Graphs",
    "difficulty": "Moderate",
    "question": "How many distinct triangles (3-vertex complete subgraphs) exist in K6?",
    "options": {
      "A": "6",
      "B": "15",
      "C": "20",
      "D": "120"
    },
    "answer": "C",
    "solution": "Any 3 of the 6 vertices automatically form a triangle in K6 (all edges exist), and C(6,3) = 20.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 48,
    "topic": "Complete Graphs",
    "difficulty": "Moderate",
    "question": "In Kn, how many distinct paths of length 2 exist between two fixed vertices u and v?",
    "options": {
      "A": "n",
      "B": "n − 1",
      "C": "n − 2",
      "D": "n(n−1)/2"
    },
    "answer": "C",
    "solution": "Each such path uses exactly one intermediate vertex, which can be any of the remaining n−2 vertices (excluding u and v themselves).",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 49,
    "topic": "Complete Graphs",
    "difficulty": "Moderate",
    "question": "Kn is planar only for:",
    "options": {
      "A": "n ≤ 4",
      "B": "n ≤ 5",
      "C": "All n",
      "D": "Only even n"
    },
    "answer": "A",
    "solution": "K4 can be drawn without crossings, but K5 is the smallest complete graph that cannot — so Kn is planar exactly when n ≤ 4.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 50,
    "topic": "Complete Graphs",
    "difficulty": "Easy",
    "question": "The complement of Kn (on the same vertex set) is:",
    "options": {
      "A": "Another copy of Kn",
      "B": "A null graph (no edges)",
      "C": "A tree",
      "D": "A cycle graph"
    },
    "answer": "B",
    "solution": "Kn already contains every possible edge, so its complement — the edges NOT in Kn — has none left.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 51,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Easy",
    "question": "A directed graph (digraph) differs from an undirected graph in that:",
    "options": {
      "A": "It has no vertices",
      "B": "Its edges (arcs) have a direction, from one vertex to another",
      "C": "It cannot have cycles",
      "D": "It must be complete"
    },
    "answer": "B",
    "solution": "Each arc in a digraph points from a specific initial vertex to a specific terminal vertex, unlike undirected edges.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 52,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Easy",
    "question": "In a directed edge (arc) u→v, u is called the ___ and v is called the ___.",
    "options": {
      "A": "Terminal vertex; initial vertex",
      "B": "Initial vertex; terminal vertex",
      "C": "Parent; child",
      "D": "Root; leaf"
    },
    "answer": "B",
    "solution": "By convention the arrow points from the initial (tail) vertex to the terminal (head) vertex.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 53,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Easy",
    "question": "The indegree of a vertex in a digraph is:",
    "options": {
      "A": "The number of arcs leaving the vertex",
      "B": "The number of arcs entering the vertex",
      "C": "The total number of arcs in the graph",
      "D": "The number of loops at the vertex"
    },
    "answer": "B",
    "solution": "Indegree counts incoming arcs; outdegree (the complementary notion) counts outgoing ones.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 54,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Moderate",
    "question": "The directed version of the Handshaking Lemma states that:",
    "options": {
      "A": "The sum of all indegrees equals the sum of all outdegrees, and both equal the number of arcs",
      "B": "The sum of indegrees is always greater than the sum of outdegrees",
      "C": "Every vertex must have equal indegree and outdegree",
      "D": "The lemma does not apply to digraphs"
    },
    "answer": "A",
    "solution": "Every arc contributes exactly one to some vertex's outdegree and exactly one to some vertex's indegree, so both totals equal the arc count.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 55,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Moderate",
    "question": "A directed cycle is a closed directed walk in which:",
    "options": {
      "A": "All arcs point consistently along the cycle and no vertex (except the shared start/end) repeats",
      "B": "Arcs may point in any direction",
      "C": "Only the initial vertex has outdegree 0",
      "D": "It must include every vertex of the graph"
    },
    "answer": "A",
    "solution": "Like an undirected cycle but respecting arc direction throughout, returning to the start without revisiting any other vertex.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 56,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Moderate",
    "question": "In a digraph, a vertex has indegree 3 and outdegree 1. How many arcs are incident to (entering or leaving) that vertex in total?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "1",
      "D": "2"
    },
    "answer": "B",
    "solution": "Total incident arcs = indegree + outdegree = 3 + 1 = 4.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 57,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Moderate",
    "question": "For the digraph with arcs a→b, b→c, c→a, c→d, d→b, what is the indegree of vertex b?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "0"
    },
    "answer": "B",
    "solution": "Arcs entering b are a→b and d→b, giving b an indegree of 2.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 58,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Moderate",
    "question": "A digraph is strongly connected if:",
    "options": {
      "A": "Its underlying undirected graph is connected",
      "B": "For every pair of vertices u, v, there is a directed path from u to v AND from v to u",
      "C": "It has no cycles",
      "D": "Every vertex has indegree 0"
    },
    "answer": "B",
    "solution": "Strong connectivity demands mutual reachability in both directions between every pair of vertices.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 59,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Moderate",
    "question": "Why does a strongly connected digraph have to be weakly connected as well?",
    "options": {
      "A": "It doesn't — they're unrelated",
      "B": "Because directed paths between every pair of vertices imply the underlying undirected graph is also connected",
      "C": "Because weak connectivity is a stronger condition",
      "D": "Because strongly connected digraphs have no arcs"
    },
    "answer": "B",
    "solution": "If you can reach every vertex from every other respecting direction, you can certainly reach it ignoring direction — so the underlying undirected graph is connected too.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 60,
    "topic": "Directed Graphs (Digraphs)",
    "difficulty": "Moderate",
    "question": "For a directed 3-cycle a→b→c→a, what does the adjacency matrix look like (rows/columns ordered a, b, c)?",
    "options": {
      "A": "A 1 exactly where row i has an arc to column j (e.g. A[a][b]=1, A[b][c]=1, A[c][a]=1), 0 elsewhere",
      "B": "A symmetric matrix with 1s everywhere except the diagonal",
      "C": "The identity matrix",
      "D": "A matrix of all zeros"
    },
    "answer": "A",
    "solution": "Each arc u→v places a single 1 at row u, column v; since the cycle has only those three arcs, only those three entries are 1.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 61,
    "topic": "Weighted Graphs",
    "difficulty": "Easy",
    "question": "In a weighted graph, the weight of an edge typically represents:",
    "options": {
      "A": "The number of times that edge is used",
      "B": "A cost, distance, or capacity associated with that edge",
      "C": "The degree of its endpoints",
      "D": "Whether the edge is directed"
    },
    "answer": "B",
    "solution": "Weights attach real-world quantities — like distance, time, or cost — to each edge.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 62,
    "topic": "Weighted Graphs",
    "difficulty": "Easy",
    "question": "The key difference between a weighted and an unweighted graph is that:",
    "options": {
      "A": "Weighted graphs have more vertices",
      "B": "Every edge in a weighted graph carries a numerical value, while unweighted edges are treated as equal",
      "C": "Unweighted graphs cannot have cycles",
      "D": "Weighted graphs must be directed"
    },
    "answer": "B",
    "solution": "The presence (or absence) of numeric edge weights is the only structural difference between the two.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 63,
    "topic": "Weighted Graphs",
    "difficulty": "Easy",
    "question": "The total weight (cost) of a path in a weighted graph is:",
    "options": {
      "A": "The number of edges in the path",
      "B": "The sum of the weights of the edges along the path",
      "C": "The weight of the heaviest edge only",
      "D": "The average of all edge weights in the graph"
    },
    "answer": "B",
    "solution": "Path cost accumulates by adding up every edge weight travelled along the way.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 64,
    "topic": "Weighted Graphs",
    "difficulty": "Moderate",
    "question": "A minimum-weight path between two vertices is:",
    "options": {
      "A": "The path with the fewest edges, regardless of weight",
      "B": "The path whose total edge weight is the smallest among all paths connecting them",
      "C": "Any path that includes the lightest single edge in the graph",
      "D": "A path that visits every vertex"
    },
    "answer": "B",
    "solution": "It's defined by total accumulated weight, not by the number of edges used.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 65,
    "topic": "Weighted Graphs",
    "difficulty": "Moderate",
    "question": "Given edge weights AB=4, BC=3, CD=5, and AD=15, compare the path A-B-C-D with the direct edge A-D.",
    "options": {
      "A": "A-B-C-D has total weight 12, cheaper than the direct A-D edge (15)",
      "B": "A-B-C-D has weight 15, the same as A-D",
      "C": "The direct edge A-D is always cheaper",
      "D": "A-B-C-D cannot be computed without more information"
    },
    "answer": "A",
    "solution": "4 + 3 + 5 = 12, which is less than the direct edge's weight of 15 — the longer route is actually cheaper here.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 66,
    "topic": "Weighted Graphs",
    "difficulty": "Easy",
    "question": "A negative edge weight in a weighted graph typically represents:",
    "options": {
      "A": "An impossible edge",
      "B": "A cost that behaves like a refund, gain, or discount along that edge",
      "C": "An edge that cannot be traversed",
      "D": "A loop"
    },
    "answer": "B",
    "solution": "Negative weights model situations where traversing an edge effectively reduces total cost rather than adding to it.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 67,
    "topic": "Weighted Graphs",
    "difficulty": "Moderate",
    "question": "Why can negative edge weights create difficulties in shortest-path problems?",
    "options": {
      "A": "They make the graph disconnected",
      "B": "They can create negative-weight cycles, making \"shortest path\" undefined since cost could shrink indefinitely by looping",
      "C": "They always speed up algorithms",
      "D": "They have no real effect"
    },
    "answer": "B",
    "solution": "If a cycle's total weight is negative, repeatedly looping through it drives the path cost toward negative infinity, so no true minimum exists.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 68,
    "topic": "Weighted Graphs",
    "difficulty": "Moderate",
    "question": "In a weighted graph, the \"distance\" between two vertices is defined as:",
    "options": {
      "A": "The number of edges on the shortest path",
      "B": "The minimum total weight over all paths connecting them",
      "C": "The maximum edge weight in the graph",
      "D": "The average path weight"
    },
    "answer": "B",
    "solution": "Weighted distance generalizes the unweighted edge-count notion to the minimum total cost of getting between two vertices.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 69,
    "topic": "Weighted Graphs",
    "difficulty": "Moderate",
    "question": "In a weighted adjacency matrix, the entry for a pair of adjacent vertices typically stores:",
    "options": {
      "A": "Always 1",
      "B": "The weight of the edge connecting them (instead of just 1)",
      "C": "The degree of each vertex",
      "D": "Always 0"
    },
    "answer": "B",
    "solution": "Unlike a plain 0/1 adjacency matrix, the weighted version records the actual edge weight at each adjacent pair.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 70,
    "topic": "Weighted Graphs",
    "difficulty": "Easy",
    "question": "Which of the following is a real-life application of a weighted graph?",
    "options": {
      "A": "Representing road networks where edge weights are distances or travel times",
      "B": "Representing graphs with no numerical data",
      "C": "Only representing family trees",
      "D": "Representing sets with no relationships"
    },
    "answer": "A",
    "solution": "Road/transportation networks are a textbook example, using weights for distance, time, or cost between locations.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 71,
    "topic": "Eulerian Graphs",
    "difficulty": "Easy",
    "question": "What is the difference between an Euler trail and an Euler circuit?",
    "options": {
      "A": "An Euler trail uses every edge exactly once and may start/end at different vertices; an Euler circuit does the same but returns to the start",
      "B": "An Euler circuit uses every vertex exactly once",
      "C": "They are the same",
      "D": "An Euler trail must repeat edges"
    },
    "answer": "A",
    "solution": "Both cover every edge exactly once; the circuit additionally requires ending back where it began.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 72,
    "topic": "Eulerian Graphs",
    "difficulty": "Easy",
    "question": "A graph is called Eulerian if it:",
    "options": {
      "A": "Has no edges",
      "B": "Contains an Euler circuit",
      "C": "Contains a Hamiltonian cycle",
      "D": "Is a tree"
    },
    "answer": "B",
    "solution": "\"Eulerian\" specifically refers to possessing a closed walk that covers every edge exactly once.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 73,
    "topic": "Eulerian Graphs",
    "difficulty": "Moderate",
    "question": "A connected graph has an Euler circuit if and only if:",
    "options": {
      "A": "It has exactly two odd-degree vertices",
      "B": "Every vertex has even degree",
      "C": "It is a tree",
      "D": "It has no cycles"
    },
    "answer": "B",
    "solution": "Euler's classical theorem: a connected graph is Eulerian precisely when every vertex has even degree.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 74,
    "topic": "Eulerian Graphs",
    "difficulty": "Moderate",
    "question": "A connected graph has an Euler trail (but not an Euler circuit) if and only if it has exactly:",
    "options": {
      "A": "Zero odd-degree vertices",
      "B": "Two odd-degree vertices",
      "C": "Four odd-degree vertices",
      "D": "All odd-degree vertices"
    },
    "answer": "B",
    "solution": "Exactly two odd-degree vertices allows a trail that starts at one and ends at the other, covering every edge without closing into a circuit.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 75,
    "topic": "Eulerian Graphs",
    "difficulty": "Moderate",
    "question": "Why must every vertex have even degree in a graph with an Euler circuit?",
    "options": {
      "A": "Because the circuit is directed",
      "B": "Each time the circuit passes through a vertex, it uses one edge to enter and one to leave, pairing up the edges there",
      "C": "Because the graph must be complete",
      "D": "There is no such requirement"
    },
    "answer": "B",
    "solution": "Every visit to a vertex (other than the shared start/end) consumes edges in matched entry/exit pairs, forcing an even total.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 76,
    "topic": "Eulerian Graphs",
    "difficulty": "Moderate",
    "question": "A connected graph has vertex degrees 2, 2, 4, 4, and 6. Can it have an Euler circuit?",
    "options": {
      "A": "No, because some degrees exceed 4",
      "B": "Yes, because all degrees are even",
      "C": "No, because the degrees are not all equal",
      "D": "Cannot be determined"
    },
    "answer": "B",
    "solution": "Euler's theorem only requires every degree to be even — it doesn't require the degrees to be equal to each other.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 77,
    "topic": "Eulerian Graphs",
    "difficulty": "Moderate",
    "question": "A connected graph has exactly two odd-degree vertices. Does it have an Euler trail?",
    "options": {
      "A": "No, never",
      "B": "Yes, and the trail must start and end at those two odd-degree vertices",
      "C": "Yes, but only if it also has an Euler circuit",
      "D": "Cannot be determined"
    },
    "answer": "B",
    "solution": "This is exactly the condition for an Euler trail, and the trail's endpoints are forced to be the two odd-degree vertices.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 78,
    "topic": "Eulerian Graphs",
    "difficulty": "Easy",
    "question": "Which of these is an example of a connected graph guaranteed to be Eulerian?",
    "options": {
      "A": "A cycle graph C6, since every vertex has degree 2 (even)",
      "B": "A star graph with 6 leaves",
      "C": "A tree with 6 vertices",
      "D": "A graph with exactly one odd-degree vertex"
    },
    "answer": "A",
    "solution": "Every vertex of a cycle graph has degree 2, satisfying Euler's all-even-degree condition; trees and stars have leaves of degree 1 (odd), and a lone odd-degree vertex is impossible by the Handshaking Lemma anyway.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 79,
    "topic": "Eulerian Graphs",
    "difficulty": "Moderate",
    "question": "Can a disconnected graph (with more than one nonempty component) have an Euler circuit under the usual definition?",
    "options": {
      "A": "Yes, always",
      "B": "No — an Euler circuit must traverse every edge in one continuous circuit, impossible if edges are split across separate components",
      "C": "Only if it has an even number of vertices",
      "D": "Only if all components are complete"
    },
    "answer": "B",
    "solution": "A single circuit can't jump between components with no connecting edges, so Euler circuits require connectivity (with at most one non-trivial component).",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 80,
    "topic": "Eulerian Graphs",
    "difficulty": "Easy",
    "question": "Which of the following is a classic real-world application of Euler trails/circuits?",
    "options": {
      "A": "The Seven Bridges of Königsberg problem, and route-planning tasks like mail delivery or road inspection that must cover every street",
      "B": "Ranking web pages",
      "C": "Storing hierarchical file systems",
      "D": "Finding the shortest path between two cities"
    },
    "answer": "A",
    "solution": "Euler's original problem — the Seven Bridges of Königsberg — founded this area, and it directly models any task requiring every edge (street, wire, etc.) to be covered.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 81,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Easy",
    "question": "A Hamiltonian cycle is a cycle that:",
    "options": {
      "A": "Uses every edge of the graph exactly once",
      "B": "Visits every vertex of the graph exactly once (except returning to the start)",
      "C": "Has the maximum possible length among all cycles",
      "D": "Only exists in complete graphs"
    },
    "answer": "B",
    "solution": "Hamiltonian cycles are about covering every vertex exactly once, in contrast to Euler circuits which cover every edge.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 82,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Easy",
    "question": "A graph is called Hamiltonian if it contains:",
    "options": {
      "A": "An Euler circuit",
      "B": "A Hamiltonian cycle",
      "C": "No cycles at all",
      "D": "A spanning tree"
    },
    "answer": "B",
    "solution": "By definition, a Hamiltonian graph is one that possesses at least one Hamiltonian cycle.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 83,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Moderate",
    "question": "What is the key distinction between an Euler circuit and a Hamiltonian cycle?",
    "options": {
      "A": "An Euler circuit visits every edge exactly once; a Hamiltonian cycle visits every vertex exactly once (edges may be skipped)",
      "B": "They are identical concepts",
      "C": "A Hamiltonian cycle must use every edge",
      "D": "An Euler circuit cannot be closed"
    },
    "answer": "A",
    "solution": "One is edge-focused (Euler), the other vertex-focused (Hamiltonian) — a graph can have either, both, or neither.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 84,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Moderate",
    "question": "Does every complete graph Kn have a Hamiltonian cycle for n ≥ 3?",
    "options": {
      "A": "No, only for even n",
      "B": "Yes — since every vertex is adjacent to every other, any ordering of the vertices forms a valid Hamiltonian cycle",
      "C": "No, complete graphs are never Hamiltonian",
      "D": "Only for n = 3"
    },
    "answer": "B",
    "solution": "Because all edges exist in Kn, literally any cyclic arrangement of its vertices traces out a valid Hamiltonian cycle.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 85,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Easy",
    "question": "Is the cycle graph Cn Hamiltonian?",
    "options": {
      "A": "No, cycle graphs are never Hamiltonian",
      "B": "Yes — Cn is itself a single cycle passing through all n vertices, so it is trivially Hamiltonian",
      "C": "Only for odd n",
      "D": "Only for n = 3"
    },
    "answer": "B",
    "solution": "Cn's entire edge set already forms one cycle covering all its vertices exactly once.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 86,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Moderate",
    "question": "Can a graph have a Hamiltonian path but no Hamiltonian cycle?",
    "options": {
      "A": "No, one implies the other",
      "B": "Yes — a simple path graph Pn has a Hamiltonian path but no Hamiltonian cycle, since its two end vertices aren't adjacent",
      "C": "Only in directed graphs",
      "D": "Only if the graph is complete"
    },
    "answer": "B",
    "solution": "A path graph visits every vertex in a line (a Hamiltonian path) but can't close into a cycle because the endpoints have no connecting edge.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 87,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Moderate",
    "question": "Why can a graph containing a vertex of degree 1 never have a Hamiltonian cycle?",
    "options": {
      "A": "Because a Hamiltonian cycle needs exactly two edges at every vertex it passes through, which a degree-1 vertex cannot supply",
      "B": "Because degree-1 vertices are always isolated",
      "C": "Because Hamiltonian cycles require even degrees everywhere",
      "D": "There is no such restriction"
    },
    "answer": "A",
    "solution": "Any cycle uses one edge to enter and one to leave each vertex; a vertex with only one incident edge simply can't supply both.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 88,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Moderate",
    "question": "Is a star graph with four leaves (5 vertices total) Hamiltonian?",
    "options": {
      "A": "Yes, always",
      "B": "No — since each leaf has degree 1, no Hamiltonian cycle can properly pass through them",
      "C": "Only if the center is removed",
      "D": "Yes, but only as an Euler circuit"
    },
    "answer": "B",
    "solution": "Every leaf of the star has degree 1, and (as above) a degree-1 vertex blocks any Hamiltonian cycle from existing.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 89,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Moderate",
    "question": "Dirac's theorem states that a simple graph with n ≥ 3 vertices is Hamiltonian if:",
    "options": {
      "A": "Every vertex has degree at least n/2",
      "B": "Every vertex has degree exactly 2",
      "C": "The graph has exactly n edges",
      "D": "The graph is a tree"
    },
    "answer": "A",
    "solution": "Dirac's sufficient condition: a minimum degree of at least n/2 across all vertices guarantees a Hamiltonian cycle.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 90,
    "topic": "Hamiltonian Graphs",
    "difficulty": "Moderate",
    "question": "Ore's theorem states that a graph with n ≥ 3 vertices is Hamiltonian if, for every pair of non-adjacent vertices u and v:",
    "options": {
      "A": "deg(u) + deg(v) ≥ n",
      "B": "deg(u) = deg(v)",
      "C": "deg(u) + deg(v) ≤ n",
      "D": "deg(u) × deg(v) = n"
    },
    "answer": "A",
    "solution": "Ore's theorem generalizes Dirac's: it only requires the DEGREE SUM of each non-adjacent pair to reach n, a weaker (more broadly applicable) condition.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 91,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Easy",
    "question": "A tree, in graph theory, is defined as:",
    "options": {
      "A": "Any graph with no edges",
      "B": "A connected, acyclic graph",
      "C": "A graph with a cycle",
      "D": "A disconnected graph"
    },
    "answer": "B",
    "solution": "The two defining properties of a tree are connectivity and the absence of any cycle.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 92,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Moderate",
    "question": "Why is a tree required to be both connected AND acyclic?",
    "options": {
      "A": "Connectivity ensures every vertex is reachable, while acyclicity ensures a unique path between any two vertices, with no redundant connections",
      "B": "Neither property matters for trees",
      "C": "Trees can have multiple disjoint parts",
      "D": "Cycles are required in trees"
    },
    "answer": "A",
    "solution": "Together, the two properties guarantee exactly one route between any pair of vertices — the hallmark of a tree structure.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 93,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Easy",
    "question": "Which of the following is a real-life example naturally modeled as a tree structure?",
    "options": {
      "A": "A file system's folder hierarchy",
      "B": "A social network with many overlapping friendships",
      "C": "A road network with loops",
      "D": "The complete graph of all flights between cities"
    },
    "answer": "A",
    "solution": "Folders and subfolders branch out from a root with no cycles — a textbook tree, unlike the cyclic structures in the other options.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 94,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Easy",
    "question": "In a tree, a leaf (pendant vertex) is a vertex with degree:",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "Equal to the number of vertices"
    },
    "answer": "B",
    "solution": "Leaves sit at the ends of branches, connected by exactly one edge to the rest of the tree.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 95,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Easy",
    "question": "In a rooted tree, two vertices that share the same parent are called:",
    "options": {
      "A": "Ancestors",
      "B": "Siblings",
      "C": "Descendants",
      "D": "Roots"
    },
    "answer": "B",
    "solution": "Siblings are vertices at the same level with a common immediate parent.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 96,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Easy",
    "question": "A binary tree differs from a general tree in that:",
    "options": {
      "A": "It must be disconnected",
      "B": "Every vertex has at most two children",
      "C": "It cannot have a root",
      "D": "It must contain a cycle"
    },
    "answer": "B",
    "solution": "The \"binary\" restriction caps the number of children per vertex at two; general trees allow any number of children.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 97,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Hard",
    "question": "How many non-isomorphic trees exist on 4 vertices?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "B",
    "solution": "Up to isomorphism there are exactly two shapes on 4 vertices: the path P4 and the star K1,3.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 98,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Moderate",
    "question": "Is every tree a simple graph (no loops or multiple edges)?",
    "options": {
      "A": "No, trees often contain loops",
      "B": "Yes — since a tree is acyclic, it cannot contain a loop (a 1-cycle) or a multi-edge (which would create a 2-cycle)",
      "C": "Only for trees with an even number of vertices",
      "D": "Trees are never simple"
    },
    "answer": "B",
    "solution": "Both a loop and a pair of parallel edges are themselves tiny cycles, which the acyclicity of a tree rules out entirely.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 99,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Easy",
    "question": "Can a tree contain a cycle?",
    "options": {
      "A": "Yes, always",
      "B": "No — a tree is defined to be acyclic, so by definition it cannot contain any cycle",
      "C": "Only one cycle is allowed",
      "D": "Only if it has more than 10 vertices"
    },
    "answer": "B",
    "solution": "Acyclicity is baked directly into the definition of a tree — no cycles are permitted, period.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 100,
    "topic": "Trees: Definitions & Basic Concepts",
    "difficulty": "Easy",
    "question": "Can a tree be disconnected?",
    "options": {
      "A": "Yes, if it has more than 2 components",
      "B": "No — a tree is defined to be connected as well as acyclic; a disconnected acyclic graph is instead called a forest",
      "C": "Only trees with even order can be disconnected",
      "D": "Trees are always disconnected"
    },
    "answer": "B",
    "solution": "Connectivity is the other required property of a tree; drop it and you get a forest (a disjoint union of trees) instead.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 101,
    "topic": "Properties of Trees",
    "difficulty": "Easy",
    "question": "A tree with n vertices has exactly how many edges?",
    "options": {
      "A": "n",
      "B": "n − 1",
      "C": "n + 1",
      "D": "n(n−1)/2"
    },
    "answer": "B",
    "solution": "This n−1 count is one of the most fundamental tree facts, provable by induction on the number of vertices.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 102,
    "topic": "Properties of Trees",
    "difficulty": "Moderate",
    "question": "Every tree with at least two vertices must have at least:",
    "options": {
      "A": "One leaf",
      "B": "Two leaves",
      "C": "Three leaves",
      "D": "n − 1 leaves"
    },
    "answer": "B",
    "solution": "A tree with 2+ vertices always has at least two degree-1 vertices — intuitively, the two \"ends\" of its longest path.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 103,
    "topic": "Properties of Trees",
    "difficulty": "Moderate",
    "question": "In a tree, between any two vertices, there exists:",
    "options": {
      "A": "No path",
      "B": "Exactly one simple path",
      "C": "Exactly two simple paths",
      "D": "Infinitely many paths"
    },
    "answer": "B",
    "solution": "Connectivity guarantees at least one path, and acyclicity rules out any alternative route, leaving exactly one.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 104,
    "topic": "Properties of Trees",
    "difficulty": "Moderate",
    "question": "Removing any single edge from a tree:",
    "options": {
      "A": "Has no effect on connectivity",
      "B": "Always disconnects the tree into exactly two components",
      "C": "Creates a cycle",
      "D": "Always disconnects it into n components"
    },
    "answer": "B",
    "solution": "Since that edge was the tree's only connection between the vertices on either side of it, removing it splits the tree into exactly two pieces.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 105,
    "topic": "Properties of Trees",
    "difficulty": "Moderate",
    "question": "Adding any single new edge to a tree:",
    "options": {
      "A": "Keeps it a tree",
      "B": "Creates exactly one cycle",
      "C": "Disconnects the tree",
      "D": "Removes a vertex"
    },
    "answer": "B",
    "solution": "The new edge connects two vertices that already had a unique path between them, closing that path into exactly one cycle.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 106,
    "topic": "Properties of Trees",
    "difficulty": "Easy",
    "question": "A tree has 15 vertices. How many edges does it have?",
    "options": {
      "A": "14",
      "B": "15",
      "C": "16",
      "D": "30"
    },
    "answer": "A",
    "solution": "Using edges = n − 1: 15 − 1 = 14.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 107,
    "topic": "Properties of Trees",
    "difficulty": "Easy",
    "question": "A tree has 20 edges. How many vertices does it does it have?",
    "options": {
      "A": "19",
      "B": "20",
      "C": "21",
      "D": "40"
    },
    "answer": "C",
    "solution": "Since edges = n − 1, n = edges + 1 = 20 + 1 = 21.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 108,
    "topic": "Properties of Trees",
    "difficulty": "Moderate",
    "question": "A tree has 10 vertices, including 4 leaves. What can you say about the degrees of the remaining 6 vertices?",
    "options": {
      "A": "They must all be exactly 2",
      "B": "Each has degree at least 2, since only leaves have degree 1 in a tree",
      "C": "They must all be isolated",
      "D": "They must sum to exactly 10"
    },
    "answer": "B",
    "solution": "Any non-leaf vertex in a tree has degree 2 or more; only leaves are allowed the minimum degree of 1.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 109,
    "topic": "Properties of Trees",
    "difficulty": "Moderate",
    "question": "Every connected graph contains:",
    "options": {
      "A": "At least one spanning tree, obtainable by removing edges from cycles until none remain",
      "B": "No spanning trees",
      "C": "Exactly one spanning tree always",
      "D": "A Hamiltonian cycle"
    },
    "answer": "A",
    "solution": "Breaking every cycle by deleting one of its edges (while staying connected) whittles any connected graph down to a spanning tree.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 110,
    "topic": "Properties of Trees",
    "difficulty": "Moderate",
    "question": "If a connected graph has n vertices and exactly n − 1 edges, then it must be:",
    "options": {
      "A": "A cycle",
      "B": "A tree",
      "C": "Disconnected",
      "D": "Complete"
    },
    "answer": "B",
    "solution": "A connected graph with the minimal edge count (n−1) for connectivity has no room for a cycle, making it a tree.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 111,
    "topic": "Spanning Trees",
    "difficulty": "Easy",
    "question": "A spanning tree of a graph G is:",
    "options": {
      "A": "Any subgraph of G with no edges",
      "B": "A subgraph that is a tree and includes every vertex of G",
      "C": "A tree with more vertices than G",
      "D": "A cycle that spans all edges"
    },
    "answer": "B",
    "solution": "It must be both tree-shaped (connected, acyclic) and cover every one of G's vertices.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 112,
    "topic": "Spanning Trees",
    "difficulty": "Moderate",
    "question": "How does a spanning tree differ from \"a tree\" in general?",
    "options": {
      "A": "A spanning tree must include every vertex of some larger graph G, while \"a tree\" can be any acyclic connected graph on its own",
      "B": "They are unrelated concepts",
      "C": "A spanning tree can be disconnected",
      "D": "A spanning tree never has leaves"
    },
    "answer": "A",
    "solution": "\"Spanning\" tree is always relative to a specific host graph G whose vertex set it must fully cover.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 113,
    "topic": "Spanning Trees",
    "difficulty": "Easy",
    "question": "True or false: every connected graph has at least one spanning tree.",
    "options": {
      "A": "False, only complete graphs do",
      "B": "True",
      "C": "False, only trees do",
      "D": "True, but only for graphs with even order"
    },
    "answer": "B",
    "solution": "As long as a graph is connected, cycle-breaking edge removal always leaves behind a spanning tree.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 114,
    "topic": "Spanning Trees",
    "difficulty": "Moderate",
    "question": "How many edges does a spanning tree of the cycle graph C6 have?",
    "options": {
      "A": "6",
      "B": "5",
      "C": "4",
      "D": "12"
    },
    "answer": "B",
    "solution": "A spanning tree on 6 vertices always has 6−1 = 5 edges, obtained here by deleting any single edge of the 6-cycle.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 115,
    "topic": "Spanning Trees",
    "difficulty": "Easy",
    "question": "Every spanning tree of a connected graph with n vertices must contain exactly:",
    "options": {
      "A": "n edges",
      "B": "n − 1 edges",
      "C": "n + 1 edges",
      "D": "2n edges"
    },
    "answer": "B",
    "solution": "This follows directly from the general tree fact that a tree on n vertices has n−1 edges.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 116,
    "topic": "Spanning Trees",
    "difficulty": "Moderate",
    "question": "A spanning tree can be obtained from a connected graph by:",
    "options": {
      "A": "Adding new vertices",
      "B": "Repeatedly removing an edge that lies on a cycle, until no cycles remain, while staying connected",
      "C": "Removing all edges",
      "D": "Removing all vertices except one"
    },
    "answer": "B",
    "solution": "This cycle-breaking procedure preserves connectivity at every step while eliminating redundant edges one at a time.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 117,
    "topic": "Spanning Trees",
    "difficulty": "Moderate",
    "question": "Can a disconnected graph have a (single) spanning tree?",
    "options": {
      "A": "Yes, always",
      "B": "No — a spanning tree must be connected and include all vertices, impossible if the original graph is disconnected",
      "C": "Only if it has exactly 2 components",
      "D": "Yes, but only for graphs with even order"
    },
    "answer": "B",
    "solution": "There's no way to connect vertices from separate components using only edges that already exist within the graph.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 118,
    "topic": "Spanning Trees",
    "difficulty": "Moderate",
    "question": "A connected graph has 7 vertices and 12 edges. How many edges must be removed to obtain a spanning tree?",
    "options": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "12"
    },
    "answer": "B",
    "solution": "A spanning tree needs 7−1 = 6 edges, so 12 − 6 = 6 edges must be removed.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 119,
    "topic": "Spanning Trees",
    "difficulty": "Easy",
    "question": "In a weighted graph, a minimum spanning tree (MST) is a spanning tree that:",
    "options": {
      "A": "Has the fewest vertices",
      "B": "Minimizes the total weight of its edges among all possible spanning trees",
      "C": "Has the most edges",
      "D": "Ignores edge weights entirely"
    },
    "answer": "B",
    "solution": "Among all spanning trees of the graph, the MST is the one whose summed edge weights is smallest.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 120,
    "topic": "Spanning Trees",
    "difficulty": "Easy",
    "question": "Which of the following is a practical application of spanning trees?",
    "options": {
      "A": "Designing a minimum-cost network (e.g. cabling or roads) that links all locations without redundant connections",
      "B": "Sorting a list of numbers",
      "C": "Computing the determinant of a matrix",
      "D": "Finding prime numbers"
    },
    "answer": "A",
    "solution": "Spanning (especially minimum spanning) trees are the standard tool for connecting all sites as cheaply as possible with no redundant loops.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 121,
    "topic": "Planar Graphs",
    "difficulty": "Easy",
    "question": "A planar graph is a graph that:",
    "options": {
      "A": "Has no edges",
      "B": "Can be drawn in the plane so that no two edges cross (except at shared endpoints)",
      "C": "Must be a tree",
      "D": "Must be complete"
    },
    "answer": "B",
    "solution": "Planarity is about the existence of at least one crossing-free drawing, not about any particular drawing already being crossing-free.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 122,
    "topic": "Planar Graphs",
    "difficulty": "Moderate",
    "question": "A \"plane graph\" refers to:",
    "options": {
      "A": "Any graph drawn with crossings",
      "B": "A specific drawing of a planar graph in the plane with no edge crossings",
      "C": "A 3-dimensional graph",
      "D": "A graph with no vertices"
    },
    "answer": "B",
    "solution": "\"Plane graph\" is the term for the actual crossing-free drawing itself, as opposed to \"planar graph,\" the abstract graph that admits one.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 123,
    "topic": "Planar Graphs",
    "difficulty": "Easy",
    "question": "In a plane graph, a \"face\" (or region) refers to:",
    "options": {
      "A": "A vertex of high degree",
      "B": "One of the areas of the plane bounded by edges, including the unbounded outer region",
      "C": "An edge that crosses another",
      "D": "The total number of vertices"
    },
    "answer": "B",
    "solution": "Faces are the regions the drawing carves the plane into, always including one unbounded outer face.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 124,
    "topic": "Planar Graphs",
    "difficulty": "Easy",
    "question": "Is every graph planar?",
    "options": {
      "A": "Yes, all graphs can be drawn without crossings",
      "B": "No — for example, K5 and K3,3 are classic non-planar graphs",
      "C": "Only graphs with an even number of vertices are non-planar",
      "D": "No graph is planar"
    },
    "answer": "B",
    "solution": "K5 and K3,3 are the two canonical minimal examples of graphs that can never be drawn without at least one crossing.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 125,
    "topic": "Planar Graphs",
    "difficulty": "Moderate",
    "question": "Is K4 planar?",
    "options": {
      "A": "No, K4 is never planar",
      "B": "Yes — K4 can be drawn with one vertex inside the triangle formed by the other three, avoiding crossings",
      "C": "Only if drawn in 3D",
      "D": "Only as a directed graph"
    },
    "answer": "B",
    "solution": "Placing the fourth vertex inside the triangle of the other three and connecting it to each corner avoids any edge crossings.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 126,
    "topic": "Planar Graphs",
    "difficulty": "Hard",
    "question": "Why is K5 non-planar?",
    "options": {
      "A": "It has too few edges to embed in the plane",
      "B": "It violates the planar edge bound E ≤ 3V−6: K5 has 10 edges, exceeding the bound of 3(5)−6 = 9",
      "C": "It has no cycles",
      "D": "It is disconnected"
    },
    "answer": "B",
    "solution": "Every simple planar graph with n ≥ 3 vertices obeys E ≤ 3n−6; K5's 10 edges exceed the allowed 9, ruling out planarity.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 127,
    "topic": "Planar Graphs",
    "difficulty": "Hard",
    "question": "Why is K3,3 (the complete bipartite graph) non-planar?",
    "options": {
      "A": "It fails the bipartite planar edge bound E ≤ 2V−4: K3,3 has 9 edges, exceeding the bound of 2(6)−4 = 8",
      "B": "It has no vertices",
      "C": "It is always disconnected",
      "D": "It contains a loop"
    },
    "answer": "A",
    "solution": "Because K3,3 is triangle-free (bipartite), its planar edge bound tightens to 2n−4; its 9 edges exceed the allowed 8.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 128,
    "topic": "Planar Graphs",
    "difficulty": "Easy",
    "question": "Euler's formula for a connected planar graph states that:",
    "options": {
      "A": "V + E − F = 2",
      "B": "V − E + F = 2",
      "C": "V × E × F = 2",
      "D": "V = E = F"
    },
    "answer": "B",
    "solution": "This is the classic relation linking vertices, edges, and faces of any connected plane graph.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 129,
    "topic": "Planar Graphs",
    "difficulty": "Moderate",
    "question": "A connected planar graph has 8 vertices and 12 edges. Using Euler's formula, how many faces does it have?",
    "options": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "20"
    },
    "answer": "B",
    "solution": "V − E + F = 2 → 8 − 12 + F = 2 → F = 6.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 130,
    "topic": "Planar Graphs",
    "difficulty": "Moderate",
    "question": "For a simple connected planar graph with n ≥ 3 vertices, the number of edges is bounded above by:",
    "options": {
      "A": "n",
      "B": "n − 1",
      "C": "3n − 6",
      "D": "n(n−1)/2"
    },
    "answer": "C",
    "solution": "This bound follows from Euler's formula together with the fact that each face is bounded by at least 3 edges; it's the standard quick test used to rule out planarity (as with K5).",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 131,
    "topic": "Basic Results & Applications",
    "difficulty": "Easy",
    "question": "The sum of the degrees of all vertices of an undirected graph with m edges equals:",
    "options": {
      "A": "m",
      "B": "2m",
      "C": "m/2",
      "D": "m²"
    },
    "answer": "B",
    "solution": "This is the Handshaking Lemma itself: every edge contributes exactly 2 to the total degree sum (one for each endpoint).",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 132,
    "topic": "Basic Results & Applications",
    "difficulty": "Easy",
    "question": "In a simple graph with 9 vertices, the maximum possible degree of any single vertex is:",
    "options": {
      "A": "9",
      "B": "8",
      "C": "10",
      "D": "4"
    },
    "answer": "B",
    "solution": "A vertex can be adjacent to at most all of the other 8 vertices in the graph.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 133,
    "topic": "Basic Results & Applications",
    "difficulty": "Easy",
    "question": "A simple graph with n vertices has at most how many edges?",
    "options": {
      "A": "n",
      "B": "n − 1",
      "C": "n(n−1)/2",
      "D": "2^n"
    },
    "answer": "C",
    "solution": "This maximum is achieved exactly by the complete graph Kn.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 134,
    "topic": "Basic Results & Applications",
    "difficulty": "Moderate",
    "question": "Which statement correctly relates a graph's order, size, and vertex degrees?",
    "options": {
      "A": "Order = number of edges; size = number of vertices",
      "B": "Size = number of vertices; the sum of degrees = the order",
      "C": "Order = number of vertices; size = number of edges; and the sum of all degrees equals twice the size",
      "D": "There is no relationship between them"
    },
    "answer": "C",
    "solution": "Order and size are the vertex and edge counts respectively, tied together by the Handshaking Lemma (degree sum = 2 × size).",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 135,
    "topic": "Basic Results & Applications",
    "difficulty": "Moderate",
    "question": "A graph has 6 vertices with degrees 1, 2, 2, 3, 4, and 4. Is this degree sequence possible?",
    "options": {
      "A": "No, because the sum of degrees (16) is odd",
      "B": "Yes, because the sum of degrees (16) is even, satisfying the Handshaking Lemma's necessary condition",
      "C": "No, because there are too many vertices",
      "D": "Cannot be determined"
    },
    "answer": "B",
    "solution": "1+2+2+3+4+4 = 16, an even number, which is the necessary parity condition the Handshaking Lemma imposes on any valid degree sequence.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 136,
    "topic": "Basic Results & Applications",
    "difficulty": "Easy",
    "question": "How can graphs model social networks?",
    "options": {
      "A": "Vertices represent people, and edges represent relationships or connections between them",
      "B": "Vertices represent numbers only",
      "C": "Graphs cannot model social networks",
      "D": "Only directed graphs can represent people"
    },
    "answer": "A",
    "solution": "This person-as-vertex, relationship-as-edge model is the standard way social networks are represented as graphs.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 137,
    "topic": "Basic Results & Applications",
    "difficulty": "Easy",
    "question": "How can weighted graphs represent road networks?",
    "options": {
      "A": "Vertices represent intersections/cities, and edge weights represent distances, travel times, or costs",
      "B": "Weights represent the number of vertices only",
      "C": "Road networks cannot be modeled with graphs",
      "D": "Edge weights must always be zero"
    },
    "answer": "A",
    "solution": "Locations become vertices and roads become weighted edges, with the weight capturing whatever cost metric matters (distance, time, tolls).",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 138,
    "topic": "Basic Results & Applications",
    "difficulty": "Easy",
    "question": "How can directed graphs model web pages and hyperlinks?",
    "options": {
      "A": "Vertices represent web pages, and directed edges represent hyperlinks pointing from one page to another",
      "B": "Only undirected graphs can represent the web",
      "C": "Vertices represent hyperlinks only",
      "D": "Web pages cannot be modeled as graphs"
    },
    "answer": "A",
    "solution": "Since a hyperlink points one way (from page A to page B), a directed edge naturally captures that asymmetry.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 139,
    "topic": "Basic Results & Applications",
    "difficulty": "Moderate",
    "question": "Why are trees a natural model for file systems and organizational hierarchies?",
    "options": {
      "A": "Because they can have cycles, matching real hierarchies",
      "B": "Because each item (file/folder or employee) has exactly one parent, mirroring the acyclic, hierarchical structure of a tree",
      "C": "Because file systems have no structure",
      "D": "Trees cannot represent hierarchies"
    },
    "answer": "B",
    "solution": "The single-parent, no-cycles structure of a hierarchy is exactly what a tree formalizes.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 140,
    "topic": "Basic Results & Applications",
    "difficulty": "Moderate",
    "question": "Why are planar graphs useful in map design and circuit layout?",
    "options": {
      "A": "Because their non-crossing structure mirrors constraints like non-overlapping map regions or non-crossing circuit wires",
      "B": "Because they always have the maximum number of edges",
      "C": "Planar graphs are never used in real applications",
      "D": "Because they must be complete graphs"
    },
    "answer": "A",
    "solution": "A crossing-free drawing directly models physical constraints where connections (roads, wires) shouldn't overlap or cross.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 141,
    "topic": "Mixed Revision",
    "difficulty": "Moderate",
    "question": "Which of these correctly matches each term with its key defining property?",
    "options": {
      "A": "Tree = has a cycle; Complete graph = no edges; Planar graph = always disconnected",
      "B": "Complete graph = every pair of vertices adjacent; Tree = connected and acyclic; Planar graph = can be drawn without edge crossings",
      "C": "They are all the same type of graph",
      "D": "Simple graph = allows loops and multiple edges"
    },
    "answer": "B",
    "solution": "Each definition captures the term's essential property: universal adjacency for complete graphs, connected+acyclic for trees, crossing-free drawability for planar graphs.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 142,
    "topic": "Mixed Revision",
    "difficulty": "Moderate",
    "question": "Eulerian and Hamiltonian graphs differ in what they must \"cover\":",
    "options": {
      "A": "An Eulerian graph's circuit covers every edge exactly once; a Hamiltonian graph's cycle covers every vertex exactly once",
      "B": "Both cover exactly the same thing",
      "C": "Eulerian graphs cover vertices; Hamiltonian graphs cover edges",
      "D": "Neither covers anything specific"
    },
    "answer": "A",
    "solution": "This edge-vs-vertex distinction is the fundamental difference between the two concepts.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 143,
    "topic": "Mixed Revision",
    "difficulty": "Moderate",
    "question": "A connected graph has 10 vertices and 9 edges. What can you conclude?",
    "options": {
      "A": "It must contain a cycle",
      "B": "It must be a tree, since 9 = 10 − 1 and it is connected",
      "C": "It must be disconnected",
      "D": "It must be complete"
    },
    "answer": "B",
    "solution": "Connected plus exactly n−1 edges is precisely the characterization of a tree.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 144,
    "topic": "Mixed Revision",
    "difficulty": "Hard",
    "question": "A graph has 7 vertices and 21 edges. Can it be simple?",
    "options": {
      "A": "Yes — the maximum for a simple graph on 7 vertices is 7·6/2 = 21, so it can be simple, and in fact it must be K7",
      "B": "No, 21 is too many edges for any simple graph",
      "C": "Yes, but only if it's a tree",
      "D": "Cannot be determined"
    },
    "answer": "A",
    "solution": "21 exactly matches the maximum possible edge count C(7,2) = 21, which is only achieved when every possible edge is present — i.e. the graph is K7.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 145,
    "topic": "Mixed Revision",
    "difficulty": "Moderate",
    "question": "A connected graph has exactly four odd-degree vertices. Can it have an Euler circuit or an Euler trail?",
    "options": {
      "A": "It has an Euler circuit",
      "B": "It has an Euler trail but not a circuit",
      "C": "It has neither, since Euler circuits require zero odd-degree vertices and Euler trails require exactly two",
      "D": "Cannot be determined"
    },
    "answer": "C",
    "solution": "Four odd-degree vertices satisfies neither Euler condition (0 for a circuit, exactly 2 for a trail), so this graph has neither.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 146,
    "topic": "Mixed Revision",
    "difficulty": "Moderate",
    "question": "If a graph contains a Hamiltonian cycle, what can you conclude about the minimum degree of each vertex?",
    "options": {
      "A": "Every vertex must have degree at least 2, since the cycle uses two edges at each vertex it passes through",
      "B": "Every vertex must have degree exactly n − 1",
      "C": "At least one vertex must have degree 0",
      "D": "No conclusion can be drawn"
    },
    "answer": "A",
    "solution": "Every vertex on the Hamiltonian cycle needs one edge in and one edge out, guaranteeing degree at least 2.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 147,
    "topic": "Mixed Revision",
    "difficulty": "Moderate",
    "question": "How can a spanning tree help simplify a network while preserving connectivity?",
    "options": {
      "A": "It removes all vertices from the network",
      "B": "It keeps all vertices connected using the minimum number of edges (n−1), eliminating redundant/cyclic connections",
      "C": "It disconnects the network into separate parts",
      "D": "It adds extra edges to the network"
    },
    "answer": "B",
    "solution": "By stripping away every edge not needed for connectivity, a spanning tree gives the leanest possible connected version of the network.",
    "unit": 4,
    "kind": "mcq"
  },
  {
    "num": 148,
    "topic": "Mixed Revision",
    "difficulty": "Moderate",
    "question": "Which pairing below is correctly matched?",
    "options": {
      "A": "Euler circuit — traverses every edge exactly once and returns to start; Hamiltonian cycle — visits every vertex exactly once and returns to start",
      "B": "Euler circuit — visits every vertex; Hamiltonian cycle — traverses every edge",
      "C": "A spanning tree always contains a cycle",
      "D": "A path must revisit vertices"
    },
    "answer": "A",
    "solution": "This correctly summarizes the edge-covering nature of Euler circuits versus the vertex-covering nature of Hamiltonian cycles.",
    "unit": 4,
    "kind": "mcq"
  }
];
