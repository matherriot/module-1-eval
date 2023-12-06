console.log("[loader] Je suis chargé !");
const loaderBox = document.querySelector(".loader-box")
const mainContainer = document.querySelector(".container")
const loaderTimer = Math.round((Math.random()*4000)+2000)

let isOnLoadingScreen = true;
function toggleLoadingScreen() {
    loaderBox?.classList.toggle("loader-hidden")
    mainContainer?.classList.toggle("hidden-container")

    isOnLoadingScreen = !isOnLoadingScreen
    console.log("[loader] Changement d'état : " + isOnLoadingScreen + "\n Le délai était : " + loaderTimer + " ms");
    return isOnLoadingScreen
}

setTimeout(toggleLoadingScreen, (Math.random()*4000)+2000)