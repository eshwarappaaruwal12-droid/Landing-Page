/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { StartFreeModal } from './components/StartFreeModal.tsx';
import { FaqModal } from './components/FaqModal.tsx';
import { Logo } from './components/Logo.tsx';

export default function App() {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  return (
    <div className="min-h-screen text-white relative selection:bg-[#321C04] selection:text-[#FFF9F2]">
      {/* Fixed background image for Features Section and overall page depth */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85')`,
        }}
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO (full viewport height)                   */}
      {/* ========================================================= */}
      <section className="relative h-screen overflow-hidden mb-[-25px] flex flex-col justify-between">
        {/* Background video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Centered Floating Pill Navbar */}
        <Navbar
          onOpenFaq={() => setIsFaqOpen(true)}
          onStartFree={() => setIsStartOpen(true)}
        />

        {/* Empty flex spacer for top distribution */}
        <div className="h-10" />

        {/* Hero Content (bottom-aligned) */}
        <div className="relative z-10 flex flex-col items-center justify-end pb-12 md:pb-16 px-4">
          <div className="flex flex-col items-center text-center">
            {/* Heading */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-white leading-[1.1] tracking-tight">
              <span>Own your time</span>
              <br />
              <span>
                without{' '}
                <em
                  className="not-italic"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: 'italic',
                  }}
                >
                  the stress
                </em>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-white/80 text-sm md:text-base font-medium max-w-[420px] text-center">
              Drift is a calm, ADHD-friendly planner that turns scattered ideas
              into a clear path
            </p>

            {/* CTA Bar */}
            <div className="mt-8 bg-black/25 backdrop-blur-md rounded-xl flex items-center pl-6 pr-1 py-1 border border-white/10 shadow-lg max-w-xl">
              {/* Desktop text */}
              <span className="text-white text-sm font-medium hidden sm:inline pr-5 whitespace-nowrap">
                No noise. No complicated systems. Just your day, gently sorted.
              </span>
              {/* Mobile text */}
              <span className="text-white text-sm font-medium sm:hidden pr-3 text-left leading-snug">
                No noise. Just your day, gently sorted.
              </span>
              {/* Button */}
              <button
                type="button"
                onClick={() => setIsStartOpen(true)}
                className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors shrink-0 cursor-pointer shadow-sm active:scale-[0.98]"
              >
                Start for free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: ABOUT SECTION                                  */}
      {/* ========================================================= */}
      <AboutSection
        onStayInformed={() => setIsStartOpen(true)}
        onSayHello={() => {
          window.location.href = 'mailto:hello@driftplanner.app?subject=Saying%20Hello%20to%20Drift';
        }}
      />

      {/* ========================================================= */}
      {/* SECTION 3: FEATURES SECTION (scroll-driven cards)          */}
      {/* ========================================================= */}
      <FeaturesSection onStartFree={() => setIsStartOpen(true)} />

      {/* ========================================================= */}
      {/* GENTLE FOOTER                                             */}
      {/* ========================================================= */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6 bg-black/40 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/60">
          <div className="flex items-center gap-3">
            <Logo size={28} fill="rgba(255,255,255,0.7)" />
            <span className="text-white font-medium tracking-tight">Drift.</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-xs text-white/50">A quiet space for executive function</span>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <button
              onClick={() => setIsFaqOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Questions & FAQ
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('features');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Features
            </button>
            <a
              href="mailto:hello@driftplanner.app"
              className="hover:text-white transition-colors"
            >
              hello@driftplanner.app
            </a>
          </div>

          <div className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Drift Systems. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <StartFreeModal
        isOpen={isStartOpen}
        onClose={() => setIsStartOpen(false)}
      />
      <FaqModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
      />
    </div>
  );
}
