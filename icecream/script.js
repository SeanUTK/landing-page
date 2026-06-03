const header = document.querySelector("[data-header]");
const toast = document.querySelector("[data-toast-box]");
const toastButton = document.querySelector("[data-toast]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

toastButton.addEventListener("click", () => {
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
});
