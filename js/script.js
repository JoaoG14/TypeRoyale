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
  settingsBar = document.querySelector("#switchModeWrapper"),
  timerBar = document.querySelector("#timerBar"),
  selected = document.querySelector("#selected");

let timer,
  maxTime = 15,
  timeLeft = maxTime,
  charIndex = (mistakes = isTyping = 0),
  aboutToggle = true,
  isPlaying = true;

multiplayerBtn.addEventListener("click", () => {
  isPlaying = false;
  multiplayer.style.display = "block";
  aboutPage.style.display = "none";
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("quoteSection").style.display = "none";
  document.getElementById("results").style.display = "none";

  selected.style.marginLeft = "122px";
  multiplayerBtn.style.color = "black";
  practiceBtn.style.color = "#ababab";
  selected.style.width = "145px";
  practiceBtn.style.cursor = "pointer";
  multiplayerBtn.style.cursor = "default";
});

aboutBtn.addEventListener("click", () => {
  isPlaying = false;
  aboutPage.style.display = "block";
  multiplayer.style.display = "none";
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("quoteSection").style.display = "none";
  document.getElementById("results").style.display = "none";
  document.getElementById("track").style.display = "none";
});

practiceBtn.addEventListener("click", () => {
  isPlaying = true;
  multiplayer.style.display = "none";
  aboutPage.style.display = "none";
  document.getElementById("keyboard").style.display = "block";
  document.getElementById("quoteSection").style.display = "flex";
  document.getElementById("switchTheme").style.display = "block";

  selected.style.marginLeft = "8px";
  multiplayerBtn.style.color = "#ababab";
  practiceBtn.style.color = "var(--secondary-color)";
  selected.style.width = "125px";
  practiceBtn.style.cursor = "default";
  multiplayerBtn.style.cursor = "pointer";

  resetGame();
});

function loadParagraphs() {
  let spaceCounter = 0;
  document.getElementById("results").style.display = "none";

  document.getElementById("keyboard").style.display = "block";
  document.getElementById("quoteSection").style.display = "flex";
  document.getElementById("switchTheme").style.display = "block";

  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";

  paragraphs[ranIndex].split("").forEach((char) => {
    if (char === " ") {
      spaceCounter++;
    }
    if (spaceCounter > 7) {
      typingText.innerHTML += `<br>`;
      spaceCounter = 0;
    }
    let span = `<span>${char}</span>`;
    typingText.innerHTML += span;
    console.log(spaceCounter);
  });
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
  let characters = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];
  if (charIndex < characters.length - 1 && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }
    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }
        characters[charIndex].classList.remove("correct", "incorrect");
      }
    } else {
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        mistakes++;
        characters[charIndex].classList.add("incorrect");
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
    mistakeTag.innerText = mistakes;
    cpmTag.innerText = charIndex - mistakes;
  } else {
    clearInterval(timer);
    inpField.value = "";

    document.getElementById("keyboard").style.display = "none";
    document.getElementById("quoteSection").style.display = "none";

    document.getElementById("results").style.display = "block";
  }
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );
    wpmTag.innerText = wpm;
  } else {
    clearInterval(timer);
  }
}

function resetGame() {
  loadParagraphs();
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = isTyping = 0;
  inpField.value = "";
  timeTag.innerText = timeLeft;
  wpmTag.innerText = 0;
  mistakeTag.innerText = 0;
  cpmTag.innerText = 0;
}

loadParagraphs();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 9) {
    if (isPlaying) {
      resetGame();
    }
  }
});
