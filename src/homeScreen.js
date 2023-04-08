import coffeePourJPG from "./images/coffeePour.jpg";

export default function homeScreen() {
  const contentBox = document.querySelector(".contentBox");

  contentBox.innerHTML = "";

  const headerLine = document.createElement("div");
  headerLine.classList.add("headerLine");
  headerLine.textContent = "Best coffee in Golden";

  const subtext = document.createElement("div");
  subtext.classList.add("subtext");
  subtext.textContent = "Handmade by the best Barista's";

  const heroShot = new Image();
  heroShot.src = coffeePourJPG;
  heroShot.classList.add("heroShot");

  contentBox.appendChild(headerLine);
  contentBox.appendChild(subtext);
  contentBox.appendChild(heroShot);
}
