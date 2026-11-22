const roles = [
  "AI Engineering",
  "RAG & LLM",
  "AI Chatbot Development",
  "Quality Assurance",
];

const rotator = document.querySelector("[data-rotator]");
if (rotator) {
  let index = 0;
  setInterval(() => {
    index = (index + 1) % roles.length;
    rotator.textContent = roles[index];
  }, 2200);
}

const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved === "dark") root.classList.add("dark");

document.querySelectorAll("[data-theme]").forEach((button) => {
  button.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  });
});

document.querySelectorAll("[data-menu]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.querySelector("[data-menu-panel]");
    const open = panel.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
});

const form = document.querySelector("[data-contact-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = data.get("subject") || "Portfolio message";
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:aneela.hnf12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const note = document.querySelector("[data-form-note]");
    if (note) note.textContent = "Your email app should open with this message.";
  });
}
