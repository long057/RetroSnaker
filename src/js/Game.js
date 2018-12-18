var game = new Game();

game.score = 0;
game.timer = null;
game.iSpeedInterval = 400;

game.init = function () {
    // 创建地板
    ground.init();
    // 创建蛇
    snake.init(ground);

    game.start();

    createFood(ground);

    // 绑定键盘事件
    document.onkeydown = function (e) {
        if(e.which == 37 && snake.direction !== DIRECTIONNUM.RIGHT) {
            snake.direction = DIRECTIONNUM.LEFT;
        } else if(e.which == 38 && snake.direction !== DIRECTIONNUM.DOWN) {
            snake.direction = DIRECTIONNUM.UP;
        } else if(e.which === 39 && snake.direction !== DIRECTIONNUM.LEFT) {
            snake.direction = DIRECTIONNUM.RIGHT;
        } else if(e.which == 40 && snake.direction !== DIRECTIONNUM.UP) {
            snake.direction = DIRECTIONNUM.DOWN;
        }
    }
    // 创建食物
}
game.start = function () {
    clearInterval(game.timer);
    game.timer = setInterval(function () {
        snake.move(ground);
    }, game.iSpeedInterval)
}

game.over = function () {
    clearInterval(game.timer);
    alert('得分：' + game.score);
}

game.init();
// game.start();