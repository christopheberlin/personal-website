"use client";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  // Faux player state (visual only)
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const start = performance.now() - progress * 1000;
      const loop = (t: number) => {
        const elapsed = (t - start) / 1000; // seconds
        const pct = (elapsed % 30) / 30; // 30s fake song loop
        setProgress(pct);
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    } else if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, [isPlaying]);

  return (
    <div className="min-h-screen text-gray-900 selection:bg-fuchsia-200 selection:text-fuchsia-900">
      {/* Retro glitter gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,#c4b5fd_0%,transparent_60%),radial-gradient(800px_500px_at_100%_10%,#f0abfc_0%,transparent_60%),radial-gradient(1000px_800px_at_40%_110%,#93c5fd_0%,transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none [background-image:radial-gradient(white_1px,transparent_1.5px)] [background-size:64px_64px] animate-[twinkle_6s_linear_infinite]" />
      </div>

      {/* Top bar like old MySpace */}
      <nav className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/10 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow ring-1 ring-black/10" />
            <span className="font-black tracking-wide uppercase">my<span className="text-fuchsia-600">Splice</span></span>
          </div>
          <ul className="hidden sm:flex items-center gap-6 font-medium">
            <li className="hover:underline decoration-wavy">Home</li>
            <li className="hover:underline decoration-wavy">Browse</li>
            <li className="hover:underline decoration-wavy">Mail</li>
            <li className="hover:underline decoration-wavy">Favorites</li>
          </ul>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-emerald-700">Online Now</span>
          </div>
        </div>
      </nav>

      {/* Giant banner */}
      <header className="relative overflow-hidden border-y border-black/10 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-500 text-white">
        <div className="absolute -inset-1 opacity-30 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,white_60deg,transparent_120deg)] animate-[spin_12s_linear_infinite]" />
        <div className="mx-auto max-w-6xl px-4 py-16 relative">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600&auto=format&fit=crop"
                  alt="Christophe Berlin profile"
                  className="h-40 w-40 rounded-[1.25rem] ring-4 ring-white/60 shadow-2xl object-cover rotate-[-2deg]"
                />
                <span className="absolute -top-2 -right-2 px-2 py-1 text-[10px] font-black uppercase tracking-wide bg-emerald-400 text-emerald-900 rounded shadow">Verified</span>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-black leading-tight drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#fff_0%,#ffe4e6_30%,#fce7f3_60%,#fff_100%)] animate-[shine_4s_linear_infinite]">Hello, I'm Christophe Berlin</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium">A passionate web developer & designer</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
                <span className="h-2 w-2 rounded-full bg-lime-300 animate-ping"></span>
                <span>Currently vibing to: "Dummy Track – DJ Placeholder"</span>
              </div>
            </div>
          </div>

          {/* Marquee status */}
          <div className="mt-10 border-y border-white/30 py-3 overflow-hidden">
            <div className="whitespace-nowrap animate-[marq_18s_linear_infinite] font-semibold">
              <span className="mx-4">✨ New layout, who dis? ✨</span>
              <span className="mx-4">🚀 React • Next.js • Tailwind • UI/UX</span>
              <span className="mx-4">🎵 Playlist dropping soon</span>
              <span className="mx-4">💬 DM for collabs: christopheberlin@gmail.com</span>
              <span className="mx-4">🧪 Experimenting with AI + motion</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content columns */}
      <main className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: profile card */}
        <aside className="lg:col-span-1 space-y-6">
          <section className="rounded-xl border border-black/10 bg-white/80 backdrop-blur shadow-md">
            <div className="p-4 border-b border-black/10 flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-fuchsia-500 to-indigo-500 ring-1 ring-black/10" />
              <h2 className="font-black uppercase tracking-wider text-sm">Profile</h2>
            </div>
            <div className="p-4 text-sm leading-relaxed">
              <p className="font-semibold">Christophe Berlin</p>
              <p className="text-gray-600">Oakland • Web Dev & Designer</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Tailwind",
                  "Figma",
                  "UI/UX",
                ].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-semibold ring-1 ring-indigo-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-emerald-700 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Online now</span>
              </div>
            </div>
          </section>

          {/* Faux visitor counter */}
          <section className="rounded-xl border border-black/10 bg-white/80 backdrop-blur shadow-md p-4">
            <h3 className="font-black uppercase tracking-wider text-sm mb-3">Visitors</h3>
            <div className="flex gap-1">
              {"012345".split("").map((n, i) => (
                <div key={i} className="px-2 py-1 bg-gray-900 text-lime-200 font-mono text-lg rounded shadow-inner">
                  {n}
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-xl border border-black/10 bg-white/80 backdrop-blur shadow-md p-4">
            <h3 className="font-black uppercase tracking-wider text-sm mb-3">Contact</h3>
            <a href="mailto:christopheberlin@gmail.com" className="text-indigo-700 underline font-semibold break-all">
              christopheberlin@gmail.com
            </a>
          </section>
        </aside>

        {/* Right column: main content */}
        <section className="lg:col-span-2 space-y-6">
          {/* About Me */}
          <section className="rounded-xl border border-black/10 bg-white/90 backdrop-blur shadow-md">
            <div className="p-4 border-b border-black/10 flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-rose-400 to-purple-500 ring-1 ring-black/10" />
              <h2 className="font-black uppercase tracking-wider text-sm">About Me</h2>
            </div>
            <div className="p-6">
              <p className="text-[15px] leading-relaxed max-w-3xl">
                I'm a front-end developer with a love for clean design and intuitive user experiences. I build with React, Next.js, and Tailwind—sprinkled with motion and a pinch of nostalgia. When I'm not coding, I'm exploring new tech or cooking up weird, wonderful side projects.
              </p>
            </div>
          </section>

          {/* Visual Music Player (no external packages) */}
          <section className="rounded-xl border border-black/10 bg-white/90 backdrop-blur shadow-md overflow-hidden">
            <div className="p-4 border-b border-black/10 flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-emerald-400 to-cyan-500 ring-1 ring-black/10" />
              <h2 className="font-black uppercase tracking-wider text-sm">Music Player</h2>
              <span className="ml-auto text-[11px] font-black tracking-wider uppercase text-gray-500">Visual Only</span>
            </div>
            <div className="p-6">
              <div className="grid sm:grid-cols-[120px_1fr] gap-4 items-center">
                <div className="relative">
                  <div className="h-28 w-28 rounded-lg bg-[conic-gradient(at_30%_30%,#111_0deg,#333_80deg,#111_160deg,#333_240deg,#111_320deg)] text-white shadow-inner flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-black/80 border border-white/10 shadow relative">
                      <div className={`absolute inset-0 rounded-full border-2 border-white/20 ${isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''}`}></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-[10px] font-semibold shadow">
                    DJ Placeholder – Dummy Track
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying((p) => !p)}
                      className="h-12 w-12 rounded-full grid place-content-center bg-gradient-to-b from-gray-900 to-gray-700 text-white shadow hover:scale-105 transition"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs font-semibold text-gray-600">
                        <span>0:{String(Math.floor(progress * 30)).padStart(2, '0')}</span>
                        <span>0:30</span>
                      </div>
                      <div className="mt-1 h-2 rounded bg-gray-200 overflow-hidden ring-1 ring-black/5">
                        <div
                          className="h-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 animate-[sheen_2.4s_linear_infinite]"
                          style={{ width: `${progress * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    {['Prev','Shuffle','Repeat','Next'].map((t)=> (
                      <button key={t} className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 border border-black/5 shadow-sm font-semibold">{t}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Top 8 Friends */}
          <section className="rounded-xl border border-black/10 bg-white/90 backdrop-blur shadow-md">
            <div className="p-4 border-b border-black/10 flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-amber-400 to-rose-500 ring-1 ring-black/10" />
              <h2 className="font-black uppercase tracking-wider text-sm">Top 8</h2>
            </div>
            <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="group">
                  <div className="aspect-square rounded-lg bg-white shadow ring-1 ring-black/10 overflow-hidden relative">
                    <img
                      src={`https://picsum.photos/seed/myspace-${i}/300/300`}
                      alt={`Friend ${i + 1}`}
                      className="h-full w-full object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition grid place-items-center bg-black/30 text-white text-xs font-black tracking-wider">
                      Add as Friend
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-center">Friend {i + 1}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comments */}
          <section className="rounded-xl border border-black/10 bg-white/90 backdrop-blur shadow-md">
            <div className="p-4 border-b border-black/10 flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-sky-400 to-blue-600 ring-1 ring-black/10" />
              <h2 className="font-black uppercase tracking-wider text-sm">Comments</h2>
            </div>
            <div className="p-6 space-y-6">
              {[{
                name: 'Tazneem',
                text: 'This layout goes crazy—pure nostalgia with modern drip. 🔥',
              },{
                name: 'Stophe',
                text: 'Top 8 is back! Drop your @ and I might slide you in. 💫',
              }].map((c, idx)=> (
                <div key={idx} className="flex items-start gap-3">
                  <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(c.name)}`} alt={c.name} className="h-10 w-10 rounded"/>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-sm">{c.name}</p>
                      <span className="text-[10px] uppercase tracking-wider font-black text-gray-500">just now</span>
                    </div>
                    <p className="text-sm mt-1">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm">
          <p>Built with ❤️ using Next.js & Tailwind CSS • © 2025 Christophe Berlin</p>
          <p className="mt-1 text-xs text-gray-600">This page is a loving homage to classic MySpace aesthetics.</p>
        </div>
      </footer>

      {/* Local styles for animations */}
      <style jsx global>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes marq { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.25 } 50% { opacity: 0.5 } }
        @keyframes shine { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes sheen { 0% { filter: brightness(0.9); } 50% { filter: brightness(1.2); } 100% { filter: brightness(0.9); } }
      `}</style>
    </div>
  );
}

