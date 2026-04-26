export function loadMenu() {
  const div = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const item1 = document.createElement("p");
  item1.textContent = "🍖 Roasted Boar";

  const item2 = document.createElement("p");
  item2.textContent = "🍞 Mead Bread";

  div.appendChild(heading);
  div.appendChild(item1);
  div.appendChild(item2);

  return div;
}
