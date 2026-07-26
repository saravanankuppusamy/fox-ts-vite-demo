import type { ApiResponse, Demo, Policy } from "./types";
import { codeBlock, el, panel } from "./helpers";

function calculatePremium(coverageAmount: number, rate = 0.012): number {
  return Math.round(coverageAmount * rate);
}
function first<T>(items: T[]): T | undefined { return items[0]; }
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }

export const functionsDemo: Demo = {
  id: "functions",
  title: "5. Typed Functions",
  objective: "Use parameter and return types to make a business rule explicit.",
  render() {
    const root = panel(this.title, this.objective);
    root.append(codeBlock(`function calculatePremium(\n  coverageAmount: number,\n  rate = 0.012\n): number {\n  return Math.round(coverageAmount * rate);\n}`));
    const controls = el("div", "controls");
    const input = el("input") as HTMLInputElement; input.type = "number"; input.value = "100000"; input.min = "1000";
    const button = el("button", "primary", "Calculate");
    const output = el("div", "output", "Estimated premium: $1,200");
    button.addEventListener("click", () => { output.textContent = `Estimated premium: $${calculatePremium(Number(input.value)).toLocaleString("en-US")}`; });
    controls.append(el("span", "badge", "Coverage amount"), input, button);
    root.append(controls, output);
    return root;
  },
};

export const genericsDemo: Demo = {
  id: "generics",
  title: "6. Generics and Constraints",
  objective: "Reuse functions and response shapes without losing type safety.",
  render() {
    const root = panel(this.title, this.objective);
    root.append(codeBlock(`function first<T>(items: T[]): T | undefined {\n  return items[0];\n}\n\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n  message: string;\n}\n\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}`));
    const policy: Policy = { id: 7, customerName: "Morgan Lee", insuranceType: "Travel", coverageAmount: 25000, active: true, createdAt: new Date() };
    const response: ApiResponse<Policy> = { data: policy, status: 200, message: "OK" };
    const output = el("div", "output");
    output.textContent = `first([Auto, Home]) = ${first(["Auto", "Home"])} · customerName = ${getProperty(response.data, "customerName")}`;
    root.append(output);
    return root;
  },
};
