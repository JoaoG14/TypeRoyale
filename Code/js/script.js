const typingText = document.querySelector(".typing-text p"),
  inpField = document.querySelector(".wrapper .input-field"),
  tryAgainBtn = document.querySelector(".content button"),
  timeTag = document.querySelector(".time span b"),
  mistakeTag = document.querySelector(".mistake span"),
  wpmTag = document.querySelector(".wpm span"),
  cpmTag = document.querySelector(".cpm span");

let timer,
  maxTime = 15,
  timeLeft = maxTime,
  charIndex = (mistakes = isTyping = 0);

function loadParagraphs() {
  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";
  paragraphs[ranIndex].split("").forEach((char) => {
    let span = `<span>${char}</span>`;
    typingText.innerHTML += span;
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
    resetGame();
  }
});

//Keyboard lights

const aA = document.querySelector("#aA");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 65) {
    aA.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 65) {
    aA.className = "key";
  }
});

const bB = document.querySelector("#bB");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 65) {
    bB.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 65) {
    bB.className = "key";
  }
});

const cC = document.querySelector("#cC");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 65) {
    cC.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 65) {
    cC.className = "key";
  }
});

const dD = document.querySelector("#dD");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 65) {
    dD.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 65) {
    dD.className = "key";
  }
});

const eE = document.querySelector("#eE");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 65) {
      eE.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 65) {
      eE.className = "key";
    }
  });
  
const fF = document.querySelector("#fF");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 65) {
      fF.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 65) {
      fF.className = "key";
    }
  });
  
const gG = document.querySelector("#gG");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 65) {
      gG.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 65) {
      gG.className = "key";
    }
  });
  
const hH = document.querySelector("#hH");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 65) {
      hH.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 65) {
      hH.className = "key";
    }
  });
  
const iI = document.querySelector("#iI");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 65) {
      iI.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 65) {
      iI.className = "key";
    }
  });
  
  
const jJ = document.querySelector("#jJ");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 65) {
      jJ.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 65) {
      jJ.className = "key";
    }
  });
  