// get carousel container
const carousel = document.querySelector(".carousel");
// get buttons container
const buttonContainer = document.querySelector(".carousel-actions");

let slidePosition = 0; // initial slide position

const slides = document.getElementsByClassName("carousel-item"); // carousel items divs
const totalSlides = slides.length; //total number of carousel slides
const prevBtn = document.querySelector(".carousel-btn__prev"); //previous button tonget to the previous slide
const nextBtn = document.querySelector(".carousel-btn__next"); //next button tonget to the next slide

carousel.addEventListener('mouseover' , ()=>{
    buttonContainer.classList.add('show');

})

carousel.addEventListener('mouseout' , ()=>{
    buttonContainer.classList.remove('show');

})

// previous button event listener
prevBtn.addEventListener("click", () => {
  prevslideShow();
});

// next button event listener
nextBtn.addEventListener("click", () => {
  nextslideShow();
});

// function to update the visibility of the initial and current slide
const updatePosition = () => {
  for (let slide of slides) {
    slide.classList.remove("carousel-item__visible");
    slide.classList.add("carousel-item__hidden");
  }

  slides[slidePosition].classList.add("carousel-item__visible");
};

// previous slide function for the previous button
const prevslideShow = () => {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updatePosition();
  //   console.log(totalSlides, slides, slidePosition);
};

// next slide function for the next button
const nextslideShow = () => {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updatePosition();
  //   console.log(totalSlides, slides, slidePosition);
};
