const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

  // Define scrollAmount variable outside the event listener
  let scrollAmount = 325; // Adjust this value based on your image width
  
  // Slide images according to the button clicks
  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slider" ? -1 : 1; // Fixed typo in button id
      // Corrected typo and method name, and added 'px' unit
      imageList.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    });
  });
};

window.addEventListener("load", initSlider); 