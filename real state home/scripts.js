/* ================= MOBILE MENU ================= */
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

if(menuIcon){
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Toggle mobile menu
  });
}

/* ================= PROPERTY FILTER & SEARCH ================= */
const typeFilter = document.getElementById("typeFilter");
const locationInput = document.getElementById("locationInput");

function filterProperties() {
  const type = typeFilter ? typeFilter.value : "all";
  const location = locationInput ? locationInput.value.toLowerCase() : "";
  const cards = document.querySelectorAll('.property-card');

  cards.forEach(card => {
    const cardType = card.dataset.type;
    const cardLocation = card.querySelector("p").innerText.toLowerCase();

    if ((type === "all" || cardType === type) && cardLocation.includes(location)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

if(typeFilter) typeFilter.addEventListener("change", filterProperties);
if(locationInput) locationInput.addEventListener("keyup", filterProperties);

/* ================= WISHLIST FUNCTIONALITY ================= */
const wishlistBtns = document.querySelectorAll(".wishlist-btn");

wishlistBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const propertyName = btn.closest(".property-card").querySelector("h3").innerText;
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if(!wishlist.includes(propertyName)){
      wishlist.push(propertyName);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(propertyName + " added to wishlist!");
    } else {
      alert(propertyName + " is already in wishlist!");
    }
  });
});

/* ================= CONTACT FORM ================= */
const contactForm = document.getElementById("contactForm");

if(contactForm){
  contactForm.addEventListener("submit", function(e){
    e.preventDefault(); // Prevent form from submitting
    alert("Your message has been sent!");
    contactForm.reset(); // Clear form inputs
  });
}

/* ================= BLOG READ MORE ================= */
const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const blogTitle = btn.closest(".blog-card").querySelector("h3").innerText;
    alert("You clicked Read More on: " + blogTitle);
  });
});
