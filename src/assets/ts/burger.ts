console.log("[burger] Je suis chargé !");
const burgerBtn = document.getElementById("burger");
const burgerIco = document.getElementById("burger-ico");
const nav = document.querySelector("nav");

let NavState = false;
function changeNavState() {
  console.log("Appel de la fonction");
  burgerIco?.classList.toggle("close");
  burgerIco?.classList.toggle("open");
  nav?.classList.toggle("hidden");
  NavState = !NavState;
  console.log("[burger] Changement d'état : " + NavState + "\n" + [nav]);
  return NavState;
}

burgerBtn?.addEventListener("click", changeNavState);

