let colorBlocks = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');

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

blackBlock();
otherBlocks();
pixelsFrame();
