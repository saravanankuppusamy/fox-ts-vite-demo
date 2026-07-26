import type { Demo, Policy } from "./types";
import { codeBlock, el, panel } from "./helpers";

const policies: Policy[] = [
  { id: 1, customerName: "Alice Johnson", insuranceType: "Auto", coverageAmount: 100000, active: true, createdAt: new Date() },
  { id: 2, customerName: "Robert Smith", insuranceType: "Home", coverageAmount: 350000, active: true, createdAt: new Date() },
  { id: 3, customerName: "Maya Patel", insuranceType: "Travel", coverageAmount: 25000, active: false, createdAt: new Date() },
];

export const endToEndDemo: Demo = {
  id: "end-to-end",
  title: "10. End-to-End Fox Insurance Demo",
  objective: "Combine interfaces, arrays, functions, modules, NPM scripts, and Vite into one small application view.",
  render() {
    const root = panel(this.title, this.objective);
    root.append(codeBlock(`const activePolicies = policies.filter(policy => policy.active);\nconst totalCoverage = activePolicies.reduce(\n  (sum, policy) => sum + policy.coverageAmount,\n  0,\n);`));
    const activePolicies = policies.filter(p => p.active);
    const totalCoverage = activePolicies.reduce((sum, p) => sum + p.coverageAmount, 0);
    const grid = el("div", "grid");
    policies.forEach(p => { const card = el("div", "card"); card.innerHTML = `<strong>${p.customerName}</strong>${p.insuranceType} · $${p.coverageAmount.toLocaleString("en-US")}<br><span class="badge">${p.active ? "Active" : "Inactive"}</span>`; grid.append(card); });
    root.append(grid);
    const output = el("div", "output", `${activePolicies.length} active policies · $${totalCoverage.toLocaleString("en-US")} total active coverage`);
    root.append(output);
    return root;
  },
};
