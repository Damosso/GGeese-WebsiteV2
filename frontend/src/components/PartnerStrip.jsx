import React from "react";

const partners = [
  { name: "The Grid Racing", url: "https://thegridracing.com/", short: "THE GRID RACING" },
  { name: "Enversed", url: "https://enversed.com/", short: "ENVERSED" },
  { name: "Meta", url: "https://about.meta.com/", short: "META" },
  { name: "Unity", url: "https://unity.com/", short: "UNITY" },
  { name: "Fontys ICT", url: "https://fontys.nl/", short: "FONTYS ICT" },
];

export const PartnerStrip = () => {
  return (
    <section className="py-12 bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold">
            Partners & Technology
          </h3>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
          <div className="flex gap-12 items-center animate-[scroll_30s_linear_infinite] will-change-transform hover:[animation-play-state:paused]">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <a
                key={`${p.name}-${i}`}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 text-lg font-semibold tracking-widest whitespace-nowrap"
              >
                {p.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerStrip;
