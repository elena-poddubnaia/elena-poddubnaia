import React from 'react';

interface ProfessionalSummaryProps {
  summary: string;
}

export const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ summary }) => {
  return (
    <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">Professional Summary</h3>
      <p className="text-gray-700 text-base">{summary}</p>
    </section>
  );
}; 