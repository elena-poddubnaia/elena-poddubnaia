import React from 'react';

interface EducationProps {
  university: string;
  period: string;
  degree: string;
  fieldOfStudy: string;
}

export const Education: React.FC<EducationProps> = ({
  university,
  period,
  degree,
  fieldOfStudy
}) => {
  return (
    <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">Education</h3>
      <div className="text-gray-700 text-base">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
          <span className="font-semibold">{university}</span>
          <span className="text-gray-500 text-sm">{period}</span>
        </div>
        <div>{degree}</div>
        <div className="text-gray-600 text-sm">{fieldOfStudy}</div>
      </div>
    </section>
  );
}; 