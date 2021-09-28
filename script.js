const progress = document.getElementById("progress");
const prevProgress = document.getElementById("prev");
const nextProgress = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let current = 1;

nextProgress.addEventListener("click", () => {
  current++;
  if (current > circle.length) {
    current = circle.length;
  }
  update();
});

prevProgress.addEventListener("click", () => {
  current--;
  if (current < 1) {
    current = 1;
  }
  update();
});

function update() {
  circle.forEach((circle, index) => {
    if (index < current) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";

  if (current === 1) {
    prevProgress.disabled = true;
  } else if (current === circle.length) {
    nextProgress.disabled = true;
  } else {
    prevProgress.disabled = false;
    nextProgress.disabled = false;
  }
}
