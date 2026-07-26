import type { Demo } from "./types";
import { codeBlock, el, panel } from "./helpers";

export const foundationsDemo: Demo = {
  id: "foundations",
  title: "1. Why TypeScript?",
  objective: "Compare JavaScript runtime errors with TypeScript compile-time feedback.",
  render() {
    const root = panel(this.title, this.objective);
    root.append(codeBlock(`// JavaScript allows this\nlet customer = "John";\ncustomer = 500;\ncustomer.toUpperCase(); // runtime error\n\n// TypeScript catches it before execution\nlet typedCustomer: string = "John";\n// typedCustomer = 500; // compile-time error`));
    const output = el("div", "output");
    output.innerHTML = "<strong>Tech lead takeaway:</strong> TypeScript moves many defects from production into the editor and CI pipeline.";
    root.append(output);
    return root;
  },
};

export const basicTypesDemo: Demo = {
  id: "basic-types",
  title: "2. Basic Types, Inference, Arrays, and Unions",
  objective: "Show common annotations and when TypeScript can infer a type.",
  render() {
    const root = panel(this.title, this.objective);
    root.append(codeBlock(`let customerName: string = "Alice";\nlet age: number = 42;\nlet active: boolean = true;\n\nlet premium = 650; // inferred as number\nlet products: string[] = ["Auto", "Home", "Health", "Travel"];\nlet customerId: string | number = "AUTO-100";\ncustomerId = 100;`));
    const grid = el("div", "grid");
    [["string", "Text values"], ["number", "Amounts and counts"], ["boolean", "true/false flags"], ["union", "One of several allowed types"]].forEach(([name, desc]) => {
      const card = el("div", "card"); card.innerHTML = `<strong>${name}</strong>${desc}`; grid.append(card);
    });
    root.append(grid);
    return root;
  },
};
