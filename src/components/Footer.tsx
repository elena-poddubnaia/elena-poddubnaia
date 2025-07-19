import React from 'react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="w-full max-w-3xl text-center text-gray-400 text-xs pb-6">
      &copy; {new Date().getFullYear()} {name}
    </footer>
  );
}; 