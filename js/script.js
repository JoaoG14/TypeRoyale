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
  if (event.keyCode === 66) {
    bB.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 66) {
    bB.className = "key";
  }
});

const cC = document.querySelector("#cC");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 67) {
    cC.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 67) {
    cC.className = "key";
  }
});

const dD = document.querySelector("#dD");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 68) {
    dD.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 68) {
    dD.className = "key";
  }
});

const eE = document.querySelector("#eE");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 69) {
    eE.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 69) {
    eE.className = "key";
  }
});

const fF = document.querySelector("#fF");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 70) {
    fF.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 70) {
    fF.className = "key";
  }
});

const gG = document.querySelector("#gG");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 71) {
    gG.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 71) {
    gG.className = "key";
  }
});

const hH = document.querySelector("#hH");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 72) {
    hH.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 72) {
    hH.className = "key";
  }
});

const iI = document.querySelector("#iI");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 73) {
    iI.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 73) {
    iI.className = "key";
  }
});

const jJ = document.querySelector("#jJ");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 74) {
    jJ.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 74) {
    jJ.className = "key";
  }
});

const kK = document.querySelector("#kK");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 75) {
    kK.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 75) {
    kK.className = "key";
  }
});

const lL = document.querySelector("#lL");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 76) {
    lL.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 76) {
    lL.className = "key";
  }
});

const mM = document.querySelector("#mM");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 77) {
    mM.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 77) {
    mM.className = "key";
  }
});

const nN = document.querySelector("#nN");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 78) {
    nN.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 78) {
    nN.className = "key";
  }
});

const oO = document.querySelector("#oO");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 79) {
    oO.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 79) {
    oO.className = "key";
  }
});

const pP = document.querySelector("#pP");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 80) {
    pP.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 80) {
    pP.className = "key";
  }
});

const qQ = document.querySelector("#qQ");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 81) {
    qQ.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 81) {
    qQ.className = "key";
  }
});

const rR = document.querySelector("#rR");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 82) {
    rR.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 82) {
    rR.className = "key";
  }
});

const sS = document.querySelector("#sS");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 83) {
    sS.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 83) {
    sS.className = "key";
  }
});

const tT = document.querySelector("#tT");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 84) {
    tT.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 84) {
    tT.className = "key";
  }
});

const uU = document.querySelector("#uU");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 85) {
    uU.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 85) {
    uU.className = "key";
  }
});

const vV = document.querySelector("#vV");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 86) {
    vV.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 86) {
    vV.className = "key";
  }
});

const wW = document.querySelector("#wW");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 87) {
    wW.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 87) {
    wW.className = "key";
  }
});

const xX = document.querySelector("#xX");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 88) {
    xX.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 88) {
    xX.className = "key";
  }
});

const yY = document.querySelector("#yY");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 89) {
    yY.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 89) {
    yY.className = "key";
  }
});

const zZ = document.querySelector("#zZ");

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 90) {
    zZ.className = "key-pressed";
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 90) {
    zZ.className = "key";
  }
});

const dot = document.querySelector("#dot");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 190) {
      dot.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 190) {
      dot.className = "key";
    }
  });
  
const comma = document.querySelector("#comma");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 188) {
      comma.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 188) {
      comma.className = "key";
    }
  });
  
const semicolon = document.querySelector("#semicolon");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 186) {
      semicolon.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 186) {
      semicolon.className = "key";
    }
  });
  
const backspace = document.querySelector("#backspace");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 8) {
      backspace.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 8) {
      backspace.className = "key";
    }
  });
  
 
const spacebar = document.querySelector("#spacebar");

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
      spacebar.className = "key-pressed";
    }
  });
  
  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 32) {
      spacebar.className = "key";
    }
  });
   