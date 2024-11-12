let p1 = document.getElementById("p1");

p1.addEventListener('mouseover', (e) => {});
=======
let p1 = document.getElementById("p1");

p1.addEventListener('mouseover', (e) => {
  console.log("Bonjour");
});


let lucas = document.getElementById("lucas");

lucas.addEventListener('mouseover', (e) => (
    console.log("Bonjour", lucas)
));