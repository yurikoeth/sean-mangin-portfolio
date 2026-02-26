"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-neutral-500 font-mono text-sm mb-2 uppercase tracking-wider">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            A bit about who I am
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-[1fr_auto] gap-12 items-start transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-5 text-neutral-500 leading-relaxed">
            <p>
              I come from an IT support background where I handled{" "}
              <span className="text-white font-medium">
                150+ daily support interactions
              </span>
              . That experience taught me how to break down problems, communicate
              clearly, and build things that actually work for real people.
            </p>
            <p>
              Now I channel that same problem-solving energy into building modern
              web solutions for businesses. I specialize in{" "}
              <span className="text-white font-medium">
                Next.js, React, and TypeScript
              </span>{" "}
              — creating fast, responsive sites and custom web applications that
              help businesses grow their online presence.
            </p>
            <p>
              I use{" "}
              <span className="text-white font-medium">
                AI-assisted development
              </span>{" "}
              to deliver projects faster without cutting corners on quality. It
              means you get a polished product, quicker — and at a price that
              makes sense for your business.
            </p>
          </div>

          {/* Stats/highlights */}
          <div className="flex md:flex-col gap-6">
            {[
              { value: "150+", label: "Daily interactions\nin IT support" },
              { value: "3+", label: "Years in\ntech" },
              { value: "AI", label: "Assisted\ndevelopment" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center md:text-left bg-neutral-950 border border-neutral-800/60 rounded-xl px-5 py-4"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-neutral-600 whitespace-pre-line mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
