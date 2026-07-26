export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  text?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function codeBlock(code: string): HTMLElement {
  return el("pre", "code", code.trim());
}

export function panel(title: string, description?: string): HTMLElement {
  const wrapper = el("section", "panel");
  wrapper.append(el("h2", "", title));
  if (description) wrapper.append(el("p", "", description));
  return wrapper;
}
