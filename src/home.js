import odinImage from "./odin.png";

export function loadHome() {
  const div = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Odin’s Feast";

  const image = document.createElement("img");
  image.src = odinImage;

  const paragraph = document.createElement("p");
  paragraph.textContent = "The finest meals in all of Asgard.";

  div.appendChild(heading);
  div.appendChild(image);
  div.appendChild(paragraph);

  return div; // ✅ THIS is what you were missing
}
