"use client";

import { AddToCartButton } from "@/features/cart";
import { ProductDetailsPage } from "@/features/products";
import { formatWholePrice } from "@/features/products/utils/product.utils";

type ProductDetailsWithCartProps = {
  productId: string;
};

export function ProductDetailsWithCart({
  productId,
}: ProductDetailsWithCartProps) {
  return (
    <ProductDetailsPage
      productId={productId}
      actions={({
        product,
        selectedOptions,
        quantity,
        unitPrice,
        setQuantity,
      }) => (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-5 rounded border border-[#ebe6de] px-4 py-3.5">
            <button
              type="button"
              aria-label="Decrease quantity"
              className="text-[16px] text-[#605a54]"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span className="min-w-4 text-center text-[14px] font-semibold text-[#1a1a1a]">
              {quantity}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              className="text-[16px] text-[#605a54]"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <AddToCartButton
            productId={product.id}
            name={product.name}
            price={unitPrice}
            image={product.images[0]}
            selectedOptions={selectedOptions}
            quantity={quantity}
            disabled={!product.inStock}
            className="flex flex-1 items-center justify-center rounded bg-[#1a1a1a] py-4 text-[13px] font-bold uppercase text-white disabled:bg-[#605a54]"
          >
            {product.inStock
              ? `Add to Cart / ${formatWholePrice(unitPrice)}`
              : "Out of stock"}
          </AddToCartButton>
        </div>
      )}
    />
  );
}
