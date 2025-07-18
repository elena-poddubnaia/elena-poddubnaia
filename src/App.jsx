import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 font-sans text-gray-900 flex flex-col items-center px-2 md:px-0">
      {/* Header / Hero */}
      <section className="w-full max-w-3xl text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">ELENA PODDUBNAIA</h1>
        <h2 className="text-lg md:text-2xl font-semibold text-blue-700 mb-2">Software Engineer</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-gray-600 text-sm mb-2">
          <span>📞 (+48) 530 090-868</span>
          <span className="hidden md:inline">|</span>
          <span>✉️ poddubnayaeo@gmail.com</span>
          <span className="hidden md:inline">|</span>
          <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
        <div className="text-gray-500 text-sm mb-4">Poland, Gdansk</div>
      </section>

      {/* Professional Summary */}
      <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Professional Summary</h3>
        <p className="text-gray-700 text-base">
          Experienced Software Engineer with expertise in Java development and frontend technologies. Skilled in developing multi-tier applications using Java, Spring Boot, and React with a strong background in both frontend and backend development. Proven track record of mentoring team members, participating in agile methodologies, and delivering high-quality software solutions in enterprise environments. Experienced in code refactoring, test automation, and collaborating with cross-functional teams to meet business requirements.
        </p>
      </section>

      {/* Work Experience */}
      <section className="w-full max-w-3xl mb-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Work Experience</h3>
        <div className="space-y-4">
          {/* Maersk Java */}
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
              <span className="font-semibold">A.P.Moller-Maersk</span>
              <span className="text-gray-500 text-sm">Jan 2025 - Present</span>
            </div>
            <div className="font-medium text-blue-700 mb-1">Software Engineer - Java Development</div>
            <ul className="list-disc list-inside text-gray-700 text-sm mb-1">
              <li>Java development for enterprise pricing applications in a microservices architecture.</li>
              <li>Develop and maintain Java applications with focus on core Java and multithreading</li>
              <li>Refactor application from Oracle BUS to Java microservices</li>
              <li>Implement and optimize database queries for pricing solutions</li>
              <li>Refactor legacy code in reactive Java, improving system performance and maintainability</li>
            </ul>
          </div>
          {/* Maersk Frontend */}
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
              <span className="font-semibold">A.P.Moller-Maersk</span>
              <span className="text-gray-500 text-sm">Nov 2023 - Jan 2025</span>
            </div>
            <div className="font-medium text-blue-700 mb-1">Software Engineer</div>
            <ul className="list-disc list-inside text-gray-700 text-sm mb-1">
              <li>Frontend development in the Notification team, creating solutions that impacted millions of users while collaborating in an agile environment.</li>
              <li>Developed Vue.js 3 and TypeScript pages with Pinia state management</li>
              <li>Implemented unit tests with Citest and automated testing with Cypress</li>
              <li>Collaborated in an agile, multicultural team following SCRUM methodology with daily standups, sprint planning, and retrospectives</li>
              <li>Analyzed business requirements and developed technical solutions to meet business needs</li>
            </ul>
          </div>
          {/* Twill */}
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
              <span className="font-semibold">Twill</span>
              <span className="text-gray-500 text-sm">May 2022 - Oct 2023</span>
            </div>
            <div className="font-medium text-blue-700 mb-1">Frontend Developer</div>
            <ul className="list-disc list-inside text-gray-700 text-sm mb-1">
              <li>Developed new features for dashboard, notifications, and settings pages</li>
              <li>Wrote comprehensive unit tests achieving 80% test coverage for new code</li>
              <li>Participated in code reviews to ensure code quality and knowledge sharing</li>
              <li>Rewrote enzyme snapshots to Jest and converted JavaScript to TypeScript</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-100 rounded px-2 py-0.5 text-xs">React</span>
              <span className="bg-gray-100 rounded px-2 py-0.5 text-xs">TypeScript</span>
              <span className="bg-gray-100 rounded px-2 py-0.5 text-xs">Jest</span>
              <span className="bg-gray-100 rounded px-2 py-0.5 text-xs">Material UI</span>
            </div>
          </div>
          {/* Job Tailor */}
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
              <span className="font-semibold">Job Tailor</span>
              <span className="text-gray-500 text-sm">Nov 2020 - Dec 2021</span>
            </div>
            <div className="font-medium text-blue-700 mb-1">Test Automation Engineer</div>
            <ul className="list-disc list-inside text-gray-700 text-sm mb-1">
              <li>Conducted UI test automation and integration testing using Cypress.js</li>
              <li>Added form validation using the react-hook-form library</li>
              <li>Incorporated TypeScript into existing pages</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-100 rounded px-2 py-0.5 text-xs">React</span>
              <span className="bg-gray-100 rounded px-2 py-0.5 text-xs">TypeScript</span>
              <span className="bg-gray-100 rounded px-2 py-0.5 text-xs">Cypress</span>
            </div>
          </div>
          {/* State Street */}
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
              <span className="font-semibold">State Street</span>
              <span className="text-gray-500 text-sm">Sept 2018 – Oct 2020</span>
            </div>
            <div className="font-medium text-blue-700 mb-1">Test Engineer - Financial Services Technology</div>
            <ul className="list-disc list-inside text-gray-700 text-sm mb-1">
              <li>Developed and executed test plans for financial services applications in the Network Segmentation team.</li>
              <li>Conducted unit, integration, system, and regression testing</li>
              <li>Wrote end-to-end tests for integration points</li>
              <li>Collaborated with development teams to ensure software quality in a financial services environment</li>
            </ul>
          </div>
          {/* Federal Tax Service */}
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
              <span className="font-semibold">Federal Tax Service of Russia</span>
              <span className="text-gray-500 text-sm">Jul 2013 – Oct 2016</span>
            </div>
            <div className="font-medium text-blue-700 mb-1">Technical Support Engineer</div>
            <ul className="list-disc list-inside text-gray-700 text-sm mb-1">
              <li>Performed technical investigation with root cause analysis</li>
              <li>Executed DML/DDL SQL scripts on MS SQL databases for data management</li>
              <li>Maintained user documentation for applications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Education</h3>
        <div className="text-gray-700 text-base">
          Specialist's degree in Computer Science<br />
          Tomsk State University of Control Systems and Radioelectronics, Tomsk<br />
          <span className="text-gray-500 text-sm">July 2013</span>
        </div>
      </section>

      {/* Courses & Certifications */}
      <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Courses & Certifications</h3>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
          <li>O'Reilly Course, Testing React.js application with Jest (Jan 2023)</li>
          <li>O'Reilly Course, The Complete Guide-Maximilian Schwarzmüller (Jun 2022)</li>
          <li>LinkedIn Learning, JavaScript Essential Training (Jun 2021)</li>
          <li>Foundation of UX Design, Coursera (Apr 2021)</li>
          <li>FreeCodeCamp, JavaScript Algorithms and Data Structures (Jan 2021)</li>
          <li>Git tutorial in attlasian.com (Dec 2020)</li>
          <li>ISTQB foundation level (Oct 2019)</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {['Java', 'Core Java', 'Multithreading', 'Spring Boot', 'SQL', 'React', 'TypeScript', 'JavaScript', 'Microservices', 'Agile/SCRUM', 'Code Reviews', 'Unit Testing', 'Database Query Optimization', 'Technical Mentoring', 'Cloud Computing', 'Frontend Development', 'Backend Development'].map(skill => (
            <span key={skill} className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-medium hover:scale-105 transition">{skill}</span>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 mb-10">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Languages</h3>
        <div className="flex flex-wrap gap-4 text-gray-700">
          <span><span className="font-semibold">English</span> (Working Proficiency)</span>
          <span><span className="font-semibold">Polish</span> (Limited Working Proficiency)</span>
          <span><span className="font-semibold">Russian</span> (Native)</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-3xl text-center text-gray-400 text-xs pb-6">
        &copy; {new Date().getFullYear()} Elena Poddubnaia
      </footer>
    </main>
  );
}
