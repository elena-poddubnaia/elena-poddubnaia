import React from 'react';
import { Header } from './components/Header';
import { ProfessionalSummary } from './components/ProfessionalSummary';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';
import { resumeData } from './data/resumeData';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 font-sans text-gray-900 flex flex-col items-center px-2 md:px-0">
      <Header {...resumeData.header} />
      <ProfessionalSummary summary={resumeData.professionalSummary} />
      <Experience experiences={resumeData.experience} />
      <Education {...resumeData.education} />
      <Certificates certificates={resumeData.certificates} />
      <Footer name={resumeData.header.name} />
    </main>
  );
};

export default App; 