let counter = 0;
const number = document.querySelector("#counter");

document.querySelector(".nextBtn").addEventListener("click", () => {
  counter++;
  updateCounter(counter);
});

document.querySelector(".prevBtn").addEventListener("click", () => {
  --counter;
  updateCounter(counter);
});

const updateCounter = (value) => {
  const number = document.querySelector("#counter");
  number.innerHTML = value;
  if (value > 0) {
    number.style.color = "green";
  } else if (value < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "#333333";
  }
};
