"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Appointment Booking System",
    description:
      "Custom scheduling platform for service businesses. Clients book online, manage appointments, and get confirmations — no monthly subscription fees.",
    tags: ["Next.js", "TypeScript", "Database", "Auth"],
    link: "#",
    gradient: "from-white/[0.04] to-white/[0.01]",
  },
  {
    title: "AI-Powered E-Commerce Store",
    description:
      "Full-stack shopping experience with an AI assistant that helps customers find products.",
    tags: ["React", "AI/ML", "Stripe", "Node.js"],
    link: "#",
    gradient: "from-white/[0.03] to-white/[0.01]",
  },
  {
    title: "Business Landing Page",
    description:
      "Clean, conversion-focused site for a local business. Mobile-first, fast-loading, SEO-optimized.",
    tags: ["Next.js", "Tailwind", "SEO", "Performance"],
    link: "#",
    gradient: "from-white/[0.05] to-white/[0.02]",
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-neutral-500 font-mono text-sm mb-2 uppercase tracking-wider">My Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              className={`group block transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 150 + 200}ms` : "0ms" }}
            >
              {/* Project thumbnail placeholder */}
              <div
                className={`bg-gradient-to-br ${project.gradient} border border-neutral-800/60 rounded-xl h-48 mb-4 flex items-center justify-center group-hover:border-neutral-600 transition-colors overflow-hidden relative`}
              >
                <div className="relative z-10 text-neutral-600 font-mono text-sm flex flex-col items-center gap-2">
                  <svg
                    className="w-10 h-10 text-neutral-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Screenshot coming soon
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neutral-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-neutral-400 bg-white/[0.05] border border-neutral-800/60 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
