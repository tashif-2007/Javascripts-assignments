const hover = document.querySelector('#trigger');

hover.onmouseover = () =>{
    document.getElementById('target').src = "img/picB.jpg"
}

hover.onmouseleave = () =>{
    document.getElementById('target').src = "img/picA.jpg"
}