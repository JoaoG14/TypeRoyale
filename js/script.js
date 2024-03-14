const typingText = document.querySelector(".typing-text p"),
  inpField = document.querySelector(".wrapper .input-field"),
  tryAgainBtn = document.querySelector(".content button"),
  timeTag = document.querySelector(".time span b"),
  mistakeTag = document.querySelector(".mistake span"),
  wpmTag = document.querySelector("p#wpm"),
  cpmTag = document.querySelector(".cpm span"),
  multiplayer = document.querySelector("#multiplayer"),
  multiplayerBtn = document.querySelector("#multiplayerBtn"),
  practiceBtn = document.querySelector("#practiceBtn"),
  aboutPage = document.querySelector("#aboutPage"),
  aboutBtn = document.querySelector(".about"),
  settingsBar = document.querySelector("#switchModeWrapper");

let timer,
  maxTime = 15,
  timeLeft = maxTime,
  charIndex = (mistakes = isTyping = 0),
  aboutToggle = true,
  isPlaying = true;

multiplayerBtn.addEventListener("click", () => {
  isPlaying = false;
  multiplayer.style.display = "block";
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("quoteSection").style.display = "none";
  document.getElementById("switchTheme").style.display = "none";
  document.getElementById("results").style.display = "none";

  practiceBtn.style.left = 0;
  practiceBtn.style.marginLeft = "27px";
  practiceBtn.innerHTML = "multiplayer";

});

aboutBtn.addEventListener("click", () => {
  aboutToggle = !aboutToggle;

  if (aboutToggle) {
    aboutPage.style.display = "none";
    aboutBtn.innerHTML = "about";
    settingsBar.style.display = "flex";
    document.getElementById("keyboard").style.display = "block";
    document.getElementById("quoteSection").style.display = "flex";
    document.getElementById("switchTheme").style.display = "block";
    document.getElementById("track").style.display = "inline-block"
    isPlaying = true;
    return;
  }
  isPlaying = false;
  aboutPage.style.display = "block";
  aboutBtn.innerHTML = "back";
  settingsBar.style.display = "none";
  multiplayer.style.display = "none";
  document.getElementById("keyboard").style.display = "none";
  document.getElementById("quoteSection").style.display = "none";
  document.getElementById("switchTheme").style.display = "none";
  document.getElementById("results").style.display = "none";
  document.getElementById("track").style.display = "none"
});

practiceBtn.addEventListener("click", () => {
  isPlaying = true
  multiplayer.style.display = "none";
  document.getElementById("keyboard").style.display = "block";
  document.getElementById("quoteSection").style.display = "flex";
  document.getElementById("switchTheme").style.display = "block";
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
    console.log(spaceCounter)
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
    document.getElementById("switchTheme").style.display = "none";

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
