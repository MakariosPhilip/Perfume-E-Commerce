import type { Product } from "@/features/products/types/product.types";
import {
  formatCatalogLabel,
  formatWholePrice,
} from "@/features/products/utils/product.utils";

type ProductDetailsProps = {
  product: Product;
  unitPrice: number;
};

/** US-04: product information. */
export function ProductDetails({ product, unitPrice }: ProductDetailsProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#f2ede4] px-2.5 py-1 text-[11px] font-semibold uppercase text-[#1a1a1a]">
          Scent Family: {formatCatalogLabel(product.scentFamily)}
        </span>
        <span className="rounded-full bg-[#f4f0eb] px-2.5 py-1 text-[11px] font-semibold uppercase text-[#605a54]">
          Occasion: {formatCatalogLabel(product.occasion)}
        </span>
      </div>
      <h1 className="font-[family-name:var(--font-instrument-serif)] text-[36px] leading-tight text-[#1a1a1a] sm:text-[48px]">
        {product.name}
      </h1>
      <div className="flex items-center justify-between gap-4">
        <p className="text-[24px] font-semibold text-[#1a1a1a]">
          {formatWholePrice(unitPrice)}
        </p>
        {product.inStock ? (
          <p className="flex items-center gap-1.5 text-[13px] font-semibold text-[#10b981]">
            <span className="size-2 rounded-full bg-[#10b981]" aria-hidden />
            Available in Atelier
          </p>
        ) : (
          <p className="text-[13px] font-semibold text-[#605a54]">
            Currently out of stock
          </p>
        )}
      </div>
    </div>
  );
}
