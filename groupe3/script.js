let leo = document.getElementById("leo");

leo.addEventListener("mouseover",(e) => {
    console.log("bonjour")
});

let ilyan = document.getElementById("ilyan");

ilyan.addEventListener("mouseover",(e) => {
    console.log("bonjour")
});

let sara = document.getElementById("sara");

sara.addEventListener("mouseover", (e) => {
    // Générer une couleur aléatoire
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    sara.style.backgroundColor = randomColor;
    console.log("Couleur changée :", randomColor);
});

sara.addEventListener("mouseout", (e) => {
    sara.style.backgroundColor = ""; // Remet la couleur d'origine quand la souris sort
});
