import { segmentLandingPages } from "./segmentLandingPages";

// Dedicated landing pages always take precedence over the product overview.
export function getFoodSegmentRoute(name: string) {
  return segmentLandingPages.find((page) => page.category === "Food" && page.name === name)?.route ?? "/dominus-food";
}

export function getRetailSegmentRoute(name: string) {
  return segmentLandingPages.find((page) => page.category === "Varejo" && page.name === name)?.route ?? "/dominus-varejo";
}
