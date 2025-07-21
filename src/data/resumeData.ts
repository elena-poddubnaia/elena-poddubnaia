export interface ResumeData {
  header: {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedinUrl?: string;
  };
  professionalSummary: string;
  experience: Array<{
    company: string;
    period: string;
    title: string;
    responsibilities: string[];
    techStack: string[];
  }>;
  education: {
    university: string;
    period: string;
    degree: string;
    fieldOfStudy: string;
  };
  certificates: string[];
}

export const resumeData: ResumeData = {
  header: {
    name: "ELENA PODDUBNAIA",
    title: "Software Engineer",
    email: "poddubnayaeo@gmail.com",
    phone: "+48 530 090 868",
    linkedinUrl: "https://www.linkedin.com/in/elena-poddubnaia/"
  },
  professionalSummary: "Experienced Software Engineer with expertise in Java development and frontend technologies. Skilled in developing multi-tier applications using Java, Spring Boot, and React with a strong background in both frontend and backend development. Proven track record of mentoring team members, participating in agile methodologies, and delivering high-quality software solutions in enterprise environments. Experienced in code refactoring, test automation, and collaborating with cross-functional teams to meet business requirements.",
  experience: [
    {
      company: "A.P.Moller-Maersk",
      period: "Feb 2025 - Present (6 months)",
      title: "Java Developer",
      responsibilities: [
        "Updated onboarding documentation",
        "Improved code quality by integrating SonarQube into the CI pipeline, reducing code smells by 40%",
        "Conducted 50+ live coding interviews",
        "Refactor application from Oracle BUS to Java microservices",
        "Improved observability by creating Grafana dashboards and alert monitors, which led to a 50% faster incident resolution time"
      ],
      techStack: ["Java", "Spring Boot", "Multithreading", "Microservices", "SQL", "XP Practices", "Mockito", "Grafana"]
    },
    {
      company: "A.P.Moller-Maersk",
      period: "Nov 2023 - Jan 2025 (2 years 2 months)",
      title: "Frontend Developer",
      responsibilities: [
        "Learned Vue.js framework",
        "Onboarded 3 engineers to Notifications domain",
        "Participated in Vue.js Live 2024 conference and Maersk Frontend Days conference",
        "Improved PR review workflow by standardizing communication and adding visual context (screenshots, videos) reducing review time",
        "Led development of a Email SendGrid integration and template unifying features cutting deployment and update time by 70% and aligning branding across multiple teams and services"
      ],
      techStack: ["TypeScript", "Vue.js", "Pinia", "Vitest", "Agile"]
    },
    {
      company: "Twill",
      period: "May 2022 - Oct 2023 (1 year 6 months)",
      title: "Frontend Developer",
      responsibilities: [
        "Learned Vue.js framework",
        "Improved linting rules",
        "Wrote Junit unit tests achieving 80% test coverage for new code",
        "Led development of a notification feature that increased user engagement by 15% within the first month of release",
        "Mentored 3 junior engineers",
        "Led Frontend community weekly meetings"
      ],
      techStack: ["TypeScript", "React.js", "Cypress.js", "Jest", "JavaScript", "Material UI"]
    },
    {
      company: "State Street",
      period: "Sept 2018 - Oct 2020 (2 years 2 months)",
      title: "QA Engineer",
      responsibilities: [
        "Wrote end-to-end tests for integration points covering 90% of critical backend workflows",
        "Conducted 200+ unit, integration, system, and regression test cases, ensuring high test coverage across core application features"
      ],
      techStack: ["Insomnia", "Postman", "SOAP UI", "JavaScript", "SQL", "Jira", "OOP"]
    }
  ],
  education: {
    university: "Tomsk State University of Control Systems and Radioelectronics",
    period: "2008 - 2013",
    degree: "Master's degree in Computer Science",
    fieldOfStudy: "Main field of study: Automation of Data Processing Systems"
  },
  certificates: [
    "Java Developer, Hexlet course (Apr 2025)",
    "O'Reilly Course, Testing React.js application with Jest (Jan 2023)",
    "O'Reilly Course, The Complete Guide-Maximilian Schwarzmüller (Jun 2022)",
    "LinkedIn Learning, JavaScript Essential Training (Jun 2021)",
    "Foundation of UX Design, Coursera (Apr 2021)",
    "FreeCodeCamp, JavaScript Algorithms and Data Structures (Jan 2021)",
    "Git tutorial in attlasian.com (Dec 2020)",
    "ISTQB foundation level (Oct 2019)"
  ]
}; 