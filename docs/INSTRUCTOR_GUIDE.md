# Instructor Guide

## Learning objectives

By the end of the session, participants should be able to:

- Explain why TypeScript is used on JavaScript projects.
- Recognize basic annotations, inference, interfaces, unions, functions, and generics.
- Explain the purpose of `package.json`, `package-lock.json`, and `node_modules`.
- Distinguish `dependencies` from `devDependencies`.
- Describe how ES modules organize an application.
- Explain the Vite development and production-build workflow.
- Ask useful technical-lead questions during design and delivery reviews.

## Key technical-lead questions

- Is strict TypeScript checking enabled?
- Are public API contracts represented with stable types or interfaces?
- Are unsafe `any` values being introduced without justification?
- Is the lock file committed so CI and developers install the same versions?
- Are runtime dependencies separated from development-only tools?
- Does CI run type checking and production builds?
- Are generated directories such as `node_modules` and `dist` excluded from source control?
- Is the team reviewing dependency security and update risk?

## Demo guidance

### Demo 1: Why TypeScript

Show the JavaScript example first. Ask when the error would be detected. Then uncomment the invalid TypeScript assignment and run `npm run typecheck`.

### Demo 2: Basic types

Emphasize that inference reduces noise. Type annotations are most valuable at boundaries such as function parameters, APIs, configuration, and shared models.

### Demo 3: Interfaces

Frame the interface as a business contract. Change or remove a property and explain that TypeScript checks every consumer of the contract.

### Demo 4: Discriminated unions

Explain that application states should not allow impossible combinations such as `status: "success"` with an error message but no data.

### Demo 5: Functions

Connect parameter and return types to understandable business rules and safer refactoring.

### Demo 6: Generics

Avoid deep theory. Explain that `<T>` means “the caller supplies the data type,” preserving type information across reusable code.

### Demo 7: NPM

Open `package.json`. Walk through scripts and `devDependencies`. Explain that this project has no runtime dependency because it uses browser APIs directly.

### Demo 8: Modules

Show that modules divide a project into understandable responsibilities and enable reuse and testing.

### Demo 9: Vite

Run development, type-check, build, and preview commands. Compare developer feedback speed with production output.

### Demo 10: End-to-end

Show how the concepts combine: a typed model, array operations, reusable rendering modules, project scripts, and a browser build.
