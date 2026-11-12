import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageSquare,
  Share2,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import "./blog.css";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    if (!post) {
      return {
        meta: [{ title: "Artigo não encontrado | Blog Waybit" }],
      };
    }
    return {
      meta: [
        { title: `${post.title} | Blog Waybit` },
        { name: "description", content: post.summary },
        { property: "og:title", content: `${post.title} | Blog Waybit` },
        { property: "og:description", content: post.summary },
        { property: "og:image", content: post.image },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getBlogPostBySlug(slug);
  const [specialistOpen, setSpecialistOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="blog-page min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Header currentPath="/blog" />
        <div className="py-24 text-center px-4 max-w-md mx-auto">
          <BookOpen size={48} className="mx-auto text-muted-foreground/60 mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground">
            Artigo não encontrado
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            O artigo solicitado não existe ou foi movido.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-sm hover:bg-primary-hover transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Voltar para o Blog</span>
          </Link>
        </div>
        <Footer onOpenSpecialist={() => setSpecialistOpen(true)} />
      </div>
    );
  }

  // Artigos relacionados (excluindo o atual)
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappDirectUrl = `https://wa.me/5521975812676?text=${encodeURIComponent(
    `Olá! Estava lendo o artigo "${post.title}" no Blog da Waybit e gostaria de tirar dúvidas sobre o sistema Dominus.`,
  )}`;

  return (
    <div className="blog-page min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Header currentPath="/blog" />

        {/* BREADCRUMB NAVEGÁVEL */}
        <div className="border-b border-border bg-surface-subtle py-3.5">
          <div className="fluid-container flex items-center justify-between text-xs text-muted-foreground">
            <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-foreground transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium truncate max-w-[240px] sm:max-w-md">
                {post.title}
              </span>
            </nav>

            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0 ml-4"
            >
              <ArrowLeft size={14} />
              <span>Todos os artigos</span>
            </Link>
          </div>
        </div>

        {/* ARTIGO COMPLETO */}
        <article className="py-12 lg:py-16">
          <div className="fluid-container">
            <div className="mx-auto max-w-[1970px]">
            {/* Header do Artigo */}
            <header className="mx-auto mb-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${post.categoryColor.bg} ${post.categoryColor.text} ${post.categoryColor.border} bg-card/90 shadow-sm`}
                >
                  {post.category}
                </span>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                </div>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2]">
                {post.title}
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-4 py-0.5">
                {post.summary}
              </p>

              {/* Informações do Autor & Compartilhar */}
              <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">{post.author}</p>
                    <p className="text-[11px] text-muted-foreground">{post.authorRole}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors cursor-pointer"
                  >
                    <Share2 size={13} />
                    <span>{copied ? "Link Copiado!" : "Compartilhar"}</span>
                  </button>
                </div>
              </div>
            </header>

            {/* Imagem Principal em Destaque */}
            <div className="relative mx-auto mb-12 aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-muted shadow-lg sm:aspect-[16/9]">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Corpo do Artigo com Diagramação Moderna */}
            <div className="mx-auto max-w-4xl space-y-8 text-foreground/90 leading-relaxed text-base sm:text-lg">
              {post.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  {section.subhead && (
                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground pt-4 mb-3">
                      {section.subhead}
                    </h2>
                  )}

                  {section.paragraphs?.map((p, pIdx) => (
                    <p key={pIdx} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Caixa de Destaque / Regras Importantes */}
                  {section.highlight && (
                    <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 sm:p-6 my-6">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1.5">
                        <Sparkles size={16} />
                        <span>{section.highlight.title}</span>
                      </div>
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        {section.highlight.text}
                      </p>
                    </div>
                  )}

                  {/* Lista com Marcadores e Ícones */}
                  {section.list && (
                    <ul className="grid gap-3 my-5 pl-1">
                      {section.list.map((item, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-3 text-sm sm:text-base">
                          <CheckCircle2
                            size={18}
                            className="text-[#71BE44] shrink-0 mt-0.5"
                          />
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Lista Numerada de Pontos-Chave */}
                  {section.numberedList && (
                    <div className="grid gap-4 my-6">
                      {section.numberedList.map((item) => (
                        <div
                          key={item.number}
                          className="rounded-xl border border-border bg-card/80 p-5 flex items-start gap-4 transition-all hover:border-primary/40 hover:shadow-sm"
                        >
                          <span className="size-8 rounded-lg bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                            {item.number}
                          </span>
                          <div>
                            <h3 className="font-display text-base font-bold text-foreground mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CALL TO ACTION DO WHATSAPP WAYBIT */}
            {post.whatsappCta && (
              <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                    <MessageSquare size={13} />
                    <span>Canal de Suporte e Vendas Waybit</span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    Ainda tem dúvidas ou quer aplicar essas soluções?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                    {post.whatsappCta}
                  </p>
                </div>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#71BE44] hover:bg-[#62a83a] text-white font-bold text-xs shadow-md transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageSquare size={16} />
                  <span>Chamar no WhatsApp</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
            </div>
          </div>
        </article>

        {/* ARTIGOS RELACIONADOS */}
        <section className="py-14 bg-surface-subtle border-t border-border">
          <div className="fluid-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Continue lendo
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">
                  Artigos Relacionados
                </h2>
              </div>
              <Link
                to="/blog"
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Ver todos os artigos</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.id}
                  className="rounded-2xl border border-border bg-card/90 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: rPost.slug }}
                      className="block relative aspect-[16/10] overflow-hidden bg-muted"
                    >
                      <img
                        src={rPost.image}
                        alt={rPost.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold backdrop-blur-md border ${rPost.categoryColor.bg} ${rPost.categoryColor.text} ${rPost.categoryColor.border} bg-card/90 shadow-sm`}
                        >
                          {rPost.category}
                        </span>
                      </div>
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                        <Clock size={12} />
                        <span>{rPost.readTime}</span>
                      </div>
                      <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        <Link to="/blog/$slug" params={{ slug: rPost.slug }}>
                          {rPost.title}
                        </Link>
                      </h3>
                      <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {rPost.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-border/60 mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="text-[11px]">{rPost.date}</span>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: rPost.slug }}
                      className="font-semibold text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      <span>Ler</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL DO DOMINUS */}
        <section className="py-12 bg-background border-t border-border text-center">
          <div className="mx-auto max-w-2xl px-5">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Pronto para colocar sua gestão em dia com o Dominus?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Agende uma demonstração gratuita sem compromisso e veja como o Dominus simplifica o
              controle do seu negócio.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button
                onClick={() => setSpecialistOpen(true)}
                className="h-11 px-6 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs shadow-sm cursor-pointer"
              >
                Falar com um Consultor
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer onOpenSpecialist={() => setSpecialistOpen(true)} />
      <SpecialistDialog open={specialistOpen} onOpenChange={setSpecialistOpen} />
    </div>
  );
}
