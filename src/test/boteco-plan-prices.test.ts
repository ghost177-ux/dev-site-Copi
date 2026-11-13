import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const botecoSource = readFileSync("src/routes/sistema-para-boteco.tsx", "utf8");
const plansSource = readFileSync("src/routes/planos.tsx", "utf8");

function planRecord(source: string, id: string) {
  const start = source.indexOf(`id: "${id}"`);
  if (start < 0) throw new Error(`Missing plan ${id}`);
  return source.slice(start, source.indexOf("}", start));
}

function price(record: string, field: string) {
  return record.match(new RegExp(`${field}: "([^"]+)"`))?.[1];
}

describe("Boteco prices match the Food plans page", () => {
  it.each([
    ["fit-food", "3.388,00", "165,00", "199,00"],
    ["basic-food", "3.588,00", "249,00", "299,00"],
    ["full-food", "5.388,00", "374,00", "449,00"],
  ])("preserves the exact original, annual and monthly values for %s", (id, original, annual, monthly) => {
    const boteco = planRecord(botecoSource, id);
    const reference = planRecord(plansSource, id);
    expect(price(boteco, "anualOriginal")).toBe(original);
    expect(price(boteco, "anualOriginal")).toBe(price(reference, "annualOriginalPrice"));
    expect(price(boteco, "anual")).toBe(annual);
    expect(price(boteco, "anual")).toBe(price(reference, "annualPrice"));
    expect(price(boteco, "mensal")).toBe(monthly);
  });

  it("keeps VIP Food consultation-only without an original price", () => {
    const vip = planRecord(botecoSource, "vip-food");
    expect(price(vip, "anual")).toBe("Consulte");
    expect(price(vip, "mensal")).toBe("Consulte");
    expect(price(vip, "anualOriginal")).toBeUndefined();
  });
});