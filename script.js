console.log("Portfolio chargé avec succès");

const btn = document.getElementById("darkMode");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
