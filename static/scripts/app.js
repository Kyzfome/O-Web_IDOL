document.addEventListener("DOMContentLoaded", function () {
  const heartIcons = document.querySelectorAll(".heart-icon");

  heartIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      const heartIcon = this.querySelector("i");

      if (heartIcon.classList.contains("red")) {
        heartIcon.classList.remove("red");
      } else {
        heartIcon.classList.add("red");
      }
    });
  });
});
