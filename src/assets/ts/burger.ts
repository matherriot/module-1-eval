const burgerBtn = document.getElementById("burger");
const burgerIco = document.getElementById("burger-ico");
const nav = document.querySelector("nav");

let NavState = false;
function changeNavState() {
  burgerIco?.classList.toggle("close");
  burgerIco?.classList.toggle("open");
  nav?.classList.toggle("hidden");
  NavState = !NavState;
  //console.log("[burger] Changement d'état : " + NavState);
  return NavState;
}

burgerBtn?.addEventListener("click", changeNavState);

