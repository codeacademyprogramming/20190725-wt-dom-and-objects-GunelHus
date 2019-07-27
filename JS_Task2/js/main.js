"use strict";

document.title = "Task2";
let divHeader = document.createElement("div");
let h4 = document.createElement("h4");
let h1 = document.createElement("h1");
let divPotter = document.createElement("div");
let divHermione = document.createElement("div");
let divHarry = document.createElement("div");
let divRon = document.createElement("div");
let pHarry = document.createElement("p");
let pHermione = document.createElement("p");
let pRon = document.createElement("p");
let imgHarry = document.createElement("img");
let imgHermione = document.createElement("img");
let imgRon = document.createElement("img");
let nameHarry = document.createElement("p");
let nameHermione = document.createElement("p");
let nameRon = document.createElement("p");



document.body.appendChild(divHeader);
divHeader.appendChild(h4);
divHeader.appendChild(h1);
document.body.appendChild(divPotter);
divPotter.appendChild(divHermione);
divPotter.appendChild(divHarry);
divPotter.appendChild(divRon);
divHermione.appendChild(pHermione);
divHermione.appendChild(imgHermione);
divHermione.appendChild(nameHermione);
divHarry.appendChild(pHarry);
divHarry.appendChild(imgHarry);
divHarry.appendChild(nameHarry);
divRon.appendChild(pRon);
divRon.appendChild(imgRon);
divRon.appendChild(nameRon);
divHeader.style.textAlign = "center";
divHeader.style.marginTop = "60px";
h4.style.color = "#B8860B";
h4.style.fontFamily = "helvetica,sans-serif";
h4.fontWeight = "300";
h4.style.fontSize = "15px";
h4.innerHTML = "WHAT PEOPLE SAY";
h1.innerHTML = "Reviews"
h1.style.color = "DarkGray";
h1.style.fontSize = "60px";
h1.style.fontFamily = "Abril Fatface";
h1.style.marginTop = "5px";
h1.style.fontWeight = "700";
divPotter.className = "row";
divPotter.style.paddingTop = "70px";
divPotter.style.textAlign = "center";
divHermione.className = "col-4";
divHermione.style.margin = "0 5%";
pHermione.innerText = "Hermione Jean Granger is a Muggle-born, Gryffindor,who becomes best friends with Harry Potter and Ron Weasley.J.K Rowling has stated that Hermione resembles herself as a young girl, with her insecurity and fear of failure.";
pHermione.style.color = "#696969";
pHermione.style.fontFamily = "'Montserrat', sans-serif";
pHermione.style.fontSize = "15px";
pHermione.style.lineHeight = "1.7";
imgHermione.src = "Img/image1.jpg";
imgHermione.style.width = "100px";
imgHermione.style.borderRadius = "100%";
imgHermione.style.margin = "15px 0";
nameHermione.innerText = "Hermione Granger";
nameHermione.style.color = "#CD853F"
nameHermione.style.fontFamily = "Contrail One";
divHarry.className = "col-4";
divHarry.style.margin = "0 5%";
pHarry.innerText = "According to Rowling, Harry is strongly guided by his own conscience, and has a keen feeling of what is right and wrong.She added Harry is forced to make his own decisions from an early age on.";
pHarry.style.color = "#696969";
pHarry.style.lineHeight = "1.7";
pHarry.style.fontFamily = "'Montserrat', sans-serif";
pHarry.style.fontSize = "15px";
nameHarry.style.fontFamily = "Contrail One";
imgHarry.src = "Img/image2.jpg";
imgHarry.style.width = "100px";
imgHarry.style.borderRadius = "50%";
imgHarry.style.margin =  "15px 0";
nameHarry.innerText = "Harry Potter";
nameHarry.style.color = "#CD853F";
divRon.className = "col-4";
divRon.style.margin = "0 5%";
pRon.innerText = "Rowling in an interview described Ron as very funny but insensitive and immature, saying There's a lot of immaturity about Ron, and that's where a lot of the humor comes from.";
pRon.style.color = "#696969";
pRon.style.lineHeight = "1.7";
pRon.style.fontFamily = "'Montserrat', sans-serif";
pRon.style.fontSize = "15px";
imgRon.src = "Img/ron.jpg";
imgRon.style.width = "100px";
imgRon.style.borderRadius = "50%";
imgRon.style.margin =  "15px 0";
nameRon.innerText = "Ron Weasley";
nameRon.style.color = "#CD853F";
nameRon.style.fontFamily = "Contrail One";











 

