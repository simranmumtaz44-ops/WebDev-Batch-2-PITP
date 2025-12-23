document.addEventListener("DOMContentLoaded", () => {

  /* ACCORDION */
  document.querySelectorAll(".accordion").forEach(btn => {
    btn.addEventListener("click", function () {
      const panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* MODAL */
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.getElementById("closeBooking");

  document.querySelectorAll(".bookBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});


