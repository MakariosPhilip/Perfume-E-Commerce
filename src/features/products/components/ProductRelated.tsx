"use client";

import { ProductCard } from "@/features/products/components/ProductCard";
import { useProducts } from "@/features/products/hooks/useProducts";

type ProductRelatedProps = {
  productId: string;
};

export function ProductRelated({ productId }: ProductRelatedProps) {
  const productsQuery = useProducts({ page: 1, pageSize: 8 });
  const companions = (productsQuery.data?.items ?? [])
    .filter((product) => product.id !== productId)
    .slice(0, 4);

  if (productsQuery.isLoading || companions.length === 0) {
    return null;
  }

  return (
    <section
      className="flex flex-col gap-8 bg-[#f4f0eb] px-4 py-16 sm:px-6 md:px-10 lg:gap-12 lg:px-20 lg:py-[100px]"
      aria-labelledby="related-heading"
    >
      <header className="flex flex-col items-stretch gap-3 text-center">
        <h2
          id="related-heading"
          className="font-[family-name:var(--font-instrument-serif)] text-[36px] text-[#1a1a1a] sm:text-[48px]"
        >
          Olfactory Companions
        </h2>
        <p className="text-[14px] uppercase text-[#605a54]">
          Fragrances of synonymous sophistication
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {companions.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
