import {
  formatCatalogLabel,
  formatPrice,
  getSelectedVolumePrice,
  parseProductListQuery,
} from "./product.utils";

describe("formatPrice", () => {
  it("formats a USD amount", () => {
    expect(formatPrice(12.5)).toBe("$12.50");
  });
});

describe("parseProductListQuery", () => {
  it("reads list query values from search params", () => {
    expect(
      parseProductListQuery({
        search: "mug",
        category: "home",
        sort: "price-asc",
        page: "2",
        pageSize: "4",
      }),
    ).toEqual({
      search: "mug",
      category: "home",
      sort: "price-asc",
      page: 2,
      pageSize: 4,
    });
  });
});

describe("formatCatalogLabel", () => {
  it("title-cases hyphenated catalog values", () => {
    expect(formatCatalogLabel("personal-use")).toBe("Personal Use");
  });
});

describe("getSelectedVolumePrice", () => {
  it("returns the matching volume price", () => {
    expect(
      getSelectedVolumePrice(
        [
          { label: "30 ml", price: 140 },
          { label: "100 ml", price: 220 },
        ],
        "30 ml",
        220,
      ),
    ).toBe(140);
  });
});
