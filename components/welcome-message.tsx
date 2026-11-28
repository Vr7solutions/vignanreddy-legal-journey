
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function WelcomeMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem("vr-welcome-seen");
    const today = new Date().toDateString();

    if (lastSeen !== today) {
      setIsVisible(true);
    }
  }, []);

  const closeWelcome = () => {
    localStorage.setItem("vr-welcome-seen", new Date().toDateString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-3xl border border-[#E7D9B8] bg-white p-7 text-center shadow-2xl sm:p-10">
        <button
          onClick={closeWelcome}
          aria-label="Close welcome message"
          className="absolute right-5 top-5 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <X size={20} />
        </button>

        <div className="mb-5 text-4xl">🦋</div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#A77D2D]">
          A Thought That Inspires Me
        </p>

        <h2 className="mb-5 text-2xl font-bold leading-snug text-[#172554] sm:text-3xl">
          I believe in the Butterfly Effect.
        </h2>

        <div className="hidden sm:block">
          <p className="mb-5 text-base leading-8 text-gray-600">
            That even the smallest actions can create waves of change.
          </p>

          <p className="mb-4 text-base leading-8 text-gray-600">
            A little knowledge can awaken a mind.
            An awakened mind can change a life.
            And one changed life can make the world a better place.
          </p>

          <p className="mb-7 text-base leading-8 text-gray-600">
            May this small initiative inspire you to learn, grow,
            share knowledge and make a difference.
          </p>

          <p className="mb-8 font-semibold text-[#172554]">
            Because a better world begins with small steps.
          </p>
        </div>

        <div className="sm:hidden">
          <p className="mb-7 text-sm leading-7 text-gray-600">
            Even the smallest actions can create great change.
            A little knowledge can change a mind, a life,
            and perhaps the world.
          </p>
        </div>

        <button
          onClick={closeWelcome}
          className="rounded-xl bg-[#172554] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#243b78]"
        >
          Let’s Begin <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
}
