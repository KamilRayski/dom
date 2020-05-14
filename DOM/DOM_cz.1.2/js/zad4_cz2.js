// Część tagu article z klasą first ma żółte tło
const artykulfirst = document.querySelector("article.first");
artykulfirst.style.backgroundColor = "yellow" 
console.log(artykulfirst);
// Konsola wypisze ile jest znaczników H1
const h1= artykulfirst.getElementsByTagName("H1");
console.log("Mamy tyle H1 w naszym tagu "+h1.length);