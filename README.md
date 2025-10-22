# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Requirements

- Node.js `22.x` (see `.nvmrc`)
- pnpm (recommended)

To switch to Node 22 using `nvm`:

```bash
nvm install 22
```

Verify your local Node version:

```bash
node -v
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install --shamefully-hoist
```

Alternatively:

```bash
npm install
```

```bash
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Code Quality

Run linting and type checks:

```bash
pnpm lint
```

```bash
pnpm typecheck
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## CI Compatibility

This repo includes a GitHub Actions workflow (`.github/workflows/node-compat.yml`) that validates compatibility on Node `18.x` and `22.x` by running install, lint, typecheck, and build steps.

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
