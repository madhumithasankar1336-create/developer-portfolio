/* ==========================================================
   projects.js - ADD, REMOVE OR EDIT PROJECTS HERE
   Each project is one object in the list below.
   - demoUrl / repoUrl: leave "" to show "Coming Soon" (no broken links)
   - image: optional path such as "assets/images/projects/careerconnect.png".
            If empty or missing, a colored icon placeholder is shown.
   - hue: 0-360 sets the placeholder color. icon: any Font Awesome class.
   Projects below come from your resume. Add your GitHub repo links
   in repoUrl as you publish each one.
   ========================================================== */
const projects = [
  {
    id: "careerconnect",
    title: "CareerConnect: Job & Internship Platform",
    status: "In progress",
    short: "A MERN stack platform that helps students discover and apply for jobs and internships.",
    description: "A responsive platform to help students discover and apply for job and internship opportunities. Work on it is ongoing.",
    tech: ["React.js", "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "MongoDB"],
    features: ["Job and internship listings", "Student and company sections", "Search and browse", "Application management"],
    icon: "fa-briefcase", hue: 215, image: "", demoUrl: "", repoUrl: ""
  },
  {
    id: "smartware",
    title: "Digital Twin for Smart Warehouse Optimization",
    status: "Jul 2026 - Oct 2026",
    short: "A software-based digital twin and cyber-physical system for real-time smart warehouse monitoring.",
    description: "A software-based digital twin for real-time smart-warehouse monitoring that works without physical hardware.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["Inventory tracking", "Automated guided vehicle (AGV) simulation", "Alerts", "Optimization"],
    icon: "fa-warehouse", hue: 250, image: "", demoUrl: "", repoUrl: ""
  },
  {
    id: "foodshare",
    title: "FoodShare AI: Food Donation Platform",
    status: "Jun 2026 - Jul 2026",
    short: "A full-stack food donation platform that matches restaurants with NGOs.",
    description: "A full-stack food donation platform with secure login and restaurant-NGO matching.",
    tech: ["React.js", "Node.js", "MongoDB"],
    features: ["Secure login", "Restaurant-NGO matching", "Food donation tracking", "Volunteer management"],
    icon: "fa-hand-holding-heart", hue: 160, image: "", demoUrl: "", repoUrl: ""
  },
  {
    id: "healthcare-ml",
    title: "Smart AI-Based Healthcare System",
    status: "Jan 2026 - May 2026",
    short: "A machine-learning application that predicts diseases from patient data.",
    description: "A machine-learning-based application for disease prediction using patient data, built to support clinical decision-making by improving diagnosis accuracy.",
    tech: ["Machine Learning", "Java", "HTML", "CSS", "JavaScript", "MySQL"],
    features: ["Disease prediction from patient data", "Support for clinical decision-making"],
    icon: "fa-heart-pulse", hue: 340, image: "", demoUrl: "", repoUrl: ""
  },
  {
    id: "price-compare",
    title: "E-Commerce Price Comparison Platform",
    status: "Jul 2025 - Nov 2025",
    short: "A web platform that compares product prices and offers across shopping websites.",
    description: "A web platform comparing product prices and offers across multiple shopping websites, with redirection to the platform that has the best price.",
    tech: ["React.js", "Node.js", "MongoDB"],
    features: ["Product search", "Price and offer comparison", "Redirection to the best-price platform"],
    icon: "fa-tags", hue: 35, image: "", demoUrl: "", repoUrl: ""
  },
  {
    id: "sankar-catering",
    title: "Sankar Catering Service Website",
    status: "Website project",
    short: "A website that showcases catering services, event menus and contact information.",
    description: "A website that showcases catering services, event menus and contact information for a catering business.",
    tech: ["React.js", "CSS", "JavaScript"],
    features: ["Responsive design", "Event menu cards", "Service details", "Owner contact information"],
    icon: "fa-utensils", hue: 20, image: "", demoUrl: "", repoUrl: ""
  }

  /* Project ideas from your first brief. Copy one into the list above (add a comma) to show it again.
  {
    id: "waste2value", title: "Waste2Value: AI Waste Classification", status: "Concept",
    short: "A project concept that identifies waste materials and suggests useful reuse or upcycling ideas.",
    description: "A project concept that identifies waste materials and suggests reuse or upcycling ideas. Features are planned, not built.",
    tech: ["React.js", "JavaScript", "Node.js", "AI integration"],
    features: ["Waste image upload", "Material identification", "Reuse suggestions", "Environmental impact information"],
    icon: "fa-recycle", hue: 160, image: "", demoUrl: "", repoUrl: ""
  },
  {
    id: "learngap", title: "LearnGap AI: Personalized Learning Assistant", status: "Concept",
    short: "A learning assistant concept that helps students find knowledge gaps.",
    description: "A learning assistant concept that helps students identify knowledge gaps. Features are planned, not built.",
    tech: ["React.js", "JavaScript", "Node.js", "AI integration"],
    features: ["Topic-based learning", "Knowledge gap identification", "Personalized recommendations"],
    icon: "fa-graduation-cap", hue: 230, image: "", demoUrl: "", repoUrl: ""
  },
  {
    id: "civiclens", title: "CivicLens AI: Community Problem Reporting", status: "Concept",
    short: "A web app concept for reporting local community problems.",
    description: "A web application concept that helps people report local community problems and explore solutions. Features are planned, not built.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["Problem reporting", "Image uploads", "Issue categories", "Solution suggestions"],
    icon: "fa-city", hue: 200, image: "", demoUrl: "", repoUrl: ""
  }
  */
];
