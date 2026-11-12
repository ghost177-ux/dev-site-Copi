import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface SegmentBlogSectionProps {
  onOpenSpecialist: () => void;
}

export function SegmentBlogSection({ onOpenSpecialist }: SegmentBlogSectionProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  return (
    <section
      id="blog-conteudos"
      className="order-8 relative w-full overflow-hidden border-t border-border bg-white py-16 lg:py-24"
    >
      <div className="landing-page-container">
        <div className="mb-12 flex w-full flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="w-full">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FC4242]/20 bg-[#FC4242]/5 px-4 py-1.5 fluid-caption font-bold uppercase tracking-wider text-[#FC4242] sm:mb-6">
              <BookOpen size={13} className="text-[#FC4242]" aria-hidden="true" />
              <span>Blog &amp; Conteúdos Estratégicos</span>
            </div>
            <h2 className="font-display fluid-h2 font-bold tracking-tight text-foreground">
              Fique por dentro: dicas para acelerar seu comércio
            </h2>
            <p className="mt-2 fluid-body-lg text-muted-foreground">
              Artigos práticos de gestão, finanças e tecnologia para o seu dia a dia.
            </p>
            <div className="mt-5 h-1 w-16 rounded-full bg-[#FC4242]" aria-hidden="true" />
          </div>

          <div className="flex shrink-0 items-center gap-4 self-start md:self-auto">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => carouselApi?.scrollPrev()}
                className="size-9 rounded-full border-border text-foreground hover:border-[#FC4242]/40 hover:bg-[#FC4242]/5"
                aria-label="Artigo anterior"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => carouselApi?.scrollNext()}
                className="size-9 rounded-full border-border text-foreground hover:border-[#FC4242]/40 hover:bg-[#FC4242]/5"
                aria-label="Próximo artigo"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </Button>
            </div>
            <button
              type="button"
              onClick={onOpenSpecialist}
              className="ml-2 inline-flex cursor-pointer items-center gap-1.5 fluid-btn font-semibold text-[#FC4242] hover:underline"
            >
              <span>Falar com especialista</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setCarouselApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
          aria-label="Artigos do blog Waybit"
        >
          <CarouselContent className="-ml-5 py-2 lg:-ml-6">
            {blogPosts.map((post) => (
              <CarouselItem
                key={post.id}
                className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3 lg:pl-6"
              >
                <article className="group flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/95 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#FC4242]/40 hover:shadow-xl">
                  <div>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      aria-label={`Ler artigo: ${post.title}`}
                      className="relative block aspect-[16/10] w-full overflow-hidden bg-muted"
                    >
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-3 top-3 rounded-full border border-[#FC4242]/20 bg-[#FC4242]/10 px-2.5 py-1 fluid-caption font-semibold text-[#FC4242] backdrop-blur-md">
                        {post.category}
                      </span>
                    </Link>
                    <div className="w-full p-5 sm:p-6">
                      <div className="mb-3 flex items-center gap-3 fluid-caption text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock size={12} aria-hidden="true" /> {post.readTime}
                        </span>
                        <span aria-hidden="true">•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="line-clamp-2 font-display fluid-h3 leading-snug font-bold text-foreground transition-colors group-hover:text-[#FC4242]">
                        <Link to="/blog/$slug" params={{ slug: post.slug }}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-2 line-clamp-3 fluid-secondary leading-relaxed text-muted-foreground">
                        {post.summary}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-t border-border/80 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                    <span className="truncate fluid-caption font-medium text-muted-foreground">
                      {post.author}
                    </span>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="flex cursor-pointer items-center gap-1 fluid-caption font-bold text-[#FC4242] transition-transform group-hover:translate-x-0.5"
                    >
                      Ler mais <ChevronRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
