var tool = {
    inherit: function (target, origin) {
        // 圣杯继承模式 -- 继承原型上的方法和属性
        var temp = function () {};
        temp.prototype = origin.prototype;
        target.prototype = new temp();
        target.prototype.constructor = target;
    },
    extends: function (origin) {
        // 使用原型构造函数实例中的方法和属性
        var result = function () {
            origin.apply(this, arguments);
        }
        this.inherit(result, origin);
        return result;
    },
    single: function (origin) {
        // 单例模式
        var single = (function () {
            var instance;
            return function () {
                if(typeof instance != 'object') {
                    origin && origin.apply(this, arguments);
                    instance = this;
                }
                return instance;
            }
        })()
        origin && this.inherit(single, origin);
        return single;
    }
}

function Square(x, y, width, height, viewContent) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.viewContent = viewContent || document.createElement('div');
}

