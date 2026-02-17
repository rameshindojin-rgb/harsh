# 💘 Valentine Website (Next.js)

A fun, cute, mobile-friendly Valentine site with:

- A **Yes** button that stays put.
- A **No** button that dodges when the cursor gets close.
- A romantic message + heart burst animation when **Yes** is clicked.
- 100% client-side behavior (no backend).

## Run it anywhere

### 1) Prerequisites

Install:

- **Node.js 18.18+** (or Node 20+ recommended)
- **npm** (comes with Node)

Check versions:

```bash
node -v
npm -v
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start locally (development)

```bash
npm run dev
```

Open: `http://localhost:3000`

---

## Build and run in production mode

```bash
npm run build
npm run start
```

Open: `http://localhost:3000`

---

## Deploy anywhere (quick options)

### Vercel (easiest for Next.js)

```bash
npm i -g vercel
vercel
```

### Netlify

- Build command: `npm run build`
- Publish directory: `.next`

### Any VPS / VM / server

```bash
npm install
npm run build
PORT=3000 npm run start
```

Then reverse-proxy with Nginx/Caddy if needed.

---

## Troubleshooting

If `npm install` fails with registry/proxy issues:

```bash
npm config get registry
npm config set registry https://registry.npmjs.org/
npm cache clean --force
npm install
```

If your environment blocks outbound npm access, run the project on a machine/network with npm registry access.
