document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth < 992;
  const viewAllButton = document.querySelector(".featured-products__button");
  const allProducts = [...document.querySelectorAll(".featured-products__item")];
  let currentVisible = 4;
  const chunkSize = 4;

  if (isMobile) {
    allProducts.forEach(el => el.classList.remove("featured-products__item--hidden"));
    if (viewAllButton) viewAllButton.style.display = "none";
    return;
  }

  /**
   * Shows the next chunk of products when the user scrolls to the bottom.
   * @param {number} chunkSize - The number of products to show at a time.
   */
  function showNextProducts() {
    const nextGroup = allProducts.slice(currentVisible, currentVisible + chunkSize);
    nextGroup.forEach(el => {
      el.classList.remove("featured-products__item--hidden");
      el.classList.add("featured-products__item--fade-in");
      setTimeout(() => el.classList.remove("featured-products__item--fade-in"), 500);
    });
    currentVisible += chunkSize;

    if (currentVisible >= allProducts.length) {
      window.removeEventListener("scroll", onScroll);
    }
  }

  /**
   * Listens for the user to scroll to the bottom of the page. When
   * that happens, it shows the next chunk of products.
   * @listens window#scroll
   */
  function onScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.offsetHeight;

    if (scrollY + viewportHeight >= fullHeight - 100) {
      showNextProducts();
    }
  }

  viewAllButton?.addEventListener("click", () => {
    viewAllButton.style.display = "none";
    window.addEventListener("scroll", onScroll);
    showNextProducts();
  });
});
