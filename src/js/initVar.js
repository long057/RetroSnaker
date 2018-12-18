
// 定义广场的系数
var XLEN = 30;
var YLEN = 30;

// 定义广场的位置
var BASE_X_POINT = 200;
var BASE_Y_POINT = 100;

// 方块的宽高
var SQUAREWIDTH = 20;

// 定义基类
function Square(x, y, width, height, viewContent) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.viewContent = viewContent || document.createElement('div');
}

// 定义子类
var Ground = tool.single(Square);

var Floor = tool.extends(Square);

var Food = tool.single(Square);
Food.prototype.update = function (x, y) {
    this.x = x;
    this.y = y;
    this.viewContent.style.left = x * SQUAREWIDTH + 'px';
    this.viewContent.style.top = y * SQUAREWIDTH + 'px';
}

var Stone =  tool.extends(Square);

var Snake = tool.single();

var SnakeHead = tool.single(Square);
SnakeHead.prototype.update = function (x, y) {
    this.x = x;
    this.y = y;
    this.viewContent.style.left = x * SQUAREWIDTH + 'px';
    this.viewContent.style.top = y * SQUAREWIDTH + 'px';
}

var SnakeBody = tool.extends(Square);

var Game = tool.single(Square);

// 每个方块上都有一个被碰触后的状态
var STRATEGESNUM = {
    die: 'DIE',
    eat: 'EAT',
    move: 'MOVE'
}
