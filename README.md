# Storefront

A modern e-commerce storefront for perfume products as part of the Digitera Camp initiative built with Next.js, TypeScript, and React. The project focuses on a clean product discovery flow, cart management, and a maintainable feature-based architecture designed for team collaboration.

This repository is structured as a scalable storefront scaffold where each feature owns its own implementation, making it easier to build and iterate on user stories without causing frequent merge conflicts.

## Overview

Storefront is a product catalog and shopping cart application that allows users to:

- browse a product listing
- search for products
- filter by category or attributes
- sort products by relevant criteria
- view product details and image gallery
- select product options
- add items to the shopping cart
- update quantities and review totals

The app is intentionally organized around feature boundaries so the catalog and cart logic remain isolated and reusable.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- TanStack Query
- Zustand
- Jest
- Cypress
- ESLint
- Prettier
- pnpm

The project keeps dependencies minimal and avoids heavy abstraction layers, with small local utilities such as the className helper in `src/lib/utils/cn.ts` instead of introducing another package.

## Project Goals

- Build a fast storefront experience for browsing perfume products
- Keep architecture modular and team-friendly
- Separate business logic from route-level code
- Maintain feature ownership for product and cart responsibilities
- Support future backend integration without changing the overall app structure

## Features

### Product discovery

- product grid display
- search functionality
- product filters
- sort options
- pagination support
- product detail page
- related products area

### Shopping cart

- add product to cart
- update quantity
- remove products from cart
- display subtotal and totals
- cart indicator navigation

### Architecture principles

- routes stay thin and delegate to feature modules
- feature-specific logic lives under `src/features/<name>/`
- cross-feature communication happens only through public exports or route composition
- state is local to the feature boundary
- shared code is reserved for genuinely reusable UI and infrastructure pieces

## Project Structure

```text
src/
├── app/
│   ├── cart/
│   ├── products/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   ├── shared/
│   └── ui/
├── config/
├── features/
│   ├── cart/
│   └── products/
├── lib/
│   ├── api/
│   └── utils/
└── ...
```

## Feature Boundaries

### Products feature

Responsible for product browsing and detail flows:

- listing, search, filters, and sort
- product card and grid UI
- product detail components
- services and mock product data
- dedicated hooks and types

Primary folder:

- `src/features/products/`

### Cart feature

Responsible for cart behavior and related UI:

- add-to-cart actions
- cart page UI
- quantity updates and removals
- store logic using Zustand
- cart totals and utility functions

Primary folder:

- `src/features/cart/`

## Routes

- `/` → redirects to `/products`
- `/products` → product listing page
- `/products/[productId]` → product details page
- `/cart` → shopping cart page

## Prerequisites

Before running the project, make sure you have:

- Node.js 20 or later
- pnpm 10 or later

It is recommended to enable Corepack:

```bash
corepack enable
```

## Installation

```bash
pnpm install
```

If you use environment variables, copy the example file if available:

```bash
cp .env.example .env.local
```

## Environment Variables

The app supports a mock-first setup and can later switch to a real API.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL for a future catalog API. Can remain empty while mock data is enabled. |
| `NEXT_PUBLIC_USE_MOCK_API` | Set to `true` to use the in-repo mock product data. Set to `false` only when a real API is available. |

> There is no backend service included in this repository. The mock data is kept in the feature service layer and is intentionally separated from the API client abstraction.

## Running the Project

### Development

```bash
pnpm dev
```

Then open:

- http://localhost:3000

The home route automatically redirects to `/products`.

## Production Build

```bash
pnpm build
pnpm start
```

## Quality Checks

Run the project checks before opening a PR:

```bash
pnpm typecheck
pnpm lint
pnpm test
```

## End-to-End Testing

The project includes Cypress tests for route-level flows.

Start the dev server first:

```bash
pnpm dev
```

Then run:

```bash
pnpm test:e2e
```

Or open the Cypress UI:

```bash
pnpm cypress:open
```

## Testing Strategy

- unit tests for utility logic and feature helpers
- Jest for frontend logic testing
- Cypress for end-to-end user journeys
- feature-local test files kept close to the code they validate

## Development Guidelines

1. Work inside the relevant feature directory.
2. Keep route files thin and focused on composition.
3. Add tests beside the feature logic when needed.
4. Avoid large shared files unless the code is truly cross-feature.
5. Import other features through their public `index.ts` exports when needed.
6. Keep the UI primitives in `src/components/ui` limited to reusable, low-level items.
7. Run validation checks before creating a pull request.

## Notes

The repository is designed as a team-ready storefront scaffold and is intended to support parallel feature development. It is not a full production backend solution by itself, but it provides a clean foundation for building a complete retail catalog and cart experience.

For feature ownership details and user-story mapping, see [docs/FEATURE_OWNERSHIP.md](docs/FEATURE_OWNERSHIP.md).

## License

This project is currently intended for internal learning and project development use unless a license is explicitly added later.
