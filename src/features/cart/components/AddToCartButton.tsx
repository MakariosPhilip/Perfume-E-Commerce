"use client";

import type { ReactNode } from "react";
import { useCart } from "@/features/cart/hooks/useCart";
import type { AddToCartInput } from "@/features/cart/types/cart.types";

type AddToCartButtonProps = AddToCartInput & {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
};

export function AddToCartButton({
  children,
  className,
  disabled,
  ...input
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={() => addItem(input)}
    >
      {children ?? "Add to cart"}
    </button>
  );
}
