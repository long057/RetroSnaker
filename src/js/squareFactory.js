
function SquareFactory () {

}
SquareFactory.prototype.init = function (square, color, message) {
    square.viewContent.style.position = 'absolute';
    square.viewContent.style.left = square.x * square.width + 'px';
    square.viewContent.style.top = square.y * square.width + 'px';
    square.viewContent.style.width = square.width + 'px';
    square.viewContent.style.height = square.height + 'px';
    square.viewContent.style.backgroundColor = color;
    square.touch = function () {
        return message;
    }
}


SquareFactory.create = function (type, x, y, color) {
    if(!SquareFactory.prototype[type]) {
        throw 'not a type';
    }
    if(SquareFactory.prototype[type].prototype.__proto__ !== SquareFactory.prototype) {
        tool.inherit(SquareFactory.prototype[type], SquareFactory);
    }
    var newSquare = new SquareFactory.prototype[type](x, y, color);

    return newSquare;
}

SquareFactory.prototype.Floor = function (x, y, color) {
    var floor = new Floor(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(floor, color, STRATEGESNUM.move);
    return floor;
}


SquareFactory.prototype.Stone = function (x, y, color) {
    var stone = new Stone(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(stone, color, STRATEGESNUM.die);
    return stone;
}

SquareFactory.prototype.Food = function (x, y, color) {
    var food = new Food(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(food, color, STRATEGESNUM.eat);
    food.update(x, y);
    return food;
}

SquareFactory.prototype.SnakeHead = function (x, y, color) {
    var snakeH = new SnakeHead(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(snakeH, color, STRATEGESNUM.die);
    snakeH.update(x, y);
    return snakeH;
}

SquareFactory.prototype.SnakeBody = function (x, y, color) {
    var snakeB = new SnakeBody(x, y, SQUAREWIDTH, SQUAREWIDTH);
    this.init(snakeB, color, STRATEGESNUM.die);
    return snakeB;
}