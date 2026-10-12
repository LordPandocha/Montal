const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  root.classList.add("has-motion");
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

  revealItems.forEach((item, index) => {
    item.style.setProperty("--delay", `${(index % 3) * 75}ms`);
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

reducedMotion.addEventListener?.("change", (event) => {
  if (event.matches) revealItems.forEach((item) => item.classList.add("is-visible"));
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Открыть меню");
  navigation?.classList.remove("is-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Открыть меню" : "Закрыть меню");
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("visibilitychange", () => {
  root.classList.toggle("document-hidden", document.hidden);
});

const progressBar = document.querySelector(".page-progress");
let progressScheduled = false;

function updateProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  progressBar?.style.setProperty("transform", `scaleX(${Math.min(1, Math.max(0, progress))})`);
  progressScheduled = false;
}

window.addEventListener("scroll", () => {
  if (!progressScheduled) {
    progressScheduled = true;
    window.requestAnimationFrame(updateProgress);
  }
}, { passive: true });

updateProgress();
