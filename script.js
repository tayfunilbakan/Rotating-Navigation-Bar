const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const circle = document.querySelector(".circle");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  circle.classList.add("show-nav");
  
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav")
  circle.classList.remove("show-nav");
});

container.addEventListener('click', () => {
    container.classList.remove('show-nav');
    circle.classList.remove('show-nav');
});
