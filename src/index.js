import "./style.css";
import printMe from "./print.js";
import InstagramSVG from "./images/instagram.svg";
import CoffeeSVG from "./images/coffee.svg";
import GithubSVG from "./images/github.svg";

function mainBody() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("container");

  const leftContainer = document.createElement("div");
  leftContainer.classList.add("leftContainer");

  const coffee = new Image();
  coffee.src = CoffeeSVG;
  coffee.classList.add("coffee");

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.textContent = "Burch Coffee Co.";

  const instagram = new Image();
  instagram.src = InstagramSVG;
  instagram.classList.add("instagram");

  leftContainer.appendChild(coffee);
  leftContainer.appendChild(logo);

  container.appendChild(leftContainer);
  container.appendChild(instagram);

  header.appendChild(container);
  wrapper.appendChild(header);

  const navButtonsContainer = document.createElement("div");
  navButtonsContainer.classList.add("navButtonsContainer");

  const home = document.createElement("div");
  home.classList.add("navButton");
  home.textContent = "home";
  home.addEventListener("click", printMe);

  const menu = document.createElement("div");
  menu.classList.add("navButton");
  menu.textContent = "menu";

  const about = document.createElement("div");
  about.classList.add("navButton");
  about.textContent = "about";

  navButtonsContainer.appendChild(home);
  navButtonsContainer.appendChild(menu);
  navButtonsContainer.appendChild(about);

  wrapper.appendChild(navButtonsContainer);

  const contentBox = document.createElement("div");
  contentBox.classList.add("contentBox");

  wrapper.appendChild(contentBox);

  return wrapper;
}

function getFooter() {
  const footer = document.createElement("footer");

  const footerText = document.createElement("div");
  footerText.classList.add("footerText");
  footerText.textContent = "Made by Cole Burch";

  const github = new Image();
  github.src = GithubSVG;
  github.classList.add("github");

  footer.appendChild(footerText);
  footer.appendChild(github);

  return footer;
}

document.body.appendChild(mainBody());
document.body.appendChild(getFooter());
