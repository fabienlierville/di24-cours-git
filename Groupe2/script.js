let p1 = document.getElementById("p1");
let contenu = p1.textContent;

p1.addEventListener('mouseover', (e) => {
    console.log("Bonjour : " + contenu)
})