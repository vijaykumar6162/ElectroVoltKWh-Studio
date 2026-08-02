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
