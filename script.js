const place = prompt("Де ти живеш?");
console.log(place);
const paragr = document.createElement("p");
paragr.textContent = place;
document.body.appendChild(paragr);
document.querySelector("p").style.color = "red";



 
