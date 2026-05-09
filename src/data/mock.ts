export const jobs = [
  { id: '1', title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', experience: '1-3 Yrs', salary: '$80k - $100k', type: 'Full Time', tags: ['React', 'Next.js', 'CSS'], status: 'Verified' },
  { id: '2', title: 'Backend Engineer', company: 'DataSystems', location: 'New York, NY', experience: '3-5 Yrs', salary: '$120k - $150k', type: 'Full Time', tags: ['Node.js', 'PostgreSQL', 'AWS'], status: 'Verified' },
  { id: '3', title: 'Software Development Engineer', company: 'BigTech', location: 'Seattle, WA', experience: '0-2 Yrs', salary: '$110k - $130k', type: 'Full Time', tags: ['Java', 'Spring Boot', 'DSA'], status: 'Closed' },
  { id: '4', title: 'UI/UX Designer', company: 'CreativeStudio', location: 'Remote', experience: '2+ Yrs', salary: '$70k - $90k', type: 'Contract', tags: ['Figma', 'Prototyping', 'User Research'], status: 'Verified' },
  { id: '5', title: 'Data Entry / Analyst', company: 'Unknown LLC', location: 'Remote', experience: '0-1 Yrs', salary: '$200k', type: 'Part Time', tags: ['Data Entry', 'Excel'], status: 'Suspicious' },
  { id: '6', title: 'AI Research Scientist', company: 'OpenAI', location: 'San Francisco, CA', experience: '4-6 Yrs', salary: '$200k - $300k', type: 'Full Time', tags: ['Python', 'PyTorch', 'LLMs'], status: 'Verified' },
  { id: '7', title: 'Smart Contract Developer', company: 'Web3 Labs', location: 'Remote', experience: '2-4 Yrs', salary: '$150k - $180k', type: 'Full Time', tags: ['Solidity', 'Ethereum', 'Rust'], status: 'Verified' },
  { id: '8', title: 'Cloud Solutions Architect', company: 'Amazon Web Services', location: 'Austin, TX', experience: '5+ Yrs', salary: '$160k - $210k', type: 'Full Time', tags: ['AWS', 'Kubernetes', 'Terraform'], status: 'Verified' },
  { id: '9', title: 'Full Stack Engineer', company: 'Vercel', location: 'Remote', experience: '3-5 Yrs', salary: '$130k - $170k', type: 'Full Time', tags: ['Next.js', 'TypeScript', 'Node.js'], status: 'Verified' },
  { id: '10', title: 'Crypto Trader Analyst', company: 'EasyMoney Crypto', location: 'Remote', experience: '0-1 Yrs', salary: '$500k', type: 'Full Time', tags: ['Crypto', 'Telegram', 'Trading'], status: 'Suspicious' },
  { id: '11', title: 'DevOps Engineer', company: 'Stripe', location: 'Dublin, IE', experience: '3+ Yrs', salary: '€90k - €120k', type: 'Full Time', tags: ['CI/CD', 'Docker', 'Linux'], status: 'Verified' },
  { id: '12', title: 'Mobile App Developer', company: 'Uber', location: 'London, UK', experience: '2-4 Yrs', salary: '£80k - £110k', type: 'Full Time', tags: ['Swift', 'Kotlin', 'React Native'], status: 'Verified' },
  { id: '13', title: 'Data Engineer', company: 'Netflix', location: 'Los Gatos, CA', experience: '4+ Yrs', salary: '$180k - $240k', type: 'Full Time', tags: ['Spark', 'Python', 'SQL'], status: 'Closed' },
  { id: '14', title: 'Cybersecurity Analyst', company: 'CrowdStrike', location: 'Remote', experience: '2-5 Yrs', salary: '$110k - $150k', type: 'Full Time', tags: ['Security', 'Network', 'SIEM'], status: 'Verified' },
  { id: '15', title: 'Typing Job From Home', company: 'Quick Cash Inc.', location: 'Remote', experience: '0 Yrs', salary: '$50/hr', type: 'Part Time', tags: ['Typing', 'No Experience'], status: 'Suspicious' },
  { id: '16', title: 'Game Developer', company: 'Epic Games', location: 'Cary, NC', experience: '3-6 Yrs', salary: '$120k - $160k', type: 'Full Time', tags: ['C++', 'Unreal Engine', '3D Math'], status: 'Verified' },
  { id: '17', title: 'Site Reliability Engineer', company: 'Google', location: 'Mountain View, CA', experience: '5+ Yrs', salary: '$170k - $250k', type: 'Full Time', tags: ['Go', 'Python', 'Distributed Systems'], status: 'Verified' },
  { id: '18', title: 'Frontend Intern', company: 'Discord', location: 'Remote', experience: '0-1 Yrs', salary: '$40/hr', type: 'Internship', tags: ['React', 'Redux', 'TypeScript'], status: 'Closed' },
  { id: '19', title: 'Machine Learning Engineer', company: 'Meta', location: 'Menlo Park, CA', experience: '3-5 Yrs', salary: '$160k - $220k', type: 'Full Time', tags: ['C++', 'PyTorch', 'Recommendation Systems'], status: 'Verified' },
  { id: '20', title: 'Blockchain Security Auditor', company: 'CertiK', location: 'Remote', experience: '2+ Yrs', salary: '$140k - $190k', type: 'Full Time', tags: ['Security', 'Solidity', 'Cryptography'], status: 'Verified' }
];

export const prepCategories = [
  { id: 'aptitude', title: 'Aptitude', icon: '🧮', description: 'Quantitative, Logical Reasoning, and Verbal Ability.', modules: ['Number System', 'Probability', 'Puzzles'] },
  { id: 'dsa', title: 'Data Structures & Algorithms', icon: '🧠', description: 'Master core CS concepts and problem-solving.', modules: ['Arrays', 'Trees', 'Dynamic Programming', 'Greedy', 'Bitwise'] },
  { id: 'technical', title: 'Core Technical', icon: '💻', description: 'OS, DBMS, Computer Networks, and System Design.', modules: ['Operating Systems', 'DBMS', 'System Design'] },
  { id: 'fullstack', title: 'Full-Stack Development', icon: '🚀', description: 'Modern web development frameworks and architecture.', modules: ['Next.js App Router', 'FastAPI Backend', 'Real-time Systems'] },
  { id: 'hr', title: 'HR Interview', icon: '🤝', description: 'Behavioral questions, communication, and mock interviews.', modules: ['Common Questions', 'Resume Building', 'Mock Scenarios'] }
];

export const companies = [
  { id: 'tcs', name: 'Tata Consultancy Services (TCS)', logo: '🏢', role: 'Ninja & Digital', examPattern: ['Quants (20 mins)', 'Programming Logic (15 mins)', 'Coding (45 mins)'], eligibility: 'B.Tech/M.Tech with 60% throughout.' },
  { id: 'infosys', name: 'Infosys', logo: '🌐', role: 'System Engineer', examPattern: ['Logical Reasoning', 'Mathematical Ability', 'Verbal Ability', 'Pseudocode'], eligibility: '60% or 6 CGPA in all academics.' },
  { id: 'amazon', name: 'Amazon', logo: '📦', role: 'SDE I', examPattern: ['Code Debugging', 'Coding (2 problems)', 'Workstyles Assessment'], eligibility: 'B.Tech CS/IT with strong DSA skills.' },
  { id: 'google', name: 'Google', logo: '🔍', role: 'Software Engineer', examPattern: ['Phone Screen (DSA)', 'Onsite (4-5 DSA/System Design rounds)'], eligibility: 'Exceptional problem solving skills.' },
  { id: 'microsoft', name: 'Microsoft', logo: '🪟', role: 'Software Engineer', examPattern: ['Online Assessment (2 Qs)', 'Technical Interviews (3 rounds)', 'As-Approp'], eligibility: 'B.Tech/M.Tech with strong coding fundamentals.' },
  { id: 'meta', name: 'Meta', logo: '♾️', role: 'Frontend Engineer', examPattern: ['Screening', 'Coding (React/JS)', 'System Design (UI)', 'Behavioral'], eligibility: 'Deep knowledge of React and web performance.' },
  { id: 'apple', name: 'Apple', logo: '🍎', role: 'iOS Developer', examPattern: ['Take-home project', 'Technical Deep Dive', 'Team Fit'], eligibility: 'Swift/Objective-C mastery.' },
  { id: 'netflix', name: 'Netflix', logo: '🍿', role: 'Senior Software Engineer', examPattern: ['Core Values Interview', 'System Design', 'Domain Expertise'], eligibility: '5+ years experience, highly autonomous.' },
  { id: 'stripe', name: 'Stripe', logo: '💳', role: 'Backend Engineer', examPattern: ['Bug Smash', 'Integration', 'System Design', 'Manager Chat'], eligibility: 'Ruby/Java experience, API design skills.' },
  { id: 'vercel', name: 'Vercel', logo: '▲', role: 'Developer Advocate', examPattern: ['Technical Content Creation', 'Live Coding', 'Culture Fit'], eligibility: 'Next.js expertise, strong communication.' },
  { id: 'openai', name: 'OpenAI', logo: '🤖', role: 'Research Engineer', examPattern: ['Math/ML Fundamentals', 'Coding (Python/C++)', 'Research Discussion'], eligibility: 'Strong background in deep learning.' },
  { id: 'uber', name: 'Uber', logo: '🚕', role: 'Data Engineer', examPattern: ['SQL Round', 'Data Modeling', 'System Design (Data pipelines)'], eligibility: 'Experience with big data tools.' }
];

export const dsaTopics = [
  {
    topic: 'Arrays & Hashing',
    problems: [
      { id: 'a1', title: 'Two Sum', difficulty: 'Easy', link: '#' },
      { id: 'a2', title: 'Valid Anagram', difficulty: 'Easy', link: '#' },
      { id: 'a3', title: 'Contains Duplicate', difficulty: 'Easy', link: '#' },
      { id: 'a4', title: 'Group Anagrams', difficulty: 'Medium', link: '#' },
      { id: 'a5', title: 'Top K Frequent Elements', difficulty: 'Medium', link: '#' },
      { id: 'a6', title: 'Product of Array Except Self', difficulty: 'Medium', link: '#' },
      { id: 'a7', title: 'Valid Sudoku', difficulty: 'Medium', link: '#' },
      { id: 'a8', title: 'Encode and Decode Strings', difficulty: 'Medium', link: '#' },
      { id: 'a9', title: 'Longest Consecutive Sequence', difficulty: 'Medium', link: '#' }
    ]
  },
  {
    topic: 'Two Pointers',
    problems: [
      { id: 'tp1', title: 'Valid Palindrome', difficulty: 'Easy', link: '#' },
      { id: 'tp2', title: 'Two Sum II', difficulty: 'Medium', link: '#' },
      { id: 'tp3', title: '3Sum', difficulty: 'Medium', link: '#' },
      { id: 'tp4', title: 'Container With Most Water', difficulty: 'Medium', link: '#' },
      { id: 'tp5', title: 'Trapping Rain Water', difficulty: 'Hard', link: '#' }
    ]
  },
  {
    topic: 'Stack',
    problems: [
      { id: 's1', title: 'Valid Parentheses', difficulty: 'Easy', link: '#' },
      { id: 's2', title: 'Min Stack', difficulty: 'Medium', link: '#' },
      { id: 's3', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', link: '#' },
      { id: 's4', title: 'Generate Parentheses', difficulty: 'Medium', link: '#' },
      { id: 's5', title: 'Daily Temperatures', difficulty: 'Medium', link: '#' },
      { id: 's6', title: 'Car Fleet', difficulty: 'Medium', link: '#' },
      { id: 's7', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', link: '#' }
    ]
  },
  {
    topic: 'Linked List',
    problems: [
      { id: 'l1', title: 'Reverse Linked List', difficulty: 'Easy', link: '#' },
      { id: 'l2', title: 'Merge Two Sorted Lists', difficulty: 'Easy', link: '#' },
      { id: 'l3', title: 'Reorder List', difficulty: 'Medium', link: '#' },
      { id: 'l4', title: 'Remove Nth Node From End of List', difficulty: 'Medium', link: '#' },
      { id: 'l5', title: 'Copy List with Random Pointer', difficulty: 'Medium', link: '#' },
      { id: 'l6', title: 'Add Two Numbers', difficulty: 'Medium', link: '#' },
      { id: 'l7', title: 'Linked List Cycle', difficulty: 'Easy', link: '#' },
      { id: 'l8', title: 'Find the Duplicate Number', difficulty: 'Medium', link: '#' },
      { id: 'l9', title: 'LRU Cache', difficulty: 'Medium', link: '#' },
      { id: 'l10', title: 'Merge k Sorted Lists', difficulty: 'Hard', link: '#' },
      { id: 'l11', title: 'Reverse Nodes in k-Group', difficulty: 'Hard', link: '#' }
    ]
  },
  {
    topic: 'Trees',
    problems: [
      { id: 'tr1', title: 'Invert Binary Tree', difficulty: 'Easy', link: '#' },
      { id: 'tr2', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', link: '#' },
      { id: 'tr3', title: 'Diameter of Binary Tree', difficulty: 'Easy', link: '#' },
      { id: 'tr4', title: 'Balanced Binary Tree', difficulty: 'Easy', link: '#' },
      { id: 'tr5', title: 'Same Tree', difficulty: 'Easy', link: '#' },
      { id: 'tr6', title: 'Subtree of Another Tree', difficulty: 'Easy', link: '#' },
      { id: 'tr7', title: 'Lowest Common Ancestor of a BST', difficulty: 'Medium', link: '#' },
      { id: 'tr8', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', link: '#' },
      { id: 'tr9', title: 'Binary Tree Right Side View', difficulty: 'Medium', link: '#' },
      { id: 'tr10', title: 'Count Good Nodes in Binary Tree', difficulty: 'Medium', link: '#' },
      { id: 'tr11', title: 'Validate Binary Search Tree', difficulty: 'Medium', link: '#' },
      { id: 'tr12', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', link: '#' },
      { id: 'tr13', title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', link: '#' },
      { id: 'tr14', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', link: '#' },
      { id: 'tr15', title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', link: '#' }
    ]
  },
  {
    topic: 'Dynamic Programming',
    problems: [
      { id: 'dp1', title: 'Climbing Stairs', difficulty: 'Easy', link: '#' },
      { id: 'dp2', title: 'Min Cost Climbing Stairs', difficulty: 'Easy', link: '#' },
      { id: 'dp3', title: 'House Robber', difficulty: 'Medium', link: '#' },
      { id: 'dp4', title: 'House Robber II', difficulty: 'Medium', link: '#' },
      { id: 'dp5', title: 'Longest Palindromic Substring', difficulty: 'Medium', link: '#' },
      { id: 'dp6', title: 'Palindromic Substrings', difficulty: 'Medium', link: '#' },
      { id: 'dp7', title: 'Decode Ways', difficulty: 'Medium', link: '#' },
      { id: 'dp8', title: 'Coin Change', difficulty: 'Medium', link: '#' },
      { id: 'dp9', title: 'Maximum Product Subarray', difficulty: 'Medium', link: '#' },
      { id: 'dp10', title: 'Word Break', difficulty: 'Medium', link: '#' },
      { id: 'dp11', title: 'Longest Increasing Subsequence', difficulty: 'Medium', link: '#' },
      { id: 'dp12', title: 'Partition Equal Subset Sum', difficulty: 'Medium', link: '#' }
    ]
  },
  {
    topic: 'Graphs',
    problems: [
      { id: 'gr1', title: 'Number of Islands', difficulty: 'Medium', link: '#' },
      { id: 'gr2', title: 'Clone Graph', difficulty: 'Medium', link: '#' },
      { id: 'gr3', title: 'Max Area of Island', difficulty: 'Medium', link: '#' },
      { id: 'gr4', title: 'Pacific Atlantic Water Flow', difficulty: 'Medium', link: '#' },
      { id: 'gr5', title: 'Surrounded Regions', difficulty: 'Medium', link: '#' },
      { id: 'gr6', title: 'Rotting Oranges', difficulty: 'Medium', link: '#' },
      { id: 'gr7', title: 'Walls and Gates', difficulty: 'Medium', link: '#' },
      { id: 'gr8', title: 'Course Schedule', difficulty: 'Medium', link: '#' },
      { id: 'gr9', title: 'Course Schedule II', difficulty: 'Medium', link: '#' },
      { id: 'gr10', title: 'Redundant Connection', difficulty: 'Medium', link: '#' },
      { id: 'gr11', title: 'Number of Connected Components In An Undirected Graph', difficulty: 'Medium', link: '#' },
      { id: 'gr12', title: 'Graph Valid Tree', difficulty: 'Medium', link: '#' },
      { id: 'gr13', title: 'Word Ladder', difficulty: 'Hard', link: '#' }
    ]
  }
];

export const studyHubData = [
  {
    topic_id: "dp_intro",
    title: "Dynamic Programming: Memoization & Tabulation",
    technical_explanation: "Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable when the subproblems overlap and have optimal substructure.",
    time_complexity: "O(N) for 1D DP",
    space_complexity: "O(N) or O(1) with space optimization",
    code_examples: [
      {
        language: "C++",
        code: "int fib(int n, vector<int>& dp) {\n  if(n <= 1) return n;\n  if(dp[n] != -1) return dp[n];\n  return dp[n] = fib(n-1, dp) + fib(n-2, dp);\n}",
        interactive: true
      }
    ],
    practice_problems: [
      { title: "Climbing Stairs", url: "#", difficulty: "Easy" },
      { title: "House Robber", url: "#", difficulty: "Medium" }
    ]
  },
  {
    topic_id: "dp_advanced",
    title: "Advanced DP: Knapsack and 2D Grids",
    technical_explanation: "0/1 Knapsack is a classic DP problem where you have constraints (like weight) and want to maximize value. 2D grids often require O(M*N) DP tables.",
    time_complexity: "O(N*W) or O(M*N)",
    space_complexity: "O(N*W), optimized to O(W)",
    code_examples: [
      {
        language: "Python",
        code: "def knapsack(W, wt, val, n):\n    dp = [0 for i in range(W+1)]\n    for i in range(1, n+1):\n        for w in range(W, 0, -1):\n            if wt[i-1] <= w:\n                dp[w] = max(dp[w], dp[w-wt[i-1]] + val[i-1])\n    return dp[W]",
        interactive: false
      }
    ],
    practice_problems: [
      { title: "Partition Equal Subset Sum", url: "#", difficulty: "Medium" },
      { title: "Unique Paths", url: "#", difficulty: "Medium" }
    ]
  },
  {
    topic_id: "greedy_intro",
    title: "Greedy Algorithms: Local Optimums",
    technical_explanation: "A greedy algorithm builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. Often relies on sorting first.",
    time_complexity: "O(N log N) typically due to sorting",
    space_complexity: "O(1) excluding output array",
    code_examples: [
      {
        language: "C++",
        code: "int findContentChildren(vector<int>& g, vector<int>& s) {\n  sort(g.begin(), g.end());\n  sort(s.begin(), s.end());\n  int i = 0, j = 0;\n  while(i < g.size() && j < s.size()) {\n    if(s[j] >= g[i]) i++;\n    j++;\n  }\n  return i;\n}",
        interactive: true
      }
    ],
    practice_problems: [
      { title: "Assign Cookies", url: "#", difficulty: "Easy" },
      { title: "Jump Game", url: "#", difficulty: "Medium" }
    ]
  },
  {
    topic_id: "graph_traversal",
    title: "Graphs: BFS vs DFS",
    technical_explanation: "Breadth-First Search (BFS) is used for shortest path on unweighted graphs using a Queue. Depth-First Search (DFS) goes deep first using recursion or a Stack, great for connected components.",
    time_complexity: "O(V + E)",
    space_complexity: "O(V)",
    code_examples: [
      {
        language: "Python",
        code: "def bfs(graph, start):\n    visited, queue = set(), [start]\n    visited.add(start)\n    while queue:\n        vertex = queue.pop(0)\n        for neighbor in graph[vertex]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)",
        interactive: false
      }
    ],
    practice_problems: [
      { title: "Number of Islands", url: "#", difficulty: "Medium" },
      { title: "Rotting Oranges", url: "#", difficulty: "Medium" }
    ]
  },
  {
    topic_id: "fs_fastapi",
    title: "FastAPI: Asynchronous Backends",
    technical_explanation: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.",
    time_complexity: "High Concurrency (AsyncIO)",
    space_complexity: "Low memory footprint",
    code_examples: [
      {
        language: "Python",
        code: "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get('/')\nasync def root():\n    return {'message': 'Hello World'}",
        interactive: false
      }
    ],
    practice_problems: [
      { title: "Build a CRUD API", url: "#", difficulty: "Medium" },
      { title: "Dependency Injection in FastAPI", url: "#", difficulty: "Hard" }
    ]
  },
  {
    topic_id: "fs_nextjs",
    title: "Next.js: Server Components & Actions",
    technical_explanation: "Next.js App Router utilizes React Server Components by default. This ships zero JS to the client for UI components, resulting in blazing fast loads. Server Actions allow forms to directly mutate server data.",
    time_complexity: "Build-time SSG / Runtime SSR",
    space_complexity: "Optimized chunks",
    code_examples: [
      {
        language: "TypeScript",
        code: "export default async function Page() {\n  const data = await fetch('https://api.example.com/data');\n  const res = await data.json();\n  return <div>{res.name}</div>;\n}",
        interactive: false
      }
    ],
    practice_problems: [
      { title: "Implement Auth.js", url: "#", difficulty: "Medium" },
      { title: "Server Action Form", url: "#", difficulty: "Medium" }
    ]
  }
];
