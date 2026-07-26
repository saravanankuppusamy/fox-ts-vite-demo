import type { Demo } from "./types";
import { codeBlock, el, panel } from "./helpers";

export const npmDemo: Demo = {
  id: "npm",
  title: "7. NPM, package.json, and node_modules",
  objective: "Explain the package registry, CLI, dependencies, scripts, and reproducible installs.",
  render() {
    const root = panel(this.title, this.objective);
    root.append(codeBlock(`npm install\nnpm install -D typescript vite\nnpm run dev\nnpm run build\nnpm ci`));
    const grid = el("div", "grid");
    const items = [
      ["package.json", "Project manifest: metadata, scripts, dependencies."],
      ["package-lock.json", "Pins exact versions for repeatable installs."],
      ["node_modules", "Locally installed packages; normally not committed."],
      ["dependencies", "Packages needed when the application runs."],
      ["devDependencies", "Build, test, lint, and development tools."],
      ["npm ci", "Clean, deterministic install for CI pipelines."],
    ];
    items.forEach(([a,b]) => { const c=el("div","card"); c.innerHTML=`<strong>${a}</strong>${b}`; grid.append(c); });
    root.append(grid);
    return root;
  },
};

export const modulesDemo: Demo = {
  id: "modules",
  title: "8. ES Modules and Type-Only Imports",
  objective: "Organize code using import/export and keep type imports explicit.",
  render() {
    const root = panel(this.title, this.objective);
    root.append(codeBlock(`// math.ts\nexport function add(a: number, b: number): number {\n  return a + b;\n}\n\n// app.ts\nimport { add } from "./math";\nimport type { Policy } from "./types";`));
    const output = el("div", "output");
    output.innerHTML = "<strong>Build note:</strong> type-only imports are removed during compilation because browsers run JavaScript, not TypeScript types.";
    root.append(output);
    return root;
  },
};

export const viteDemo: Demo = {
  id: "vite",
  title: "9. Vite Development and Build Flow",
  objective: "Connect the commands to the developer experience and deployment lifecycle.",
  render() {
    const root = panel(this.title, this.objective);
    const flow = el("div", "flow");
    ["Write TypeScript", "Type-check", "Vite dev server", "Browser", "Production build"].forEach((step, i, arr) => { flow.append(el("span", "", step)); if (i < arr.length - 1) flow.append(el("b", "", "→")); });
    root.append(flow);
    root.append(codeBlock(`npm run dev      # local development server\nnpm run typecheck # validate TypeScript\nnpm run build    # optimized production files in dist/\nnpm run preview  # preview the production build`));
    return root;
  },
};
