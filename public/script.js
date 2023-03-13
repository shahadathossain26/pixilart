var canvas = document.querySelector("canvas");
var toolbtns = document.querySelectorAll(".tool");
var fillColor = document.querySelector("#fill-color");
var sizeSlider = document.querySelector("#size-slider");
var colorBtns = document.querySelectorAll(".colors .option");
var colorPicker = document.querySelector("#color-picker");
console.log(colorPicker);
var ctx = canvas.getContext("2d");



isDrawing = false;
brushWidth = 5;
selectedTool = 'brush';
var prevMouseX, prevMouseY, snapshot;
selectedColor = "#000"

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

var startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);

}

var drawRectangle = (e) => {
    if (!fillColor.checked) {
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);

}

var drawCircle = (e) => {
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2))
    ctx.arc(prevMouseX, prevMouseY, radius, 50, 0, 2 * Math.PI);
    fillColor.checked ? ctx.fill() : ctx.stroke();

}

var drawTriangle = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    fillColor.checked ? ctx.fill() : ctx.stroke();


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
    else if (selectedTool === 'circle') {
        drawCircle(e);
    }
    else {
        drawTriangle(e)
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

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
    })
})


canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", () => isDrawing = false);
sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value);

colorPicker.addEventListener("change", () => {
    colorPicker.parentElement.style.background = colorPicker.value;
    colorPicker.parentElement.click();
})