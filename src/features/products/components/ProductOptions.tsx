"use client";

import type { Product } from "@/features/products/types/product.types";
import {
  formatWholePrice,
  GIFT_WRAPPING_OPTION_ID,
  VOLUME_OPTION_ID,
} from "@/features/products/utils/product.utils";

type ProductOptionsProps = {
  product: Product;
  selectedOptions: Record<string, string>;
  onChange: (optionId: string, value: string) => void;
};

/** US-04: bottle size and gift wrapping. */
export function ProductOptions({
  product,
  selectedOptions,
  onChange,
}: ProductOptionsProps) {
  const selectedVolume =
    selectedOptions[VOLUME_OPTION_ID] ?? product.volumes[0]?.label;
  const giftWrappingOn = selectedOptions[GIFT_WRAPPING_OPTION_ID] === "Yes";

  return (
    <div className="flex flex-col gap-8">
      {product.volumes.length > 0 ? (
        <fieldset className="flex flex-col gap-3 border-0 p-0">
          <legend className="text-[12px] font-bold uppercase text-[#1a1a1a]">
            Select Volume
          </legend>
          <div className="grid grid-cols-3 gap-3">
            {product.volumes.map((volume) => {
              const selected = volume.label === selectedVolume;

              return (
                <button
                  key={volume.label}
                  type="button"
                  aria-pressed={selected}
                  className={`flex flex-col items-center gap-1 rounded border px-3 py-3 ${
                    selected
                      ? "border-2 border-[#1a1a1a] bg-white"
                      : "border border-[#ebe6de] bg-transparent"
                  }`}
                  onClick={() => onChange(VOLUME_OPTION_ID, volume.label)}
                >
                  <span
                    className={`text-[14px] ${selected ? "font-bold" : "font-medium"} text-[#1a1a1a]`}
                  >
                    {volume.label}
                  </span>
                  <span className="text-[11px] text-[#605a54]">
                    {formatWholePrice(volume.price)}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
      ) : null}

      <div className="flex items-center justify-between gap-4 rounded-[6px] bg-[#f4f0eb] p-5">
        <div className="max-w-[380px]">
          <p className="text-[13px] font-semibold text-[#1a1a1a]">
            Complimentary Signature Gift Wrapping
          </p>
          <p className="mt-1 text-[12px] text-[#605a54]">
            Encased in linen paper box with custom wax seal stamp.
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={giftWrappingOn}
          aria-label="Add complimentary signature gift wrapping"
          className={`flex h-6 w-11 items-center rounded-full p-0.5 ${
            giftWrappingOn ? "justify-end bg-[#c5a880]" : "justify-start bg-[#ebe6de]"
          }`}
          onClick={() =>
            onChange(GIFT_WRAPPING_OPTION_ID, giftWrappingOn ? "No" : "Yes")
          }
        >
          <span className="size-5 rounded-full bg-white" />
        </button>
      </div>
    </div>
  );
}
