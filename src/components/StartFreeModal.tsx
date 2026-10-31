import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface StartFreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartFreeModal: React.FC<StartFreeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [taskInput, setTaskInput] = useState('');
  const [status, setStatus] = useState<'input' | 'sorted' | 'joined'>('input');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSort = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    setStatus('sorted');
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('joined');
  };

  const resetAll = () => {
    setStatus('input');
    setTaskInput('');
    setEmail('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in-down"
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF4ED] text-[#321C04] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D9C4AA]/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={resetAll}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#D9C4AA]/30 hover:bg-[#D9C4AA]/50 flex items-center justify-center text-[#321C04] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand header */}
        <div className="flex items-center gap-3 mb-6">
          <Logo size={32} fill="#321C04" />
          <div>
            <h3 className="font-semibold text-lg tracking-tight">Drift Experience</h3>
            <p className="text-xs text-[#321C04]/60">Gentle, noise-free space</p>
          </div>
        </div>

        {status === 'input' && (
          <div>
            <h4 className="text-2xl font-serif italic mb-2 text-[#321C04]">
              What is lingering on your mind right now?
            </h4>
            <p className="text-sm text-[#321C04]/70 mb-5 leading-relaxed">
              Don't worry about deadlines, priority tags, or structuring. Just pour out whatever is creating mental drag.
            </p>

            <form onSubmit={handleSort} className="space-y-4">
              <textarea
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="e.g., reply to client email, prepare presentation notes, take a walk, reschedule dental appointment..."
                rows={3}
                className="w-full rounded-2xl bg-white border border-[#D9C4AA] p-4 text-sm text-[#321C04] placeholder-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04]/20 transition-all resize-none"
                autoFocus
              />

              <button
                type="submit"
                disabled={!taskInput.trim()}
                className="w-full py-3.5 px-6 rounded-xl bg-[#321C04] hover:bg-[#1F1003] disabled:opacity-40 text-[#FFF9F2] text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                Gently sort this for me
              </button>
            </form>
          </div>
        )}

        {status === 'sorted' && (
          <div className="space-y-5 animate-fade-in-down">
            <div className="bg-white/80 rounded-2xl p-4 border border-[#D9C4AA]/40">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#321C04]/50">
                Right now &bull; Only one thing
              </span>
              <p className="text-base font-medium mt-1 text-[#321C04]">
                {taskInput.split(/[,.\n]/)[0]?.trim() || taskInput}
              </p>
              <p className="text-xs text-[#321C04]/60 mt-1">
                Everything else has been softened into your background queue. No timers ticking down. Just step in whenever you feel ready.
              </p>
            </div>

            <div className="bg-[#EFE3D3] rounded-xl p-3 flex items-center justify-between text-xs text-[#321C04]/70">
              <span>Remaining thoughts stored safely</span>
              <span className="font-semibold text-[#321C04]">Saved quietly &bull; 0 alarms</span>
            </div>

            <form onSubmit={handleJoin} className="space-y-3 pt-2 border-t border-[#D9C4AA]/30">
              <p className="text-xs text-[#321C04]/70">
                Experience this peace every single day. Reserve your complimentary early account:
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-xl bg-white border border-[#D9C4AA] px-4 py-2.5 text-sm text-[#321C04] placeholder-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04]/20"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  Join Drift
                </button>
              </div>
            </form>
          </div>
        )}

        {status === 'joined' && (
          <div className="text-center py-6 space-y-4 animate-fade-in-down">
            <div className="w-14 h-14 rounded-full bg-[#321C04] text-[#FFF9F2] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-normal text-[#321C04]">Welcome to quiet flow.</h4>
            <p className="text-sm text-[#321C04]/70 max-w-sm mx-auto leading-relaxed">
              We've reserved your early access spot for <span className="font-semibold">{email}</span>. Look out for our welcome note with your calm invitation code.
            </p>
            <button
              type="button"
              onClick={resetAll}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#321C04] text-[#FFF9F2] text-xs uppercase tracking-wider font-medium hover:bg-[#1F1003] transition-colors cursor-pointer"
            >
              Back to Drift
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
