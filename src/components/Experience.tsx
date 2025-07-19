import React from 'react';

interface JobExperience {
  company: string;
  period: string;
  title: string;
  responsibilities: string[];
  techStack: string[];
}

interface ExperienceProps {
  experiences: JobExperience[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="w-full max-w-3xl mb-6">
      <h3 className="text-xl font-semibold mb-4 text-blue-700">Experience</h3>
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
              <span className="font-semibold">{experience.company}</span>
              <span className="text-gray-500 text-sm">{experience.period}</span>
            </div>
            <div className="font-medium text-blue-700 mb-1">{experience.title}</div>
            <ul className="list-disc list-inside text-gray-700 text-sm mb-1">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {experience.techStack.map((tech, idx) => (
                <span key={idx} className="bg-gray-100 rounded px-2 py-0.5 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 