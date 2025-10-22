// app/page.tsx
"use client";
import { useState } from "react";

type Project = { id: string; title: string; description: string; cover: string; goal: number };

const MOCK: Project[] = [
  { id: "p1", title: "Huerto urbano", description: "Microhuertos en azoteas.", cover: "https://picsum.photos/seed/p1/600/400", goal: 2000 },
  { id: "p2", title: "Biblioteca móvil", description: "Libros para barrios.", cover: "https://picsum.photos/seed/p2/600/400", goal: 1500 },
  { id: "p3", title: "Taller de código", description: "Clases gratuitas.", cover: "https://picsum.photos/seed/p3/600/400", goal: 1200 },
];

export default function Home() {
  const [projects] = useState(MOCK);

  const donate = (p: Project) => {
    alert(`(Simulación) Crearíamos sesión de pago para: ${p.title}`);
  };

  return (
    <main className="min-h-screen bg-[#0B1D26] text-[#F4F6F8]">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-16 md:px-12 bg-[radial-gradient(circle_at_20%_10%,rgba(41,171,226,.15)_0,transparent_40%),radial-gradient(circle_at_80%_20%,rgba(0,224,199,.15)_0,transparent_35%)]">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Pyadra — inteligencia colectiva en movimiento</h1>
        <p className="mt-4 max-w-2xl text-[#A9B8C2]">
          Explora microproyectos y apóyalos con donaciones. Esta es una demo para probar el flujo con GPTs.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="rounded-2xl px-5 py-3 bg-gradient-to-r from-[#29ABE2] to-[#00E0C7] text-black font-semibold">Ver proyectos</a>
          <button className="rounded-2xl px-5 py-3 border border-white/20 hover:border-[#00E0C7]">Subir idea</button>
        </div>
      </section>

      {/* GRID */}
      <section id="projects" className="px-6 md:px-12 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Proyectos</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.id} data-testid="project-card" className="rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E0C7]/50 transition p-3">
              <img src={p.cover} alt="" className="h-40 w-full object-cover rounded-xl" />
              <div className="mt-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-[#A9B8C2] line-clamp-2">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-[#A9B8C2]">Meta: ${p.goal}</span>
                  <button onClick={() => donate(p)} className="rounded-xl px-4 py-2 bg-[#00E0C7] text-black hover:opacity-90">Donar</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}