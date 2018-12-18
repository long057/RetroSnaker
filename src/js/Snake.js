
var snake = new Snake();

snake.head = null;
snake.tail = null;

// 方向枚举
var DIRECTIONNUM = {
    LEFT: {
        x: -1,
        y: 0
    },
    RIGHT: {
        x: 1,
        y: 0
    },
    UP: {
        x: 0,
        y: -1
    },
    DOWN: {
        x: 0,
        y: 1
    }
}

snake.strategies = {
    'MOVE': function (snake, square, ground, flag) {
        // 创建新的蛇身
        var newBody = SquareFactory.create('SnakeBody', snake.head.x, snake.head.y, 'blue');
        newBody.next = snake.head.next;
        newBody.last = null;
        newBody.next.last = newBody;
        // 创建新的蛇头
        var newHead = SquareFactory.create('SnakeHead', square.x, square.y, 'red');
        newHead.next = newBody;
        newBody.last = newHead;
        newHead.last = null;
        snake.head = newHead;
        // 添加到地板中
        ground.remove(newBody.x, newBody.y);
        ground.append(newBody);
        ground.remove(newHead.x, newHead.y);
        ground.append(newHead);
        // 判断是否需要添加尾巴
        if(!flag) {
            var newFloor = SquareFactory.create('Floor', snake.tail.x, snake.tail.y, 'orange');
            ground.remove(snake.tail.x, snake.tail.y);
            ground.append(newFloor);
            snake.tail = snake.tail.last;
        }
    },
    'EAT': function (snake, square, ground) {
        snake.strategies['MOVE'](snake, square, ground, true)
        game.score ++;
        createFood(ground);
    },
    'DIE': function () {
        game.over();
    }
}

snake.init = function (ground) {
    // 创造蛇头 蛇身
    var snakeHead = SquareFactory.create('SnakeHead', 3, 1, 'red');
    var snakeBody1 = SquareFactory.create('SnakeBody', 2, 1, 'blue');
    var snakeBody2 = SquareFactory.create('SnakeBody', 1, 1, 'blue');
    // 创建联系
    snakeHead.next = snakeBody1;
    snakeHead.last = null;
    snakeBody1.next = snakeBody2;
    snakeBody1.last = snakeHead;
    snakeBody2.next = null;
    snakeBody2.last = snakeBody1;

    snake.head = snakeHead;
    snake.tail = snakeBody2;
    // 默认方向
    snake.direction = DIRECTIONNUM.RIGHT;

    // 抹去地板，视觉创建蛇
    ground.remove(snakeHead.x, snakeHead.y);
    ground.append(snakeHead);
    ground.remove(snakeBody1.x, snakeBody1.y);
    ground.append(snakeBody1);
    ground.remove(snakeBody2.x, snakeBody2.y);
    ground.append(snakeBody2);
}

snake.move = function (ground) {

    // 蛇头的下一个方块坐标 snake.head.x + snake.direction snake.head.y + sanke.direction
    var square = ground.squareTable[snake.head.y + snake.direction.y][snake.head.x + snake.direction.x];
    // console.log(snake.strategies[square.touch])
    if(typeof snake.strategies[square.touch()] == 'function') {

        snake.strategies[square.touch()](this, square, ground);
    }
}

