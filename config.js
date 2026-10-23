/* ==========================================================
   config.js - EDIT YOUR PERSONAL DETAILS HERE
   Details below come from your resume. Anything left as ""
   is shown as "not added yet" on the site (no broken links).
   ========================================================== */
const siteConfig = {
  name: "Madhumitha",
  role: "Aspiring Software Developer | Full-Stack Developer",
  headline: "Building Digital Experiences with Code.",
  intro: "I am an Information Technology student passionate about software development, full-stack web applications, and solving real-world problems through technology.",

  // Square photo (about 600x600). If the file is missing, the placeholder image is used.
  profileImage: "assets/images/profile.jpg",

  // Resume file is included at assets/resume.pdf
  resume: { path: "assets/resume.pdf", available: true },

  links: {
    email: "madhumithasankar1336@gmail.com",
    github: "https://github.com/Madhumithasankar",   // built from your resume username: check it opens your profile
    linkedin: ""   // your resume has no LinkedIn URL. Paste it here, e.g. "https://www.linkedin.com/in/your-profile"
  },

  // Optional: paste a Formspree (or similar) endpoint so the contact form really sends.
  // Leave "" and the form validates but does NOT claim to send anything.
  formEndpoint: "",

  about: {
    paragraphs: [
      "I am a B.Tech Information Technology student who enjoys turning ideas into working software. I build responsive, database-driven web applications with React.js, Node.js, Express.js, MongoDB and MySQL, and I learn best by making practical projects.",
      "I am especially interested in Java, Data Structures and Algorithms, and full-stack development. I also enjoy artificial intelligence, open source, and learning new technologies to solve real problems."
    ],
    cards: [
      { icon: "fa-bullseye", title: "Current Focus", text: "Building full-stack projects with the MERN stack while strengthening Java and problem-solving with Data Structures and Algorithms." },
      { icon: "fa-lightbulb", title: "Technical Interests", text: "Full-stack development, Data Structures and Algorithms, Java, Artificial Intelligence and open source." },
      { icon: "fa-flag-checkered", title: "Career Goal", text: "To contribute to real-world software projects as a software developer and keep improving my development and engineering skills." }
    ]
  },

  // Add, remove or rename categories and items freely. No percentages are shown.
  skills: [
    { category: "Programming Languages", icon: "fa-terminal", items: ["Java", "C", "Python", "JavaScript", "SQL"] },
    { category: "Frontend", icon: "fa-laptop-code", items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"] },
    { category: "Backend", icon: "fa-server", items: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Databases", icon: "fa-database", items: ["MongoDB", "MySQL"] },
    { category: "Core Concepts", icon: "fa-brain", items: ["Data Structures and Algorithms", "Object-Oriented Programming", "Machine Learning basics", "Data Visualization"] },
    { category: "Tools", icon: "fa-screwdriver-wrench", items: ["Git", "GitHub", "MS Excel", "MS Word"] }
  ],

  education: [
    {
      institution: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
      department: "Information Technology",
      degree: "B.Tech in Information Technology",
      year: "2024 - 2028",
      extra: "CGPA: 8.27"
    },
    {
      institution: "Government Girls Higher Secondary School, Vellore",
      department: "",
      degree: "Higher Secondary (HSC)",
      year: "2024",
      extra: "85%"
    },
    {
      institution: "Government Girls Higher Secondary School, Vellore",
      department: "",
      degree: "Secondary School (SSLC)",
      year: "2020",
      extra: "75%"
    }
  ],

  // Work and training from your resume
  experience: [
    {
      title: "Machine Learning Intern, Corizo (Stock Price Prediction)",
      period: "Jan 2026 - Feb 2026",
      points: ["Analyzed historical stock data and visualized price trends using Python.", "Built a machine learning model to predict future stock prices."],
      tech: ["Python", "Machine Learning", "Data Visualization"]
    },
    {
      title: "Machine Learning Trainee, Corizo",
      period: "Jul 2025 - Aug 2025",
      points: ["Completed hands-on training in Python, data preprocessing, data analysis, data visualization and basic machine learning techniques."],
      tech: ["Python", "Data Preprocessing", "Data Analysis", "Data Visualization"]
    }
  ],

  // Verified items from your resume. Add a "url" for a certificate link if you have one.
  achievements: [
    { type: "Hackathon", title: "Participant, Adobe University Hackathon", issuer: "Team project on real-world technology challenges", date: "9 August 2026" },
    { type: "Hackathon", title: "Participant, Hack Devengers 2.0", issuer: "In association with Major League Hacking", date: "" },
    { type: "Coding contest", title: "Participant, Coding Contest of Aven Coding Hackathon 2.0", issuer: "Organised by Kartexa via Unstop", date: "" },
    { type: "Certificate of Participation", title: "TVS Credit E.P.I.C 8.0 - IT Challenge", issuer: "Team Codens", date: "10 October 2026" }
  ]
};
