/* Question bank — Python section (Programming Fundamentals).
   Loaded as a plain script (not fetch/JSON) so the page still works
   when opened directly from disk via file:// with no local server.
   Appends to window.QUESTION_DATA so this file can load in any order
   relative to the other question-bank files. */
window.QUESTION_DATA = (window.QUESTION_DATA || []).concat([
  {
    "num": 1,
    "topic": "Python Basics & History",
    "difficulty": "Easy",
    "question": "Python was created by:",
    "options": {
      "A": "Dennis Ritchie",
      "B": "Guido van Rossum",
      "C": "James Gosling",
      "D": "Bjarne Stroustrup"
    },
    "answer": "B",
    "solution": "Python was created by Guido van Rossum.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 2,
    "topic": "Python Basics & History",
    "difficulty": "Easy",
    "question": "Python was first released publicly in:",
    "options": {
      "A": "1989",
      "B": "1991",
      "C": "1995",
      "D": "2000"
    },
    "answer": "B",
    "solution": "Python was first publicly released in 1991.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 3,
    "topic": "Python Basics & History",
    "difficulty": "Easy",
    "question": "Which of the following is a major feature of Python?",
    "options": {
      "A": "Static typing only",
      "B": "Platform dependence",
      "C": "Readable syntax",
      "D": "Machine-level programming"
    },
    "answer": "C",
    "solution": "Readable, clean syntax is one of Python's signature design goals.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 4,
    "topic": "Python Basics & History",
    "difficulty": "Easy",
    "question": "Python is generally classified as a:",
    "options": {
      "A": "Low-level language",
      "B": "High-level language",
      "C": "Assembly language",
      "D": "Hardware language"
    },
    "answer": "B",
    "solution": "Python is a high-level language — it abstracts away low-level memory/hardware details.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 5,
    "topic": "Python Basics & History",
    "difficulty": "Easy",
    "question": "Which symbol is used for a single-line comment in Python?",
    "options": {
      "A": "//",
      "B": "#",
      "C": "<!--",
      "D": "/*"
    },
    "answer": "B",
    "solution": "`#` marks the rest of the line as a comment.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 6,
    "topic": "Python Basics & History",
    "difficulty": "Easy",
    "question": "Python uses which feature to define code blocks?",
    "options": {
      "A": "Curly braces",
      "B": "Indentation",
      "C": "Parentheses",
      "D": "Semicolons"
    },
    "answer": "B",
    "solution": "Python uses indentation (whitespace) to mark code blocks, instead of braces.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 7,
    "topic": "Installing & Running Python",
    "difficulty": "Easy",
    "question": "Which tool is used to install Python packages?",
    "options": {
      "A": "npm",
      "B": "pip",
      "C": "gcc",
      "D": "git"
    },
    "answer": "B",
    "solution": "pip is Python's standard package installer.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 8,
    "topic": "Installing & Running Python",
    "difficulty": "Easy",
    "question": "Which command installs a package using pip?",
    "options": {
      "A": "pip get package",
      "B": "pip install package",
      "C": "pip add package",
      "D": "python package install"
    },
    "answer": "B",
    "solution": "`pip install package` is the standard command to install a package.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 9,
    "topic": "Installing & Running Python",
    "difficulty": "Easy",
    "question": "Which of these is a Python IDE/editor?",
    "options": {
      "A": "VS Code",
      "B": "MySQL",
      "C": "MongoDB",
      "D": "Apache"
    },
    "answer": "A",
    "solution": "VS Code is a popular editor commonly used for writing Python.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 10,
    "topic": "Variables & Data Types",
    "difficulty": "Easy",
    "question": "Python is dynamically typed because:",
    "options": {
      "A": "Variables must have fixed types",
      "B": "Types are determined at runtime",
      "C": "Types are never checked",
      "D": "Only strings are allowed"
    },
    "answer": "B",
    "solution": "A variable's type is determined at runtime from the value assigned to it, not declared in advance.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 11,
    "topic": "Variables & Data Types",
    "difficulty": "Easy",
    "question": "Which of the following is a valid Python variable name?",
    "options": {
      "A": "2value",
      "B": "my-value",
      "C": "my_value",
      "D": "class"
    },
    "answer": "C",
    "solution": "`my_value` follows Python's naming rules — letters, digits and underscores, not starting with a digit.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 12,
    "topic": "Variables & Data Types",
    "difficulty": "Easy",
    "question": "Which data type stores whole numbers?",
    "options": {
      "A": "float",
      "B": "int",
      "C": "str",
      "D": "bool"
    },
    "answer": "B",
    "solution": "`int` is Python's built-in type for whole numbers.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 13,
    "topic": "Variables & Data Types",
    "difficulty": "Easy",
    "question": "Which data type represents decimal numbers?",
    "options": {
      "A": "int",
      "B": "float",
      "C": "bool",
      "D": "tuple"
    },
    "answer": "B",
    "solution": "`float` is Python's built-in type for decimal (floating-point) numbers.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 14,
    "topic": "Variables & Data Types",
    "difficulty": "Easy",
    "question": "Which data type is used for text?",
    "options": {
      "A": "str",
      "B": "text",
      "C": "char",
      "D": "string_type"
    },
    "answer": "A",
    "solution": "`str` is Python's built-in type for text.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 15,
    "topic": "Variables & Data Types",
    "difficulty": "Easy",
    "question": "Which values belong to the Boolean type?",
    "options": {
      "A": "Yes/No",
      "B": "0/1 only",
      "C": "True/False",
      "D": "On/Off"
    },
    "answer": "C",
    "solution": "`True` and `False` are the two values of the bool type.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 16,
    "topic": "Variables & Data Types",
    "difficulty": "Moderate",
    "question": "What is the type of `10`?",
    "options": {
      "A": "float",
      "B": "str",
      "C": "int",
      "D": "bool"
    },
    "answer": "C",
    "solution": "`10` is a whole number, so its type is `int`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 17,
    "topic": "Variables & Data Types",
    "difficulty": "Moderate",
    "question": "What is the type of `10.5`?",
    "options": {
      "A": "int",
      "B": "float",
      "C": "str",
      "D": "bool"
    },
    "answer": "B",
    "solution": "`10.5` has a decimal point, so its type is `float`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 18,
    "topic": "Variables & Data Types",
    "difficulty": "Moderate",
    "question": "What is the type of `\"10\"`?",
    "options": {
      "A": "int",
      "B": "float",
      "C": "str",
      "D": "bool"
    },
    "answer": "C",
    "solution": "Quoting it makes `\"10\"` text, so its type is `str`, not a number.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 19,
    "topic": "Variables & Data Types",
    "difficulty": "Moderate",
    "question": "What does `str(100)` return?",
    "options": {
      "A": "100",
      "B": "100.0",
      "C": "\"100\"",
      "D": "True"
    },
    "answer": "C",
    "solution": "str(100) converts the integer to the text `\"100\"`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 20,
    "topic": "Variables & Data Types",
    "difficulty": "Easy",
    "question": "Which operation is an example of explicit type casting?",
    "options": {
      "A": "x = 5",
      "B": "x = int(\"5\")",
      "C": "x = \"5\"",
      "D": "x = True"
    },
    "answer": "B",
    "solution": "`x = int(\"5\")` explicitly converts a string to an int, rather than relying on implicit conversion.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 21,
    "topic": "Variables & Data Types",
    "difficulty": "Moderate",
    "question": "What does variable shadowing generally mean?",
    "options": {
      "A": "A local name hides an outer/global name",
      "B": "A variable becomes a list",
      "C": "A variable is deleted",
      "D": "A variable becomes constant"
    },
    "answer": "A",
    "solution": "Shadowing is when a local variable name hides an outer/global variable with the same name.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 22,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "Which operator represents symmetric difference?",
    "options": {
      "A": "^",
      "B": "&",
      "C": "|",
      "D": "-"
    },
    "answer": "A",
    "solution": "`^` computes the symmetric difference — elements in either set, but not both.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 23,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "Which expression checks membership?",
    "options": {
      "A": "x in collection",
      "B": "collection has x",
      "C": "contains(collection,x)",
      "D": "x inside collection"
    },
    "answer": "A",
    "solution": "`x in collection` tests whether x is a member of that collection.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 24,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is the result of `7 + 3`?",
    "options": {
      "A": "4",
      "B": "10",
      "C": "21",
      "D": "73"
    },
    "answer": "B",
    "solution": "7 + 3 = 10.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 25,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is the result of `7 - 3`?",
    "options": {
      "A": "4",
      "B": "10",
      "C": "-4",
      "D": "21"
    },
    "answer": "A",
    "solution": "7 - 3 = 4.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 26,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is the result of `7 * 3`?",
    "options": {
      "A": "10",
      "B": "21",
      "C": "4",
      "D": "73"
    },
    "answer": "B",
    "solution": "7 * 3 = 21.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 27,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is the result of `7 / 2` in Python 3?",
    "options": {
      "A": "3",
      "B": "3.0",
      "C": "3.5",
      "D": "4"
    },
    "answer": "C",
    "solution": "In Python 3, `/` is true division and always returns a float: 3.5.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 28,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is the result of `7 // 2`?",
    "options": {
      "A": "3",
      "B": "3.5",
      "C": "4",
      "D": "1"
    },
    "answer": "A",
    "solution": "`//` is floor division — it divides and rounds down to 3.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 29,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is the result of `7 % 2`?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3"
    },
    "answer": "B",
    "solution": "`%` gives the remainder of 7 divided by 2, which is 1.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 30,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is the result of `2 ** 3`?",
    "options": {
      "A": "5",
      "B": "6",
      "C": "8",
      "D": "9"
    },
    "answer": "C",
    "solution": "`**` is exponentiation: 2 to the power 3 is 8.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 31,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "Which operator performs exponentiation?",
    "options": {
      "A": "^",
      "B": "**",
      "C": "//",
      "D": "%%"
    },
    "answer": "B",
    "solution": "`**` raises the left operand to the power of the right one.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 32,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "Which operator performs floor division?",
    "options": {
      "A": "/",
      "B": "//",
      "C": "%",
      "D": "**"
    },
    "answer": "B",
    "solution": "`//` divides and rounds the result down to the nearest whole number.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 33,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "Which operator checks equality?",
    "options": {
      "A": "=",
      "B": "==",
      "C": "!=",
      "D": "==="
    },
    "answer": "B",
    "solution": "`==` compares two values for equality.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 34,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "Which operator means 'not equal to'?",
    "options": {
      "A": "<>",
      "B": "!=",
      "C": "!==",
      "D": "NOT"
    },
    "answer": "B",
    "solution": "`!=` checks that two values are not equal.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 35,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "What does the `not` operator do?",
    "options": {
      "A": "Adds values",
      "B": "Reverses a Boolean result",
      "C": "Compares strings only",
      "D": "Performs division"
    },
    "answer": "B",
    "solution": "`not` reverses a Boolean value — True becomes False and vice versa.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 36,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is `True and False`?",
    "options": {
      "A": "True",
      "B": "False",
      "C": "1",
      "D": "None"
    },
    "answer": "B",
    "solution": "`and` needs both sides true; since one is False, the result is False.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 37,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is `True or False`?",
    "options": {
      "A": "True",
      "B": "False",
      "C": "0",
      "D": "Error"
    },
    "answer": "A",
    "solution": "`or` needs only one side true; since one is True, the result is True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 38,
    "topic": "Operators & Expressions",
    "difficulty": "Moderate",
    "question": "What is `not True`?",
    "options": {
      "A": "True",
      "B": "False",
      "C": "1",
      "D": "None"
    },
    "answer": "B",
    "solution": "`not` flips True to False.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 39,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "Which operator performs bitwise AND?",
    "options": {
      "A": "&",
      "B": "&&",
      "C": "and",
      "D": "|"
    },
    "answer": "A",
    "solution": "`&` performs a bitwise AND on the operands' binary representations.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 40,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "Which operator performs bitwise OR?",
    "options": {
      "A": "||",
      "B": "or",
      "C": "|",
      "D": "&"
    },
    "answer": "C",
    "solution": "`|` performs a bitwise OR on the operands' binary representations.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 41,
    "topic": "Operators & Expressions",
    "difficulty": "Easy",
    "question": "Which operator performs bitwise XOR?",
    "options": {
      "A": "^",
      "B": "^^",
      "C": "xor",
      "D": "**"
    },
    "answer": "A",
    "solution": "`^` performs a bitwise exclusive-OR on the operands' binary representations.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 42,
    "topic": "Operators & Expressions",
    "difficulty": "Hard",
    "question": "What is the result of `5 & 3`?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "7"
    },
    "answer": "B",
    "solution": "In binary, 101 & 011 = 001, which is 1.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 43,
    "topic": "Operators & Expressions",
    "difficulty": "Hard",
    "question": "What is the result of `5 | 3`?",
    "options": {
      "A": "1",
      "B": "6",
      "C": "7",
      "D": "8"
    },
    "answer": "C",
    "solution": "In binary, 101 | 011 = 111, which is 7.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 44,
    "topic": "Operators & Expressions",
    "difficulty": "Hard",
    "question": "What is the result of `5 ^ 3`?",
    "options": {
      "A": "1",
      "B": "6",
      "C": "7",
      "D": "2"
    },
    "answer": "B",
    "solution": "In binary, 101 ^ 011 = 110, which is 6.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 45,
    "topic": "Operators & Expressions",
    "difficulty": "Hard",
    "question": "What is the result of `3 << 1`?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "8"
    },
    "answer": "C",
    "solution": "Shifting 3 (binary 11) left by 1 bit doubles it to 6.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 46,
    "topic": "Operators & Expressions",
    "difficulty": "Hard",
    "question": "What is the result of `8 >> 1`?",
    "options": {
      "A": "2",
      "B": "4",
      "C": "8",
      "D": "16"
    },
    "answer": "B",
    "solution": "Shifting 8 right by 1 bit halves it to 4.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 47,
    "topic": "Input & Output",
    "difficulty": "Moderate",
    "question": "What is the output of `x = 10; print(x > 5 and x < 20)`?",
    "options": {
      "A": "True",
      "B": "False",
      "C": "10",
      "D": "Error"
    },
    "answer": "A",
    "solution": "Both `x > 5` and `x < 20` are true for x=10, so `and` gives True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 48,
    "topic": "Input & Output",
    "difficulty": "Moderate",
    "question": "What is the output of `x = 5; print(x == 5 or x == 10)`?",
    "options": {
      "A": "True",
      "B": "False",
      "C": "5",
      "D": "Error"
    },
    "answer": "A",
    "solution": "`x == 5` is true, and `or` only needs one side to be true, so this prints True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 49,
    "topic": "Input & Output",
    "difficulty": "Moderate",
    "question": "What is the output of `print(10 > 5)`?",
    "options": {
      "A": "10",
      "B": "5",
      "C": "True",
      "D": "False"
    },
    "answer": "C",
    "solution": "10 is greater than 5, so the comparison evaluates to True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 50,
    "topic": "Indexing & Slicing",
    "difficulty": "Easy",
    "question": "What does a negative index of -1 refer to?",
    "options": {
      "A": "First element",
      "B": "Second element",
      "C": "Last element",
      "D": "No element"
    },
    "answer": "C",
    "solution": "Negative indices count from the end, so -1 always refers to the last element.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 51,
    "topic": "Indexing & Slicing",
    "difficulty": "Moderate",
    "question": "In slicing, what does the third value represent?",
    "options": {
      "A": "Starting index",
      "B": "Ending index",
      "C": "Step",
      "D": "Length"
    },
    "answer": "C",
    "solution": "In `a[start:stop:step]`, the third value is the step — how many positions to move each time.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 52,
    "topic": "Indexing & Slicing",
    "difficulty": "Easy",
    "question": "Which expression makes a shallow copy using slicing?",
    "options": {
      "A": "b=a[:]",
      "B": "b=a[0]",
      "C": "b=a[:0]",
      "D": "b=a[-1]"
    },
    "answer": "A",
    "solution": "`b = a[:]` slices the whole sequence, producing a new (shallow) copy.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 53,
    "topic": "Conditional Statements",
    "difficulty": "Easy",
    "question": "Which statement is used to make a decision based on a condition?",
    "options": {
      "A": "if",
      "B": "loop",
      "C": "switch_only",
      "D": "select"
    },
    "answer": "A",
    "solution": "`if` is the statement that branches based on whether a condition is true.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 54,
    "topic": "Conditional Statements",
    "difficulty": "Easy",
    "question": "Which keyword provides an alternative when an `if` condition is false?",
    "options": {
      "A": "otherwise",
      "B": "else",
      "C": "default",
      "D": "alternative"
    },
    "answer": "B",
    "solution": "`else` runs when the preceding `if` (and any `elif`) conditions were false.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 55,
    "topic": "Conditional Statements",
    "difficulty": "Easy",
    "question": "Which keyword checks another condition after an `if`?",
    "options": {
      "A": "elseif",
      "B": "elif",
      "C": "else_if",
      "D": "then"
    },
    "answer": "B",
    "solution": "`elif` lets you test another condition if the earlier `if` was false.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 56,
    "topic": "Conditional Statements",
    "difficulty": "Easy",
    "question": "What is a nested `if` statement?",
    "options": {
      "A": "An if inside another if",
      "B": "An if without condition",
      "C": "Multiple loops only",
      "D": "A function"
    },
    "answer": "A",
    "solution": "A nested if is an `if` statement placed inside the body of another `if`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 57,
    "topic": "Conditional Statements",
    "difficulty": "Easy",
    "question": "What is required after an `if` statement in Python?",
    "options": {
      "A": "Semicolon",
      "B": "Colon",
      "C": "Comma",
      "D": "Bracket"
    },
    "answer": "B",
    "solution": "Python requires a colon `:` after the condition, before the indented block.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 58,
    "topic": "Conditional Statements",
    "difficulty": "Moderate",
    "question": "What will `if 5 > 2: print(\"Yes\")` print?",
    "options": {
      "A": "No",
      "B": "Yes",
      "C": "True",
      "D": "Error"
    },
    "answer": "B",
    "solution": "Since `5 > 2` is true, the block runs and prints `Yes`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 59,
    "topic": "Conditional Statements",
    "difficulty": "Easy",
    "question": "What does `elif` allow you to do?",
    "options": {
      "A": "Repeat a loop",
      "B": "Test another condition",
      "C": "Define a function",
      "D": "Import a package"
    },
    "answer": "B",
    "solution": "`elif` lets you test another condition if the previous `if`/`elif` was false.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 60,
    "topic": "Loops & Iteration",
    "difficulty": "Easy",
    "question": "Which loop is commonly used when the number of iterations is known?",
    "options": {
      "A": "for",
      "B": "while",
      "C": "if",
      "D": "try"
    },
    "answer": "A",
    "solution": "A `for` loop is typically used when you know in advance how many times (or over what items) to iterate.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 61,
    "topic": "Loops & Iteration",
    "difficulty": "Easy",
    "question": "Which loop continues while a condition remains True?",
    "options": {
      "A": "for",
      "B": "while",
      "C": "if",
      "D": "switch"
    },
    "answer": "B",
    "solution": "A `while` loop keeps running as long as its condition stays True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 62,
    "topic": "Loops & Iteration",
    "difficulty": "Moderate",
    "question": "What does `range(5)` generate?",
    "options": {
      "A": "1 to 5",
      "B": "0 to 5",
      "C": "0 to 4",
      "D": "1 to 4"
    },
    "answer": "C",
    "solution": "`range(5)` generates the integers 0 through 4 — 5 values, stopping before 5.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 63,
    "topic": "Loops & Iteration",
    "difficulty": "Easy",
    "question": "What does a nested loop mean?",
    "options": {
      "A": "A loop inside another loop",
      "B": "A loop without condition",
      "C": "A function inside a loop",
      "D": "Two variables"
    },
    "answer": "A",
    "solution": "A nested loop is a loop placed inside the body of another loop.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 64,
    "topic": "Loops & Iteration",
    "difficulty": "Easy",
    "question": "Which keyword immediately exits the current loop?",
    "options": {
      "A": "stop",
      "B": "break",
      "C": "exit_loop",
      "D": "quit"
    },
    "answer": "B",
    "solution": "`break` stops the loop immediately, skipping any remaining iterations.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 65,
    "topic": "Loops & Iteration",
    "difficulty": "Easy",
    "question": "Which keyword skips the remaining statements of the current iteration?",
    "options": {
      "A": "skip",
      "B": "continue",
      "C": "pass",
      "D": "next"
    },
    "answer": "B",
    "solution": "`continue` skips the rest of the current iteration and moves on to the next one.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 66,
    "topic": "Loops & Iteration",
    "difficulty": "Moderate",
    "question": "What is the output of `for i in range(3): print(i)`?",
    "options": {
      "A": "1 2 3",
      "B": "0 1 2",
      "C": "0 1 2 3",
      "D": "3 2 1"
    },
    "answer": "B",
    "solution": "range(3) yields 0, 1, 2, each printed on its own line.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 67,
    "topic": "Loops & Iteration",
    "difficulty": "Moderate",
    "question": "What is the output of `for i in range(1,4): print(i)`?",
    "options": {
      "A": "0 1 2",
      "B": "1 2 3",
      "C": "1 2 3 4",
      "D": "0 1 2 3"
    },
    "answer": "B",
    "solution": "range(1,4) yields 1, 2, 3, each printed on its own line.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 68,
    "topic": "Loops & Iteration",
    "difficulty": "Moderate",
    "question": "Which loop can become infinite if its condition never becomes False?",
    "options": {
      "A": "for only",
      "B": "while",
      "C": "if",
      "D": "elif"
    },
    "answer": "B",
    "solution": "A `while` loop keeps running until its condition is False, so it loops forever if that never happens.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 69,
    "topic": "Loop Control (break/continue/pass)",
    "difficulty": "Easy",
    "question": "Which keyword is used as a placeholder and does nothing?",
    "options": {
      "A": "empty",
      "B": "pass",
      "C": "continue",
      "D": "null"
    },
    "answer": "B",
    "solution": "`pass` is a no-op — syntax requires a statement here, but pass does nothing.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 70,
    "topic": "Loop Control (break/continue/pass)",
    "difficulty": "Easy",
    "question": "What happens when `break` executes inside a loop?",
    "options": {
      "A": "The current iteration restarts",
      "B": "The loop terminates",
      "C": "The program always terminates",
      "D": "Nothing"
    },
    "answer": "B",
    "solution": "break immediately terminates the loop, skipping any remaining iterations.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 71,
    "topic": "Loop Control (break/continue/pass)",
    "difficulty": "Easy",
    "question": "What happens when `continue` executes inside a loop?",
    "options": {
      "A": "Loop terminates",
      "B": "Current iteration is skipped",
      "C": "Program terminates",
      "D": "Function returns"
    },
    "answer": "B",
    "solution": "continue skips the rest of the current iteration and moves on to the next one.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 72,
    "topic": "Loop Control (break/continue/pass)",
    "difficulty": "Easy",
    "question": "What happens when `pass` executes?",
    "options": {
      "A": "It skips the whole program",
      "B": "It acts as a null statement",
      "C": "It exits the loop",
      "D": "It returns a value"
    },
    "answer": "B",
    "solution": "pass does nothing — it's a placeholder where a statement is syntactically required.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 73,
    "topic": "Loop Control (break/continue/pass)",
    "difficulty": "Moderate",
    "question": "In a nested loop, `break` normally affects:",
    "options": {
      "A": "All loops",
      "B": "The innermost loop",
      "C": "The whole program",
      "D": "Only the outer loop"
    },
    "answer": "B",
    "solution": "break only exits the innermost loop it's directly inside — outer loops keep running.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 74,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which Python data structure is mutable?",
    "options": {
      "A": "Tuple",
      "B": "List",
      "C": "String",
      "D": "Integer"
    },
    "answer": "B",
    "solution": "A list can be changed in place (items added, removed or reassigned) after it's created, unlike a tuple or string.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 75,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which brackets are used to create a list?",
    "options": {
      "A": "()",
      "B": "{}",
      "C": "[]",
      "D": "<>"
    },
    "answer": "C",
    "solution": "Square brackets `[]` create a list, e.g. `[1, 2, 3]`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 76,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What is the index of the first element of a Python list?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "-1",
      "D": "2"
    },
    "answer": "A",
    "solution": "Python indexing is 0-based, so the first element is at index 0.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 77,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the last valid positive index of [10,20,30]?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "-1"
    },
    "answer": "B",
    "solution": "A 3-element list has indices 0, 1 and 2, so the last valid positive index is 2.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 78,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What does len([1,2,3,4]) return?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "10"
    },
    "answer": "B",
    "solution": "len() counts the elements in the list: 1, 2, 3, 4 — that's 4.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 79,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which method adds one item at the end of a list?",
    "options": {
      "A": "add()",
      "B": "append()",
      "C": "insert_end()",
      "D": "push()"
    },
    "answer": "B",
    "solution": "append() adds exactly one item to the end of the list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 80,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which method inserts an element at a specified position?",
    "options": {
      "A": "insert()",
      "B": "addat()",
      "C": "put()",
      "D": "place()"
    },
    "answer": "A",
    "solution": "insert(index, value) places a value at the given index, shifting later elements right.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 81,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which method removes the first matching value from a list?",
    "options": {
      "A": "pop()",
      "B": "remove()",
      "C": "delete()",
      "D": "discard()"
    },
    "answer": "B",
    "solution": "remove(value) deletes the first occurrence of that value; it doesn't take an index.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 82,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which list method removes and returns an element?",
    "options": {
      "A": "pop()",
      "B": "remove()",
      "C": "erase()",
      "D": "discard()"
    },
    "answer": "A",
    "solution": "pop() removes and returns an element (the last one by default), unlike remove() which only deletes.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 83,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What does clear() do to a list?",
    "options": {
      "A": "Sorts it",
      "B": "Removes all elements",
      "C": "Removes first element",
      "D": "Copies it"
    },
    "answer": "B",
    "solution": "clear() empties the list in place, leaving it as `[]`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 84,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which method returns the number of occurrences of a value in a list?",
    "options": {
      "A": "count()",
      "B": "occurrences()",
      "C": "frequency()",
      "D": "findcount()"
    },
    "answer": "A",
    "solution": "count(value) returns how many times that value appears in the list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 85,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What does list slicing primarily allow?",
    "options": {
      "A": "Selecting a portion of a sequence",
      "B": "Deleting Python",
      "C": "Creating classes",
      "D": "Importing modules"
    },
    "answer": "A",
    "solution": "Slicing (`a[start:stop:step]`) pulls out a sub-sequence — a portion of the list — without modifying the original.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 86,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What does a[1:4] include?",
    "options": {
      "A": "Index 1 through 4",
      "B": "Index 1 through 3",
      "C": "Index 0 through 4",
      "D": "Only index 4"
    },
    "answer": "B",
    "solution": "A slice `[1:4]` includes indices 1, 2 and 3 — the stop index is excluded.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 87,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the result of [1,2,3,4][::2]?",
    "options": {
      "A": "[1,2]",
      "B": "[2,4]",
      "C": "[1,3]",
      "D": "[3,4]"
    },
    "answer": "C",
    "solution": "A step of 2 takes every second element starting at index 0: [1,3].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 88,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the result of [1,2,3,4][::-1]?",
    "options": {
      "A": "[1,2,3,4]",
      "B": "[4,3,2,1]",
      "C": "[2,3,4]",
      "D": "[1,3]"
    },
    "answer": "B",
    "solution": "A step of -1 walks the list backward, reversing it: [4,3,2,1].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 89,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "Which creates a list of squares from 0 to 4?",
    "options": {
      "A": "[x*x for x in range(5)]",
      "B": "[x for x*x in range(5)]",
      "C": "[square x in range(5)]",
      "D": "list(x*x)"
    },
    "answer": "A",
    "solution": "`[x*x for x in range(5)]` is a list comprehension that squares each value 0..4.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 90,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What is list comprehension?",
    "options": {
      "A": "Compact syntax for creating lists",
      "B": "A list sorting algorithm",
      "C": "A dictionary method",
      "D": "A function declaration"
    },
    "answer": "A",
    "solution": "A list comprehension is compact syntax — `[expr for item in iterable]` — for building a list in one line.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 91,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which can be included in a list comprehension?",
    "options": {
      "A": "Condition",
      "B": "Only strings",
      "C": "Only numbers",
      "D": "No expression"
    },
    "answer": "A",
    "solution": "A list comprehension can include an `if` condition to filter which items are kept.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 92,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the result of [x for x in range(6) if x%2==0]?",
    "options": {
      "A": "[1,3,5]",
      "B": "[0,2,4]",
      "C": "[2,4,6]",
      "D": "[0,1,2]"
    },
    "answer": "B",
    "solution": "Keeping only even x from 0..5 gives [0,2,4].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 93,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is list(map(lambda x:x*2,[1,2,3]))?",
    "options": {
      "A": "[1,2,3]",
      "B": "[2,4,6]",
      "C": "[3,4,5]",
      "D": "[1,4,9]"
    },
    "answer": "B",
    "solution": "map applies `x*2` to each element of [1,2,3], giving [2,4,6].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 94,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is list(filter(lambda x:x>2,[1,2,3,4]))?",
    "options": {
      "A": "[1,2]",
      "B": "[2,3]",
      "C": "[3,4]",
      "D": "[1,2,3]"
    },
    "answer": "C",
    "solution": "filter keeps only the elements where `x>2` is true, giving [3,4].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 95,
    "topic": "Lists",
    "difficulty": "Hard",
    "question": "What does reduce(lambda a,b:a+b,[1,2,3,4]) return?",
    "options": {
      "A": "4",
      "B": "10",
      "C": "[10]",
      "D": "24"
    },
    "answer": "B",
    "solution": "reduce repeatedly combines elements with the given function: ((1+2)+3)+4 = 10.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 96,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What does sorted(list) return?",
    "options": {
      "A": "Sorted new list",
      "B": "Same list only",
      "C": "Tuple",
      "D": "Set"
    },
    "answer": "A",
    "solution": "sorted() returns a brand-new sorted list and leaves the original list unchanged.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 97,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which method sorts a list in place?",
    "options": {
      "A": "sorted()",
      "B": "sort()",
      "C": "order()",
      "D": "arrange()"
    },
    "answer": "B",
    "solution": "sort() reorders the list itself (in place) and returns None.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 98,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What does list.copy() generally create?",
    "options": {
      "A": "Shallow copy",
      "B": "Deep copy always",
      "C": "Tuple",
      "D": "Set"
    },
    "answer": "A",
    "solution": "copy() makes a shallow copy — a new list with the same top-level elements.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 99,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of [1,2,3]+[4,5]?",
    "options": {
      "A": "[1,2,3,4,5]",
      "B": "[5,7,8]",
      "C": "[1,2,3]",
      "D": "Error"
    },
    "answer": "A",
    "solution": "`+` on two lists concatenates them: [1,2,3,4,5].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 100,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What does list.extend(iterable) do?",
    "options": {
      "A": "Adds each element from iterable",
      "B": "Adds iterable as one nested item always",
      "C": "Sorts list",
      "D": "Deletes list"
    },
    "answer": "A",
    "solution": "extend() adds every element from the given iterable individually, unlike append() which adds it as one item.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 101,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the result of [1,2]*3?",
    "options": {
      "A": "[3,6]",
      "B": "[1,2,1,2,1,2]",
      "C": "[1,2,3]",
      "D": "Error"
    },
    "answer": "B",
    "solution": "`*` repeats the list's contents 3 times: [1,2,1,2,1,2].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 102,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What does 'a' in ['a','b'] return?",
    "options": {
      "A": "True",
      "B": "False",
      "C": "'a'",
      "D": "1"
    },
    "answer": "A",
    "solution": "`in` tests membership; 'a' is present in the list, so this is True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 103,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of [10,20,30][-1]?",
    "options": {
      "A": "10",
      "B": "20",
      "C": "30",
      "D": "Error"
    },
    "answer": "C",
    "solution": "Negative index -1 refers to the last element: 30.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 104,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of [10,20,30][0:2]?",
    "options": {
      "A": "[10]",
      "B": "[10,20]",
      "C": "[20,30]",
      "D": "[10,20,30]"
    },
    "answer": "B",
    "solution": "Slice [0:2] takes indices 0 and 1: [10,20].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 105,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What is a nested list?",
    "options": {
      "A": "A list containing another list",
      "B": "An immutable list",
      "C": "A sorted list",
      "D": "A list with no elements"
    },
    "answer": "A",
    "solution": "A nested list is a list that contains another list as one of its elements, e.g. `[[1,2],[3,4]]`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 106,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "Which expression accesses the first element of nested list [[1,2],[3,4]]?",
    "options": {
      "A": "a[0][0]",
      "B": "a[1][1]",
      "C": "a[0,1]",
      "D": "a.first"
    },
    "answer": "A",
    "solution": "`a[0]` gets the first inner list, and `a[0][0]` gets its first element.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 107,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What happens when assigning d['x']=10 if x already exists?",
    "options": {
      "A": "A new duplicate key is created",
      "B": "Existing value is updated",
      "C": "Error always",
      "D": "Dictionary is cleared"
    },
    "answer": "B",
    "solution": "Assigning to an existing key updates that key's value rather than creating a duplicate.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 108,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of list(map(str,[10,20]))?",
    "options": {
      "A": "[10,20]",
      "B": "['10','20']",
      "C": "['str','str']",
      "D": "Error"
    },
    "answer": "B",
    "solution": "map applies str() to every element, turning numbers into strings: ['10','20'].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 109,
    "topic": "Lists",
    "difficulty": "Hard",
    "question": "What is the output of list(filter(lambda x:x%2,[1,2,3,4]))?",
    "options": {
      "A": "[2,4]",
      "B": "[1,3]",
      "C": "[1,2,3,4]",
      "D": "[]"
    },
    "answer": "B",
    "solution": "filter keeps values where `x%2` is truthy (i.e. odd numbers): [1,3].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 110,
    "topic": "Lists",
    "difficulty": "Hard",
    "question": "What is the output of reduce(lambda a,b:a*b,[1,2,3,4])?",
    "options": {
      "A": "10",
      "B": "24",
      "C": "12",
      "D": "4"
    },
    "answer": "B",
    "solution": "reduce multiplies elements cumulatively: ((1*2)*3)*4 = 24.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 111,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "Which list comprehension filters values greater than 5?",
    "options": {
      "A": "[x for x in data if x>5]",
      "B": "[x if x>5 for x in data]",
      "C": "[if x>5 x for data]",
      "D": "[x where x>5]"
    },
    "answer": "A",
    "solution": "`[x for x in data if x>5]` keeps only elements where the condition `x>5` holds.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 112,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "Which expression creates cubes of numbers 1 to 3?",
    "options": {
      "A": "[x**3 for x in range(1,4)]",
      "B": "[x*3 for x in range(1,4)]",
      "C": "[cube x for x]",
      "D": "[x^3 for x in range(1,4)]"
    },
    "answer": "A",
    "solution": "`[x**3 for x in range(1,4)]` raises each of 1, 2, 3 to the power 3.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 113,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the result of list(zip([1,2],['a','b']))?",
    "options": {
      "A": "[(1,'a'),(2,'b')]",
      "B": "[[1,2],['a','b']]",
      "C": "[1,'a',2,'b']",
      "D": "Error"
    },
    "answer": "A",
    "solution": "zip() pairs up elements positionally: [(1,'a'),(2,'b')].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 114,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which method is useful for adding many items individually from an iterable?",
    "options": {
      "A": "extend()",
      "B": "append()",
      "C": "insert()",
      "D": "add()"
    },
    "answer": "A",
    "solution": "extend() adds each item of an iterable individually, rather than as one nested item.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 115,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the difference between append() and extend()?",
    "options": {
      "A": "append adds one object; extend adds elements from an iterable",
      "B": "They are always identical",
      "C": "extend adds one object; append adds all elements",
      "D": "Neither modifies lists"
    },
    "answer": "A",
    "solution": "append() adds its argument as a single new item, while extend() unpacks an iterable and adds each of its elements.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 116,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What does [1,2,3].reverse() return?",
    "options": {
      "A": "The reversed list",
      "B": "None, while reversing the list in place",
      "C": "A tuple",
      "D": "Error"
    },
    "answer": "B",
    "solution": "reverse() reverses the list in place and returns None — it doesn't return the reversed list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 117,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which expression sorts a list without modifying the original list?",
    "options": {
      "A": "sorted(my_list)",
      "B": "my_list.sort()",
      "C": "my_list.sorted()",
      "D": "sort(my_list,inplace=True)"
    },
    "answer": "A",
    "solution": "sorted(my_list) builds a new sorted list, leaving my_list untouched.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 118,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of `list(range(2, 6))`?",
    "options": {
      "A": "[2,3,4,5]",
      "B": "[2,3,4,5,6]",
      "C": "[1,2,3,4,5]",
      "D": "[3,4,5,6]"
    },
    "answer": "A",
    "solution": "`list(range(2, 6))` evaluates to `[2, 3, 4, 5]`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 119,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which sequence type is mutable?",
    "options": {
      "A": "Tuple",
      "B": "List",
      "C": "String only",
      "D": "None"
    },
    "answer": "B",
    "solution": "A list can be changed in place after creation, unlike a tuple.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 120,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which syntax creates a list?",
    "options": {
      "A": "{}",
      "B": "[]",
      "C": "()",
      "D": "<>"
    },
    "answer": "B",
    "solution": "Square brackets `[]` create a list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 121,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What is the index of the first element in a Python list?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "-1",
      "D": "2"
    },
    "answer": "A",
    "solution": "Python indexing is 0-based, so the first element is at index 0.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 122,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What does `my_list[1:4]` select?",
    "options": {
      "A": "Index 1 through 4 inclusive",
      "B": "Index 1 through 3",
      "C": "Index 0 through 4",
      "D": "Only index 4"
    },
    "answer": "B",
    "solution": "A slice `[1:4]` includes indices 1, 2 and 3 — the stop index is excluded.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 123,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which method adds one element to the end of a list?",
    "options": {
      "A": "add()",
      "B": "append()",
      "C": "push()",
      "D": "insert_end()"
    },
    "answer": "B",
    "solution": "append() adds exactly one item to the end of the list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 124,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which method removes and returns the last list element by default?",
    "options": {
      "A": "delete()",
      "B": "pop()",
      "C": "remove()",
      "D": "discard()"
    },
    "answer": "B",
    "solution": "pop() with no argument removes and returns the last element of the list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 125,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What does `len([10,20,30])` return?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "30",
      "D": "60"
    },
    "answer": "B",
    "solution": "len() counts the elements in the list — there are 3.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 126,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "What is list comprehension mainly used for?",
    "options": {
      "A": "Creating lists concisely",
      "B": "Creating classes",
      "C": "Installing packages",
      "D": "Handling exceptions"
    },
    "answer": "A",
    "solution": "List comprehensions exist to build lists concisely, in a single readable expression.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 127,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which is a valid list comprehension?",
    "options": {
      "A": "[x for x in range(5)]",
      "B": "[for x in range(5)]",
      "C": "(x in range 5)",
      "D": "{x:for x}"
    },
    "answer": "A",
    "solution": "`[x for x in range(5)]` follows the required `[expr for item in iterable]` form.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 128,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of `list(map(lambda x: x*2, [1,2,3]))`?",
    "options": {
      "A": "[1,2,3]",
      "B": "[2,4,6]",
      "C": "[3,4,5]",
      "D": "[1,4,9]"
    },
    "answer": "B",
    "solution": "map applies `x*2` to each element of [1,2,3], giving [2,4,6].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 129,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of `list(filter(lambda x: x>2, [1,2,3,4]))`?",
    "options": {
      "A": "[1,2]",
      "B": "[2,3]",
      "C": "[3,4]",
      "D": "[1,2,3,4]"
    },
    "answer": "C",
    "solution": "filter keeps only the elements where `x>2` is true, giving [3,4].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 130,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "Which list comprehension produces squares from 0 to 4?",
    "options": {
      "A": "[x for x in range(5)]",
      "B": "[x*x for x in range(5)]",
      "C": "[x+2 for x in range(5)]",
      "D": "[x/2 for x in range(5)]"
    },
    "answer": "B",
    "solution": "`[x*x for x in range(5)]` squares each value 0..4.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 131,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which list method sorts a list in place?",
    "options": {
      "A": "sort()",
      "B": "sorted_in()",
      "C": "order()",
      "D": "arrange()"
    },
    "answer": "A",
    "solution": "sort() reorders the list itself (in place) and returns None.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 132,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the result of `list(map(str, [1,2,3]))`?",
    "options": {
      "A": "[1,2,3]",
      "B": "['1','2','3']",
      "C": "['str','str','str']",
      "D": "Error"
    },
    "answer": "B",
    "solution": "map applies str() to every element, turning numbers into strings: ['1','2','3'].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 133,
    "topic": "Lists",
    "difficulty": "Hard",
    "question": "What is the result of `list(filter(None, [0,1,False,2]))`?",
    "options": {
      "A": "[0, False]",
      "B": "[1,2]",
      "C": "[0,1,2]",
      "D": "[False]"
    },
    "answer": "B",
    "solution": "filter(None, ...) keeps only the truthy values, dropping 0 and False: [1,2].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 134,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of `sum([1,2,3])`?",
    "options": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "123"
    },
    "answer": "B",
    "solution": "sum() adds the elements together: 1+2+3 = 6.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 135,
    "topic": "Lists",
    "difficulty": "Easy",
    "question": "Which is a correct way to copy a list shallowly?",
    "options": {
      "A": "new = old.copy()",
      "B": "new = copy(old) without import",
      "C": "new = old.clone()",
      "D": "new = duplicate(old)"
    },
    "answer": "A",
    "solution": "`new = old.copy()` (equivalently `old[:]`) makes a shallow copy of the list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 136,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What does slicing `[::-1]` commonly do to a sequence?",
    "options": {
      "A": "Selects every second element",
      "B": "Reverses the sequence",
      "C": "Deletes the sequence",
      "D": "Sorts ascending"
    },
    "answer": "B",
    "solution": "A full slice with step -1 walks the sequence backward, reversing it.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 137,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of `list(map(lambda x: x+1, [2,4,6]))`?",
    "options": {
      "A": "[2,4,6]",
      "B": "[3,5,7]",
      "C": "[1,3,5]",
      "D": "[4,8,12]"
    },
    "answer": "B",
    "solution": "map applies `x+1` to each element of [2,4,6], giving [3,5,7].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 138,
    "topic": "Lists",
    "difficulty": "Moderate",
    "question": "What is the output of `list(filter(lambda x: x%2==0, [1,2,3,4]))`?",
    "options": {
      "A": "[1,3]",
      "B": "[2,4]",
      "C": "[1,2,3,4]",
      "D": "[0,2,4]"
    },
    "answer": "B",
    "solution": "filter keeps only the even elements: [2,4].",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 139,
    "topic": "Lists",
    "difficulty": "Hard",
    "question": "If `from functools import reduce`, what does `reduce(lambda a,b: a+b, [1,2,3,4])` return?",
    "options": {
      "A": "4",
      "B": "10",
      "C": "[10]",
      "D": "24"
    },
    "answer": "B",
    "solution": "reduce combines elements cumulatively: ((1+2)+3)+4 = 10.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 140,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "Which Python sequence is immutable?",
    "options": {
      "A": "List",
      "B": "Tuple",
      "C": "Set",
      "D": "Dictionary"
    },
    "answer": "B",
    "solution": "A tuple cannot be changed after creation — no adding, removing or reassigning elements.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 141,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "Which brackets are normally used to create a tuple?",
    "options": {
      "A": "[]",
      "B": "()",
      "C": "{}",
      "D": "//"
    },
    "answer": "B",
    "solution": "Parentheses `()` are the conventional way to write a tuple, e.g. `(1, 2, 3)`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 142,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "Which sequence is ordered and immutable?",
    "options": {
      "A": "List",
      "B": "Tuple",
      "C": "Set",
      "D": "Dictionary"
    },
    "answer": "B",
    "solution": "A tuple keeps its elements in order but, unlike a list, can't be modified afterward.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 143,
    "topic": "Tuples",
    "difficulty": "Moderate",
    "question": "A tuple containing one element requires:",
    "options": {
      "A": "Curly braces",
      "B": "A trailing comma",
      "C": "A semicolon",
      "D": "A colon"
    },
    "answer": "B",
    "solution": "A single-element tuple needs a trailing comma, e.g. `(5,)` — without it, `(5)` is just the integer 5.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 144,
    "topic": "Tuples",
    "difficulty": "Moderate",
    "question": "What is (5,) in Python?",
    "options": {
      "A": "Integer",
      "B": "Tuple",
      "C": "Set",
      "D": "List"
    },
    "answer": "B",
    "solution": "The trailing comma makes this a one-element tuple, not just the integer 5 in parentheses.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 145,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "Which operation cannot normally be performed on a tuple?",
    "options": {
      "A": "Indexing",
      "B": "Slicing",
      "C": "Changing an element",
      "D": "Iteration"
    },
    "answer": "C",
    "solution": "Tuples are immutable, so changing an existing element's value isn't allowed.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 146,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "What does tuple.count(x) return?",
    "options": {
      "A": "Number of matching elements",
      "B": "Last index",
      "C": "Tuple length only",
      "D": "Boolean"
    },
    "answer": "A",
    "solution": "count(x) returns how many times x appears in the tuple.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 147,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "What does tuple.index(x) return?",
    "options": {
      "A": "Number of elements",
      "B": "First matching index",
      "C": "Last value",
      "D": "Boolean"
    },
    "answer": "B",
    "solution": "index(x) returns the position of the first occurrence of x in the tuple.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 148,
    "topic": "Tuples",
    "difficulty": "Hard",
    "question": "Which immutable collection can contain mutable-looking nested data only if the nested values are hashable?",
    "options": {
      "A": "Set",
      "B": "Tuple",
      "C": "List",
      "D": "Dictionary"
    },
    "answer": "B",
    "solution": "A tuple can hold nested data, but for the tuple itself to be hashable (e.g. usable as a dict key), everything inside it must also be hashable.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 149,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "Which is true about tuple unpacking?",
    "options": {
      "A": "Values can be assigned to multiple variables",
      "B": "It only works with strings",
      "C": "It changes tuple elements",
      "D": "It creates a dictionary"
    },
    "answer": "A",
    "solution": "Tuple unpacking lets you assign a tuple's values to several variables at once, e.g. `a, b = (1, 2)`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 150,
    "topic": "Tuples",
    "difficulty": "Moderate",
    "question": "What happens in a,b = (10,20)?",
    "options": {
      "A": "a=10 and b=20",
      "B": "a=20 and b=10",
      "C": "Error always",
      "D": "a=(10,20)"
    },
    "answer": "A",
    "solution": "Tuple unpacking assigns positionally: a gets 10, b gets 20.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 151,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "Which sequence type is immutable?",
    "options": {
      "A": "List",
      "B": "Tuple",
      "C": "Dictionary",
      "D": "Set"
    },
    "answer": "B",
    "solution": "A tuple cannot be changed after creation, unlike a list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 152,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "Which syntax creates a tuple with three elements?",
    "options": {
      "A": "[1,2,3]",
      "B": "{1,2,3}",
      "C": "(1,2,3)",
      "D": "<1,2,3>"
    },
    "answer": "C",
    "solution": "`(1,2,3)` — parentheses with comma-separated values create a 3-element tuple.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 153,
    "topic": "Tuples",
    "difficulty": "Easy",
    "question": "What does tuple immutability mean?",
    "options": {
      "A": "Tuple elements cannot be changed after creation",
      "B": "Tuple cannot be read",
      "C": "Tuple cannot contain numbers",
      "D": "Tuple is always empty"
    },
    "answer": "A",
    "solution": "Once a tuple is created, its elements can't be changed, added to, or removed.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 154,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which collection automatically removes duplicate values?",
    "options": {
      "A": "List",
      "B": "Tuple",
      "C": "Set",
      "D": "Dictionary"
    },
    "answer": "C",
    "solution": "A set stores only unique values — duplicates are dropped automatically.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 155,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which syntax creates a set with 1,2,3?",
    "options": {
      "A": "[1,2,3]",
      "B": "(1,2,3)",
      "C": "{1,2,3}",
      "D": "<1,2,3>"
    },
    "answer": "C",
    "solution": "Curly braces with comma-separated values, `{1,2,3}`, create a set.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 156,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "How do you create an empty set?",
    "options": {
      "A": "{}",
      "B": "set()",
      "C": "[]",
      "D": "()"
    },
    "answer": "B",
    "solution": "`set()` creates an empty set — `{}` alone would create an empty dictionary instead.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 157,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "What does set.add(x) do?",
    "options": {
      "A": "Adds x to the set",
      "B": "Removes x",
      "C": "Sorts set",
      "D": "Copies set"
    },
    "answer": "A",
    "solution": "add(x) inserts a single new element x into the set.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 158,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "Which method removes an element from a set without raising an error if absent?",
    "options": {
      "A": "remove()",
      "B": "discard()",
      "C": "delete()",
      "D": "popitem()"
    },
    "answer": "B",
    "solution": "discard(x) removes x if present, but — unlike remove(x) — does nothing if it's missing.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 159,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which set operation gives common elements?",
    "options": {
      "A": "Union",
      "B": "Intersection",
      "C": "Difference",
      "D": "Symmetric difference"
    },
    "answer": "B",
    "solution": "Intersection returns the elements that appear in both sets.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 160,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which operator represents set union?",
    "options": {
      "A": "&",
      "B": "|",
      "C": "-",
      "D": "^"
    },
    "answer": "B",
    "solution": "`|` computes the union — all elements from either set.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 161,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which operator represents set intersection?",
    "options": {
      "A": "&",
      "B": "|",
      "C": "-",
      "D": "^"
    },
    "answer": "A",
    "solution": "`&` computes the intersection — elements common to both sets.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 162,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which operator represents set difference?",
    "options": {
      "A": "&",
      "B": "|",
      "C": "-",
      "D": "^"
    },
    "answer": "C",
    "solution": "`-` computes the difference — elements in the first set but not the second.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 163,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "What is the result of {1,2,3} & {2,3,4}?",
    "options": {
      "A": "{1,4}",
      "B": "{2,3}",
      "C": "{1,2,3,4}",
      "D": "{}"
    },
    "answer": "B",
    "solution": "`&` keeps only the shared elements: {2,3}.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 164,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "What is the result of {1,2,3} | {3,4}?",
    "options": {
      "A": "{3}",
      "B": "{1,2,3,4}",
      "C": "{1,2}",
      "D": "{4}"
    },
    "answer": "B",
    "solution": "`|` combines all elements from both sets, keeping each value once: {1,2,3,4}.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 165,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which statement about sets is correct?",
    "options": {
      "A": "Sets are primarily used for unique elements",
      "B": "Sets allow duplicate elements",
      "C": "Sets require indexing",
      "D": "Sets are immutable"
    },
    "answer": "A",
    "solution": "Sets exist mainly to hold a collection of unique elements, with no duplicates.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 166,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "Can a normal set contain a list as an element?",
    "options": {
      "A": "Yes",
      "B": "No, lists are unhashable",
      "C": "Only if sorted",
      "D": "Only if empty"
    },
    "answer": "B",
    "solution": "No — set elements must be hashable, and lists are mutable and therefore unhashable.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 167,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "What does set.union() return?",
    "options": {
      "A": "Elements from both sets",
      "B": "Common elements only",
      "C": "Elements only in first set",
      "D": "Empty set"
    },
    "answer": "A",
    "solution": "union() returns a new set containing every element from both sets.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 168,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "What does set.intersection() return?",
    "options": {
      "A": "All elements",
      "B": "Common elements",
      "C": "Unique first elements",
      "D": "Random elements"
    },
    "answer": "B",
    "solution": "intersection() returns a new set of the elements common to both sets.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 169,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "What does set.difference() return for A.difference(B)?",
    "options": {
      "A": "Elements in A but not B",
      "B": "Elements in B but not A",
      "C": "Common elements",
      "D": "All elements"
    },
    "answer": "A",
    "solution": "A.difference(B) returns the elements that are in A but not in B.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 170,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "What does set.symmetric_difference() return?",
    "options": {
      "A": "Common elements",
      "B": "Elements in either set but not both",
      "C": "Only first set",
      "D": "Empty set"
    },
    "answer": "B",
    "solution": "symmetric_difference() returns the elements in either set, but not in both.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 171,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "Which syntax creates an empty set?",
    "options": {
      "A": "{}",
      "B": "[]",
      "C": "set()",
      "D": "()"
    },
    "answer": "C",
    "solution": "`set()` creates an empty set — `{}` alone would create an empty dictionary instead.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 172,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which set operation returns elements present in both sets?",
    "options": {
      "A": "Union",
      "B": "Intersection",
      "C": "Difference",
      "D": "Symmetric difference"
    },
    "answer": "B",
    "solution": "Intersection returns the elements that appear in both sets.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 173,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which set operator represents union?",
    "options": {
      "A": "&",
      "B": "|",
      "C": "^",
      "D": "-"
    },
    "answer": "B",
    "solution": "`|` computes the union — all elements from either set.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 174,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which set operator represents intersection?",
    "options": {
      "A": "&",
      "B": "|",
      "C": "^",
      "D": "+"
    },
    "answer": "A",
    "solution": "`&` computes the intersection — elements common to both sets.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 175,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which set operator represents difference?",
    "options": {
      "A": "&",
      "B": "|",
      "C": "-",
      "D": "^"
    },
    "answer": "C",
    "solution": "`-` computes the difference — elements in the first set but not the second.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 176,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which set operator represents symmetric difference?",
    "options": {
      "A": "^",
      "B": "&",
      "C": "|",
      "D": "//"
    },
    "answer": "A",
    "solution": "`^` computes the symmetric difference — elements in either set, but not both.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 177,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "What happens when duplicate values are inserted into a set?",
    "options": {
      "A": "They are stored multiple times",
      "B": "Duplicates are eliminated",
      "C": "Error always occurs",
      "D": "Values become keys"
    },
    "answer": "B",
    "solution": "A set silently keeps only one copy — duplicates don't create extra entries.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 178,
    "topic": "Sets",
    "difficulty": "Easy",
    "question": "Which statement creates a set containing 1, 2, and 3?",
    "options": {
      "A": "{1,2,3}",
      "B": "[1,2,3]",
      "C": "(1,2,3)",
      "D": "set[1,2,3]"
    },
    "answer": "A",
    "solution": "`{1,2,3}` — curly braces with comma-separated values create a set.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 179,
    "topic": "Sets",
    "difficulty": "Moderate",
    "question": "Which comprehension creates a set?",
    "options": {
      "A": "{x*x for x in range(4)}",
      "B": "[x*x for x in range(4)]",
      "C": "(x*x for x in range(4))",
      "D": "set[x*x for x]"
    },
    "answer": "A",
    "solution": "`{x*x for x in range(4)}` is a set comprehension — curly braces, no colon.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 180,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which data structure stores key-value pairs?",
    "options": {
      "A": "List",
      "B": "Tuple",
      "C": "Set",
      "D": "Dictionary"
    },
    "answer": "D",
    "solution": "A dictionary maps each key to an associated value.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 181,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which syntax represents a dictionary?",
    "options": {
      "A": "[key:value]",
      "B": "{key:value}",
      "C": "(key:value)",
      "D": "<key:value>"
    },
    "answer": "B",
    "solution": "`{key:value}` — curly braces with colon-separated pairs — is dictionary syntax.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 182,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "In a dictionary, keys must be:",
    "options": {
      "A": "Unique",
      "B": "Always strings",
      "C": "Always integers",
      "D": "Duplicated"
    },
    "answer": "A",
    "solution": "Dictionary keys must be unique — assigning to an existing key overwrites its value instead of adding a duplicate.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 183,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which is a valid dictionary?",
    "options": {
      "A": "{1:'A',2:'B'}",
      "B": "[1:'A',2:'B']",
      "C": "(1:'A',2:'B')",
      "D": "<1:'A'>"
    },
    "answer": "A",
    "solution": "`{1:'A',2:'B'}` follows the required `{key:value, ...}` form.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 184,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "How do you access value of key 'name' in d?",
    "options": {
      "A": "d(name)",
      "B": "d['name']",
      "C": "d->name",
      "D": "d.name()"
    },
    "answer": "B",
    "solution": "Square-bracket indexing, `d['name']`, looks up the value stored under that key.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 185,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which method returns all dictionary keys?",
    "options": {
      "A": "keys()",
      "B": "getkeys()",
      "C": "keylist()",
      "D": "all_keys()"
    },
    "answer": "A",
    "solution": "keys() returns a view of all the dictionary's keys.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 186,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which method returns all dictionary values?",
    "options": {
      "A": "values()",
      "B": "getvalues()",
      "C": "vals()",
      "D": "value_list()"
    },
    "answer": "A",
    "solution": "values() returns a view of all the dictionary's values.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 187,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which method returns key-value pairs?",
    "options": {
      "A": "pairs()",
      "B": "items()",
      "C": "entries_only()",
      "D": "keyvalues()"
    },
    "answer": "B",
    "solution": "items() returns the dictionary's (key, value) pairs together.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 188,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which method safely retrieves a dictionary value?",
    "options": {
      "A": "get()",
      "B": "fetch()",
      "C": "obtain()",
      "D": "read()"
    },
    "answer": "A",
    "solution": "get(key) returns None (or a given default) instead of raising an error if the key is missing.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 189,
    "topic": "Dictionaries",
    "difficulty": "Moderate",
    "question": "What does d.get('x',0) return when x is absent?",
    "options": {
      "A": "KeyError",
      "B": "0",
      "C": "None always",
      "D": "False always"
    },
    "answer": "B",
    "solution": "get() falls back to the provided default — 0 — when the key isn't found.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 190,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which method removes all dictionary entries?",
    "options": {
      "A": "clear()",
      "B": "empty()",
      "C": "removeall()",
      "D": "delete()"
    },
    "answer": "A",
    "solution": "clear() empties the dictionary, leaving it as `{}`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 191,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "What does d.update(other) generally do?",
    "options": {
      "A": "Adds/updates entries from other",
      "B": "Deletes dictionary",
      "C": "Sorts keys",
      "D": "Reverses values"
    },
    "answer": "A",
    "solution": "update() adds other's key-value pairs into d, overwriting any keys they share.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 192,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which statement about dictionary keys is correct?",
    "options": {
      "A": "Keys must be hashable",
      "B": "Keys must be lists",
      "C": "Keys can always be dictionaries",
      "D": "Keys may never be tuples"
    },
    "answer": "A",
    "solution": "Dictionary keys must be hashable (e.g. numbers, strings, or tuples of hashable items).",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 193,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which can be a dictionary key?",
    "options": {
      "A": "List",
      "B": "Dictionary",
      "C": "Tuple of hashable elements",
      "D": "Set"
    },
    "answer": "C",
    "solution": "A hashable value — such as a tuple made up of hashable elements — can be used as a key.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 194,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which dictionary method checks whether a key exists indirectly by returning a view of keys?",
    "options": {
      "A": "keys()",
      "B": "values()",
      "C": "items()",
      "D": "get()"
    },
    "answer": "A",
    "solution": "keys() returns a view of all keys, which can then be checked with `in`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 195,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which statement deletes a dictionary key?",
    "options": {
      "A": "del d['x']",
      "B": "remove d['x']",
      "C": "delete(d,'x')",
      "D": "d.delete('x')"
    },
    "answer": "A",
    "solution": "`del d['x']` removes that key (and its value) from the dictionary.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 196,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "What does dict.popitem() generally do?",
    "options": {
      "A": "Removes and returns a key-value pair",
      "B": "Removes all values",
      "C": "Sorts dictionary",
      "D": "Returns only keys"
    },
    "answer": "A",
    "solution": "popitem() removes and returns a key-value pair from the dictionary.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 197,
    "topic": "Dictionaries",
    "difficulty": "Moderate",
    "question": "What does dict.setdefault(key,default) do?",
    "options": {
      "A": "Gets key and inserts default if missing",
      "B": "Deletes key",
      "C": "Sorts keys",
      "D": "Reverses dictionary"
    },
    "answer": "A",
    "solution": "setdefault() returns the value for key if present, otherwise inserts key with the given default and returns that.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 198,
    "topic": "Dictionaries",
    "difficulty": "Moderate",
    "question": "What is the result of len({'a':1,'b':2})?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "B",
    "solution": "len() counts the entries in the dictionary — there are 2.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 199,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "What does d.items() allow you to iterate over?",
    "options": {
      "A": "Key-value pairs",
      "B": "Keys only",
      "C": "Values only",
      "D": "Dictionary length"
    },
    "answer": "A",
    "solution": "items() lets you loop over each (key, value) pair together.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 200,
    "topic": "Dictionaries",
    "difficulty": "Moderate",
    "question": "Which comprehension creates a dictionary of squares?",
    "options": {
      "A": "{x:x*x for x in range(5)}",
      "B": "[x:x*x for x in range(5)]",
      "C": "(x:x*x for x in range(5))",
      "D": "{x*x for x in range(5)}"
    },
    "answer": "A",
    "solution": "`{x:x*x for x in range(5)}` is a dict comprehension mapping each x to its square.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 201,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "What does a dictionary store?",
    "options": {
      "A": "Only values",
      "B": "Key-value pairs",
      "C": "Only keys",
      "D": "Ordered characters only"
    },
    "answer": "B",
    "solution": "A dictionary stores key-value pairs, where each key maps to a value.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 202,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which syntax creates a dictionary?",
    "options": {
      "A": "[]",
      "B": "()",
      "C": "{}",
      "D": "<>"
    },
    "answer": "C",
    "solution": "Curly braces `{}` create a dictionary (an empty one, or with `key:value` pairs inside).",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 203,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which method returns dictionary keys?",
    "options": {
      "A": "keys()",
      "B": "getkeys()",
      "C": "keylist()",
      "D": "allkeys()"
    },
    "answer": "A",
    "solution": "keys() returns a view of all the dictionary's keys.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 204,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which method returns dictionary values?",
    "options": {
      "A": "values()",
      "B": "getvalues()",
      "C": "vals()",
      "D": "items_only()"
    },
    "answer": "A",
    "solution": "values() returns a view of all the dictionary's values.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 205,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which dictionary method safely retrieves a value without raising KeyError for a missing key?",
    "options": {
      "A": "fetch()",
      "B": "get()",
      "C": "value()",
      "D": "find()"
    },
    "answer": "B",
    "solution": "get(key) returns None (or a given default) instead of raising an error if the key is missing.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 206,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which expression accesses the value for key `name` in dictionary `d`?",
    "options": {
      "A": "d(name)",
      "B": "d[name]",
      "C": "d->name",
      "D": "d.value(name)"
    },
    "answer": "B",
    "solution": "`d[name]` looks up the value stored under that key.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 207,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which dictionary property is true in modern Python?",
    "options": {
      "A": "Dictionaries preserve insertion order",
      "B": "Dictionaries cannot store strings",
      "C": "Keys must always be integers",
      "D": "Values must be unique"
    },
    "answer": "A",
    "solution": "Since Python 3.7, dictionaries preserve the order items were inserted in.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 208,
    "topic": "Dictionaries",
    "difficulty": "Easy",
    "question": "Which of these can be used as a dictionary key?",
    "options": {
      "A": "List",
      "B": "Set",
      "C": "Tuple of hashable elements",
      "D": "Dictionary"
    },
    "answer": "C",
    "solution": "A hashable value — such as a tuple made up of hashable elements — can be used as a key.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 209,
    "topic": "Dictionaries",
    "difficulty": "Moderate",
    "question": "What does `d.get('x', 0)` return if `x` is absent from dictionary `d`?",
    "options": {
      "A": "KeyError",
      "B": "0",
      "C": "None only",
      "D": "'x'"
    },
    "answer": "B",
    "solution": "get() falls back to the provided default — 0 — when the key isn't found.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 210,
    "topic": "Dictionaries",
    "difficulty": "Moderate",
    "question": "Which comprehension creates a dictionary?",
    "options": {
      "A": "{x: x*x for x in range(4)}",
      "B": "[x: x*x for x in range(4)]",
      "C": "(x: x*x for x in range(4))",
      "D": "dict[x*x for x]"
    },
    "answer": "A",
    "solution": "`{x: x*x for x in range(4)}` is a dict comprehension — curly braces with a `key: value` pair.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 211,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which method returns the index of the first matching element?",
    "options": {
      "A": "position()",
      "B": "find()",
      "C": "index()",
      "D": "locate()"
    },
    "answer": "C",
    "solution": "index(value) returns the position of the first matching element in a list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 212,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which method removes a specified key and returns its value?",
    "options": {
      "A": "pop()",
      "B": "remove()",
      "C": "discard()",
      "D": "deletekey()"
    },
    "answer": "A",
    "solution": "dict.pop(key) removes that key and returns the value it held.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 213,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which statement defines a function?",
    "options": {
      "A": "function f():",
      "B": "def f():",
      "C": "define f():",
      "D": "func f():"
    },
    "answer": "B",
    "solution": "`def f():` is the syntax that begins a function definition.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 214,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What is the purpose of return?",
    "options": {
      "A": "Exit Python only",
      "B": "Send a value back from a function",
      "C": "Start a loop",
      "D": "Import a module"
    },
    "answer": "B",
    "solution": "return sends a value back to the caller and ends that call of the function.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 215,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What does a function return by default if no return statement executes?",
    "options": {
      "A": "0",
      "B": "False",
      "C": "None",
      "D": "Empty string"
    },
    "answer": "C",
    "solution": "A function with no return statement implicitly returns None.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 216,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What is a function parameter?",
    "options": {
      "A": "Variable in function definition",
      "B": "Value returned by function",
      "C": "Module name",
      "D": "Loop condition"
    },
    "answer": "A",
    "solution": "A parameter is the named variable listed in a function's definition, e.g. `x` in `def f(x):`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 217,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What is an argument?",
    "options": {
      "A": "Value supplied during a function call",
      "B": "Function name",
      "C": "Return keyword",
      "D": "Scope name"
    },
    "answer": "A",
    "solution": "An argument is the actual value supplied for a parameter when the function is called.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 218,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which is a default parameter?",
    "options": {
      "A": "def greet(name='User'):",
      "B": "def greet(='User')",
      "C": "def greet(default name)",
      "D": "def greet(name==User)"
    },
    "answer": "A",
    "solution": "`def greet(name='User'):` gives `name` a default value, used if the caller doesn't supply one.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 219,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What is a keyword argument?",
    "options": {
      "A": "Argument passed using parameter name",
      "B": "Argument without a value",
      "C": "Global variable",
      "D": "Return value"
    },
    "answer": "A",
    "solution": "A keyword argument is passed by explicitly naming its parameter, e.g. `f(name='Sam')`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 220,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which call uses keyword arguments?",
    "options": {
      "A": "add(2,3)",
      "B": "add(x=2,y=3)",
      "C": "add(2, y=3)",
      "D": "Both B and C"
    },
    "answer": "D",
    "solution": "Passing arguments by name (e.g. `f(x=1, y=2)`) makes them keyword arguments; both listed calls qualify.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 221,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What does *args collect?",
    "options": {
      "A": "Variable positional arguments",
      "B": "Variable keyword arguments",
      "C": "Only strings",
      "D": "Return values"
    },
    "answer": "A",
    "solution": "`*args` gathers any extra positional arguments into a tuple.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 222,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What does **kwargs collect?",
    "options": {
      "A": "Positional arguments",
      "B": "Keyword arguments",
      "C": "List elements",
      "D": "Tuple elements"
    },
    "answer": "B",
    "solution": "`**kwargs` gathers any extra named arguments into a dictionary.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 223,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "Inside a function, *args is represented as a:",
    "options": {
      "A": "Dictionary",
      "B": "Tuple",
      "C": "Set",
      "D": "String"
    },
    "answer": "B",
    "solution": "Python packs the extra positional arguments collected by `*args` into a tuple.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 224,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "Inside a function, **kwargs is represented as a:",
    "options": {
      "A": "List",
      "B": "Tuple",
      "C": "Dictionary",
      "D": "Set"
    },
    "answer": "C",
    "solution": "Python packs the extra keyword arguments collected by `**kwargs` into a dictionary.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 225,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "A variable defined inside a function normally has:",
    "options": {
      "A": "Local scope",
      "B": "Global scope",
      "C": "Module-only scope",
      "D": "Universal scope"
    },
    "answer": "A",
    "solution": "Names assigned inside a function are local to that function by default.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 226,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "A variable defined outside functions at module level is generally:",
    "options": {
      "A": "Local",
      "B": "Global",
      "C": "Temporary",
      "D": "Private by default"
    },
    "answer": "B",
    "solution": "A name assigned at the top level of a module is a global variable.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 227,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which keyword allows assignment to a global variable inside a function?",
    "options": {
      "A": "global",
      "B": "outer",
      "C": "public",
      "D": "module"
    },
    "answer": "A",
    "solution": "`global` tells Python that an assignment inside the function should modify the module-level variable, not create a local one.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 228,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "Which keyword is used for an enclosing function's variable in nested functions?",
    "options": {
      "A": "global",
      "B": "nonlocal",
      "C": "outer",
      "D": "parent"
    },
    "answer": "B",
    "solution": "`nonlocal` lets an inner function assign to a variable from its enclosing (but not global) scope.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 229,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function is best for transforming every element?",
    "options": {
      "A": "map()",
      "B": "filter()",
      "C": "reduce()",
      "D": "pass()"
    },
    "answer": "A",
    "solution": "map() applies a function to every element of an iterable.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 230,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function is best for selecting elements?",
    "options": {
      "A": "map()",
      "B": "filter()",
      "C": "reduce()",
      "D": "append()"
    },
    "answer": "B",
    "solution": "filter() keeps only the elements for which a function returns True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 231,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function is best for cumulative reduction?",
    "options": {
      "A": "map()",
      "B": "filter()",
      "C": "reduce()",
      "D": "slice()"
    },
    "answer": "C",
    "solution": "reduce() folds an iterable down to a single accumulated value.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 232,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which is a valid function with two parameters?",
    "options": {
      "A": "def add(a,b):",
      "B": "function add(a,b)",
      "C": "define add(a,b)",
      "D": "func add(a,b)"
    },
    "answer": "A",
    "solution": "`def add(a,b):` declares a function taking exactly two parameters, a and b.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 233,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What happens if a required function argument is omitted?",
    "options": {
      "A": "Python normally raises TypeError",
      "B": "It becomes zero",
      "C": "It becomes None automatically",
      "D": "Function is skipped"
    },
    "answer": "A",
    "solution": "Python raises a TypeError, since the parameter has no default value to fall back on.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 234,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "Which parameter must come after regular positional parameters when using variable positional arguments?",
    "options": {
      "A": "*args can follow them",
      "B": "Required parameters can always follow *args positionally",
      "C": "return",
      "D": "global"
    },
    "answer": "A",
    "solution": "`*args` must follow the normal required/positional parameters in the definition.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 235,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What does a default parameter provide?",
    "options": {
      "A": "A value used when the argument is omitted",
      "B": "A value that cannot change",
      "C": "A global variable",
      "D": "A return type"
    },
    "answer": "A",
    "solution": "A default parameter supplies a value to use automatically when the caller doesn't provide one.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 236,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What is the result of def f(x=5): return x; f()?",
    "options": {
      "A": "0",
      "B": "5",
      "C": "None",
      "D": "Error"
    },
    "answer": "B",
    "solution": "Calling f() with no argument falls back to the default x=5, so it returns 5.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 237,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "Which statement about keyword arguments is true?",
    "options": {
      "A": "Their order is less restrictive when named explicitly",
      "B": "They cannot have values",
      "C": "They are always global",
      "D": "They must use *args"
    },
    "answer": "A",
    "solution": "Because keyword arguments are matched by name, they can generally be supplied in any order.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 238,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What does return do to function execution?",
    "options": {
      "A": "It returns a value and exits that function invocation",
      "B": "It pauses forever",
      "C": "It starts another function",
      "D": "It creates a loop"
    },
    "answer": "A",
    "solution": "return hands back a value to the caller and immediately ends that call of the function.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 239,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "Can a Python function return multiple values syntactically?",
    "options": {
      "A": "Yes, commonly packed into a tuple",
      "B": "No, never",
      "C": "Only strings",
      "D": "Only lists"
    },
    "answer": "A",
    "solution": "Yes — `return a, b` packs the values into a tuple automatically.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 240,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What is recursion?",
    "options": {
      "A": "A function calling itself",
      "B": "A list calling a tuple",
      "C": "A loop using break",
      "D": "A dictionary method"
    },
    "answer": "A",
    "solution": "Recursion is a function calling itself, typically working toward a base case that stops the calls.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 241,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which built-in is commonly used with a function and iterable to transform data?",
    "options": {
      "A": "map()",
      "B": "input()",
      "C": "type()",
      "D": "len()"
    },
    "answer": "A",
    "solution": "map(function, iterable) applies the function to every item of the iterable.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 242,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function combines multiple iterables element-wise?",
    "options": {
      "A": "zip()",
      "B": "join()",
      "C": "merge()",
      "D": "pair()"
    },
    "answer": "A",
    "solution": "zip() pairs up corresponding elements from two or more iterables.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 243,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which built-in returns the largest item?",
    "options": {
      "A": "high()",
      "B": "max()",
      "C": "largest()",
      "D": "top()"
    },
    "answer": "B",
    "solution": "max() returns the largest value in an iterable (or of the arguments given).",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 244,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which built-in returns the smallest item?",
    "options": {
      "A": "min()",
      "B": "small()",
      "C": "lowest()",
      "D": "bottom()"
    },
    "answer": "A",
    "solution": "min() returns the smallest value in an iterable (or of the arguments given).",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 245,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which built-in returns the sum of numeric iterable elements?",
    "options": {
      "A": "total()",
      "B": "sum()",
      "C": "addall()",
      "D": "aggregate()"
    },
    "answer": "B",
    "solution": "sum() adds up all the numeric values in an iterable.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 246,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function displays output in Python?",
    "options": {
      "A": "display()",
      "B": "echo()",
      "C": "print()",
      "D": "output()"
    },
    "answer": "C",
    "solution": "print() writes text to standard output.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 247,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function returns the data type of an object?",
    "options": {
      "A": "datatype()",
      "B": "typeof()",
      "C": "type()",
      "D": "gettype()"
    },
    "answer": "C",
    "solution": "type() returns an object's type, e.g. `type(5)` is `int`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 248,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What does `int(\"25\")` return?",
    "options": {
      "A": "\"25\"",
      "B": "25",
      "C": "25.0",
      "D": "True"
    },
    "answer": "B",
    "solution": "`int(\"25\")` parses the string as an integer: 25.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 249,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What does `float(\"5\")` return?",
    "options": {
      "A": "5",
      "B": "\"5\"",
      "C": "5.0",
      "D": "False"
    },
    "answer": "C",
    "solution": "`float(\"5\")` parses the string as a float: 5.0.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 250,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What does `bool(0)` return?",
    "options": {
      "A": "True",
      "B": "False",
      "C": "0",
      "D": "None"
    },
    "answer": "B",
    "solution": "0 is falsy in Python, so `bool(0)` is False.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 251,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What does `bool(1)` return?",
    "options": {
      "A": "True",
      "B": "False",
      "C": "1.0",
      "D": "None"
    },
    "answer": "A",
    "solution": "Any nonzero number is truthy, so `bool(1)` is True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 252,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which logical operator returns True only when both conditions are True?",
    "options": {
      "A": "or",
      "B": "not",
      "C": "and",
      "D": "xor"
    },
    "answer": "C",
    "solution": "`and` only evaluates to True when both operands are True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 253,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which logical operator returns True when at least one condition is True?",
    "options": {
      "A": "and",
      "B": "or",
      "C": "not",
      "D": "both"
    },
    "answer": "B",
    "solution": "`or` evaluates to True as soon as either operand is True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 254,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which statement is useful for creating an empty function body temporarily?",
    "options": {
      "A": "break",
      "B": "continue",
      "C": "pass",
      "D": "skip"
    },
    "answer": "C",
    "solution": "`pass` is a no-op placeholder, handy for a function body you haven't written yet.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 255,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which statement creates a function?",
    "options": {
      "A": "function",
      "B": "def",
      "C": "func",
      "D": "define"
    },
    "answer": "B",
    "solution": "`def` is the keyword that begins a function definition.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 256,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What keyword returns a value from a function?",
    "options": {
      "A": "give",
      "B": "output",
      "C": "return",
      "D": "yield_only"
    },
    "answer": "C",
    "solution": "`return` sends a value back to the function's caller.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 257,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What is a parameter?",
    "options": {
      "A": "A variable listed in a function definition",
      "B": "A package",
      "C": "A loop",
      "D": "A returned object"
    },
    "answer": "A",
    "solution": "A parameter is the named variable listed in a function's definition.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 258,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which is a default argument?",
    "options": {
      "A": "def f(x=10):",
      "B": "def f(=10):",
      "C": "def f(default x):",
      "D": "def f(x==10):"
    },
    "answer": "A",
    "solution": "`def f(x=10):` gives parameter x a default value of 10.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 259,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which argument is passed using its parameter name?",
    "options": {
      "A": "Positional",
      "B": "Keyword",
      "C": "Default",
      "D": "Global"
    },
    "answer": "B",
    "solution": "That's a keyword argument — it's identified by name rather than by position.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 260,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which syntax allows a function to accept variable positional arguments?",
    "options": {
      "A": "*args",
      "B": "**args",
      "C": "&args",
      "D": "varargs()"
    },
    "answer": "A",
    "solution": "`*args` in the function signature collects any number of extra positional arguments.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 261,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which syntax allows variable keyword arguments?",
    "options": {
      "A": "*kwargs",
      "B": "**kwargs",
      "C": "&&kwargs",
      "D": "keywordargs()"
    },
    "answer": "B",
    "solution": "`**kwargs` in the function signature collects any number of extra named arguments.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 262,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which keyword can be used to modify a global variable from inside a function?",
    "options": {
      "A": "global",
      "B": "public",
      "C": "outer",
      "D": "globalize"
    },
    "answer": "A",
    "solution": "`global` tells Python that an assignment inside the function should modify the module-level variable, not create a local one.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 263,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function is anonymous in Python?",
    "options": {
      "A": "def",
      "B": "lambda",
      "C": "anonymous()",
      "D": "function"
    },
    "answer": "B",
    "solution": "lambda creates small, unnamed (anonymous) function expressions.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 264,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "What does `sorted()` return?",
    "options": {
      "A": "A new sorted list",
      "B": "The original list only",
      "C": "A set",
      "D": "A tuple always"
    },
    "answer": "A",
    "solution": "sorted() returns a brand-new sorted list and leaves the original list unchanged.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 265,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What does a function return if it reaches the end without a return statement?",
    "options": {
      "A": "0",
      "B": "False",
      "C": "None",
      "D": "Error"
    },
    "answer": "C",
    "solution": "A function with no return statement implicitly returns None.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 266,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which call uses a keyword argument?",
    "options": {
      "A": "add(2,3)",
      "B": "add(x=2,y=3)",
      "C": "add(2,y=3)",
      "D": "Both B and C"
    },
    "answer": "D",
    "solution": "Passing arguments by name (e.g. `f(x=1, y=2)`) makes them keyword arguments; both listed calls qualify.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 267,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "Which argument type must normally appear before `*args` in a function definition?",
    "options": {
      "A": "Required/positional parameters",
      "B": "Only **kwargs",
      "C": "Nothing",
      "D": "Return value"
    },
    "answer": "A",
    "solution": "Regular required/positional parameters must be listed before `*args` in the signature.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 268,
    "topic": "Functions & Return Values",
    "difficulty": "Moderate",
    "question": "What does `**kwargs` collect?",
    "options": {
      "A": "Positional arguments",
      "B": "Keyword arguments",
      "C": "Return values",
      "D": "List elements"
    },
    "answer": "B",
    "solution": "`**kwargs` gathers any extra named arguments into a dictionary.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 269,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function is best suited for applying the same transformation to every item?",
    "options": {
      "A": "map()",
      "B": "filter()",
      "C": "reduce()",
      "D": "pass()"
    },
    "answer": "A",
    "solution": "map() applies the same function to every item of an iterable.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 270,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function is best suited for selecting elements based on a Boolean condition?",
    "options": {
      "A": "map()",
      "B": "filter()",
      "C": "reduce()",
      "D": "lambda_only()"
    },
    "answer": "B",
    "solution": "filter() keeps only the items for which a predicate function returns True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 271,
    "topic": "Functions & Return Values",
    "difficulty": "Easy",
    "question": "Which function is best suited for accumulating values into one result?",
    "options": {
      "A": "map()",
      "B": "filter()",
      "C": "reduce()",
      "D": "zip()"
    },
    "answer": "C",
    "solution": "reduce() folds an iterable down into a single accumulated result.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 272,
    "topic": "Scope & Namespaces",
    "difficulty": "Easy",
    "question": "What is variable scope?",
    "options": {
      "A": "Region where a variable name is accessible",
      "B": "Variable data type",
      "C": "Variable size",
      "D": "Function length"
    },
    "answer": "A",
    "solution": "Scope is the region of code where a given variable name can be accessed.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 273,
    "topic": "Scope & Namespaces",
    "difficulty": "Moderate",
    "question": "What is LEGB related to?",
    "options": {
      "A": "Variable name resolution",
      "B": "List sorting",
      "C": "Package installation",
      "D": "File handling"
    },
    "answer": "A",
    "solution": "LEGB (Local, Enclosing, Global, Built-in) is the order Python searches through scopes to resolve a name.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 274,
    "topic": "Scope & Namespaces",
    "difficulty": "Easy",
    "question": "In LEGB, L stands for:",
    "options": {
      "A": "List",
      "B": "Local",
      "C": "Logical",
      "D": "Library"
    },
    "answer": "B",
    "solution": "L is Local — the innermost scope, names assigned in the current function.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 275,
    "topic": "Scope & Namespaces",
    "difficulty": "Easy",
    "question": "In LEGB, G stands for:",
    "options": {
      "A": "Global",
      "B": "General",
      "C": "Generator",
      "D": "Group"
    },
    "answer": "A",
    "solution": "G is Global — names assigned at the top level of the module.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 276,
    "topic": "Scope & Namespaces",
    "difficulty": "Easy",
    "question": "In LEGB, B stands for:",
    "options": {
      "A": "Boolean",
      "B": "Built-in",
      "C": "Binary",
      "D": "Block"
    },
    "answer": "B",
    "solution": "B is Built-in — names Python provides automatically, like `len` or `print`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 277,
    "topic": "Scope & Namespaces",
    "difficulty": "Easy",
    "question": "What is local scope?",
    "options": {
      "A": "Variables accessible only within their relevant local function/block context",
      "B": "Variables accessible from every module",
      "C": "Variables stored on the internet",
      "D": "Package scope only"
    },
    "answer": "A",
    "solution": "Local scope is the set of names that exist only within the current function or block.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 278,
    "topic": "Scope & Namespaces",
    "difficulty": "Easy",
    "question": "What is a global variable?",
    "options": {
      "A": "A variable defined in a global scope",
      "B": "A variable inside a loop only",
      "C": "A function parameter",
      "D": "A temporary list"
    },
    "answer": "A",
    "solution": "A global variable is one defined at the module level, accessible throughout that module.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 279,
    "topic": "Lambda Functions",
    "difficulty": "Easy",
    "question": "What is a lambda function?",
    "options": {
      "A": "Anonymous function expression",
      "B": "Loop function",
      "C": "Class constructor only",
      "D": "Package function"
    },
    "answer": "A",
    "solution": "A lambda is a small, anonymous function written as a single expression, e.g. `lambda x: x+1`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 280,
    "topic": "Lambda Functions",
    "difficulty": "Easy",
    "question": "Which syntax creates a lambda that doubles x?",
    "options": {
      "A": "lambda x: x*2",
      "B": "lambda(x)=x*2",
      "C": "lambda: x*2",
      "D": "def lambda x*2"
    },
    "answer": "A",
    "solution": "`lambda x: x*2` takes x and returns twice its value.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 281,
    "topic": "Lambda Functions",
    "difficulty": "Moderate",
    "question": "Lambda expressions normally contain:",
    "options": {
      "A": "A single expression",
      "B": "Multiple class definitions",
      "C": "Only loops",
      "D": "Import statements"
    },
    "answer": "A",
    "solution": "A lambda body is a single expression — it can't contain statements like `if:` blocks or loops.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 282,
    "topic": "Lambda Functions",
    "difficulty": "Moderate",
    "question": "What is the result of (lambda x:x+5)(3)?",
    "options": {
      "A": "2",
      "B": "5",
      "C": "8",
      "D": "15"
    },
    "answer": "C",
    "solution": "Calling the lambda with x=3 gives 3+5 = 8.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 283,
    "topic": "Lambda Functions",
    "difficulty": "Easy",
    "question": "Which statement about lambda is correct?",
    "options": {
      "A": "Lambda can accept arguments",
      "B": "Lambda cannot return a value",
      "C": "Lambda must have a name",
      "D": "Lambda can only accept one fixed argument"
    },
    "answer": "A",
    "solution": "A lambda can take arguments, just like a regular function — it's just limited to one expression.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 284,
    "topic": "Lambda Functions",
    "difficulty": "Easy",
    "question": "Which expression correctly defines a lambda that adds two numbers?",
    "options": {
      "A": "lambda x,y: x+y",
      "B": "lambda(x,y) = x+y",
      "C": "def lambda x,y",
      "D": "lambda: x,y => x+y"
    },
    "answer": "A",
    "solution": "`lambda x,y: x+y` takes two arguments and returns their sum.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 285,
    "topic": "Lambda Functions",
    "difficulty": "Easy",
    "question": "Which statement about lambda functions is correct?",
    "options": {
      "A": "They can contain arbitrary blocks of statements",
      "B": "They are anonymous function expressions",
      "C": "They cannot accept arguments",
      "D": "They always return a list"
    },
    "answer": "B",
    "solution": "Lambda functions are anonymous — small function expressions defined without a `def` name.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 286,
    "topic": "Lambda Functions",
    "difficulty": "Moderate",
    "question": "What does `lambda x: x + 1` return when called with `4`?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "3",
      "D": "41"
    },
    "answer": "B",
    "solution": "`(lambda x: x + 1)(4)` evaluates to `5`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 287,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "What does map() generally do?",
    "options": {
      "A": "Applies a function to each item",
      "B": "Removes duplicates",
      "C": "Sorts data",
      "D": "Creates a dictionary only"
    },
    "answer": "A",
    "solution": "map(function, iterable) applies the function to every item of the iterable.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 288,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "What does filter() generally do?",
    "options": {
      "A": "Selects items satisfying a condition",
      "B": "Doubles every item",
      "C": "Combines all values",
      "D": "Reverses data"
    },
    "answer": "A",
    "solution": "filter(function, iterable) keeps only the items for which the function returns True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 289,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "Where is reduce() commonly imported from?",
    "options": {
      "A": "math",
      "B": "functools",
      "C": "itertools",
      "D": "collections"
    },
    "answer": "B",
    "solution": "reduce() lives in the functools module: `from functools import reduce`.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 290,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "What does reduce() generally produce?",
    "options": {
      "A": "One accumulated result",
      "B": "Always a list",
      "C": "Always a set",
      "D": "A dictionary"
    },
    "answer": "A",
    "solution": "reduce() folds an iterable down into one accumulated result.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 291,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Moderate",
    "question": "What is a higher-order function?",
    "options": {
      "A": "A function that accepts or returns functions",
      "B": "A function with many lines",
      "C": "A built-in function only",
      "D": "A function with no arguments"
    },
    "answer": "A",
    "solution": "A higher-order function is one that takes another function as an argument, or returns one — like map, filter and reduce.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 292,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Moderate",
    "question": "What type of object does map() return in Python 3?",
    "options": {
      "A": "A map iterator",
      "B": "A list always",
      "C": "A tuple always",
      "D": "A set always"
    },
    "answer": "A",
    "solution": "In Python 3, map() returns a lazy map iterator, not a list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 293,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "What is often done to see all values from map() directly?",
    "options": {
      "A": "list(map(...))",
      "B": "str(map(...)) only",
      "C": "int(map(...))",
      "D": "set only"
    },
    "answer": "A",
    "solution": "Wrapping it as `list(map(...))` forces the lazy iterator into a concrete list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 294,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Moderate",
    "question": "What type of object does filter() return in Python 3?",
    "options": {
      "A": "Filter iterator",
      "B": "List always",
      "C": "Dictionary always",
      "D": "String"
    },
    "answer": "A",
    "solution": "In Python 3, filter() returns a lazy filter iterator, not a list.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 295,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "Which import is correct for reduce?",
    "options": {
      "A": "from functools import reduce",
      "B": "import reduce from functools",
      "C": "from reduce import functools",
      "D": "import functools.reduce"
    },
    "answer": "A",
    "solution": "`from functools import reduce` is the standard way to bring reduce() in.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 296,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Hard",
    "question": "Which concept allows a function to remember an enclosing variable?",
    "options": {
      "A": "Closure",
      "B": "Casting",
      "C": "Slicing",
      "D": "Indexing"
    },
    "answer": "A",
    "solution": "A closure lets an inner function capture and remember a variable from its enclosing scope.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 297,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Moderate",
    "question": "Which statement best describes functional programming tools map, filter and reduce?",
    "options": {
      "A": "They support declarative-style processing of iterables",
      "B": "They are only used for file handling",
      "C": "They replace all Python data structures",
      "D": "They are database commands"
    },
    "answer": "A",
    "solution": "They support a declarative style — describing *what* transformation to apply to an iterable, rather than writing an explicit loop.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 298,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Moderate",
    "question": "Which sequence correctly matches the operation to the tool?",
    "options": {
      "A": "map→transform, filter→select, reduce→accumulate",
      "B": "map→select, filter→accumulate, reduce→transform",
      "C": "map→sort, filter→delete, reduce→print",
      "D": "All three perform identical operations"
    },
    "answer": "A",
    "solution": "map transforms every element, filter selects some of them, and reduce accumulates them into one result.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 299,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "What does `map()` generally do?",
    "options": {
      "A": "Applies a function to items of an iterable",
      "B": "Sorts a dictionary",
      "C": "Removes duplicates",
      "D": "Creates a class"
    },
    "answer": "A",
    "solution": "map(function, iterable) applies the function to every item of the iterable.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 300,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "What does `filter()` generally do?",
    "options": {
      "A": "Selects items satisfying a condition",
      "B": "Converts strings to numbers",
      "C": "Sorts items",
      "D": "Joins lists"
    },
    "answer": "A",
    "solution": "filter(function, iterable) keeps only the items for which the function returns True.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 301,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "Which module commonly provides `reduce()`?",
    "options": {
      "A": "math",
      "B": "functools",
      "C": "itertools_only",
      "D": "collections_only"
    },
    "answer": "B",
    "solution": "reduce() lives in the functools module.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 302,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "What does `reduce()` generally do?",
    "options": {
      "A": "Reduces an iterable to a single accumulated result",
      "B": "Removes a list",
      "C": "Creates a dictionary",
      "D": "Filters keys"
    },
    "answer": "A",
    "solution": "reduce() folds an iterable down into a single accumulated result by combining elements pairwise.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 303,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "Which statement correctly imports reduce?",
    "options": {
      "A": "from functools import reduce",
      "B": "import reduce from functools",
      "C": "from reduce import functools",
      "D": "import functools.reduce"
    },
    "answer": "A",
    "solution": "`from functools import reduce` is the standard way to bring reduce() in.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 304,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Easy",
    "question": "Which is an example of functional programming in Python?",
    "options": {
      "A": "Using map/filter with functions",
      "B": "Only using classes",
      "C": "Only using loops",
      "D": "Installing packages"
    },
    "answer": "A",
    "solution": "Using map/filter together with functions is the classic example of Python's functional-programming style.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 305,
    "topic": "Map, Filter & Reduce",
    "difficulty": "Moderate",
    "question": "Which combination correctly matches the functional tools?",
    "options": {
      "A": "map→transform, filter→select, reduce→accumulate",
      "B": "map→select, filter→accumulate, reduce→transform",
      "C": "map→accumulate, filter→transform, reduce→select",
      "D": "All three perform exactly the same task"
    },
    "answer": "A",
    "solution": "map transforms every element, filter selects some of them, and reduce accumulates them into one result.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 306,
    "topic": "Built-in Functions",
    "difficulty": "Easy",
    "question": "What does enumerate() commonly provide?",
    "options": {
      "A": "Index-value pairs while iterating",
      "B": "Only values",
      "C": "Only indexes",
      "D": "Sorted values"
    },
    "answer": "A",
    "solution": "enumerate() yields (index, value) pairs while you iterate over a sequence.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 307,
    "topic": "Built-in Functions",
    "difficulty": "Moderate",
    "question": "What is the result of `len({1,1,2,3})`?",
    "options": {
      "A": "4",
      "B": "3",
      "C": "2",
      "D": "1"
    },
    "answer": "B",
    "solution": "`{1,1,2,3}` is a set literal, so the duplicate 1 collapses — leaving 3 unique elements.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 308,
    "topic": "Mixed Practice",
    "difficulty": "Easy",
    "question": "Which combination covers the major topics of this unit?",
    "options": {
      "A": "Lists, tuples, sets, dictionaries, functions and functional programming",
      "B": "Classes, exceptions, files and networking only",
      "C": "NumPy, TensorFlow and PyTorch only",
      "D": "HTML, CSS and JavaScript"
    },
    "answer": "A",
    "solution": "This unit's core topics are lists, tuples, sets, dictionaries, functions, and functional-programming tools.",
    "unit": 5,
    "kind": "mcq"
  },
  {
    "num": 309,
    "topic": "Mixed Practice",
    "difficulty": "Easy",
    "question": "Which combination correctly represents Python's basic control flow tools?",
    "options": {
      "A": "if, for, while",
      "B": "class, import, print",
      "C": "list, tuple, set",
      "D": "int, float, str"
    },
    "answer": "A",
    "solution": "Python's basic control-flow tools are the `if` conditional and the `for`/`while` loops.",
    "unit": 5,
    "kind": "mcq"
  }
]);
