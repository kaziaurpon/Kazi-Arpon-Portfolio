

const PORTFOLIO = {
  name: "Kazi Sajedul Mahbub Arpon",
  designation: "Full Stack Developer",
tagline:
  "Computer Science student building fast, responsive full-stack web apps with React, Next.js and Node.js.",
  photo: "assets/aurpon.jpg", 
  resume: "assets/resume.pdf", 

  socials: [
    { name: "GitHub", short: "GH", url: "https://github.com/kaziaurpon" }, // TODO: your profile URL
    { name: "LinkedIn", short: "in", url: "https://www.linkedin.com/in/kazi-arpon" }, // TODO
    { name: "Facebook", short: "f", url: "https://www.facebook.com/KaziAurpon75" }, // TODO
    { name: "Twitter", short: "X", url: "https://x.com/kazi_aurpon" } // TODO
  ],

  about: {
    paragraphs: [ 
     
  "Hi, I'm Kazi Sajedul Mahbub Arpon, a Computer Science and Engineering student at Daffodil International University who loves turning ideas into fast, clean and useful web applications. My programming journey began with curiosity about how the websites we use every day actually work, and it has since grown into building full-stack projects with React, Next.js and Node.js. Along the way I created Bazar-Dor, a Bangla app that tracks daily bazaar prices, and FitLog, a workout planner, and I placed 7th in the AI DevFest 2026 Vibe Coding contest.",
  "Through my coursework in Computer Networks, Compiler Design, Database Management Systems and Software Engineering, I have learned how software works from the network layer up to the interface. I enjoy leading group projects, breaking big problems into small tasks, and helping the team ship something we are proud of.",
  "Outside of code, I enjoy experimenting with new AI tools, building small side projects, solving math problems, learning new languages (currently German), reading books, and playing cricket. I'm curious, always learning, and I like to keep things simple and well organized."
],
    
    facts: [
      { label: "Focus", value: "Web development" },
      { label: "Role in teams", value: "Project lead" },
      { label: "Currently", value: "Computer Science student" },
      { label: "Interests", value: "AI tools, Problem solving, Cricket" }
    ]
  },

  skills: [
  { title: "Frontend", items: [
    { name: "HTML5", level: 90 }, { name: "CSS3 / Responsive Design", level: 85 },
    { name: "JavaScript", level: 75 }, { name: "TypeScript", level: 60 },
    { name: "React", level: 70 }, { name: "Next.js", level: 65 }, { name: "Tailwind CSS", level: 80 } ] },
  { title: "Backend & Database", items: [
    { name: "Node.js", level: 55 }, { name: "Python", level: 60 },
    { name: "SQL / PostgreSQL", level: 65 }, { name: "REST APIs", level: 70 } ] },
  { title: "Tools", items: [
    { name: "Git & GitHub", level: 80 }, { name: "VS Code", level: 90 },
    { name: "Figma", level: 50 }, { name: "Vercel", level: 70 } ] }
],

  education: [
    {
  degree: "B.Sc. in Computer Science and Engineering",
  school: "Daffodil International University (DIU)",
  period: "2024 – Present",
  details:
    "CGPA: 3.64. Relevant coursework: Programming & Problem Solving, Data Structures and Algorithms, Object-Oriented Programming, Computer Networks, Compiler Design, Database Management Systems, Software Engineering, Operating Systems, Data Science."
},

    {
  degree: "Higher Secondary Certificate (HSC)",
  school: "Barachapa Union Adarsha Degree College",
  period: "2022",
  details: "Group: Science. GPA: 5.00"
}
  ],

  // Leave this array empty ([]) and the Experience section hides itself.
 experience: [
  {
    role: "Team Lead, University Group Projects",
    org: "Daffodil International University",
    period: "2024 – Present",
    points: [
      "Led teams to plan, divide and deliver course projects.",
      "Coordinated tasks and code reviews using Git and GitHub."
    ]
  },
  {
    role: "Organizer, DIU Math Olympiad",
    org: "Daffodil International University",
    period: "2025 – 2026",
    points: ["Part of the organizing team for the DIU Math Olympiad in 2025 and 2026."]
  },
  {
    role: "Volunteer, National Undergraduate Math Olympiad",
    org: "National Undergraduate Math Olympiad",
    period: "2025",
    points: ["Volunteered at the national-level competition."]
  }
],

  
  projects: [
  {
    id: "bazar-dor",
    name: "Bazar-Dor",
    image: "assets/bazar-dor.png",
    summary: "A Bangla web app that tracks the daily prices of everyday essentials in Bangladesh.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI", "Better Auth", "PostgreSQL"],
    description:
      "Bazar-Dor is a fully responsive Bangla web app that shows the daily prices of everyday essentials in Bangladesh. It reads live data from a public API, highlights which products got more expensive or cheaper today, lets you browse by category, and, after signing in, compare the price of a product across 12 different bazaars.",
    live: "https://bazar-dor-beryl-five.vercel.app",
    github: "https://github.com/kaziaurpon/Bazar-Dor",
    challenges: [
      "Relying on a public API that can be slow or unavailable, which I handled with fallback endpoints and short-term response caching.",
      "Setting up sign-in with email/password, Google and GitHub, and protecting the price comparison pages so only signed-in users can open them."
    ],
    improvements: [
      "Add price history charts so users can see how a product's price changes over weeks and months.",
      "Add price alerts and a Bangla/English language switch."
    ]
  },
  {
    id: "fitlog",
    name: "FitLog",
    image: "assets/fitlog.png",
    summary: "A dark-themed workout library where you build a daily plan and track exercises, minutes and calories.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Context API", "localStorage"],
    description:
      "FitLog is a dark, no-nonsense gym companion. Browse a workout library, build today's plan, save lifts for later, and watch your exercises, minutes and calories add up in real time.",
    live: "https://fitlog-by-aurpon.vercel.app",
    github: "https://github.com/kaziaurpon/FitLog-by-Aurpon",
    challenges: [
      "Keeping the plan and saved lists in sync across pages and after a reload, solved with React Context and localStorage.",
      "Updating the totals of exercises, minutes and calories instantly whenever a lift is added, completed or removed."
    ],
    improvements: [
      "Add user accounts so plans sync across devices instead of living only in the browser.",
      "Add progress history, weekly charts and custom workouts."
    ]
  },
  {
  id: "tender-package-builder",
  name: "Tender Package Builder",
  image: "assets/tender-package-builder.png",
  summary: "A frontend-only web app that validates tender documents and generates a complete submission package.",
  stack: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "SHA-256 hashing"],
  description:
    "Tender Package Builder is a frontend-only web application for preparing, validating and generating complete tender submission packages from PDF documents. Users upload PDFs, match each file to a required document, add expiry dates where needed, and the app tracks the status of every document (Missing, Expiry Date Needed, Expired, Not Provided or OK). It detects duplicate files by content even when the filenames differ, blocks package generation until all issues are fixed, and then builds a single combined PDF with a cover page, tender information, page footers and the documents in the required order. The interface supports both English and Bangla, and all processing runs in the browser with no backend.",
  live: "https://ai-dev-fest-2026-kazi-aurpon-4edoxhvpx-aurpon.vercel.app",
  github: "https://github.com/kaziaurpon/AI-Dev-Fest-2026-Kazi_Aurpon",
  challenges: [
    "Detecting duplicate PDFs by their content instead of their filenames, which I solved with SHA-256 hashing, and preventing the same file from being matched to two different required documents.",
    "Handling many document states (missing, expired, expiry date needed, not provided) and blocking package generation until the blocking issues are fixed, all without a backend.",
    "Merging and processing PDFs entirely in the browser while keeping the final package in the correct order with a cover page and footers."
  ],
  improvements: [
    "Save progress between sessions so users can continue a tender package later.",
    "Let users upload their own tender requirements file instead of using a fixed one, and export a validation report.",
    "Support scanned documents and images with OCR."
  ]
}// 3rd project ekhane (nicher kotha dekho)
],

  contact: {
    email: "kaziaurpon1@gmail.com", 
    phone: "+8801611158808", 
    whatsapp: "8801611158808", 
    location: "Dhaka, Bangladesh"
  }
};
