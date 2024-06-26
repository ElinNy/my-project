const welcomeText = "Welcome";
const welcomeEl = document.querySelector("#welcomeEl");
let drLisa = document.querySelector<HTMLParagraphElement>("#drLisa");
const backgroundStyle = document.querySelector("#backgroundStyle");
const doktor = document.querySelector("doktor");
const bubbleBtn = document.querySelector<HTMLDivElement>("#bubbleBtn");
const talkingId = document.querySelector<HTMLDivElement>("#talkingId");
const bubbleP = document.querySelector<HTMLDivElement>("#bubbleP");
const lessonBtn = document.querySelector<HTMLButtonElement>("#lessonBtn");
const backgroundFlowersRound = document.querySelector(
  "#backgroundFlowersRound"
);
const slideshowContainer = document.querySelector(".slideshow-container");

bubbleBtn?.classList.add("hide");

export function welcome() {
  const width = 300;
  const height = 50;
  const centerX = width / 2;
  const centerY = height / 2;
  const totalChars = welcomeText.length;
  const angleIncrement = Math.PI / totalChars;
  const horizontalRadius = width / 2;
  const verticalRadius = height / 2;
  const startAngle = angleIncrement / 2;
  const endAngle = startAngle + totalChars * angleIncrement;

  for (let i = 0; i < totalChars; i++) {
    const angle = startAngle + angleIncrement * i;
    if (angle <= endAngle) {
      setTimeout(() => {
        const x = centerX + horizontalRadius * 0.8 * Math.cos(angle);
        const y = centerY + verticalRadius * Math.sin(angle);
        let span = document.createElement("span");
        span.innerHTML = welcomeText[i];
        span.style.right = `${x}px`;
        span.style.bottom = `${y}px`;
        welcomeEl?.appendChild(span);
      }, i * 300);
    }
  }
  setTimeout(() => {
    drLisa!.innerHTML = "To Dr Lisa!";
  }, 3000);
}

export function hideWelcomeAndAddSpeechBubble() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      backgroundFlowersRound?.classList.remove("hide");
      welcomeEl?.classList.add("hide");
      drLisa?.classList.add("hide");
      backgroundStyle?.classList.add("hide");
      doktor?.classList.add("hide");
      bubbleBtn?.classList.remove("hide");
      talkingId?.classList.remove("hide");

      resolve;
    }, 8000);
  });
}

function talkingText(element: HTMLElement, text: string) {
  let textHej = "Do you want to learn about the common cold today?";
  let i = 0;
  const interval = setInterval(() => {
    if (i < textHej.length) {
      element.innerHTML += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

export function speechBubbleTimingandAddingBtn() {
  let textHej = "Do you want to learn about the common cold today?";
  setTimeout(() => {
    talkingText(bubbleP!, textHej);
  }, 8000);
  setTimeout(() => {
    talkingId?.classList.remove("talking");
    lessonBtn?.classList.remove("hide");
  }, 14000);
}
export function letsLearnBtn() {
  lessonBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    bubbleBtn?.classList.add("hide");
    talkingId?.classList.add("hide");
    backgroundFlowersRound?.classList.add("hide");
    slideshowContainer?.classList.remove("hide");
  });
}
