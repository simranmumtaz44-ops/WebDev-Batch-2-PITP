// ================= CLASSES DATA (ARRAY OF OBJECTS) =================
const classesData = [
  {
    name: "Yoga Flow",
    category: "Flexibility",
    time: "Mon - Wed - Fri | 8:00 AM",
    description: "Improve flexibility, posture, and mental relaxation."
  },
  {
    name: "HIIT Training",
    category: "Cardio",
    time: "Tue - Thu | 7:00 PM",
    description: "High intensity interval training for fat burning."
  },
  {
    name: "Zumba Dance",
    category: "Cardio",
    time: "Sat | 6:00 PM",
    description: "Fun dance workout to improve stamina and mood."
  },
  {
    name: "Strength Builder",
    category: "Strength",
    time: "Mon - Thu | 6:00 PM",
    description: "Focused on muscle growth and strength."
  },
  {
    name: "Boxing Fitness",
    category: "Strength",
    time: "Wed - Fri | 7:30 PM",
    description: "Build power, endurance, and confidence."
  },
  {
    name: "Pilates Core",
    category: "Flexibility",
    time: "Sun | 10:00 AM",
    description: "Strengthen core muscles and improve balance."
  }
];

// ================= DOM ELEMENTS =================
const classesContainer = document.getElementById("classesContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

// ================= DISPLAY CLASSES FUNCTION =================
function displayClasses(data) {
  classesContainer.innerHTML = "";

  if (data.length === 0) {
    classesContainer.innerHTML = `<p class="text-center">No classes found.</p>`;
    return;
  }

  data.forEach(item => {
    classesContainer.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 p-3">
          <h5>${item.name}</h5>
          <p><strong>Category:</strong> ${item.category}</p>
          <p><strong>Time:</strong> ${item.time}</p>
          <p>${item.description}</p>
        </div>
      </div>
    `;
  });
}

// ================= INITIAL LOAD =================
if (classesContainer) {
  displayClasses(classesData);
}

// ================= SEARCH LOGIC =================
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = classesData.filter(item =>
      item.name.toLowerCase().includes(value)
    );

    displayClasses(filtered);
  });
}

// ================= FILTER BUTTON LOGIC =================
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    if (category === "All") {
      displayClasses(classesData);
    } else {
      const filtered = classesData.filter(item => item.category === category);
      displayClasses(filtered);
    }
  });
});
// ================= CONTACT FORM VALIDATION =================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const goal = document.getElementById("goal").value;
    const msgBox = document.getElementById("formMessage");

    if (name === "" || email === "" || phone === "" || goal === "") {
      msgBox.innerHTML =
        `<div class="alert alert-danger">Please fill all required fields.</div>`;
    } else {
      msgBox.innerHTML =
        `<div class="alert alert-success">Inquiry Sent Successfully!</div>`;
      contactForm.reset();
    }
  });
}

