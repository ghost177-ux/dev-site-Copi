import { CalendarDays, Headset, MonitorX, ArrowRight } from "lucide-react";

export function GettingStartedSection({ segment, onBook }: { segment: string; onBook: () => void }) {
  const steps = [
    { icon: CalendarDays, label: "PASSO 1", description: "Agende sua demonstração com a equipe Waybit." },
    { icon: Headset, label: "PASSO 2", description: "Conheça o sistema e os recursos para sua operação." },
    { icon: MonitorX, label: "PASSO 3", description: `Comece a usar o Dominus Food na sua ${segment}.` },
  ];

  return (
    <section id="comecar-dominus-food" className="w-full border-t border-border bg-white" aria-labelledby="comecar-dominus-food-title">
      <div className="landing-page-container">
        <div className="mx-auto max-w-6xl text-center">
          <div className="section-eyebrow mb-5 inline-flex items-center gap-2 rounded-full bg-[#FC4242]/5 px-4 py-1.5 sm:mb-6">
            <span className="size-2 rounded-full bg-[#FC4242]" aria-hidden="true" />
            <span className="fluid-caption font-bold uppercase tracking-wider">SIMPLES, RÁPIDO E ACOMPANHADO</span>
          </div>
          <h2 id="comecar-dominus-food-title" className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">Começar com o Dominus é rápido e sem complicação</h2>
          <p className="mt-2 fluid-body leading-relaxed text-muted-foreground">Três passos para conhecer o sistema e transformar a rotina do seu negócio.</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-11 md:grid-cols-3 md:gap-7">
            {steps.map(({ icon: Icon, label, description }) => (
              <article key={label} className="flex min-h-[270px] flex-col items-center rounded-xl border border-gray-200 border-t-4 border-t-[#FC4242] bg-white px-5 py-8 text-center shadow-[0_4px_0_rgba(23,32,40,0.08)] sm:px-7">
                <Icon size={52} strokeWidth={1.8} className="text-[#FC4242]" aria-hidden="true" />
                <p className="mt-5 text-base font-bold text-foreground">{label}</p>
                <span className="mt-2 h-1 w-10 rounded-full bg-[#FC4242]" aria-hidden="true" />
                <p className="mt-4 fluid-body font-bold leading-relaxed text-foreground">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center sm:mt-12">
            <button type="button" onClick={onBook} className="inline-flex min-h-14 w-[70%] max-w-full items-center justify-center gap-2 rounded-xl bg-[#FC4242] px-6 py-3.5 font-bold fluid-body text-white shadow-md transition-all duration-300 hover:bg-[#e53636] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC4242]/60 focus-visible:ring-offset-2">
              AGENDAR DEMONSTRAÇÃO <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
