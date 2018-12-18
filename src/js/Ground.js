
var ground = new Ground(BASE_X_POINT, BASE_Y_POINT, XLEN * SQUAREWIDTH, YLEN * SQUAREWIDTH);

ground.init = function () {
    // 渲染广场
    this.viewContent.style.position = 'absolute';
    this.viewContent.style.left = this.x + 'px';
    this.viewContent.style.top = this.y + 'px';
    this.viewContent.style.width = this.width + 'px';
    this.viewContent.style.height = this.height + 'px';
    this.viewContent.style.backgroundColor = '#0ff';
    document.body.appendChild(this.viewContent);

    // 渲染地板和墙壁
    this.squareTable = [];

    for(var i = 0; i < YLEN; i ++) {
        this.squareTable[i] = new Array(XLEN);
        for(var j = 0; j < XLEN; j ++) {
            if(j == 0 || i == 0 || i == YLEN - 1 || j == XLEN - 1) {
                // 创建墙壁
                var newSquare = SquareFactory.create('Stone', j, i, 'black');
            } else {
                // 创建地板
                var newSquare = SquareFactory.create('Floor', j, i, 'orange');
            }
            this.squareTable[i][j] = newSquare;
            this.viewContent.appendChild(newSquare.viewContent);
        }
    }
}

ground.remove = function (x, y) {
    ground.viewContent.removeChild(ground.squareTable[y][x].viewContent);
    ground.squareTable[y][x] = null;
}

ground.append = function (square) {
    ground.viewContent.appendChild(square.viewContent);
    ground.squareTable[square.y][square.x] = square;
}



