const popUp = document.getElementById('pop-up');
const popUpLayer = document.getElementById('pop-up-layer');
const closeModal = document.getElementById('close-pop-up');

const subBtn = document.getElementById('sub-btn');

subBtn.addEventListener("click", () => {
  popUpLayer.style.display = 'flex';
})


closeModal.addEventListener("click", function() {
  popUpLayer.style.display = 'none';
})

let popUpSeconds = 40;


let popUpFun = window.setInterval(function() {
  popUpLayer.style.display = 'flex';

  window.clearInterval(popUpFun);

}, popUpSeconds * 1000);

const nextNext = document.getElementById('next-next')
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const testimonial1 = document.querySelector('.testimonial1');
const testimonial2 = document.querySelector('.testimonial2');
const testimonial3 = document.querySelector('.testimonial3')


const tests = document.querySelector('.tests');

let nextNextInt = window.setInterval(function() {

  if (tests.classList.contains('second')) {
    tests.classList.remove('second');


    tests.classList.add('third');
  }

}, 4000)


let nextint = window.setInterval(function() {

  if (tests.classList.contains('first')) {
    tests.classList.remove('first');


    tests.classList.add('second');
  }

}, 8000)

let prevint = window.setInterval(function() {

  if (tests.classList.contains('third')) {
    tests.classList.remove('third');


    tests.classList.add('first');
  }
}, 16000)

function dotClick(oldClassOne, oldClassTwo, newClass) {
  if (tests.classList.contains(oldClassOne)) {
    tests.classList.remove(oldClassOne);
  }

  if (tests.classList.contains(oldClassTwo)) {
    tests.classList.remove(oldClassTwo)
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add(newClass);
}

nextNext.addEventListener("click", function() {

  dotClick('second', 'first', 'third');

})



next.addEventListener("click", function() {

  dotClick('first', 'third', 'second');

})

prev.addEventListener("click", function() {

  dotClick('second', 'third', 'first');

})
