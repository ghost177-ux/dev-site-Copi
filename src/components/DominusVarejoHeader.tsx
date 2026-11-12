import { ArrowRight } from "lucide-react";
import varejoLogo from "@/assets/logo varejo.avif";

export function DominusVarejoHeader({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <header className="relative z-30 w-full bg-transparent">
      <div className="landing-page-container flex min-h-[68px] items-center justify-between gap-2 py-2.5 sm:min-h-[76px] sm:gap-4 sm:py-3 lg:min-h-[84px]">
        <a
          href="/"
          aria-label="Dominus Varejo — início"
          className="flex shrink-0 items-center gap-2 text-white transition-opacity hover:opacity-90"
        >
          <img src={varejoLogo} alt="Dominus Varejo" className="h-7 w-auto object-contain sm:h-9" />
        </a>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href="https://api.whatsapp.com/send/?phone=5521975812676&text=Ol%C3%A1%2C+vim+do+site+e+quero+saber+mais+sobre+o+Dominus&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 shrink-0 items-center justify-center gap-1 rounded-xl bg-[#63B628] px-2.5 text-[11px] font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 active:scale-[0.98] sm:min-h-11 sm:gap-2 sm:px-5 sm:text-xs md:text-sm"
          >
            <span className="whitespace-nowrap">Falar com um especialista</span>
            <ArrowRight size={14} className="hidden shrink-0 xs:inline" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex min-h-9 shrink-0 items-center justify-center gap-1 rounded-xl border border-white/25 bg-white/10 px-2.5 text-[11px] font-bold text-white/95 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/15 active:scale-[0.98] sm:min-h-11 sm:gap-2 sm:px-5 sm:text-xs md:text-sm"
          >
            <span className="whitespace-nowrap">Agendar demonstração</span>
          </button>
        </div>
      </div>
    </header>
  );
}
