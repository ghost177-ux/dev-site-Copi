import { ArrowRight } from "lucide-react";

export function SegmentPlanPrompt({ segment, onContact }: { segment: string; onContact: () => void }) {
  return (
    <article className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 text-center text-white shadow-xl backdrop-blur-sm sm:p-8">
      <h3 className="font-display fluid-h3 font-bold">Planos para diferentes perfis de {segment}</h3>
      <p className="mx-auto mt-3 max-w-2xl fluid-body leading-relaxed text-white/80">
        A configuração e o valor dependem das necessidades da sua operação. Converse com a equipe Waybit para conhecer as opções e condições atuais.
      </p>
      <button type="button" onClick={onContact} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#FC4242] px-6 py-3 font-bold text-white transition hover:bg-[#e53636] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
        Falar com a equipe <ArrowRight size={16} aria-hidden="true" />
      </button>
    </article>
  );
}
