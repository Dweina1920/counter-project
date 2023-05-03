// Tu código aquí dina.

// Variable de estado: un número para almacenar el valor actual del contador

let counter = 0;
const number = document.querySelector("#counter");

//Seleccionar el botón ADDCOUNT

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
