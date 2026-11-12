import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bike,
  BookOpen,
  Cable,
  CalendarDays,
  Candy,
  Carrot,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  CreditCard,
  Croissant,
  Fish,
  Footprints,
  Hammer,
  IceCreamBowl,
  Laptop,
  Package,
  PaintBucket,
  Presentation,
  Shapes,
  ShoppingBasket,
  Shirt,
  Smartphone,
  SprayCan,
  ShoppingCart,
  Store,
  Wrench,
} from "lucide-react";
import { useState } from "react";

import { DominusVarejoHeader } from "@/components/DominusVarejoHeader";
import { FullFunnelBookingModal } from "@/components/FullFunnelBookingModal";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import varejoHeroImage from "@/assets/VarejoFN.avif";
import dashboardImage from "@/assets/Dashboard.avif";
import inventoryImage from "@/assets/Controle de estoque.avif";
import pointOfSaleImage from "@/assets/PDV.avif";

export const Route = createFileRoute("/dominus-varejo")({
  head: () => ({
    meta: [
      { title: "Dominus Varejo | Sistema de gestão para o comércio | Waybit" },
      {
        name: "description",
        content:
          "Conheça o Dominus Varejo, sistema de gestão para organizar estoque, vendas, financeiro e operações do comércio.",
      },
      {
        property: "og:title",
        content: "Dominus Varejo | Sistema de gestão para o comércio | Waybit",
      },
      {
        property: "og:description",
        content: "Gestão de estoque, vendas, financeiro e operações do comércio em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DominusVarejoPage,
});

const segments = [
  { name: "Bicicletarias", icon: Bike },
  { name: "Hortifrutis", icon: Carrot },
  { name: "Lojas de calçados", icon: Footprints },
  { name: "Lojas de celulares", icon: Smartphone },
  { name: "Lojas de doces", icon: Candy },
  { name: "Lojas de informática", icon: Laptop },
  { name: "Lojas de roupas", icon: Shirt },
  { name: "Lojas de Tintas", icon: PaintBucket },
  { name: "Lojas de variedades", icon: Shapes },
  { name: "Materiais de construção", icon: Hammer },
  { name: "Materiais elétricos", icon: Cable },
  { name: "Minimercados", icon: ShoppingBasket },
  { name: "Padarias", icon: Croissant },
  { name: "Papelarias", icon: BookOpen },
  { name: "Peixarias", icon: Fish },
  { name: "Perfumarias", icon: SprayCan },
  { name: "Sorveterias", icon: IceCreamBowl },
];

const challenges = [
  {
    icon: Package,
    title: "Não saber exatamente o que tem no estoque",
    description:
      "Sem um controle eficiente, fica difícil acompanhar a disponibilidade, a reposição e as divergências dos produtos.",
    response: "Registre entradas, saídas e movimentações de produtos pelo controle de estoque.",
  },
  {
    icon: ShoppingCart,
    title: "Comprar errado e perder dinheiro com mercadorias",
    description:
      "Sem informações sobre as vendas e a saída dos produtos, planejar as compras fica mais difícil.",
    response:
      "Acompanhe vendas e resultados em relatórios gerenciais para apoiar as decisões do negócio.",
  },
  {
    icon: ClipboardList,
    title: "Perder tempo com tarefas manuais",
    description:
      "Anotações, planilhas e controles separados podem gerar retrabalho, erros e demora nas atividades.",
    response: "Centralize as principais operações da loja em um único sistema.",
  },
  {
    icon: CreditCard,
    title: "Não ter controle sobre o dinheiro que entra e sai",
    description:
      "Sem acompanhar caixa, despesas e recebimentos, pode ser difícil entender a situação financeira da empresa.",
    response: "Controle movimentações financeiras, recebimentos, despesas e caixa.",
  },
  {
    icon: BarChart3,
    title: "Ter dificuldade para acompanhar os resultados",
    description:
      "Com informações desorganizadas, as decisões podem depender da percepção do gestor.",
    response: "Acompanhe vendas e resultados do negócio por meio de relatórios gerenciais.",
  },
];

const features = [
  {
    icon: ShoppingCart,
    badge: "Vendas e PDV",
    image: pointOfSaleImage,
    title: "Vendas e PDV",
    description: "Registre e gerencie as vendas da loja.",
  },
  {
    icon: Package,
    badge: "Estoque",
    image: inventoryImage,
    title: "Controle de estoque",
    description: "Controle entradas, saídas e movimentações de produtos.",
  },
  {
    icon: CreditCard,
    badge: "Financeiro e caixa",
    image: dashboardImage,
    title: "Financeiro e caixa",
    description: "Controle movimentações financeiras, recebimentos e despesas.",
  },
  {
    icon: BarChart3,
    badge: "Relatórios gerenciais",
    image: dashboardImage,
    title: "Relatórios gerenciais",
    description: "Acompanhe as vendas e os resultados do negócio.",
  },
];

const varejoPlans = [
  {
    id: "fit-varejo",
    name: "FIT VAREJO",
    monthly: "199,00",
    annual: "165,84",
    revenue: "Faturamento até 30 mil por mês",
    terminals: "2 PDVs",
  },
  {
    id: "basic-varejo",
    name: "BASIC VAREJO",
    monthly: "399,00",
    annual: "332,50",
    revenue: "Faturamento de 30 a 100 mil por mês",
    terminals: "4 PDVs",
  },
  {
    id: "full-varejo",
    name: "FULL VAREJO",
    monthly: "599,00",
    annual: "499,17",
    revenue: "Faturamento de 100 a 200 mil por mês",
    terminals: "8 PDVs",
  },
  {
    id: "vip-varejo",
    name: "VIP VAREJO",
    monthly: "799,00",
    annual: "665,84",
    revenue: "Faturamento acima de 200 mil por mês",
    terminals: "+ de 8 PDVs",
  },
];

const faqs = [
  {
    question: "O Dominus Varejo atende ao meu segmento?",
    answer:
      "Sim. O Dominus Varejo atende diferentes segmentos do comércio, como lojas de roupas, bicicletarias, minimercados, materiais de construção, papelarias, perfumarias e outros estabelecimentos varejistas.",
  },
  {
    question: "Consigo controlar o estoque pelo sistema?",
    answer:
      "Sim. O Dominus Varejo permite controlar o estoque, registrar entradas e saídas e acompanhar a movimentação dos produtos.",
  },
  {
    question: "O sistema permite registrar vendas e emitir notas fiscais?",
    answer:
      "Sim. O sistema possui recursos para gerenciamento de vendas por meio do PDV e emissão de documentos fiscais, como NF-e e NFC-e.",
  },
  {
    question: "O sistema possui controle financeiro?",
    answer:
      "Sim. O Dominus Varejo oferece recursos de controle financeiro e de caixa, permitindo acompanhar as movimentações financeiras da empresa.",
  },
];

function DominusVarejoPage() {
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const [billingCycle, setBillingCycle] = useState<"anual" | "mensal">("anual");
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="dominus-varejo-page flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <div className="relative w-full overflow-hidden bg-[radial-gradient(72%_68%_at_84%_28%,rgba(59,188,236,0.34)_0%,rgba(20,105,154,0.18)_38%,transparent_68%),radial-gradient(58%_62%_at_10%_88%,rgba(59,188,236,0.24)_0%,transparent_65%),linear-gradient(135deg,#052334_0%,#0b3f58_38%,#072d40_68%,#031a26_100%)]">
        <DominusVarejoHeader onOpenBooking={() => setBookingOpen(true)} />

        <section
          id="hero"
          className="relative w-full pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
        >
          <div className="landing-page-container relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3BBCEC]/40 bg-[#3BBCEC]/10 px-4 py-1.5 sm:mb-6">
                <Store size={14} className="text-[#3BBCEC]" aria-hidden="true" />
                <span className="fluid-caption font-bold uppercase tracking-wider text-[#3BBCEC]">
                  Gestão para empresas do comércio
                </span>
              </div>
              <h1 className="font-display fluid-h1 font-extrabold leading-[1.1] tracking-tight text-white">
                Simplifique a gestão do seu comércio
              </h1>
              <p className="mt-5 max-w-2xl fluid-body-lg leading-relaxed text-white sm:mt-6">
                O Dominus Varejo reúne estoque, vendas, financeiro e as principais operações da loja
                em um só lugar, de forma simples e organizada.
              </p>
              <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
                <button
                  type="button"
                  onClick={() => setSpecialistOpen(true)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#63B628] px-6 py-3 font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63B628]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#052334]"
                >
                  Fale com um especialista
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
                <a
                  href="#segmentos"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-bold text-white/95 backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Ver segmentos atendidos
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-2xl">
              <img
                src={varejoHeroImage}
                alt="Apresentação do Dominus Varejo"
                className="block h-auto w-full object-contain"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>
      </div>

      <main className="flex w-full flex-1 flex-col">
        <section id="segmentos" className="w-full border-b border-border bg-background">
          <div className="landing-page-container">
            <div className="section-intro mx-auto max-w-4xl text-center">
              <div className="section-eyebrow border border-[#3BBCEC]/30 bg-[#3BBCEC]/10 text-[#3BBCEC]">
                Para diferentes tipos de comércio
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Cada comércio tem suas necessidades. O Dominus entende isso.
              </h2>
              <p className="mx-auto mt-3.5 max-w-3xl fluid-body leading-relaxed text-muted-foreground">
                Recursos para organizar a gestão e simplificar a rotina de diferentes tipos de
                comércio.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
              {segments.map((segment) => (
                <li
                  key={segment.name}
                  className="flex min-h-16 items-center gap-3 rounded-xl border border-border bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3BBCEC]/40 hover:shadow-md sm:p-4"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#3BBCEC]/10 text-[#3BBCEC]">
                    <segment.icon size={17} aria-hidden="true" />
                  </span>
                  <span className="fluid-secondary font-semibold leading-snug text-foreground">
                    {segment.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="desafios" className="w-full border-b border-border bg-surface-subtle/50">
          <div className="landing-page-container">
            <div className="section-intro mx-auto max-w-4xl text-center">
              <div className="section-eyebrow border border-[#3BBCEC]/30 bg-[#3BBCEC]/10 text-[#3BBCEC]">
                Desafios da rotina
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                Mais organização para cuidar do dia a dia da loja
              </h2>
              <p className="mx-auto mt-3.5 max-w-3xl fluid-body leading-relaxed text-muted-foreground">
                Acompanhe as principais operações e tenha informações mais organizadas para
                administrar o negócio.
              </p>
            </div>
            <div
              role="region"
              aria-label="Desafios e respostas do Dominus Varejo"
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:rgba(59,188,236,0.35)_rgba(59,188,236,0.06)] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BBCEC]/60 focus-visible:ring-offset-2"
              tabIndex={0}
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex w-max gap-4 min-[1850px]:w-full">
                {challenges.map((challenge) => {
                  const Icon = challenge.icon;
                  return (
                    <article
                      key={challenge.title}
                      className="flex min-h-[320px] w-[min(84vw,320px)] shrink-0 snap-start flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3BBCEC]/40 hover:shadow-md min-[1850px]:min-w-[250px] min-[1850px]:flex-1 min-[1850px]:basis-0"
                    >
                      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#3BBCEC]/10 text-[#3BBCEC]">
                        <Icon size={23} aria-hidden="true" />
                      </div>
                      <h3 className="font-display fluid-h3 font-bold leading-tight text-foreground">
                        {challenge.title}
                      </h3>
                      <p className="mt-2 fluid-secondary leading-relaxed text-muted-foreground">
                        {challenge.description}
                      </p>
                      <div className="mt-auto border-t border-border pt-4">
                        <p className="mb-1.5 flex items-center gap-1.5 fluid-caption font-bold text-[#3BBCEC]">
                          <CheckCircle2 size={14} aria-hidden="true" />
                          Com o Dominus Varejo
                        </p>
                        <p className="fluid-secondary leading-relaxed text-foreground">
                          {challenge.response}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="w-full border-b border-border bg-background">
          <div className="landing-page-container">
            <div className="section-intro mx-auto max-w-4xl text-center">
              <div className="section-eyebrow border border-[#3BBCEC]/30 bg-[#3BBCEC]/10 text-[#3BBCEC]">
                Funcionalidades do Dominus Varejo
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                As principais atividades da loja em um só lugar
              </h2>
              <p className="mx-auto mt-3.5 max-w-3xl fluid-body leading-relaxed text-muted-foreground">
                Ferramentas para gerenciar a operação, organizar as vendas e acompanhar os
                resultados do seu comércio.
              </p>
            </div>
            <div
              aria-label="Funcionalidades do Dominus Varejo"
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:rgba(59,188,236,0.35)_rgba(59,188,236,0.06)] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BBCEC]/60 focus-visible:ring-offset-2 lg:overflow-visible lg:pb-0 lg:ring-0"
              role="region"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                  event.preventDefault();
                  event.currentTarget.scrollBy({
                    left: event.key === "ArrowRight" ? 320 : -320,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <div className="flex w-max gap-6 lg:grid lg:w-full lg:grid-cols-4">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <article
                      key={feature.title}
                      className="flex w-[min(84vw,360px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-surface-subtle/40 p-0 transition-all duration-300 hover:border-[#3BBCEC]/40 hover:shadow-lg lg:w-auto"
                    >
                      <div className="relative aspect-[16/9] w-full bg-white">
                        <img
                          src={feature.image}
                          alt={`Recurso Dominus Varejo: ${feature.title}`}
                          className="block h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-2">
                          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/95 text-[#3BBCEC] shadow-sm">
                            <Icon size={24} aria-hidden="true" />
                          </div>
                          <span className="max-w-[calc(100%-4rem)] rounded-full border border-[#3BBCEC]/20 bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#3BBCEC] shadow-sm">
                            {feature.badge}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <h3 className="mb-3 font-display fluid-h3 font-bold leading-tight text-foreground">
                          {feature.title}
                        </h3>
                        <p className="fluid-secondary leading-relaxed text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="planos-dominus-varejo"
          className="relative w-full overflow-hidden border-t border-[#3BBCEC]/20 bg-[radial-gradient(ellipse_72%_68%_at_84%_28%,rgba(59,188,236,0.34)_0%,rgba(20,105,154,0.18)_38%,transparent_68%),radial-gradient(ellipse_58%_62%_at_10%_88%,rgba(59,188,236,0.24)_0%,transparent_65%),linear-gradient(135deg,#052b3c_0%,#0d5675_38%,#073d57_68%,#031e2b_100%)]"
        >
          <div className="landing-page-container relative z-10">
            <div className="section-intro mx-auto max-w-7xl text-center">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-[#3BBCEC]/40 bg-[#3BBCEC]/15 px-4 py-1.5 text-[#3BBCEC]">
                Planos Dominus Varejo
              </div>
              <h2 className="font-display fluid-h2 font-extrabold leading-tight tracking-tight text-white">
                Conheça os planos do Dominus Varejo
              </h2>
              <p className="mx-auto mt-4 max-w-4xl fluid-body leading-relaxed text-white/80">
                As opções são organizadas por faturamento mensal e quantidade de PDVs.
              </p>

              <div
                role="group"
                aria-label="Selecione a periodicidade dos planos"
                className="mt-8 inline-flex items-center rounded-xl border border-white/20 bg-black/40 p-1 backdrop-blur-md"
              >
                {(["anual", "mensal"] as const).map((cycle) => (
                  <button
                    key={cycle}
                    type="button"
                    aria-pressed={billingCycle === cycle}
                    onClick={() => setBillingCycle(cycle)}
                    className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
                      billingCycle === cycle
                        ? "bg-[#3BBCEC] font-bold text-white shadow-md"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {cycle === "anual" ? "Anual" : "Mensal"}
                  </button>
                ))}
              </div>
            </div>

            <div
              role="region"
              aria-label="Planos do Dominus Varejo"
              tabIndex={0}
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:rgba(59,188,236,0.35)_rgba(59,188,236,0.06)] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BBCEC]/60 focus-visible:ring-offset-2 lg:overflow-visible lg:pb-0 lg:ring-0"
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex w-max gap-5 pr-5 sm:gap-6 sm:pr-6 lg:grid lg:w-full lg:grid-cols-4 lg:pr-0">
                {varejoPlans.map((plan) => {
                  const price = billingCycle === "anual" ? plan.annual : plan.monthly;
                  return (
                    <article
                      key={plan.id}
                      className="group relative flex w-[min(20rem,calc(100vw-3rem))] shrink-0 snap-start flex-col justify-between rounded-2xl border border-white/15 bg-black/40 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#3BBCEC] hover:bg-[#073d57]/90 hover:shadow-2xl hover:ring-2 hover:ring-[#3BBCEC]/50 lg:w-auto"
                    >
                      <div>
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <h3 className="font-display text-lg font-extrabold text-white">
                            {plan.name}
                          </h3>
                          {billingCycle === "anual" && (
                            <span className="rounded-md border border-[#3BBCEC] px-2 py-0.5 text-[11px] font-bold text-[#3BBCEC]">
                              até 12x no cartão
                            </span>
                          )}
                        </div>
                        <div className="mb-4 min-h-8 text-xs leading-snug text-white/60">
                          {plan.revenue}
                        </div>
                        <div className="mb-4 border-y border-white/10 py-4">
                          <div className="flex items-baseline gap-1 text-white">
                            <span className="text-xs font-semibold text-white/70">R$</span>
                            <span className="font-display text-3xl font-extrabold tracking-tight">
                              {price}
                            </span>
                            <span className="text-xs font-medium text-white/60">/mês</span>
                          </div>
                        </div>
                        <ul className="mb-6 flex flex-col gap-2 text-xs text-white/80">
                          <li className="flex items-start gap-2">
                            <CheckCircle2
                              size={13}
                              className="mt-0.5 shrink-0 text-[#3BBCEC]"
                              aria-hidden="true"
                            />
                            <span>{plan.terminals}</span>
                          </li>
                        </ul>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSpecialistOpen(true)}
                        className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-white/25 bg-white/10 text-xs font-bold text-white transition-all duration-200 hover:border-transparent hover:bg-[#3BBCEC] hover:shadow-md"
                      >
                        Falar sobre este plano
                        <ArrowRight size={13} aria-hidden="true" />
                      </button>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="simples-rapido-acompanhado"
          className="w-full border-t border-border bg-white"
          aria-labelledby="processo-varejo-title"
        >
          <div className="landing-page-container">
            <div className="mx-auto max-w-6xl text-center">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full bg-[#3BBCEC]/5 px-4 py-1.5 text-[#3BBCEC]">
                <span className="size-2 rounded-full bg-[#3BBCEC]" aria-hidden="true" />
                SIMPLES, RÁPIDO E ACOMPANHADO
              </div>
              <h2
                id="processo-varejo-title"
                className="font-display fluid-h2 font-extrabold tracking-tight text-foreground"
              >
                Conheça o Dominus Varejo e os próximos passos
              </h2>
              <p className="mt-2 fluid-body leading-relaxed text-muted-foreground">
                Três passos para conhecer o sistema e avaliar sua aplicação na rotina do seu
                comércio.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-11 md:grid-cols-3 md:gap-7">
                {[
                  {
                    icon: CalendarDays,
                    label: "PASSO 1",
                    description: "Agende uma demonstração com a equipe Waybit.",
                  },
                  {
                    icon: Presentation,
                    label: "PASSO 2",
                    description: "Conheça o sistema em uma apresentação da equipe.",
                  },
                  {
                    icon: Wrench,
                    label: "PASSO 3",
                    description:
                      "Após alinhamento comercial e implantação, comece a usar o Dominus Varejo na sua operação.",
                  },
                ].map(({ icon: Icon, label, description }) => (
                  <article
                    key={label}
                    className="flex min-h-[270px] flex-col items-center rounded-xl border border-gray-200 border-t-4 border-t-[#3BBCEC] bg-white px-5 py-8 text-center shadow-[0_4px_0_rgba(23,32,40,0.08)] sm:px-7"
                  >
                    <Icon
                      size={52}
                      strokeWidth={1.8}
                      className="text-[#3BBCEC]"
                      aria-hidden="true"
                    />
                    <p className="mt-5 text-base font-bold text-foreground">{label}</p>
                    <span className="mt-2 h-1 w-10 rounded-full bg-[#3BBCEC]" aria-hidden="true" />
                    <p className="mt-4 fluid-body font-bold leading-relaxed text-foreground">
                      {description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex justify-center sm:mt-12">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="inline-flex min-h-14 w-[70%] max-w-full items-center justify-center gap-2 rounded-xl bg-[#3BBCEC] px-6 py-3.5 font-bold text-white shadow-md transition-all duration-300 hover:bg-[#149fce] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BBCEC]/60 focus-visible:ring-offset-2"
                >
                  AGENDAR DEMONSTRAÇÃO
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas" className="w-full border-b border-border bg-surface-subtle/50">
          <div className="landing-page-container">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
              <div className="section-intro text-center lg:text-left">
                <div className="section-eyebrow border border-[#3BBCEC]/30 bg-[#3BBCEC]/10 text-[#3BBCEC]">
                  Dúvidas frequentes
                </div>
                <h2 className="font-display fluid-h2 font-extrabold tracking-tight text-foreground">
                  Tire suas dúvidas sobre o Dominus Varejo
                </h2>
                <p className="mt-3.5 fluid-body leading-relaxed text-muted-foreground">
                  Respostas diretas sobre os recursos de gestão documentados para o sistema.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaqIndex === index;
                  const panelId = `varejo-faq-panel-${index}`;
                  const buttonId = `varejo-faq-button-${index}`;
                  return (
                    <article
                      key={faq.question}
                      className="rounded-2xl border border-border border-l-4 border-l-[#3BBCEC] bg-white px-4 shadow-sm sm:px-5"
                    >
                      <h3>
                        <button
                          id={buttonId}
                          type="button"
                          aria-controls={panelId}
                          aria-expanded={isOpen}
                          onClick={() => setActiveFaqIndex(isOpen ? -1 : index)}
                          className="flex w-full items-center justify-between gap-4 py-5 text-left font-display fluid-body font-bold leading-snug text-foreground transition-colors hover:text-[#3BBCEC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3BBCEC]/60"
                        >
                          {faq.question}
                          <ChevronDown
                            size={18}
                            className={`shrink-0 text-[#3BBCEC] transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      </h3>
                      {isOpen && (
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className="flex gap-2 pb-5 fluid-secondary leading-relaxed text-muted-foreground"
                        >
                          <ArrowRight
                            size={15}
                            className="mt-1 shrink-0 text-[#3BBCEC]"
                            aria-hidden="true"
                          />
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-border bg-surface-subtle/60 py-6 text-center text-xs text-muted-foreground">
        <div className="landing-page-container flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Dominus Varejo • Waybit Software. Todos os direitos
            reservados.
          </p>
          <p className="text-[11px] text-muted-foreground/70">
            Tecnologia para uma gestão mais leve.
          </p>
        </div>
      </footer>

      <SpecialistDialog
        open={specialistOpen}
        onOpenChange={setSpecialistOpen}
        initialSegment="Varejo (Loja/Comércio)"
      />
      <FullFunnelBookingModal
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        segmentName="Varejo"
      />
    </div>
  );
}
