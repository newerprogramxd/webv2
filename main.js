document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 300);
  });
});

const sections = document.querySelectorAll("section");
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

const inicio = document.querySelector("#inicio p");
const mensajes = [
  "checa mis proyectos bien piteros xd",
  "alguien realmente esta leyendo?",
  "bienvenido we"
];
let i = 0;

setInterval(() => {
  inicio.textContent = mensajes[i];
  i = (i + 1) % mensajes.length;
}, 4000);
