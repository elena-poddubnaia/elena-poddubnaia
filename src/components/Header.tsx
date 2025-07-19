import React from 'react';

interface HeaderProps {
  avatarUrl?: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedinUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({
  avatarUrl = '/avatar.jpg',
  name,
  title,
  email,
  phone,
  linkedinUrl
}) => {
  return (
    <section className="w-full max-w-3xl text-center py-10">
      <img
        src={avatarUrl}
        alt={name}
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg mx-auto mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{name}</h1>
      <h2 className="text-lg md:text-2xl font-semibold text-blue-700 mb-2">{title}</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-gray-600 text-sm mb-2">
        <span>📧 {email}</span>
        <span className="hidden md:inline">|</span>
        <span>📞 {phone}</span>
        {linkedinUrl && (
          <>
            <span className="hidden md:inline">|</span>
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg 
                className="w-5 h-5 inline-block" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </>
        )}
      </div>
    </section>
  );
}; 