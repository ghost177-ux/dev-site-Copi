import { describe, expect, it } from "vitest";
import { getFoodSegmentRoute, getRetailSegmentRoute } from "../data/segmentMenuRoutes";
import { dominusFoodPlans } from "../data/dominusFoodPlans";

describe("Segment destinations", () => {
  it.each(["Boteco", "Cafeteria", "Choperia", "Restaurante"])("preserves the dedicated Food page for %s", (name) => {
    expect(getFoodSegmentRoute(name)).toBe(`/sistema-para-${name.toLowerCase()}`);
  });
  it.each(["Churrascaria", "Delivery", "Hamburgueria", "Lanchonete", "Petiscaria", "Pizzaria", "Quiosque", "Sushibar"])("uses /dominus-food for %s", (name) => {
    expect(getFoodSegmentRoute(name)).toBe("/dominus-food");
  });
  it("preserves the Padaria landing page", () => { expect(getRetailSegmentRoute("Padaria")).toBe("/sistema-para-padaria"); });
  it.each(["Bicicletaria", "Hortifruti", "Loja de Calçados", "Loja de Celular", "Loja de Doces", "Loja de Informática", "Loja de Roupas", "Loja de Tintas", "Loja de Variedades", "Material de Construção", "Material Elétrico", "Minimercado", "Papelaria", "Peixaria", "Perfumaria", "Sorveteria"])("uses /dominus-varejo for %s", (name) => {
    expect(getRetailSegmentRoute(name)).toBe("/dominus-varejo");
  });
});
describe("Documented Food pricing", () => {
  it("retains the existing monthly prices", () => { expect(dominusFoodPlans.map(p => p.monthly)).toEqual(["199,00", "299,00", "449,00", "Consulte"]); });
  it("retains the existing annual prices", () => { expect(dominusFoodPlans.map(p => p.annual)).toEqual(["165,00", "249,00", "374,00", "Consulte"]); });
});
