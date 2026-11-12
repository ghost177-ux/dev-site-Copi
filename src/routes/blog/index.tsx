import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Filter,
  MessageSquare,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpecialistDialog } from "@/components/SpecialistDialog";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import "./blog.css";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog & Dicas de Gestão para Comércio | Waybit Software" },
      {
        name: "description",
        content:
          "Artigos práticos de gestão, finanças, obrigações fiscais e tecnologia para restaurantes, varejo e oficinas. Conteúdos exclusivos Waybit.",
      },
      {
        property: "og:title",
        content: "Blog & Dicas de Gestão para Comércio | Waybit Software",
      },
      {
        property: "og:description",
        content:
          "Artigos práticos de gestão, finanças, obrigações fiscais e tecnologia para o seu comércio.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogListPage,
});

const categories = [
  "Todos",
  "Gastronomia / Food",
  "Gestão & Inovação",
  "Fiscal & Contábil",
  "Legislação & Normas",
  "Delivery & Gestão",
  "Tecnologia & Integrações",
] as const;

function BlogListPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [specialistOpen, setSpecialistOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.summary.toLowerCase().includes(search.toLowerCase()) ||
        post.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todos" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const featuredPost = filteredPosts[0] ?? blogPosts[0];
  const regularPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="blog-page min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Header currentPath="/blog" />

        {/* HERO BANNER DO BLOG */}
        <section className="relative py-14 lg:py-20 bg-gradient-to-b from-surface-subtle via-background to-background border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

          <div className="fluid-container text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
              <BookOpen size={13} className="text-primary" />
              <span>Blog Oficial Waybit</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-[1.15]">
              Conhecimento prático para <span className="text-primary">acelerar sua empresa</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estratégias de vendas, tecnologia de ponta, obrigações fiscais e gestão simplificada
              para quem vive o comércio na prática.
            </p>

            {/* Barra de Pesquisa */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Pesquisar por assunto, título ou categoria..."
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-input bg-card shadow-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded bg-muted cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>

            {/* Filtros de Categoria */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm scale-105"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* LISTAGEM DE ARTIGOS */}
        <section className="py-12 lg:py-16">
          <div className="fluid-container">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-border bg-card/50 max-w-lg mx-auto">
                <Filter size={36} className="mx-auto text-muted-foreground/60 mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  Nenhum artigo encontrado
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Não encontramos publicações correspondentes aos filtros selecionados.
                </p>
                <Button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("Todos");
                  }}
                  variant="outline"
                  className="mt-5 text-xs font-semibold"
                >
                  Limpar filtros de busca
                </Button>
              </div>
            ) : (
              <>
                {/* ARTIGO EM DESTAQUE (HERO POST) */}
                {selectedCategory === "Todos" && !search && featuredPost && (
                  <div className="mb-14">
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-wider">
                      <Sparkles size={14} className="text-[#FFB800]" />
                      <span>Artigo em Destaque</span>
                    </div>

                    <article className="rounded-3xl border border-border bg-card/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
                      <Link to="/blog/$slug" params={{ slug: featuredPost.slug }} className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-muted block">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-md text-xs font-bold backdrop-blur-md border ${featuredPost.categoryColor.bg} ${featuredPost.categoryColor.text} ${featuredPost.categoryColor.border} bg-card/90 shadow-sm`}
                          >
                            {featuredPost.category}
                          </span>
                        </div>
                      </Link>

                      <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar size={13} />
                              {featuredPost.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock size={13} />
                              {featuredPost.readTime}
                            </span>
                          </div>

                          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-tight mb-4">
                            <Link to="/blog/$slug" params={{ slug: featuredPost.slug }}>
                              {featuredPost.title}
                            </Link>
                          </h2>

                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {featuredPost.summary}
                          </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold text-foreground">
                              {featuredPost.author}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                              {featuredPost.authorRole}
                            </p>
                          </div>

                          <Link
                            to="/blog/$slug"
                            params={{ slug: featuredPost.slug }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-sm hover:bg-primary-hover transition-colors"
                          >
                            <span>Ler artigo completo</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                )}

                {/* GRADE DOS DEMAIS ARTIGOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {(selectedCategory === "Todos" && !search ? regularPosts : filteredPosts).map(
                    (post) => (
                      <article
                        key={post.id}
                        className="rounded-2xl border border-border bg-card/90 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Imagem */}
                          <Link
                            to="/blog/$slug"
                            params={{ slug: post.slug }}
                            className="block relative aspect-[16/10] overflow-hidden bg-muted group-hover:opacity-95 transition-opacity"
                          >
                            <img
                              src={post.image}
                              alt={post.imageAlt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                              loading="lazy"
                            />
                            <div className="absolute top-3 left-3">
                              <span
                                className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold backdrop-blur-md border ${post.categoryColor.bg} ${post.categoryColor.text} ${post.categoryColor.border} bg-card/90 shadow-sm`}
                              >
                                {post.category}
                              </span>
                            </div>
                          </Link>

                          {/* Conteúdo */}
                          <div className="p-6">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2.5">
                              <Clock size={13} className="text-muted-foreground/70" />
                              <span>{post.readTime}</span>
                              <span className="mx-1">•</span>
                              <span>{post.date}</span>
                            </div>

                            <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                              <Link to="/blog/$slug" params={{ slug: post.slug }}>
                                {post.title}
                              </Link>
                            </h3>

                            <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                              {post.summary}
                            </p>
                          </div>
                        </div>

                        {/* Rodapé */}
                        <div className="p-6 pt-0 border-t border-border/60 mt-4 flex items-center justify-between text-xs text-muted-foreground">
                          <span className="text-[11px] font-medium">{post.author}</span>
                          <Link
                            to="/blog/$slug"
                            params={{ slug: post.slug }}
                            className="font-semibold text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                          >
                            <span>Ler artigo</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </article>
                    ),
                  )}
                </div>
              </>
            )}
          </div>
        </section>

        {/* BANNER CTA FINAL: CONTATE UM ESPECIALISTA */}
        <section className="py-14 bg-gradient-to-r from-primary/10 via-primary/5 to-surface-subtle border-t border-border">
          <div className="fluid-container text-center">
            <div className="max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary mb-4">
                <TrendingUp size={13} />
                <span>Gestão Descomplicada para o seu Negócio</span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                Gostou dos artigos? Transforme a teoria em resultados reais.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                O sistema Dominus integra seu caixa, estoque, emissão fiscal e pedidos em uma
                interface simples e intuitiva.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button
                  onClick={() => setSpecialistOpen(true)}
                  className="h-11 px-6 bg-[#71BE44] hover:bg-[#62a83a] text-white font-semibold cursor-pointer shadow-sm"
                >
                  <MessageSquare size={16} className="mr-2" />
                  Falar com um Especialista Waybit
                </Button>
                <Link
                  to="/planos"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-border bg-card font-semibold text-foreground hover:bg-muted text-xs transition-colors"
                >
                  Ver Planos e Preços
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer onOpenSpecialist={() => setSpecialistOpen(true)} />
      <SpecialistDialog open={specialistOpen} onOpenChange={setSpecialistOpen} />
    </div>
  );
}
