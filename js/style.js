const headerEl = document.getElementById("header")
const mS = document.getElementById("ModelS")
const m3 = document.getElementById("Model3")
const mX = document.getElementById("ModelX")
const mY = document.getElementById("ModelY")
const sixtyEl = document.getElementById("60mph")
const topSpeedEl = document.getElementById("topSpeed")
const maxRangeEl = document.getElementById("maxRange")
const modelEl = document.getElementById("model")

mS.onclick = function(){
    headerEl.style.backgroundImage = "url(../img/imagem-1.jpg)"
    sixtyEl.innerHTML = "1.99s"
    topSpeedEl.innerHTML = "200mph"
    maxRangeEl.innerHTML = "396 mi"
    modelEl.innerHTML = "Model S"
}

m3.onclick = function(){
    headerEl.style.backgroundImage = "url(../img/imagem-2.jpg)"
    sixtyEl.innerHTML = "3.10s"
    topSpeedEl.innerHTML = "162mph"
    maxRangeEl.innerHTML = "358 mi"
    modelEl.innerHTML = "Model 3"
}

mX.onclick = function(){
    headerEl.style.backgroundImage = "url(../img/imagem-3.jpg)"
    sixtyEl.innerHTML = "2.50s"
    topSpeedEl.innerHTML = "155mph"
    maxRangeEl.innerHTML = "333 mi"
    modelEl.innerHTML = "Model X"
}

mY.onclick = function(){
    headerEl.style.backgroundImage = "url(../img/imagem-4.jpg)"
    sixtyEl.innerHTML = "4.79s"
    topSpeedEl.innerHTML = "135mph"
    maxRangeEl.innerHTML = "330 mi"
    modelEl.innerHTML = "Model Y"
}
