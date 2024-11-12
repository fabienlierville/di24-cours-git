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
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor; // Appliquer la couleur au fond de la page entière
    console.log("Couleur de fond changée :", randomColor);
});

