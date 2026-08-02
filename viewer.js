const image = document.getElementById("viewerImage");

const params = new URLSearchParams(window.location.search);

const src = params.get("img");

image.src = src;

let zoom = 1;

function zoomIn(){

zoom += 0.2;

image.style.transform = `scale(${zoom})`;

}

function zoomOut(){

if(zoom>0.4){

zoom -= 0.2;

image.style.transform = `scale(${zoom})`;

}

}

function downloadImage(){

const a=document.createElement("a");

a.href=image.src;

a.download="diagram";

a.click();

}

function goBack(){

history.back();

}
