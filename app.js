//Select all images
const nextButton = document.querySelector('.next-button');
const previousButton = document.querySelector('.previous-button');
const container = document.querySelector('.images');

//Default image number
let counter = 1;

//Listens to when an event has occured
nextButton.addEventListener('click', nextSlide);
previousButton.addEventListener('click', previousSlide);

function nextSlide() {
  //Image animation transition effect
  container.animate([{ opacity: '0.5' }, { opacity: '1' }], { duration: 2000, fill: 'forwards' });
  //Loops through images 1 to 6
  if (counter === 6) {
    counter = 0;
  }
  //increment by 1
  counter++;

  //background image storage
  container.style.backgroundImage = `url(img/img-${counter}.jpg)`

  //displays the image by number
  console.log(counter);
}

function previousSlide() {
  //Image animation transition effect
  container.animate([{ opacity: '0.1' }, { opacity: '1' }], { duration: 1000, fill: 'forwards' });

  //Loops through images in reverse order
  if (counter === 1) {
    counter = 7;
  }
  //decrements by 1
  counter--;

  //background image storage
  container.style.backgroundImage = `url(img/img-${counter}.jpg)`;

  //Displays th eimage by number
  console.log(counter);
}