const searchInput = document.getElementById("diagramSearch");

const cards = document.querySelectorAll(".diagram-card");

const filterButtons = document.querySelectorAll(".diagram-category button");

let currentCategory = "all";
function filterDiagrams(){

const searchText = searchInput.value.toLowerCase();

cards.forEach(function(card){

const title = card.querySelector("h3").innerText.toLowerCase();

const description = card.querySelector("p").innerText.toLowerCase();

const category = card.dataset.category;

const searchMatch =

title.includes(searchText) ||

description.includes(searchText);

const categoryMatch =

currentCategory === "all" ||

category === currentCategory;

if(searchMatch && categoryMatch){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}
searchInput.addEventListener("keyup", function(){

filterDiagrams();

});
filterButtons.forEach(function(button){

button.addEventListener("click",function(){

currentCategory = this.dataset.filter;

filterButtons.forEach(function(btn){

btn.classList.remove("active");

});

this.classList.add("active");

filterDiagrams();

});

});
