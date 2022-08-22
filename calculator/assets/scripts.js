const $ = (query) => document.querySelector(query);

const btn1 = $('#btn1')
const btn2 = $('#btn2').textContent
const btn3 = $('#btn3').textContent
const btn4 = $('#btn4').textContent
const btn5 = $('#btn5').textContent
const btn6 = $('#btn6').textContent
const btn7 = $('#btn7').textContent
const btn8 = $('#btn8').textContent
const btn9 = $('#btn9').textContent
const btnAC = $('#btnAC').textContent
const btnSum = $('#btn9').textContent
const btnSubtraction = $('#btn9').textContent
const btnMultiplication = $('#btn9').textContent
const btnDivision = $('#btn9').textContent
const btnEqual = $('#btn9').textContent

// const keys = $('.buttons');
// keys.addEventListener('click', (e) => {
//   if (e.target.matches('div')) {
//     console.log(typeof(e.target.tagName));
//   }
// });

// Ver depois, deixar igual do iOS
if (document.getElementById('display').textContent != 0) {
  $('#btnAC').textContent = 'C'
}

function insert(num) {
  let numberOnDisplay = $('#display').textContent;
  
  if (numberOnDisplay == 0) {
    $('#display').textContent = num;
  } else {
    $('#display').textContent += num;
  }
}

function backspace() {
    let display = document.getElementById('display').textContent;
    document.getElementById('display').textContent = display.substring(0, display.length-1);
}

function clearLast() {
  let patternForOperators = /[+\-*\/]/g

  let display = document.getElementById('display').innerText;
  document.getElementById('display').innerText = display.substring(0, display.indexOf('*') + 1);
}

function clearAll () {
  $('#display').textContent = 0;
}

function percent () {
    var display = document.getElementById('display').textContent;
    document.getElementById('display').textContent = display.substring(0, display.length -1);
}

function calc () {
  var display = document.getElementById('display').textContent;
  
  // Último caracter for uma 'operação'. Evitar mostrar erro da função 'eval' no console
  let operator = display.substring(display.length -1, display.length);
  if (
      operator == '+' ||
      operator == '+' ||
      operator == '*' ||
      operator == '/'
    ) {
    return
  }

  if (display) {
      document.getElementById('display').textContent = eval(display);
  } else {
      document.getElementById('display').textContent = "Erro..."
  }
}

// Quando alguma tecla numérica for pressionada:
document.addEventListener('keydown', function (event) {
  let patternForNumbers = /[0-9]/g;
  let patternForOperators = /[+\-*\/]/g
  if (event.key.match(patternForNumbers,)) {
    event.preventDefault();
    insert(event.key)
  }
  if (event.key === '.') {
    event.preventDefault();
    insert(',')
  }
  if (event.key === ',') {
    event.preventDefault();
    insert(event.key)
  }
  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    insert(event.key)
  }
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calc();
  }
  if (event.key === "Backspace") {
    event.preventDefault();
    backspace()
  }
  if (event.key == 'Escape') {
    event.preventDefault();
    clearAll()
  }
  if (event.key == 'Delete') {
    event.preventDefault();
    clearLast()
  }
})

function darkModeBody() {
  let body = document.body;
  body.classList.toggle("darkModeBody");
  
  let img = document.getElementsByTagName('img')
  if(body.classList.contains("darkModeBody")) {
    img[1].src = './assets/moon.svg';
  } else {
    img[1].src = './assets/sun.svg';
  }
  

}
function darkModeCalc() {
  let calc = $('.calc');
  let display = $('.display');
  calc.classList.toggle("darkModeCalc");
  display.classList.toggle("darkModeDisplay");

  let img = document.getElementsByTagName('img')
  if(calc.classList.contains("darkModeCalc")) {
    img[2].src = './assets/sun.svg';
  } else {
    img[2].src = './assets/moon.svg';
  }
}

