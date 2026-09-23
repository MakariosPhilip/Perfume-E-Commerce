import type { Product } from "@/features/products/types/product.types";

type ProductScentAnatomyProps = {
  product: Product;
};

export function ProductScentAnatomy({ product }: ProductScentAnatomyProps) {
  const layers = [
    { label: "Top Notes", value: product.notesPyramid.top },
    { label: "Heart Notes", value: product.notesPyramid.heart },
    { label: "Base Notes", value: product.notesPyramid.base },
  ];

  return (
    <section className="flex flex-col gap-5" aria-labelledby="scent-anatomy-heading">
      <h2
        id="scent-anatomy-heading"
        className="font-[family-name:var(--font-instrument-serif)] text-[32px] text-[#1a1a1a]"
      >
        Scent Anatomy
      </h2>
      <p className="text-[14px] leading-[1.6] text-[#605a54]">{product.description}</p>
      <dl>
        {layers.map((layer) => (
          <div
            key={layer.label}
            className="flex items-start justify-between gap-4 border-b border-[#ebe6de] py-2"
          >
            <dt className="text-[12px] font-bold uppercase text-[#1a1a1a]">
              {layer.label}
            </dt>
            <dd className="text-right text-[13px] text-[#605a54]">{layer.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
