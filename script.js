const stars = document.querySelectorAll(".rating_stars");

document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("rating_stars")) {
    let clicktargetReached = false;
    for (const star of stars) {
      star.classList[clicktargetReached ? "remove" : "add"]("selected");
      if (star === evt.target) {
        clicktargetReached = true;
      }
    }
    demo.textContent = evt.target.dataset.rating;
  }
});


// hello