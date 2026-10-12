const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealItems = document.querySelectorAll("[data-reveal]");

document.querySelectorAll("h1, h2").forEach((heading) => {
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  let index = 0;
  nodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach((word) => {
      if (!word.trim()) return fragment.append(document.createTextNode(word));
      const mask = document.createElement("span");
      const inner = document.createElement("span");
      mask.className = "word-mask";
      inner.className = "word-motion";
      inner.style.setProperty("--word-delay", `${index++ * 65}ms`);
      inner.textContent = word;
      mask.append(inner);
      fragment.append(mask);
    });
    node.replaceWith(fragment);
  });
});

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

const motionTargets = document.querySelectorAll(".hero-visual,.case-image,.motion-ribbon,.hero-mobile-ribbon,.final-cta,.mentor-signature");
const visibleMotion = new Set();
let motionFrame = 0;

function renderMotion() {
  motionFrame = 0;
  if (document.hidden || reducedMotion.matches) return;
  const height = window.innerHeight;
  const positions = [...visibleMotion].map((element) => {
    const rect = element.getBoundingClientRect();
    return [element, Math.max(-1, Math.min(1, (height / 2 - rect.top - rect.height / 2) / height))];
  });
  positions.forEach(([element, position]) => {
    element.style.setProperty("--scroll-shift", `${position * 70}px`);
    element.style.setProperty("--scroll-turn", `${position * 7}deg`);
  });
}

function scheduleMotion() {
  if (!motionFrame && !document.hidden && !reducedMotion.matches) {
    motionFrame = requestAnimationFrame(renderMotion);
  }
}

if ("IntersectionObserver" in window) {
  const motionObserver = new IntersectionObserver((entries) => {
    entries.forEach(({target, isIntersecting}) => {
      target.classList.toggle("motion-active", isIntersecting);
      if (isIntersecting) visibleMotion.add(target);
      else visibleMotion.delete(target);
    });
    scheduleMotion();
  }, {rootMargin: "80px"});
  motionTargets.forEach((element) => motionObserver.observe(element));
}

window.addEventListener("scroll", scheduleMotion, {passive: true});
window.addEventListener("resize", scheduleMotion, {passive: true});
document.addEventListener("visibilitychange", scheduleMotion);
reducedMotion.addEventListener?.("change", () => {
  if (reducedMotion.matches) {
    motionTargets.forEach((element) => {
      element.style.removeProperty("--scroll-shift");
      element.style.removeProperty("--scroll-turn");
    });
  } else scheduleMotion();
});

const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
document.querySelectorAll(".course-card,.review-quote").forEach((card) => {
  let frame = 0;
  card.addEventListener("pointermove", (event) => {
    if (reducedMotion.matches || !finePointer.matches || frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--tilt-x", `${-(event.clientY - bounds.top - bounds.height / 2) / bounds.height * 7}deg`);
      card.style.setProperty("--tilt-y", `${(event.clientX - bounds.left - bounds.width / 2) / bounds.width * 7}deg`);
    });
  });
  card.addEventListener("pointerleave", () => {
    cancelAnimationFrame(frame);
    frame = 0;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  });
});
