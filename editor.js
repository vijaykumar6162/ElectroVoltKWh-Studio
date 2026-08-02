const components = document.querySelectorAll(".component");

const canvas = document.getElementById("canvas");

let selectedText = "";

components.forEach(component => {

    component.addEventListener("dragstart", () => {

        selectedText = component.innerText;

    });

});

canvas.addEventListener("dragover", (e) => {

    e.preventDefault();

});

canvas.addEventListener("drop", (e) => {

    e.preventDefault();

    const item = document.createElement("div");

    item.className = "canvas-item";

    item.innerText = selectedText;

    item.style.left = e.offsetX + "px";

    item.style.top = e.offsetY + "px";

    canvas.appendChild(item);

    makeDraggable(item);

});
function makeDraggable(element){

let isDragging = false;

let offsetX = 0;

let offsetY = 0;

element.addEventListener("mousedown",(e)=>{

isDragging = true;

offsetX = e.offsetX;

offsetY = e.offsetY;

});

document.addEventListener("mousemove",(e)=>{

if(!isDragging) return;

const rect = canvas.getBoundingClientRect();

element.style.left = (e.clientX - rect.left - offsetX) + "px";

element.style.top = (e.clientY - rect.top - offsetY) + "px";

});

document.addEventListener("mouseup",()=>{

isDragging = false;

});

}
