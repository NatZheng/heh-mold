const menuToggle = document.querySelector(".menu-toggle");
const menuModal = document.querySelector(".menu-modal");
const menuBackdrop = document.querySelector(".menu-backdrop");
const menuClose = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".menu-panel a");

function setMenu(open) {
  if (!menuToggle || !menuModal) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuModal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("menu-open", open);
}

menuToggle?.addEventListener("click", () => setMenu(true));
menuBackdrop?.addEventListener("click", () => setMenu(false));
menuClose?.addEventListener("click", () => setMenu(false));
menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});
