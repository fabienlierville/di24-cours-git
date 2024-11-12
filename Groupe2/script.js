let p1 = document.getElementById("p1");
let contenu = p1.textContent;
p1.addEventListener('mouseover', (e) => {
    console.log("Bonjour : " + contenu)
})
let p3 = document.getElementById("p3");

p3.addEventListener('mouseover', (e) =>{
    console.log('Bonjour');
})

let p2= document.getElementById("p2");
let contenu = p2.textContent;
p2.addEventListener('mouseover', (e) => {
    console.log("Bonjour : " + contenu)
})