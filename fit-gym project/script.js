// ================= CLASSES FILTER FUNCTION =================
function filterClasses(category) {

  // Select all class cards
  const classes = document.querySelectorAll(".class-card");

  classes.forEach(function(card) {

    // Show all classes
    if (category === "all") {
      card.style.display = "block";
    }

    // Show selected category only
    else if (card.classList.contains(category)) {
      card.style.display = "block";
    }

    // Hide others
    else {
      card.style.display = "none";
    }

  });
}

