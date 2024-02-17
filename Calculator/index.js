//Calculator Program

const display = document.getElementById('display');

// const addBtn = document.getElementById('addBtn');
// const substractBtn = document.getElementById('subtractBtn');
// const multiplyBtn = document.getElementById('multiplyBtn');
// const divideBtn = document.getElementById('divideBtn');
// const Buttons = document.querySelectorAll('#keys button:not(.operator-btn)');
// const decimalBtn = document.getElementById('decimalBtn');
// const equalBtn = document.getElementById('equalBtn');
// const clearBtn = document.getElementById('clearBtn');

// addBtn.addEventListener('click', () => appendToDisplay('+'));
// substractBtn.addEventListener('click', () => appendToDisplay('-'));
// multiplyBtn.addEventListener('click', () => appendToDisplay('*'));
// divideBtn.addEventListener('click', () => appendToDisplay('/'));
// decimalBtn.addEventListener('click', () => appendToDisplay('.'));
// equalBtn.addEventListener('click', calculate);
// clearBtn.addEventListener('click', clearDisplay);

// Buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;
//         appendToDisplay(value);
//     });
// });

function appendToDisplay(input) {
//   if (display.value === '0') {
//     display.value = '';
//   }
    display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch(error) {
    display.value = 'Error';
  }
}


// function calculate() {
//     try {
//         const result = eval(display.value);
//         if (Number.isFinite(result)) {
//             display.value = result;
//         } else {
//             display.value = 'Error';
//         } 
//     } catch (error) {
//             display.value = 'Error';
//         }
//     }

  