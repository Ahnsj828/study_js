window.onload = function () {
  const sliderContainer = document.querySelector(".slider-container");
  const sliderWrapper = sliderContainer.querySelector(".slider-wrapper");
  const slides = sliderWrapper.querySelectorAll("li");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;
  sliderWrapper.style.width = `${slideWidth * slides.length}px`;

  function moveSlide(direction) {
    if (direction === "next" && currentIndex < slides.length - 1) {
      currentIndex++;
    } else if (direction === "prev" && currentIndex > 0) {
      currentIndex--;
    }
    sliderWrapper.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }

  nextButton.addEventListener("click", function (e) {
    e.preventDefault();
    moveSlide("next");
  });

  prevButton.addEventListener("click", function (e) {
    e.preventDefault();
    moveSlide("prev");
  });
};
