const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");
const reveals = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

reveals.forEach((section) => observer.observe(section));

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const submitBtn = contactForm.querySelector("button[type='submit']");
  if (!submitBtn) return;

  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sent!";
  submitBtn.setAttribute("disabled", "true");

  setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.removeAttribute("disabled");
    contactForm.reset();
  }, 1400);
});
