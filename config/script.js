document.querySelector("#dark-mode").addEventListener("click", () => {
    const e = document.querySelector("#dark-mode");
    e.classList.remove("bi bi-moon fs-5");
    e.classList.add("bi bi-sun-fill fs-5");
});

function changedarkmode() {
  e.classList.remove("bi bi-sun-fill fs-5"); // Remove the original class
  e.classList.add("bi bi-moon fs-5"); // Add the new class
}
