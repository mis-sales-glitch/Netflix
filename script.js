const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
});

function validateEmail(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  const value = input.value.trim();

  if (!value) {
    error.textContent = "Email is required.";
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }

  error.textContent = "";
  return true;
}

function attachFormValidation(formId, inputId, errorId) {
  const form = document.getElementById(formId);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateEmail(inputId, errorId)) {
      alert("Great! This is a front-end demo. Connect this form to your backend to continue.");
      form.reset();
    }
  });
}

attachFormValidation("hero-email-form", "hero-email", "hero-email-error");
attachFormValidation("faq-email-form", "faq-email", "faq-email-error");

const faqItems = [...document.querySelectorAll(".faq-item")];

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const panel = item.nextElementSibling;
    const expanded = item.getAttribute("aria-expanded") === "true";

    faqItems.forEach((faqButton) => {
      faqButton.setAttribute("aria-expanded", "false");
      faqButton.lastElementChild.textContent = "+";
      faqButton.nextElementSibling.classList.remove("open");
    });

    if (!expanded) {
      item.setAttribute("aria-expanded", "true");
      item.lastElementChild.textContent = "×";
      panel.classList.add("open");
    }
  });
});
