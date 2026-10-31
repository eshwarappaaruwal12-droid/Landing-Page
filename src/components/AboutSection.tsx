import React, { useState } from 'react';
import { Mail, Plus, Check } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface AboutSectionProps {
  onSayHello?: () => void;
  onStayInformed?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onSayHello,
  onStayInformed,
}) => {
  const [informedState, setInformedState] = useState<'idle' | 'success'>('idle');

  const handleStayInformedClick = () => {
    if (onStayInformed) {
      onStayInformed();
    } else {
      setInformedState('success');
      setTimeout(() => setInformedState('idle'), 3500);
    }
  };

  const handleSayHelloClick = () => {
    if (onSayHello) {
      onSayHello();
    } else {
      window.location.href = 'mailto:hello@driftplanner.app?subject=Hello%20from%20Drift';
    }
  };

  return (
    <section
      id="about"
      className="relative z-10 bg-[#F6E4CF] rounded-t-[25px] py-20 md:py-32 px-6 overflow-hidden"
    >
      {/* Top Area (centered, max-w-3xl) */}
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <p className="text-[#321C04] text-base md:text-lg text-center leading-relaxed max-w-lg mb-8 md:mb-10 font-normal">
          We craft tools that move with your rhythm, not over it. Designed for
          ease, presence, and flow.
        </p>

        {/* Two buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Say hello button */}
          <button
            type="button"
            onClick={handleSayHelloClick}
            className="group inline-flex items-center gap-3.5 bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] pl-2 pr-6 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#321C04] transition-transform duration-200 group-hover:scale-105">
              <Mail className="w-4 h-4 text-[#321C04]" strokeWidth={2} />
            </span>
            <span className="text-xs uppercase tracking-wide font-medium">
              Say hello
            </span>
          </button>

          {/* Stay informed button */}
          <button
            type="button"
            onClick={handleStayInformedClick}
            className="group inline-flex items-center gap-3.5 bg-[#D9C4AA] hover:bg-[#CEBA9E] text-[#321C04] pl-2 pr-6 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#321C04] transition-transform duration-200 group-hover:scale-105">
              {informedState === 'success' ? (
                <Check className="w-4 h-4 text-[#321C04]" strokeWidth={2.5} />
              ) : (
                <Plus className="w-4 h-4 text-[#321C04]" strokeWidth={2} />
              )}
            </span>
            <span className="text-xs uppercase tracking-wide font-medium">
              {informedState === 'success' ? 'Subscribed!' : 'Stay informed'}
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="max-w-6xl mx-auto my-16 md:my-24 flex items-center gap-[2px]">
        <div className="w-2 h-2 rounded-full bg-[#D9C4AA] shrink-0" />
        <div className="flex-1 h-[2px] bg-[#D9C4AA]" />
        <div className="w-2 h-2 rounded-full bg-[#D9C4AA] shrink-0" />
      </div>

      {/* Bottom Area (max-w-6xl, flex-col md:flex-row) */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16">
        {/* Left: Custom SVG logo + label */}
        <div className="flex items-center md:items-start gap-4 md:flex-col md:gap-3 shrink-0">
          <Logo size={40} fill="#321C04" />
          <p className="text-xs uppercase tracking-widest font-semibold text-[#321C04] leading-tight">
            Calm <br className="hidden md:inline" />/ Amplified
          </p>
        </div>

        {/* Right: Large paragraph */}
        <div className="flex-1">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] font-normal text-[#321C04]">
            We make AI tools and assistants. But, most importantly, we help you
            remember what gentle productivity looks like when software moves
            with you, not over you. We create systems that carry the cognitive
            weight, so you can attend to what truly counts.
          </p>
        </div>
      </div>
    </section>
  );
};
