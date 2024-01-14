const scroll = new LocomotiveScroll({
  el: document.querySelector('.scroll'),
  smooth: true,
});

document.addEventListener("mousemove", function (dets){
   gsap.to(".cursor",{
    left:dets.x,
    top:dets.y,
    ease: "power1.out",
    overwrite: "auto",
    stagger: 0.02,
   })
})
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
  
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navCloseBtn = document.querySelector(".nav-close-btn"); // Add this line
  
  const toggleNav = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }
  
  addEventOnElements(navTogglers, "click", toggleNav);
  addEventOnElements([navCloseBtn], "click", toggleNav);

  // header 

  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  });
//  content 
  document.addEventListener('DOMContentLoaded', function () {
    const aboutYouText = "A Forntend Web Developer and a Blogger want to showing some skills of my work, and writing blogs for some extra curiculam. This is me!";
    const aboutYouParagraph = document.querySelector('.about-you');
    let index = 0;

    function typeAboutYou() {
        aboutYouParagraph.textContent = aboutYouText.slice(0, index);
        index++;

        if (index <= aboutYouText.length) {
            setTimeout(typeAboutYou, 50);
        }
    }

    // Start the typing animation
    typeAboutYou();

});

// slider
const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

//// Next Slide ?
const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

//// prvious Slide /////
const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);
 /// heart btn
let likeButtons = document.querySelectorAll('.heart-btn');

likeButtons.forEach(btn => {
 btn.addEventListener('click', function() {
    if (!this.classList.contains('clicked')) {
      this.classList.add('clicked');
    } else {
      this.classList.remove('clicked');
    }
 });
});

// video
var video = document.getElementById("videoanime");
video.currentTime = 8;
video.play();

let myVideo = document.getElementById('videoanime');
let isPlaying = false;
