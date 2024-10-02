const typingText = document.querySelector(".typing-text p"),
  inpField = document.querySelector(".wrapper .input-field"),
  tryAgainBtn = document.querySelector(".content button"),
  timeTag = document.querySelector(".time span b"),
  mistakeTag = document.querySelector(".mistake span"),
  wpmTag = document.querySelector("p#wpm"),
  cpmTag = document.querySelector(".cpm span"),
  multiplayer = document.querySelector("#multiplayer"),
  multiplayerBtn = document.querySelector("#multi"),
  practiceBtn = document.querySelector("#prac"),
  aboutPage = document.querySelector("#aboutPage"),
  aboutBtn = document.querySelector("#abt"),
  settingsBtn = document.querySelector("#set"),
  settingsBar = document.querySelector("#switchModeWrapper"),
  // timeBar = document.querySelector("#timerBar"),
  selected = document.querySelector("#selected"),
  restartBtn = document.querySelector("#restartIcon"),
  timeDisplay = document.querySelector("#time-display");

let timer,
  maxTime = 15,
  timeLeft = maxTime,
  charIndex = (mistakes = isTyping = 0),
  aboutToggle = true,
  isPlaying = true,
  pracIsSelected = true,
  multiIsSelected = false,
  setIsSelected = false,
  abtIsSelected = false;

restartBtn.addEventListener("click", () => {
  resetGame();
});

practiceBtn.addEventListener("mouseover", () => {
  if (!pracIsSelected) {
    practiceBtn.style.color = "#d9d9d9";
  }
});

practiceBtn.addEventListener("mouseout", () => {
  if (!pracIsSelected) {
    practiceBtn.style.color = "#ababab";
  }
});

multiplayerBtn.addEventListener("mouseover", () => {
  if (!multiIsSelected) {
    multiplayerBtn.style.color = "#d9d9d9";
  }
});

multiplayerBtn.addEventListener("mouseout", () => {
  if (!multiIsSelected) {
    multiplayerBtn.style.color = "#ababab";
  }
});

settingsBtn.addEventListener("mouseover", () => {
  if (!setIsSelected) {
    settingsBtn.style.color = "#d9d9d9";
  }
});

settingsBtn.addEventListener("mouseout", () => {
  if (!setIsSelected) {
    settingsBtn.style.color = "#ababab";
  }
});

aboutBtn.addEventListener("mouseover", () => {
  if (!abtIsSelected) {
    aboutBtn.style.color = "#d9d9d9";
  }
});

aboutBtn.addEventListener("mouseout", () => {
  if (!abtIsSelected) {
    aboutBtn.style.color = "#ababab";
  }
});

practiceBtn.addEventListener("click", () => {
  pracIsSelected = true;
  multiIsSelected = false;
  setIsSelected = false;
  abtIsSelected = false;
  isPlaying = true;

  multiplayer.style.display = "none";
  aboutPage.style.display = "none";
  document.getElementById("keyboard").style.display = "block";
  document.getElementById("quoteSection").style.display = "flex";
  document.getElementById("switchTheme").style.display = "block";

  selected.style.marginLeft = "8px";
  selected.style.width = "125px";

  multiplayerBtn.style.color = "#ababab";
  practiceBtn.style.color = "#070707";
  settingsBtn.style.color = "#ababab";
  aboutBtn.style.color = "#ababab";

  practiceBtn.style.cursor = "default";
  multiplayerBtn.style.cursor = "pointer";
  aboutBtn.style.cursor = "pointer";
  settingsBtn.style.cursor = "pointer";

  resetGame();
});

multiplayerBtn.addEventListener("click", () => {
  pracIsSelected = false;
  multiIsSelected = true;
  setIsSelected = false;
  abtIsSelected = false;
  isPlaying = false;

  multiplayer.style.display = "block";
  aboutPage.style.display = "none";
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("quoteSection").style.display = "none";
  document.getElementById("results").style.display = "none";

  selected.style.marginLeft = "122px";
  selected.style.width = "145px";

  practiceBtn.style.color = "#ababab";
  multiplayerBtn.style.color = "black";
  aboutBtn.style.color = "#ababab";
  settingsBtn.style.color = "#ababab";

  practiceBtn.style.cursor = "pointer";
  multiplayerBtn.style.cursor = "default";
  aboutBtn.style.cursor = "pointer";
  settingsBtn.style.cursor = "pointer";
});

settingsBtn.addEventListener("click", () => {
  pracIsSelected = false;
  multiIsSelected = false;
  setIsSelected = true;
  abtIsSelected = false;
  isPlaying = false;

  aboutPage.style.display = "none";
  multiplayer.style.display = "none";
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("quoteSection").style.display = "none";
  document.getElementById("results").style.display = "none";

  // bar slider
  selected.style.marginLeft = "259px";
  selected.style.width = "125px";

  practiceBtn.style.color = "#ababab";
  multiplayerBtn.style.color = "#ababab";
  settingsBtn.style.color = "black";
  aboutBtn.style.color = "#ababab";

  practiceBtn.style.cursor = "pointer";
  multiplayerBtn.style.cursor = "pointer";
  settingsBtn.style.cursor = "default";
  aboutBtn.style.cursor = "pointer";
});

aboutBtn.addEventListener("click", () => {
  pracIsSelected = false;
  multiIsSelected = false;
  setIsSelected = false;
  abtIsSelected = true;
  isPlaying = false;
  aboutPage.style.display = "block";
  multiplayer.style.display = "none";
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("quoteSection").style.display = "none";
  document.getElementById("results").style.display = "none";

  // bar slider
  selected.style.marginLeft = "381px";

  aboutBtn.style.color = "black";
  practiceBtn.style.color = "#ababab";
  multiplayerBtn.style.color = "#ababab";
  settingsBtn.style.color = "#ababab";

  selected.style.width = "100px";

  practiceBtn.style.cursor = "pointer";
  multiplayerBtn.style.cursor = "pointer";
  aboutBtn.style.cursor = "default";
  settingsBtn.style.cursor = "pointer";
});

let paragraphs = ["oi"];

async function getWords() {
  const result = await fetch(
    "https://random-word-api.herokuapp.com/word?number=18"
  );
  const data = await result.json();
  paragraphs = [data.join(" ")];
  return data.join(" ");
}

async function loadText() {
  let spaceCounter = 0;
  document.getElementById("results").style.display = "none";

  document.getElementById("keyboard").style.display = "block";
  document.getElementById("quoteSection").style.display = "flex";
  document.getElementById("switchTheme").style.display = "block";

  typingText.innerHTML = `<div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>`;

  await getWords();

  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";

  paragraphs[ranIndex].split("").forEach((char) => {
    if (char === " ") {
      spaceCounter++;
    }
    if (spaceCounter > 5) {
      typingText.innerHTML += `<br>`;
      spaceCounter = 0;
    }
    let span = `<span>${char}</span>`;
    typingText.innerHTML += span;
  });
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

let inputLength = 0;
// let tempTimeBar = 100;

function initTyping() {
  // timeBar.style.display = "block"
  // if (isTyping){}
  // setInterval(() => {
  //   tempTimeBar = tempTimeBar - 0.001
  //   timeBar.style.width = `${tempTimeBar}vw`
  // }, 5)

  let characters = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];

  if (charIndex < characters.length - 1 && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }

    // deleting functionality

    if (typedChar === undefined) {
      if (charIndex > 0) {
        let indexDecrease = inputLength - inpField.value.length;

        // used for loop so it works with ctrl + backspace
        for (let i = 0; i < indexDecrease; i++) {
          charIndex--;
          if (characters[charIndex].classList.contains("incorrect")) {
            mistakes--;
          }
          characters[charIndex].classList.remove("correct", "incorrect");
        }
      }
      inputLength = inpField.value.length;
    } else {
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct");
        inputLength++;
      } else {
        mistakes++;
        characters[charIndex].classList.add("incorrect");
        inputLength++;
      }
      charIndex++;
    }
    characters.forEach((span) => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    wpmTag.innerText = wpm;
  } else {
    clearInterval(timer);
    inpField.value = "";

    document.getElementById("keyboard").style.display = "none";
    document.getElementById("quoteSection").style.display = "none";

    document.getElementById("results").style.display = "block";

    inputLength = 0;
  }
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;

    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );

    timeDisplay.innerHTML = `${timeLeft}`;
  } else {
    clearInterval(timer);
  }
}

function resetGame() {
  loadText();
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = isTyping = 0;
  inpField.value = "";
  inputLength = 0;
  // timeBar.style.display = "none";
  // timeBar.style.width = "100vw";
}

loadText();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 9) {
    if (isPlaying) {
      resetGame();
    }
  }
});
