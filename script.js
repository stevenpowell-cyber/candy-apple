// Switch between the three website pages.
const tabButtons = document.querySelectorAll(".tab-button");
const pages = document.querySelectorAll(".page");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPage = button.dataset.page;

    pages.forEach((page) => {
      const isSelected = page.id === selectedPage;
      page.hidden = !isSelected;
      page.classList.toggle("active", isSelected);
    });

    tabButtons.forEach((tab) => {
      const isSelected = tab === button;
      tab.classList.toggle("active", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
    });
  });
});