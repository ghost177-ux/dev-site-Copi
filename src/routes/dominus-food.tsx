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
  Wine, Coffee, Beer, Flame, Sandwich, Utensils, CookingPot, Pizza, ChefHat, Soup, TableProperties, Clock,
} from "lucide-react";
import { useState } from "react";

import { DominusFoodHeader } from "@/components/DominusFoodHeader";
import { FullFunnelBookingModal } from "@/components/FullFunnelBookingModal";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import foodHeroImage from "@/assets/Dominus-Food-1.avif";
import tableImage from "@/assets/CADASTRO DE MESA E BALCÃO.avif";
import kitchenImage from "@/assets/KDS.avif";
import waiterImage from "@/assets/Garçom, ticket e POS.avif";
import { Button } from "@/components/ui/button";
import { dominusFoodPlans } from "@/data/dominusFoodPlans";
import { getFoodSegmentRoute } from "@/data/segmentMenuRoutes";
import dashboardImage from "@/assets/Dashboard.avif";
import inventoryImage from "@/assets/Controle de estoque.avif";
import pointOfSaleImage from "@/assets/PDV Rápido.png";
import dominusIaProductImage from "@/assets/Dominus IA.avif";
import logoDominusIa from "@/assets/logo Dominus-IA.avif";

export const Route = createFileRoute("/dominus-food")({
  head: () => ({
    meta: [
      { title: "Dominus Food | Sistema de gestão para alimentação | Waybit" },
      {
        name: "description",
        content:
          "Conheça o Dominus Food: atendimento, pedidos, cozinha, estoque, delivery e financeiro para estabelecimentos de alimentação.",
      },
      {
        property: "og:title",
        content: "Dominus Food | Sistema de gestão para alimentação | Waybit",
      },
      {
        property: "og:description",
        content: "Atendimento, cozinha, estoque, delivery e financeiro conectados para restaurantes, bares e cafeterias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DominusFoodOverviewPage,
});

const segments = [
  { name: "Bares e botecos", icon: Wine },
  { name: "Cafeterias", icon: Coffee },
  { name: "Choperias", icon: Beer },
  { name: "Churrascarias", icon: Flame },
  { name: "Delivery", icon: Bike },
  { name: "Hamburguerias", icon: Sandwich },
  { name: "Lanchonetes", icon: Utensils },
  { name: "Petiscarias", icon: CookingPot },
  { name: "Pizzarias", icon: Pizza },
  { name: "Quiosques", icon: Store },
  { name: "Restaurantes", icon: ChefHat },
  { name: "Sushibares", icon: Soup },
];

const challenges = [
  { icon: Package, title: "Perdas e desperdícios de insumos", description: "Sem acompanhar o estoque, fica difícil evitar perdas e manter os ingredientes disponíveis.", response: "Controle o estoque e acompanhe alertas de reposição e sugestões de compras." },
  { icon: ClipboardList, title: "Salão e cozinha desconectados", description: "Pedidos em controles separados dificultam a comunicação e o ritmo do atendimento.", response: "Conecte os pedidos da comanda eletrônica ao fluxo de produção da cozinha." },
  { icon: Clock, title: "Excesso de tarefas manuais", description: "Anotações e rotinas isoladas consomem tempo da equipe e geram retrabalho.", response: "Integre atendimento, cozinha, caixa e delivery para organizar a operação." },
  { icon: CreditCard, title: "Falta de controle financeiro", description: "Entradas e saídas desorganizadas dificultam acompanhar o caixa e os custos.", response: "Acompanhe movimentações financeiras e indicadores do estabelecimento." },
  { icon: BarChart3, title: "Decisões sem informações confiáveis", description: "Sem relatórios, acompanhar os resultados do negócio se torna mais difícil.", response: "Consulte relatórios e indicadores em tempo real para apoiar suas decisões." },
];

const features = [
  { icon: TableProperties, badge: "Salão e balcão", image: tableImage, title: "Controle de mesas e balcão", description: "Organize mesas, balcão e pedidos para um atendimento mais ágil." },
  { icon: Smartphone, badge: "Comanda eletrônica", image: waiterImage, title: "Pedidos pelo aplicativo", description: "Registre pedidos pelo aplicativo do garçom e agilize a comunicação com a cozinha." },
  { icon: ChefHat, badge: "Cozinha e KDS", image: kitchenImage, title: "Produção integrada", description: "Organize o fluxo de pedidos na cozinha com a integração ao KDS." },
  { icon: Package, badge: "Estoque", image: inventoryImage, title: "Controle de insumos", description: "Acompanhe o estoque, crie combos e planeje a reposição com alertas e sugestões de compras." },
  { icon: ShoppingCart, badge: "Vendas e PDV", image: pointOfSaleImage, title: "PDV rápido", description: "Registre vendas e organize o caixa com os recursos de PDV e operação offline." },
  { icon: BarChart3, badge: "Financeiro e resultados", image: dashboardImage, title: "Gestão e relatórios", description: "Acompanhe finanças e indicadores em tempo real para administrar o estabelecimento." },
];

const faqs = [
  { question: "O Dominus Food atende ao meu estabelecimento?", answer: "O Dominus Food reúne recursos de gestão para restaurantes, bares, botecos, cafeterias e outros estabelecimentos de alimentação. Converse com a equipe Waybit para avaliar as necessidades da sua operação." },
  { question: "Como controlar o estoque e os insumos?", answer: "O sistema permite acompanhar o estoque, criar combos e utilizar alertas de reposição e sugestões de compras para apoiar o planejamento e reduzir desperdícios." },
  { question: "Posso conectar o atendimento à cozinha?", answer: "Sim. A comanda eletrônica permite registrar pedidos pelo aplicativo do garçom, e a integração com KDS ajuda a organizar o fluxo de produção na cozinha. Consulte os recursos disponíveis para seu plano." },
  { question: "O sistema possui gestão financeira e relatórios?", answer: "Sim. O Dominus Food oferece controle financeiro e relatórios para acompanhar faturamento, custos e indicadores do estabelecimento em tempo real." },
  { question: "O Dominus Food se integra ao delivery?", answer: "Sim. O Dominus Food possui integração com o iFood e conta com o Bitfood, plataforma própria de delivery. Consulte a equipe sobre as condições e a disponibilidade para sua operação." },
];

function DominusIaSection({ onOpenSpecialist }: {
  onOpenSpecialist: () => void;
}) {
  return (
    <section
      id="dominus-ia-food"
      className=" w-full border-t border-border bg-white"
    >
      <div className="landing-page-container">
        <div
          className="grid w-full min-w-0 grid-cols-1 items-center gap-10 rounded-3xl border border-[#549192]/30 p-6 shadow-xl sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12"
          style={{
            background: "radial-gradient(ellipse 55% 45% at 15% 80%, rgba(113,198,187,0.45) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 80% 30%, rgba(113,198,187,0.8) 0%, transparent 65%), linear-gradient(135deg, #28595B 0%, color-mix(in srgb, #28595B 70%, #71C6BB) 35%, #71C6BB 65%, #28595B 100%)"
          }}
        >
          <div className="flex h-full min-w-0 flex-col items-start justify-center gap-5 text-left sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <img src={logoDominusIa} alt="Dominus IA" className="h-12 w-auto max-w-[60%] object-contain sm:h-16" />
            </div>
            <h3 className="font-display fluid-h3 font-extrabold leading-snug text-white">Inteligência Artificial na gestão de estoque</h3>
            <p className="fluid-body font-medium leading-relaxed text-white">
              A Waybit desenvolveu o Dominus IA para apoiar as tarefas mais críticas do estoque:
              leitura e entrada automatizada de notas fiscais, conferência de contagens, cálculo
              do Custo de Mercadorias Vendidas (CMV) e análise preditiva de ruptura.
            </p>
            <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {["Entrada ágil de NF-e de fornecedores", "Análise de margem e CMV por porção", "Alertas para evitar falta de insumos", "Mais precisão nas compras da semana"].map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 fluid-secondary font-medium text-white">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#173C3D]" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button type="button" onClick={onOpenSpecialist} className="inline-flex min-h-12 max-w-full items-center rounded-xl bg-[#173C3D] px-6 py-3 text-left font-bold fluid-btn text-white shadow-md transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80CCC3] focus-visible:ring-offset-2">Saber mais sobre o Dominus IA</button>
            <p className="fluid-legal font-medium leading-relaxed text-white">
              * Módulo avançado sujeito a plano e disponibilidade. Consulte a equipe comercial para saber mais.
            </p>
          </div>
          <div className="flex min-w-0 items-center justify-center">
            <img src={dominusIaProductImage} alt="Dominus IA em notebook e smartphone" className="block h-auto w-full max-w-full object-contain" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DominusFoodOverviewPage() {
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const [billingCycle, setBillingCycle] = useState<"anual" | "mensal">("anual");
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="dominus-food-page dominus-food-overview flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <div className="relative w-full overflow-hidden food-overview-backdrop">
        <DominusFoodHeader onOpenBooking={() => setBookingOpen(true)} />

        <section
          id="hero"
          className="relative w-full pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
        >
          <div className="landing-page-container relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-segment-food/40 bg-segment-food/10 px-4 py-1.5 sm:mb-6">
                <Store size={14} className="text-segment-food" aria-hidden="true" />
                <span className="fluid-caption font-bold uppercase tracking-normal text-segment-food">
                  Gestão para estabelecimentos de alimentação
                </span>
              </div>
              <h1 className="font-display fluid-h1 font-extrabold leading-[1.1] tracking-normal text-primary-foreground">
                Dominus Food
              </h1>
              <p className="mt-5 max-w-2xl fluid-body-lg leading-relaxed text-primary-foreground sm:mt-6">
                Atendimento, pedidos, cozinha, estoque, delivery e financeiro em um só sistema. Organize os processos e acompanhe os resultados do seu estabelecimento com o Dominus Food.
              </p>
              <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
                <Button variant="ghost"
                  type="button"
                  onClick={() => setSpecialistOpen(true)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3 font-bold text-primary-foreground shadow-md transition-all hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-food-depth"
                >
                  Fale com um especialista
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <Button asChild variant="ghost"

                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-primary-foreground/25 bg-card/10 px-6 py-3 font-bold text-primary-foreground/95 backdrop-blur-sm transition-colors hover:bg-card/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60"
                >
                  <a href="#segmentos">Ver segmentos atendidos</a>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-2xl">
              <img
                src={foodHeroImage}
                alt="Apresentação do Dominus Food"
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
              <div className="section-eyebrow border border-segment-food/30 bg-segment-food/10 text-segment-food">
                Para diferentes negócios de alimentação
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-normal text-foreground">
                Cada operação tem suas necessidades. O Dominus entende isso.
              </h2>
              <p className="mx-auto mt-3.5 max-w-3xl fluid-body leading-relaxed text-muted-foreground">
                Recursos para organizar a gestão de restaurantes, bares, botecos, cafeterias e outros estabelecimentos de alimentação.
              </p>
            </div>
            <ul className="mx-auto flex flex-wrap justify-center gap-3 sm:gap-4">
              {segments.map((segment) => {
                const SegmentIcon = segment.icon;
                const routeName =
                  segment.name === "Bares e botecos"
                    ? "Boteco"
                    : segment.name === "Cafeterias"
                      ? "Cafeteria"
                      : segment.name === "Choperias"
                        ? "Choperia"
                        : segment.name === "Restaurantes"
                          ? "Restaurante"
                          : undefined;
                const cardContent = (
                  <>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-segment-food/10 text-segment-food">
                      <SegmentIcon size={17} aria-hidden="true" />
                    </span>
                    <span className="fluid-secondary font-semibold leading-snug text-foreground">
                      {segment.name}
                    </span>
                  </>
                );
                const cardClassName =
                  "flex min-h-16 w-full items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-segment-food/40 hover:shadow-md sm:p-4";
                const widthClassName =
                  "w-[calc(50%_-_0.375rem)] sm:w-[calc(33.333%_-_0.667rem)] lg:w-[calc(25%_-_0.75rem)] xl:w-[calc(20%_-_0.8rem)]";

                return (
                  <li key={segment.name} className={widthClassName}>
                    {routeName ? (
                      <Link
                        to={getFoodSegmentRoute(routeName)}
                        className={`${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-segment-food/60 focus-visible:ring-offset-2`}
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <div className={cardClassName}>{cardContent}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="desafios" className="w-full border-b border-border bg-surface-subtle/50">
          <div className="landing-page-container">
            <div className="section-intro mx-auto max-w-4xl text-center">
              <div className="section-eyebrow border border-segment-food/30 bg-segment-food/10 text-segment-food">
                Desafios da rotina
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-normal text-foreground">
                Mais controle do atendimento à gestão
              </h2>
              <p className="mx-auto mt-3.5 max-w-3xl fluid-body leading-relaxed text-muted-foreground">
                Acompanhe as principais operações e tenha informações mais organizadas para
                administrar o negócio.
              </p>
            </div>
            <div
              role="region"
              aria-label="Desafios e respostas do Dominus Food"
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 food-overview-scroll [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-segment-food/60 focus-visible:ring-offset-2"
              tabIndex={0}
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex w-max gap-4 min-[1850px]:w-full">
                {challenges.map((challenge) => {
                  const Icon = challenge.icon;
                  return (
                    <article
                      key={challenge.title}
                      className="flex min-h-[320px] w-[min(84vw,320px)] shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-segment-food/40 hover:shadow-md min-[1850px]:min-w-[250px] min-[1850px]:flex-1 min-[1850px]:basis-0"
                    >
                      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-segment-food/10 text-segment-food">
                        <Icon size={23} aria-hidden="true" />
                      </div>
                      <h3 className="font-display fluid-h3 font-bold leading-tight text-foreground">
                        {challenge.title}
                      </h3>
                      <p className="mt-2 fluid-secondary leading-relaxed text-muted-foreground">
                        {challenge.description}
                      </p>
                      <div className="mt-auto border-t border-border pt-4">
                        <p className="mb-1.5 flex items-center gap-1.5 fluid-caption font-bold text-segment-food">
                          <CheckCircle2 size={14} aria-hidden="true" />
                          Com o Dominus Food
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

        {/* ─── DESTAQUE DOMINUS IA — GESTÃO INTELIGENTE DE ESTOQUE ─── */}
        <DominusIaSection onOpenSpecialist={() => setSpecialistOpen(true)} />

        {/* ───  FUNCIONALIDADES DOMINUS FOOD ─── */}
        <section id="funcionalidades" className="w-full border-t border-border border-b border-border bg-background">
          <div className="landing-page-container">
            <div className="section-intro mx-auto max-w-4xl text-center">
              <div className="section-eyebrow border border-segment-food/30 bg-segment-food/10 text-segment-food">
                Funcionalidades do Dominus Food
              </div>
              <h2 className="font-display fluid-h2 font-extrabold tracking-normal text-foreground">
                Atendimento, cozinha e gestão em um só lugar
              </h2>
              <p className="mx-auto mt-3.5 max-w-3xl fluid-body leading-relaxed text-muted-foreground">
                Ferramentas para organizar os pedidos, conectar a equipe e acompanhar os resultados do seu estabelecimento.
              </p>
            </div>
            <div
              aria-label="Funcionalidades do Dominus Food"
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 food-overview-scroll [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-segment-food/60 focus-visible:ring-offset-2 lg:overflow-visible lg:pb-0 lg:ring-0"
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
              <div className="flex w-max gap-6 lg:grid lg:w-full lg:grid-cols-3">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <article
                      key={feature.title}
                      className="flex w-[min(84vw,360px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-surface-subtle/40 p-0 transition-all duration-300 hover:border-segment-food/40 hover:shadow-lg lg:w-auto"
                    >
                      <div className="relative aspect-[16/9] w-full bg-card">
                        <img
                          src={feature.image}
                          alt={`Recurso Dominus Food: ${feature.title}`}
                          className="block h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-2">
                          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-card/95 text-segment-food shadow-sm">
                            <Icon size={24} aria-hidden="true" />
                          </div>
                          <span className="max-w-[calc(100%-4rem)] rounded-full border border-segment-food/20 bg-card/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-normal text-segment-food shadow-sm">
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
          id="planos-dominus-food"
          className="relative w-full overflow-hidden border-t border-segment-food/20 food-overview-backdrop"
        >
          <div className="landing-page-container relative z-10">
            <div className="section-intro mx-auto max-w-7xl text-center">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-segment-food/40 bg-segment-food/15 px-4 py-1.5 text-segment-food">
                Planos Dominus Food
              </div>
              <h2 className="font-display fluid-h2 font-extrabold leading-tight tracking-normal text-primary-foreground">
                Conheça os planos do Dominus Food
              </h2>
              <p className="mx-auto mt-4 max-w-4xl fluid-body leading-relaxed text-primary-foreground/80">
                As opções são organizadas por faturamento mensal e quantidade de PDVs.
              </p>

              <div
                role="group"
                aria-label="Selecione a periodicidade dos planos"
                className="mt-8 inline-flex items-center rounded-xl border border-primary-foreground/20 bg-food-ink/40 p-1 backdrop-blur-md"
              >
                {(["anual", "mensal"] as const).map((cycle) => (
                  <Button variant="ghost"
                    key={cycle}
                    type="button"
                    aria-pressed={billingCycle === cycle}
                    onClick={() => setBillingCycle(cycle)}
                    className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
                      billingCycle === cycle
                        ? "bg-segment-food font-bold text-primary-foreground shadow-md hover:bg-segment-food hover:text-primary-foreground"
                        : "text-primary-foreground/70 hover:bg-transparent hover:text-white!"
                    }`}
                  >
                    {cycle === "anual" ? "Anual (Desconto especial)" : "Mensal"}
                  </Button>
                ))}
              </div>
            </div>

            <div
              role="region"
              aria-label="Planos do Dominus Food"
              tabIndex={0}
              className="w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-4 food-overview-scroll [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-segment-food/60 focus-visible:ring-offset-2 lg:overflow-visible lg:pb-0 lg:ring-0"
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex w-max gap-5 pr-5 sm:gap-6 sm:pr-6 lg:grid lg:w-full lg:grid-cols-4 lg:pr-0">
                {dominusFoodPlans.map((plan) => {
                  const preco = billingCycle === "anual" ? plan.anual : plan.mensal;
                  return (
                    <div
                      key={plan.id}
                      className="group relative flex w-[min(20rem,calc(100vw-3rem))] shrink-0 snap-start flex-col justify-between rounded-2xl border border-white/15 bg-black/40 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FC4242] hover:bg-[#2d0909]/90 hover:shadow-2xl hover:ring-2 hover:ring-[#FC4242]/50 lg:w-auto"
                    >

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-display font-extrabold text-lg text-white">
                            {plan.nome}
                          </h3>
                        </div>

                        <p className="text-xs text-white/60 min-h-[32px] leading-snug mb-4">
                          {plan.descricao}
                        </p>

                        {/* Bloco de Preço */}
                        <div className="py-4 border-y border-white/10 mb-4">
                          {billingCycle === "anual" && plan.valorCheio && (
                            <div className="origin-left text-base font-semibold text-white/70 line-through mb-1 transition-all duration-300 group-hover:scale-[1.03] group-hover:font-bold group-hover:text-[#FFFFFF]">
                              R$ {plan.valorCheio}
                            </div>
                          )}
                          <div className="flex items-baseline gap-1 text-white">
                            {preco !== "Consulte" ? (
                              <>
                                {billingCycle === "anual" && (
                                  <span className="font-display text-lg font-extrabold">12X</span>
                                )}
                                <span className="text-xs font-semibold text-white/70">R$</span>
                                <span className="font-display text-3xl font-extrabold tracking-tight">
                                  {billingCycle === "anual" ? preco.split(",")[0] : preco}
                                </span>
                                {billingCycle === "anual" ? (
                                  <span className="flex flex-col items-start self-center leading-none">
                                    <span className="text-xs font-extrabold">,{preco.split(",")[1]}</span>
                                    <span className="text-xs text-white/60 font-medium">/mês</span>
                                  </span>
                                ) : (
                                  <span className="text-xs text-white/60 font-medium">/mês</span>
                                )}
                              </>
                            ) : (
                              <span className="font-display text-2xl font-extrabold text-white">
                                Sob Consulta
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Lista de Recursos */}
                        <ul className="flex flex-col gap-2 mb-6 text-sm text-white/80">
                          {[plan.faturamento, plan.pdvs].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2
                                size={13}
                                className="mt-0.5 shrink-0 text-[#FC4242]"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/planos"
                        search={{ segmento: "food" }}
                        className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-white/25 bg-white/10 text-xs font-bold text-white transition-all duration-200 hover:bg-[#FC4242] group-hover:border-transparent group-hover:bg-[#FC4242] group-hover:shadow-md group-hover:hover:bg-[#FC4242] group-hover:hover:brightness-110"
                      >
                        <span>Ver detalhes deste plano</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="simples-rapido-acompanhado"
          className="w-full border-t border-border bg-card"
          aria-labelledby="processo-food-title"
        >
          <div className="landing-page-container">
            <div className="mx-auto max-w-6xl text-center">
              <div className="section-eyebrow inline-flex items-center gap-2 rounded-full bg-segment-food/5 px-4 py-1.5 text-segment-food">
                <span className="size-2 rounded-full bg-segment-food" aria-hidden="true" />
                SIMPLES, RÁPIDO E ACOMPANHADO
              </div>
              <h2
                id="processo-food-title"
                className="font-display fluid-h2 font-extrabold tracking-normal text-foreground"
              >
                Conheça o Dominus Food e os próximos passos
              </h2>
              <p className="mt-2 fluid-body leading-relaxed text-muted-foreground">
                Três passos para conhecer o sistema e avaliar sua aplicação na rotina do seu
                estabelecimento.
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
                      "Após alinhamento comercial e implantação, comece a usar o Dominus Food na sua operação.",
                  },
                ].map(({ icon: Icon, label, description }) => (
                  <article
                    key={label}
                    className="flex min-h-[270px] flex-col items-center rounded-xl border border-border border-t-4 border-t-segment-food bg-card px-5 py-8 text-center shadow-sm sm:px-7"
                  >
                    <Icon
                      size={52}
                      strokeWidth={1.8}
                      className="text-segment-food"
                      aria-hidden="true"
                    />
                    <p className="mt-5 text-base font-bold text-foreground">{label}</p>
                    <span className="mt-2 h-1 w-10 rounded-full bg-segment-food" aria-hidden="true" />
                    <p className="mt-4 fluid-body font-bold leading-relaxed text-foreground">
                      {description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex justify-center sm:mt-12">
                <Button variant="ghost"
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="inline-flex min-h-14 w-[70%] max-w-full items-center justify-center gap-2 rounded-xl bg-segment-food px-6 py-3.5 font-bold text-primary-foreground shadow-md transition-all duration-300 hover:bg-segment-food active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-segment-food/60 focus-visible:ring-offset-2"
                >
                  AGENDAR DEMONSTRAÇÃO
                  <ArrowRight size={17} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas" className="w-full border-t border-border border-b border-border bg-surface-subtle/50">
          <div className="landing-page-container">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
              <div className="section-intro text-center lg:text-left">
                <div className="section-eyebrow border border-segment-food/30 bg-segment-food/10 text-segment-food">
                  Dúvidas frequentes
                </div>
                <h2 className="font-display fluid-h2 font-extrabold tracking-normal text-foreground">
                  Tire suas dúvidas sobre o Dominus Food
                </h2>
                <p className="mt-3.5 fluid-body leading-relaxed text-muted-foreground">
                  Atendimento, estoque, cozinha, delivery e resultados do seu estabelecimento.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaqIndex === index;
                  const panelId = `food-faq-panel-${index}`;
                  const buttonId = `food-faq-button-${index}`;
                  return (
                    <article
                      key={faq.question}
                      className="rounded-2xl border border-border border-l-4 border-l-segment-food bg-card px-4 shadow-sm sm:px-5"
                    >
                      <h3>
                        <Button variant="ghost"
                          id={buttonId}
                          type="button"
                          aria-controls={panelId}
                          aria-expanded={isOpen}
                          onClick={() => setActiveFaqIndex(isOpen ? -1 : index)}
                          className="flex w-full items-center justify-between gap-4 py-5 text-left font-display fluid-body font-bold leading-snug text-foreground transition-colors hover:text-segment-food focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-segment-food/60"
                        >
                          {faq.question}
                          <ChevronDown
                            size={18}
                            className={`shrink-0 text-segment-food transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </Button>
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
                            className="mt-1 shrink-0 text-segment-food"
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
            © {new Date().getFullYear()} Dominus Food • Waybit Software. Todos os direitos
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
        initialSegment="Food (Restaurante/Delivery)"
      />
      <FullFunnelBookingModal
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        segmentName="Food"
      />
    </div>
  );
}
