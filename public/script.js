var canvas = document.querySelector("canvas");
var toolbtns = document.querySelectorAll(".tool");
var fillColor = document.querySelector("#fill-color");
var ctx = canvas.getContext("2d");



isDrawing = false;
brushWidth = 5;
selectedTool = 'brush';
var prevMouseX, prevMouseY, snapshot;

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

drawRectangle = (e) => {
    if (!fillColor.checked) {
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);

}

drawing = (e) => {
    if (!isDrawing) return;
    ctx.putImageData(snapshot, 0, 0)
    if (selectedTool === 'brush') {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
    else if (selectedTool === 'rectangle') {
        drawRectangle(e);
    }
}

toolbtns.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    })
})


canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", () => isDrawing = false);