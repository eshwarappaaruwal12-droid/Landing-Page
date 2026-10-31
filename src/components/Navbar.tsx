import React, { useState } from 'react';

interface NavbarProps {
  onOpenFaq?: () => void;
  onStartFree?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFaq, onStartFree }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (targetId: string) => {
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[260px] flex flex-col items-center">
      {/* Centered Floating Pill */}
      <div className="w-full bg-white rounded-full shadow-lg px-5 py-2.5 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg font-bold tracking-tight text-black select-none hover:opacity-80 transition-opacity"
        >
          Drift.
        </a>

        {/* Animated Hamburger Button */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-8 h-8 flex flex-col items-center justify-center focus:outline-none cursor-pointer group"
        >
          <span
            className={`w-5 h-[2px] bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
              isOpen
                ? 'translate-y-[2px] rotate-45'
                : '-translate-y-[3px]'
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-black rounded-full transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
              isOpen
                ? '-translate-y-[0px] -rotate-45'
                : 'translate-y-[3px]'
            }`}
          />
        </button>
      </div>

      {/* Animated Dropdown Menu */}
      <div
        className={`w-full mt-2 bg-white rounded-2xl shadow-xl p-2 flex flex-col gap-1 transition-all duration-200 ease-out origin-top ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        <button
          onClick={() => handleNavClick('features')}
          className="w-full text-left px-4 py-2 text-sm font-medium text-black/80 hover:text-black hover:bg-black/5 rounded-xl transition-colors cursor-pointer"
        >
          Features
        </button>
        <button
          onClick={() => handleNavClick('about')}
          className="w-full text-left px-4 py-2 text-sm font-medium text-black/80 hover:text-black hover:bg-black/5 rounded-xl transition-colors cursor-pointer"
        >
          Drift AI
        </button>
        <button
          onClick={() => {
            setIsOpen(false);
            if (onOpenFaq) {
              onOpenFaq();
            } else {
              handleNavClick('faq');
            }
          }}
          className="w-full text-left px-4 py-2 text-sm font-medium text-black/80 hover:text-black hover:bg-black/5 rounded-xl transition-colors cursor-pointer"
        >
          FAQ
        </button>
        <div className="pt-1 mt-1 border-t border-black/5">
          <button
            onClick={() => {
              setIsOpen(false);
              if (onStartFree) onStartFree();
            }}
            className="w-full text-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-black rounded-xl hover:bg-black/85 transition-colors cursor-pointer"
          >
            Start for free
          </button>
        </div>
      </div>
    </nav>
  );
};
