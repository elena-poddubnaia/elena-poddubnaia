import React from 'react';

interface CertificatesProps {
  certificates: string[];
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">Certificates</h3>
      <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
        {certificates.map((certificate, index) => (
          <li key={index}>{certificate}</li>
        ))}
      </ul>
    </section>
  );
}; 