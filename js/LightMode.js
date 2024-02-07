function checkTheme() {
  if (lightMode === "enabled") {
    enableLightMode();
  }
}

window.onload = checkTheme;

let lightMode = localStorage.getItem("lightMode");

let lightModeToggle = document.querySelector("#switchWrapper");

const img = document.querySelector(".logo");

const enableLightMode = () => {
  document.documentElement.classList.add("light");

  img.setAttribute("src", "assets/compact-logo-black.png");

  localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  document.documentElement.classList.remove("light");

  img.setAttribute("src", "assets/compact-logo.png");

  localStorage.setItem("lightMode", null);
};

checkTheme();

lightModeToggle.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  if (lightMode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
