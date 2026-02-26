"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-neutral-500 font-mono text-sm mb-2 uppercase tracking-wider">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-neutral-500">
            Have a project in mind? Drop me a message and I&apos;ll get back to
            you within 24 hours.
          </p>
        </div>

        <form
          action="https://formspree.io/f/placeholder"
          method="POST"
          className={`space-y-5 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <label htmlFor="name" className="text-sm text-neutral-500 block mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-neutral-950 border border-neutral-800/60 rounded-lg px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-neutral-500 block mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-neutral-950 border border-neutral-800/60 rounded-lg px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-neutral-500 block mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-neutral-950 border border-neutral-800/60 rounded-lg px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white hover:bg-neutral-200 text-black font-semibold py-3.5 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Links */}
        <div
          className={`flex justify-center gap-6 mt-10 transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="mailto:mangindev@gmail.com"
            className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            mangindev@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sean-mangin-915203b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
