"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import { ProductDetails } from "@/features/products/components/ProductDetails";
import { ProductImages } from "@/features/products/components/ProductImages";
import { ProductOptions } from "@/features/products/components/ProductOptions";
import { ProductRelated } from "@/features/products/components/ProductRelated";
import { ProductScentAnatomy } from "@/features/products/components/ProductScentAnatomy";
import { useProduct } from "@/features/products/hooks/useProduct";
import { productPaths } from "@/features/products/paths";
import type { Product } from "@/features/products/types/product.types";
import {
  GIFT_WRAPPING_OPTION_ID,
  getSelectedVolumePrice,
  VOLUME_OPTION_ID,
} from "@/features/products/utils/product.utils";

export type ProductDetailsActionsContext = {
  product: Product;
  selectedOptions: Record<string, string>;
  quantity: number;
  unitPrice: number;
  setQuantity: (quantity: number) => void;
};

type ProductDetailsPageProps = {
  productId: string;
  actions?: (context: ProductDetailsActionsContext) => ReactNode;
};

export function ProductDetailsPage({
  productId,
  actions,
}: ProductDetailsPageProps) {
  const productQuery = useProduct(productId);
  const product = productQuery.data;
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  const resolvedOptions = useMemo(() => {
    if (!product) {
      return selectedOptions;
    }

    const defaultVolume =
      product.volumes.find((volume) => volume.price === product.price)?.label ??
      product.volumes[0]?.label ??
      "";

    const defaults: Record<string, string> = {
      [VOLUME_OPTION_ID]: defaultVolume,
      [GIFT_WRAPPING_OPTION_ID]: "Yes",
    };

    for (const option of product.options) {
      defaults[option.id] = option.values[0];
    }

    return { ...defaults, ...selectedOptions };
  }, [product, selectedOptions]);

  const unitPrice = product
    ? getSelectedVolumePrice(
        product.volumes,
        resolvedOptions[VOLUME_OPTION_ID],
        product.price,
      )
    : 0;

  if (productQuery.isLoading) {
    return (
      <p className="px-4 py-10 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Loading product...
      </p>
    );
  }

  if (!product) {
    return (
      <p className="px-4 py-10 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Product not found.
      </p>
    );
  }

  return (
    <article>
      <ProductBreadcrumbs
        items={[
          { label: "Home", href: productPaths.list },
          { label: "Shop", href: productPaths.list },
          { label: "Fragrances", href: productPaths.list },
          { label: product.name },
        ]}
      />
      <section className="flex flex-col gap-10 px-4 pb-16 sm:px-6 md:px-10 lg:flex-row lg:gap-16 lg:px-20 lg:pb-[100px]">
        <ProductImages product={product} />
        <div className="flex w-full flex-col gap-8 lg:w-[560px] lg:shrink-0">
          <ProductDetails product={product} unitPrice={unitPrice} />
          <div className="h-px w-full bg-[#ebe6de]" />
          <ProductOptions
            product={product}
            selectedOptions={resolvedOptions}
            onChange={(optionId, value) =>
              setSelectedOptions((current) => ({
                ...current,
                [optionId]: value,
              }))
            }
          />
          {actions?.({
            product,
            selectedOptions: resolvedOptions,
            quantity,
            unitPrice,
            setQuantity,
          })}
          <div className="h-px w-full bg-[#ebe6de]" />
          <ProductScentAnatomy product={product} />
        </div>
      </section>
      <ProductRelated productId={product.id} />
    </article>
  );
}
