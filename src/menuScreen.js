import coffeeMenuJPG from "./images/coffeeMenu.jpg";

export default function menuScreen() {
  const contentBox = document.querySelector(".contentBox");
  contentBox.innerHTML = "";

  const coffeeMenuJpg = new Image();
  coffeeMenuJpg.src = coffeeMenuJPG;
  coffeeMenuJpg.classList.add("heroShot");

  const espresso = document.createElement("div");
  espresso.classList.add("menuItem");
  espresso.textContent = "espresso -   $2.00";

  const cortado = document.createElement("div");
  cortado.classList.add("menuItem");
  cortado.textContent = "cortado -   $3.00";

  const cappuccino = document.createElement("div");
  cappuccino.classList.add("menuItem");
  cappuccino.textContent = "cappuccino -   $4.00";

  const latte = document.createElement("div");
  latte.classList.add("menuItem");
  latte.textContent = "latte -   $5.00";

  const coldBrew = document.createElement("div");
  coldBrew.classList.add("menuItem");
  coldBrew.textContent = "cold brew -   $6.00";

  contentBox.appendChild(coffeeMenuJpg);
  contentBox.appendChild(espresso);
  contentBox.appendChild(cortado);
  contentBox.appendChild(cappuccino);
  contentBox.appendChild(latte);
  contentBox.appendChild(coldBrew);
}
