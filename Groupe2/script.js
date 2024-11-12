let p1 = document.getElementById("p1");
let contenu = p1.textContent;

p1.addEventListener('mouseover', (e) => {
    console.log("Bonjour : " + contenu)
})

let p2 = document.getElementById("p2");
let contenu2 = p2.textContent;
p2.addEventListener('mouseover', (e) => {
    console.log("Bonjour : " + contenu2)
})

let p3 = document.getElementById("p3");
let contenu3 = p3.textContent;
p2.addEventListener('mouseover', (e) => {
    console.log("Bonjour : " + contenu3)
})