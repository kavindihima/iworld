 
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

 // Simulate dynamic page switching
const pageDropdown = document.getElementById("page-dropdown");

pageDropdown.addEventListener("change", function () {
  const selectedPage = pageDropdown.value;
  alert(`You selected Page ${selectedPage}`);
  // Add logic to load new products dynamically based on the selected page
});
