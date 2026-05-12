'use client';

import { useState } from 'react';

export default function HomePage() {
  const [theme, setTheme] = useState('dark');

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <section className="container mx-auto px-6 py-20">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/10">
          <h1 className="text-5xl font-bold mb-6">
            Dynamic Admin Controlled Website
          </h1>

          <p className="text-lg opacity-80 mb-8">
            Admin can control:
            pages, colors, animations, fonts,
            images, layouts and SEO.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setTheme('dark')}
              className="px-6 py-3 rounded-xl bg-blue-600"
            >
              Dark
            </button>

            <button
              onClick={() => setTheme('light')}
              className="px-6 py-3 rounded-xl bg-gray-400"
            >
              Light
            </button>
          </div>
}
