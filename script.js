"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  document.querySelector("#generator").addEventListener("click", generateBox);
}

function generateBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  box.classList.add("generatedBox");
  box.style.backgroundColor = getRandomColor();

  document.querySelector("#generated").append(box);

  // TODO: Create FLIP animation
  const firstFrame = document.querySelector("#generator").getBoundingClientRect();
  const lastFrame = box.getBoundingClientRect();

  const deltaX = firstFrame.left - lastFrame.left;
  const deltaY = firstFrame.top - lastFrame.top;
  const deltaWidth = firstFrame.width / lastFrame.width;
  const deltaHeight = firstFrame.height / lastFrame.height;

  box.animate(
    [
      {
        transformOrigin: "top left",
        transform: `translate(${deltaX}px, ${deltaY}px)
      scale(${deltaWidth}, ${deltaHeight})`,
      },

      { transformOrigin: "top left", transform: "none" },
    ],
    {
      duration: 300,
      easing: "ease-in-out",
    }
  );
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
