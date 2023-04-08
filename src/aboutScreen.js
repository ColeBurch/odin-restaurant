import locationPNG from "./images/location.png";

export default function aboutScreen() {
  const contentBox = document.querySelector(".contentBox");
  contentBox.innerHTML = "";

  const location = document.createElement("div");
  location.classList.add("location");
  location.textContent = "Location - Golden, CO";

  const locationpng = new Image();
  locationpng.src = locationPNG;
  locationpng.classList.add("heroShot");

  contentBox.appendChild(location);
  contentBox.appendChild(locationpng);
}
