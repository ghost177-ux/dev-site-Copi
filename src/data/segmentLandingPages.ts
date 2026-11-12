export type SegmentLandingPageCategory = "Food" | "Varejo" | "Autocenter";
export type SegmentLandingPageRoute = `/sistema-para-${string}`;

export interface SegmentLandingPage {
  name: string;
  route: SegmentLandingPageRoute;
  category: SegmentLandingPageCategory;
  aliases?: readonly string[];
}

// Register new segment landing pages here; the homepage autocomplete reads this list.
export const segmentLandingPages = [
  {
    name: "Boteco",
    route: "/sistema-para-boteco",
    category: "Food",
    aliases: ["bares", "bar", "barzinho", "botequim", "botecos"],
  },
  {
    name: "Cafeteria",
    route: "/sistema-para-cafeteria",
    category: "Food",
    aliases: ["cafeterias", "cafe", "cafes", "coffee shop"],
  },
  {
    name: "Choperia",
    route: "/sistema-para-choperia",
    category: "Food",
    aliases: ["choperias", "chopp", "chope", "cervejaria", "cervejarias"],
  },
  {
    name: "Restaurante",
    route: "/sistema-para-restaurante",
    category: "Food",
    aliases: ["restaurantes", "gastronomia", "food service"],
  },
  {
    name: "Padaria",
    route: "/sistema-para-padaria",
    category: "Varejo",
    aliases: ["padarias", "panificadora", "panificadoras", "bakery"],
  },
] as const satisfies readonly SegmentLandingPage[];

const eligibleCategories = new Set<SegmentLandingPageCategory>([
  "Food",
  "Varejo",
  "Autocenter",
]);

const categorySearchAliases: Record<SegmentLandingPageCategory, readonly string[]> = {
  Food: ["alimentacao", "gastronomia", "comida"],
  Varejo: ["loja", "comercio", "retail"],
  Autocenter: [
    "auto center",
    "auto-center",
    "autocenter center",
    "oficina",
    "oficina mecanica",
    "centro automotivo",
    "mecanica",
  ],
};

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function searchSegmentLandingPages(query: string) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];

  return segmentLandingPages.filter((page) => {
    if (
      !eligibleCategories.has(page.category) ||
      !page.route.startsWith("/sistema-para-")
    ) {
      return false;
    }

    const searchableText = [
      page.name,
      page.category,
      ...categorySearchAliases[page.category],
      ...(page.aliases ?? []),
    ]
      .map(normalizeSearchText)
      .join(" ");

    return searchableText.includes(normalizedQuery);
  });
}
