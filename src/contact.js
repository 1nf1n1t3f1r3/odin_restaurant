export function loadContact() {
  const div = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Contact";

  const info = document.createElement("p");
  info.textContent = "Send a raven or shout very loudly.";

  div.appendChild(heading);
  div.appendChild(info);

  return div;
}
