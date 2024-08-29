let gridWidth, gridHeight;
let matrixCanvas, scrollOffset;
let charsPerFrame;
let charWidth, charHeight;

function setup() {
    pixelDensity(1);
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 1, 1, 1);
    initializeMatrix();
}

function initializeMatrix() {
    charWidth = 20; // Increase the character width for a better effect
    charHeight = charWidth * 1.5;
    gridWidth = floor(width / charWidth) + 1;
    gridHeight = floor(height / charHeight) + 1;
    charsPerFrame = gridWidth * gridHeight * 0.025;
    matrixCanvas = createGraphics(gridWidth * charWidth, gridHeight * charHeight);
    matrixCanvas.colorMode(HSB, 1, 1, 1);
    matrixCanvas.textAlign(LEFT, TOP);
    matrixCanvas.background(0);
    matrixCanvas.textSize(charHeight);
    scrollOffset = 0;
}

function draw() {
    background(0);
    scrollOffset += 1;
    matrixCanvas.noStroke();

    for (let i = 0; i < charsPerFrame; i++) {
        let x = floor(random(gridWidth));
        let y = floor(random(gridHeight));
        matrixCanvas.fill(0);
        matrixCanvas.rect(x * charWidth, y * charHeight, charWidth, charHeight);
        matrixCanvas.fill(0.33, 1, random(0.5, 1));
        matrixCanvas.text(floor(random(2)), x * charWidth, y * charHeight);
    }

    for (let i = 0; i < height; i++) {
        let lineOffset = i;
        image(matrixCanvas, -lineOffset / 2, i, width + lineOffset, 1, 0, (i + scrollOffset) % (gridHeight * charHeight), gridWidth * charWidth, 1);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    initializeMatrix();
}
