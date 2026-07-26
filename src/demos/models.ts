import type { AppState, Demo, Policy } from "./types";
import { codeBlock, el, panel } from "./helpers";

const samplePolicy: Policy = {
  id: 1,
  customerName: "Alice Johnson",
  insuranceType: "Auto",
  coverageAmount: 100000,
  active: true,
  createdAt: new Date(),
};

function renderState(state: AppState): string {
  switch (state.status) {
    case "loading": return "Loading policies...";
    case "success": return `${state.data.length} policy record(s) loaded.`;
    case "error": return `Error: ${state.message}`;
  }
}

export const interfacesDemo: Demo = {
  id: "interfaces",
  title: "3. Interfaces as Business Contracts",
  objective: "Model a predictable object shape for an insurance policy.",
  render() {
    const root = panel(this.title, this.objective);
    root.append(codeBlock(`interface Policy {\n  id: number;\n  customerName: string;\n  insuranceType: "Auto" | "Home" | "Health" | "Travel";\n  coverageAmount: number;\n  active: boolean;\n  readonly createdAt: Date;\n}`));
    const card = el("div", "card");
    card.innerHTML = `<strong>${samplePolicy.customerName}</strong>${samplePolicy.insuranceType} policy · $${samplePolicy.coverageAmount.toLocaleString("en-US")} coverage`;
    root.append(card);
    return root;
  },
};

export const unionsDemo: Demo = {
  id: "unions",
  title: "4. Literal Types and Discriminated Unions",
  objective: "Represent loading, success, and error states safely.",
  render() {
    const root = panel(this.title, this.objective);
    root.append(codeBlock(`type AppState =\n  | { status: "loading" }\n  | { status: "success"; data: Policy[] }\n  | { status: "error"; message: string };`));
    const controls = el("div", "controls");
    const select = el("select");
    ["loading", "success", "error"].forEach(v => { const o = el("option"); o.value = v; o.textContent = v; select.append(o); });
    const output = el("div", "output", renderState({ status: "loading" }));
    select.addEventListener("change", () => {
      const state: AppState = select.value === "success" ? { status: "success", data: [samplePolicy] } : select.value === "error" ? { status: "error", message: "Service unavailable" } : { status: "loading" };
      output.textContent = renderState(state);
      output.classList.toggle("error", state.status === "error");
    });
    controls.append(el("span", "badge", "Choose state"), select);
    root.append(controls, output);
    return root;
  },
};
