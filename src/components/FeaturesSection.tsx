import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo.tsx';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

const FEATURES: FeatureItem[] = [
  {
    id: 'ease',
    title: 'Built for ease, not urgency',
    description:
      'Drift strips away the noise that makes organizing feel draining. Every surface is made to be soft, quiet, and intuitive so you can move forward, not get stuck decoding.',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4',
  },
  {
    id: 'start',
    title: 'The gentlest way to start',
    description:
      'Beginning your day should feel natural, not daunting. Drift eases you into motion with subtle cues and a quiet view of what deserves your energy right now.',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4',
  },
  {
    id: 'focus',
    title: 'Deep, undivided focus',
    description:
      'No interruptions, no clutter. Drift holds you in the present task with a stripped-back layout that softens all else until you are truly ready to shift.',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4',
  },
];

interface FeaturesSectionProps {
  onStartFree?: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onStartFree,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Reveal animation observer (threshold 0.15)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setRevealed((prev) => ({ ...prev, [index]: true }));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Active detection observer (threshold 0.6)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    const target = cardRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="features"
      className="relative px-5 md:px-10 lg:px-16 py-20 md:py-40 lg:py-48 z-10"
    >
      {/* Grid layout on lg+ */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-16 lg:gap-24 xl:gap-48 items-start">
        {/* Left Column (sticky on desktop) */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32">
          {/* Top: Heading */}
          <div className="space-y-6">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal tracking-tight">
              Software that flows with your mind, not over it
            </h2>

            {/* Feature nav buttons (hidden below lg) */}
            <div className="hidden lg:flex flex-col gap-3 pt-4">
              {FEATURES.map((feature, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => handleNavClick(idx)}
                    className={`text-left px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                      isActive
                        ? 'bg-black/20 text-white shadow-sm ring-1 ring-white/10'
                        : 'bg-black/20 text-white/40 hover:text-white/70'
                    }`}
                  >
                    {feature.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA (hidden below lg) */}
          <div className="hidden lg:block pt-8">
            <div className="bg-black/25 backdrop-blur-md rounded-xl flex items-center justify-between pl-6 pr-1 py-1 border border-white/5">
              <span className="text-white text-sm font-medium pr-4 leading-snug">
                No noise. No complicated systems. Just your day, gently sorted.
              </span>
              <button
                type="button"
                onClick={onStartFree}
                className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors shrink-0 cursor-pointer shadow-sm active:scale-[0.98]"
              >
                Start for free
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (scrolling cards) */}
        <div className="flex flex-col gap-12 md:gap-20">
          {FEATURES.map((feature, index) => {
            const isRevealed = revealed[index];

            return (
              <div
                key={feature.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                className={`bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/5 flex flex-col gap-6 md:gap-8 transition-all duration-700 ease-out transform ${
                  isRevealed
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-16 opacity-0'
                }`}
              >
                {/* SVG Logo */}
                <div>
                  <Logo size={40} fill="rgba(255,255,255,0.8)" />
                </div>

                {/* Title */}
                <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                  {feature.title}
                </h3>

                {/* Video container */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/30 shadow-inner">
                  <video
                    src={feature.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-white/60 font-medium text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
