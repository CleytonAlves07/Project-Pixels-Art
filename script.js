let colorBlocks = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');
let buttonClear = document.getElementById('clear-board');
let inputValue = document.getElementById('board-size');
let buttonVqv = document.getElementById('generate-board');

window.onload = blackBlock();
window.onload = otherBlocks();
window.onload = pixelsFrame();

//Black block fixed!
function blackBlock(){
let bloco1 = document.createElement('div');
bloco1.className = 'color black selected';
colorBlocks.appendChild(bloco1);
}
//Other 3 blocks
function otherBlocks(){
    for(let i = 0; i < 3; i += 1){
        let blocks = document.createElement('div');
        blocks.className = 'color blocos';
        blocks.style.backgroundColor = colorGenerate();
        colorBlocks.appendChild(blocks);
    }
}
//Genarate random colors
function colorGenerate() {
    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
// Pixels frame
function pixelsFrame(){
    for(let i = 0; i < 25; i += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelBoard.appendChild(pixel);
    }
}
//Add and remove class selected
//Consultei o repositório de Allan Carvalho para fazer esse item de uma forma mais dinâmica
//https://github.com/tryber/sd-019-c-project-pixels-art/pull/5
let colorSelected = 'rgba(0, 0, 0, 1)';
function addSelected(blockSelected){
    let blockChild = colorBlocks.children
    for(let i = 0; i<blockChild.length; i += 1){
        if(blockChild[i].classList.contains('selected') && blockChild[i] !== blockSelected.target){
            blockChild[i].classList.remove('selected')
        }else {
            blockSelected.target.classList.add('selected')  
        }
    }
    colorSelected = getComputedStyle(blockSelected.target).backgroundColor
}
colorBlocks.addEventListener('click', addSelected);
//pint black 
function pintBlocks(pint){
    pint.target.style.backgroundColor = colorSelected;
}
pixelBoard.addEventListener('click', pintBlocks);
//Clear frame pixels
let colorWhite = 'rgba(255, 255, 255, 1)';
function clearFrame(){
    let pixelsChild = pixelBoard.children
    for(let i = 0; i<pixelsChild.length; i += 1){
    pixelsChild[i].style.backgroundColor = colorWhite; 
    }
}
buttonClear.addEventListener('click', clearFrame);
//Board invalid
function testInvalid(){
    if(inputValue.value < 0 || inputValue.value === ''){
        alert('Board inválido!');
    }
}
buttonVqv.addEventListener('click', testInvalid);
// Size board
function sizeBoard(){
    if(inputValue.value < 5){
        inputValue.value = 5;
    }else if(inputValue.value > 50){
        inputValue.value = 50;
    }
    let size = inputValue.value*inputValue.value;
    for(let i = 0; i < size-25; i += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelBoard.appendChild(pixel);
    }
}
buttonVqv.addEventListener('click', sizeBoard);
