 
 let navbar = document.querySelector('.navbar'); 
 document.querySelector('#menu_btn').onclick = () => {
   navbar.classList.toggle('active'); // Toggle navbar class

 };
 document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && event.target.id !== 'menu_btn') {
        navbar.classList.remove('active'); // Remove the active class
    }
});


 
 // Correct the search button logic
 let searchfrom = document.querySelector('.search-form'); // Select search form
 document.querySelector('#search_btn').onclick = () => {
   searchfrom.classList.toggle('active'); // Toggle search form class
 };
 
console.log(navbar);       // Should log the .navbar element
console.log(searchfrom);   // Should log the .search-from element
document.addEventListener("DOMContentLoaded", function() {
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');
  const imagesContainer = document.querySelector('.images-container');
  const images = document.querySelectorAll('.carousel-image');
  let index = 0;

  // Show the image at the current index
  function showImage() {
      const totalImages = images.length;
      imagesContainer.style.transform = `translateX(-${index * 100}%)`; // Slide the images
  }

  // Go to the previous image
  prevArrow.addEventListener('click', () => {
      index = (index === 0) ? images.length - 1 : index - 1;
      showImage();
  });

  // Go to the next image
  nextArrow.addEventListener('click', () => {
      index = (index === images.length - 1) ? 0 : index + 1;
      showImage();
  });

  // Initialize the first image
  showImage();
});
