"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { 
  MessageCircle, 
  Mail, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ArrowUpRight 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorTextVisible, setCursorTextVisible] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const cTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Custom Cursor Logic
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(followerRef.current, { x: e.clientX - 14, y: e.clientY - 14, duration: 0.15 });
        gsap.to(cTextRef.current, { x: e.clientX + 15, y: e.clientY + 15, duration: 0.1 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 3. Hero Animations
    const tl = gsap.timeline();
    tl.from("#hero-title", { y: 50, opacity: 0, duration: 1.2, ease: "power4.out" })
      .from("#hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.8")
      .from("#hero-btns", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6");

    // 4. Stats Counter
    document.querySelectorAll(".counter").forEach((c) => {
      const target = parseInt(c.getAttribute("data-target") || "0");
      gsap.to(c, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: c,
          start: "top 90%",
        },
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "dark-theme" : "light-mode"}>
      <style jsx global>{`
        :root { --bg: #050505; --text: #fafafa; --accent: #00d084; --glass: rgba(255, 255, 255, 0.03); }
        .light-mode { --bg: #f5f5f5; --text: #1a1a1a; --glass: rgba(0, 0, 0, 0.03); }
        body { background-color: var(--bg); color: var(--text); transition: background 0.5s ease; }
        .glass { background: var(--glass); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); }
        .text-gradient { background: linear-gradient(to right, #00d084, #00c3ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .noise { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.03; z-index: 9990; background-image: url('https://grainy-gradients.vercel.app/noise.svg'); }
      `}</style>

      <div className="noise" />

      {/* Custom Cursor */}
      <div ref={cursorRef} id="cursor" className="hidden md:block fixed w-3 h-3 bg-[#00d084] rounded-full pointer-events-none z-[9999] mix-blend-difference" />
      <div ref={followerRef} id="cursor-follower" className="hidden md:block fixed w-10 h-10 border border-[#00d084] rounded-full pointer-events-none z-[9998]" />
      <div ref={cTextRef} style={{ display: cursorTextVisible ? 'block' : 'none' }} className="fixed pointer-events-none z-[10000] text-[10px] font-bold text-[#00d084] uppercase">View</div>

      {/* Floating Action Buttons */}
      <a href="https://wa.me/923046412577" target="_blank" className="fixed right-5 bottom-[90px] w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center z-[999] shadow-lg hover:scale-110 transition-transform">
        <MessageCircle size={24} color="white" />
      </a>
      <a href="mailto:itxskbaloch@gmail.com" className="fixed right-5 bottom-[30px] w-12 h-12 bg-[#EA4335] rounded-full flex items-center justify-center z-[999] shadow-lg hover:scale-110 transition-transform">
        <Mail size={24} color="white" />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black">SK</div>
            <span className="font-bold text-lg md:text-xl tracking-tighter uppercase">SK BALOCH</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full glass hover:scale-110 transition-all">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="hidden md:flex gap-8 text-sm font-medium items-center">
              <a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Recent Work</a>
              <a href="mailto:itxskbaloch@gmail.com" className="px-6 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all">Contact</a>
            </div>

            <button className="md:hidden p-2 glass rounded-lg" onClick={() => setIsMenuOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-[#050505] p-10 flex flex-col justify-center gap-8 transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 p-2 glass rounded-full"><X /></button>
        <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold">Portfolio</a>
        <a href="#" className="text-4xl font-bold">Recent Work</a>
        <a href="mailto:itxskbaloch@gmail.com" className="text-4xl font-bold text-emerald-400">Contact</a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,208,132,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold tracking-widest mb-6">PREMIUM WEB PARTNER</span>
            <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-8xl font-extrabold leading-[1.1] mb-8">
              Elevating <span className="text-gradient">Digital</span> Experiences.
            </h1>
            <p id="hero-desc" className="text-gray-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
              Modern high-converting websites for HVAC, construction, and luxury startups across Europe and the USA. Engineered for speed and prestige.
            </p>
            <div id="hero-btns" className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:itxskbaloch@gmail.com" className="px-8 py-4 bg-emerald-500 text-black text-center font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,208,132,0.4)] transition-shadow">Start Project</a>
              <a href="#portfolio" className="px-8 py-4 glass text-center font-bold rounded-full hover:bg-white/10 transition-colors">Portfolio</a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="stat-card glass p-6 md:p-8 rounded-3xl border-emerald-500/10">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 counter" data-target="50">0</h2>
              <p className="text-gray-400 text-xs md:text-sm">Global Projects</p>
            </div>
            <div className="stat-card glass p-6 md:p-8 rounded-3xl mt-8 md:mt-12 border-emerald-500/10">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 counter" data-target="100">0</h2>
              <p className="text-gray-400 text-xs md:text-sm">Success Rate %</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Selected Works</h2>
            <div className="h-1 w-20 bg-emerald-500 mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "HVAC Masterclass", desc: "Lead generation platform.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800" },
              { title: "Roof Construction", desc: "High-class lead generation.", img: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=800" },
              { title: "Small Business", desc: "Premium UI Architecture.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800" }
            ].map((project, i) => (
              <div 
                key={i}
                onMouseEnter={() => setCursorTextVisible(true)}
                onMouseLeave={() => setCursorTextVisible(false)}
                className="group relative glass rounded-[2rem] overflow-hidden cursor-pointer"
              >
                <div className="h-64 md:h-80 overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-2 rounded-full font-bold">View Project</span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <ArrowUpRight className="text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 glass">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Ready to start your next project?</h2>
          <a href="mailto:itxskbaloch@gmail.com" className="text-2xl md:text-5xl font-extrabold text-gradient hover:opacity-80 transition-opacity">
            itxskbaloch@gmail.com
          </a>
          <p className="text-gray-500 mt-12 text-sm">© 2026 SK Baloch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
