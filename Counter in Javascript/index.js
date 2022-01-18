// const decreaseButton = document.getElementById("decrease");
// const increaseButton = document.getElementById("increase");
// const resetButton = document.getElementById("reset");
// const value = document.getElementById("value");
// let initalValue = 0;

// decreaseButton.addEventListener("click", function () {
//   value.textContent = +1;
// });

// Initial value
let count = 0;

// Select Value and Buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
