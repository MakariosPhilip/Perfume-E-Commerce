"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/features/products/types/product.types";

type ProductImagesProps = {
  product: Product;
};

/** US-04: product image gallery. */
export function ProductImages({ product }: ProductImagesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.images;
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) {
    return (
      <div className="flex h-[320px] items-center justify-center rounded-lg bg-[#ebe6de] text-[#605a54] lg:h-[600px]">
        No product images yet
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative h-[320px] overflow-hidden rounded-lg sm:h-[420px] lg:h-[600px]">
        <Image
          src={activeImage}
          alt={`${product.name} bottle`}
          fill
          preload
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      {images.length > 1 ? (
        <div className="flex gap-4" role="list" aria-label="Product photos">
          {images.map((image, index) => {
            const selected = index === activeIndex;

            return (
              <button
                key={image}
                type="button"
                role="listitem"
                aria-label={`Show photo ${index + 1} of ${product.name}`}
                aria-pressed={selected}
                className={`relative h-[88px] flex-1 overflow-hidden rounded sm:h-[120px] ${
                  selected ? "border-2 border-[#c5a880]" : "border-0"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
