// Tu código aquí dina.

// Variable de estado: un número para almacenar el valor actual del contador

let counter = 0;
const number = document.querySelector("#counter");


//Seleccionar el botón ADDCOUNT

const changeColor = () => {
  if (counter > 0) {
    number.style.color = "green";
  } else if (counter < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "#333333";
  }
};

document.querySelector(".nextBtn").addEventListener("click", () => {
  counter++;
  number.textContent = counter;
  changeColor();
});

document.querySelector(".prevBtn").addEventListener("click", () => {
  --counter;
 number.textContent = counter;
  changeColor();
});
