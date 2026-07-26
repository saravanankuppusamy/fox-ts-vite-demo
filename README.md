# TypeScript, NPM, and Vite Instructor Kit

A single Vite + TypeScript classroom application for a **2-hour overview session** aimed at non-developers serving as technical leads.

The examples follow a simple **Fox Insurance** scenario and align with the supplied Part 1 material:

1. Why TypeScript
2. Basic annotations, inference, arrays, and union types
3. Interfaces as object contracts
4. Literal types and discriminated unions
5. Typed functions
6. Generics and generic constraints
7. NPM, `package.json`, dependencies, and `node_modules`
8. ES modules and type-only imports
9. Vite development/build workflow
10. End-to-end insurance dashboard

## Prerequisites

- Node.js 20 LTS or newer
- npm 10 or newer
- Visual Studio Code recommended
- A modern browser

Verify your environment:

```bash
node --version
npm --version
```

## Run the project

```bash
npm install
npm run dev
```

Open the local address printed by Vite, normally:

```text
http://localhost:5173
```

## Useful commands

```bash
npm run dev        # Start the Vite development server
npm run typecheck  # Run TypeScript checks without creating output
npm run build      # Create an optimized production build in dist/
npm run preview    # Preview the production build locally
```

## Recommended live-teaching sequence

| Time | Segment | Demo |
|---:|---|---|
| 0–10 min | Modern web development picture | TypeScript → NPM → Vite → Browser |
| 10–25 min | JavaScript vs TypeScript | Demo 1 |
| 25–40 min | Basic types and inference | Demo 2 |
| 40–60 min | Interfaces and business contracts | Demo 3 |
| 60–70 min | Union-based application states | Demo 4 |
| 70–85 min | Typed functions | Demo 5 |
| 85–95 min | Generics | Demo 6 |
| 95–110 min | NPM and project manifest | Demo 7 |
| 110–118 min | Modules and Vite workflow | Demos 8–9 |
| 118–120 min | Wrap-up | Demo 10 |

## Suggested instructor changes during the demo

1. In `src/demos/models.ts`, remove a required `Policy` field and show the compiler error.
2. Change an insurance type to `"Boat"` and show how the literal union rejects it.
3. Pass a string into `calculatePremium()` and show the parameter mismatch.
4. Run `npm run typecheck` to demonstrate CI-friendly validation.
5. Run `npm run build` and inspect the generated `dist/` directory.
6. Change text or a policy amount while `npm run dev` is active to demonstrate fast refresh.

## Project structure

```text
typescript-npm-vite-instructor-kit/
├── docs/
│   ├── GITHUB_SHARING_GUIDE.md
│   ├── INSTRUCTOR_GUIDE.md
│   └── STUDENT_EXERCISES.md
├── src/
│   ├── demos/
│   │   ├── endToEnd.ts
│   │   ├── foundations.ts
│   │   ├── functions.ts
│   │   ├── helpers.ts
│   │   ├── models.ts
│   │   ├── npmVite.ts
│   │   └── types.ts
│   ├── styles/main.css
│   └── main.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## GitHub publishing

See [`docs/GITHUB_SHARING_GUIDE.md`](docs/GITHUB_SHARING_GUIDE.md) for commands to create and push the repository.

## Teaching note

This kit intentionally keeps the interface and code simple. The emphasis is not on advanced front-end design; it is on helping technical leads understand how TypeScript, NPM, modules, and Vite support quality, maintainability, reproducible builds, and team delivery.
