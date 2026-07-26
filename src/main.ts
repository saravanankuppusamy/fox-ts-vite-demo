import "./styles/main.css";
import type { Demo } from "./demos/types";
import { foundationsDemo, basicTypesDemo } from "./demos/foundations";
import { interfacesDemo, unionsDemo } from "./demos/models";
import { functionsDemo, genericsDemo } from "./demos/functions";
import { npmDemo, modulesDemo, viteDemo } from "./demos/npmVite";
import { endToEndDemo } from "./demos/endToEnd";

const demos: Demo[] = [foundationsDemo, basicTypesDemo, interfacesDemo, unionsDemo, functionsDemo, genericsDemo, npmDemo, modulesDemo, viteDemo, endToEndDemo];
const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("App root was not found");

app.innerHTML = `
<header class="hero">
  <h1>TypeScript, NPM & Vite</h1>
  <p>A single classroom application for non-developers serving as technical leads. Use the navigation to walk through each concept and connect syntax to delivery, quality, and team practices.</p>
</header>
<div class="layout">
  <aside class="sidebar"><h2>Classroom Demos</h2><nav id="demo-nav"></nav></aside>
  <main class="content"><div id="demo-content"></div><div class="footer">Fox Insurance learning scenario · Instructor kit</div></main>
</div>`;

const nav = document.querySelector<HTMLElement>("#demo-nav")!;
const content = document.querySelector<HTMLElement>("#demo-content")!;

function showDemo(demo: Demo) {
  content.replaceChildren(demo.render());
  document.querySelectorAll(".nav-button").forEach(b => b.classList.toggle("active", (b as HTMLButtonElement).dataset.id === demo.id));
  history.replaceState(null, "", `#${demo.id}`);
}

demos.forEach(demo => {
  const button = document.createElement("button");
  button.className = "nav-button";
  button.dataset.id = demo.id;
  button.textContent = demo.title;
  button.addEventListener("click", () => showDemo(demo));
  nav.append(button);
});

const selected = demos.find(d => `#${d.id}` === location.hash) ?? demos[0];
showDemo(selected);
