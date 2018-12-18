

function createFood (ground) {
    var x = null;
    var y = null;
    var flag = true;
    while(flag) {
        x = 1 + parseInt(Math.random() * 28);
        y = 1 + parseInt(Math.random() * 28);
        var ok = true;
        for(var node = snake.head; node; node = node.next) {
            if(x == node.x && y == node.y) {
                ok = false;
                break;
            }
        }
        if(ok) {
            flag = false;
        }
    }
    var food = SquareFactory.create('Food', x, y, 'green');
    ground.remove(x, y);
    ground.append(food);
}