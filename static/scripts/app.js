document.addEventListener("DOMContentLoaded", function () {
  const heartIcons = document.querySelectorAll(".heart-icon");

  heartIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      const heartIcon = this.querySelector("i");
      const itemContainer = this.closest(".item-container");
      const itemData = {
        image: itemContainer.querySelector("img").src,
        title: itemContainer.querySelector("h3").textContent,
        type: itemContainer.querySelector(".item-type").textContent,
        price: itemContainer.querySelector(".item-price").textContent,
      };

      let likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

      if (heartIcon.classList.contains("red")) {
        heartIcon.classList.remove("red");
        likedItems = likedItems.filter((item) => item.title !== itemData.title);
      } else {
        heartIcon.classList.add("red");
        likedItems.push(itemData);
      }

      localStorage.setItem("likedItems", JSON.stringify(likedItems));
    });
  });

  const item = this.querySelectorAll(".image");
  item.forEach(function (image) {
    image.addEventListener("click", function () {
      window.location.href = "item-info.html";
    });
  });
});

if (window.location.pathname.endsWith("liked-items.html")) {
  document.addEventListener("DOMContentLoaded", function () {
    const likedItemsContainer = document.getElementById(
      "liked-items-container"
    );
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

    if (likedItems.length === 0) {
      likedItemsContainer.innerHTML = `
        <div class="in-progress">
          <h1>You haven't liked any items yet</h1>
          <p>Go back to the <a href="index.html">home page</a> and start liking items!</p>
        </div>
      `;
    } else {
      likedItems.forEach((item) => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        itemContainer.innerHTML = `
        <div class="heart-icon">
          <i class="far fa-heart red"></i>
        </div>
        <div class="image">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="description">
          <h3>${item.title}</h3>
          <p class="item-type">${item.type}</p>
          <p class="item-price">${item.price}</p>
        </div>
      `;

        itemContainer
          .querySelector(".heart-icon")
          .addEventListener("click", function () {
            const heartIcon = this.querySelector("i");
            const title = item.title;

            let likedItems =
              JSON.parse(localStorage.getItem("likedItems")) || [];
            likedItems = likedItems.filter((item) => item.title !== title);
            localStorage.setItem("likedItems", JSON.stringify(likedItems));

            likedItemsContainer.removeChild(itemContainer);
          });

        likedItemsContainer.appendChild(itemContainer);
      });
    }
  });
}
