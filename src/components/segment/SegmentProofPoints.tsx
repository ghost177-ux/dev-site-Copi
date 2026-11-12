const proofPoints = [
  { value: ">30%", label: "de economia de tempo divulgada" },
  { value: "+1.000", label: "clientes atendidos no Brasil" },
  { value: "9,6/10", label: "nota de satisfação divulgada" },
  { value: "+15 anos", label: "de experiência em gestão" },
];

export function SegmentProofPoints() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {proofPoints.map(({ value, label }) => (
          <div key={label} className="rounded-2xl border border-[#FC4242]/20 bg-white p-4 text-center shadow-sm sm:p-5">
            <p className="font-display text-2xl font-extrabold text-[#FC4242] sm:text-3xl">{value}</p>
            <p className="mt-1 fluid-caption leading-relaxed text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center fluid-caption text-muted-foreground">
        A comunicação comercial apresenta a possibilidade de até 30% a mais de lucro. O resultado depende da operação e não é garantido.
      </p>
    </div>
  );
}
