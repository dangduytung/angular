class Point {

    constructor(private _x: number, private _y: number) {
        this._x = _x;
        this._y = _y;
    }

    drawPoint(){
        console.log(`Draw a point at X: ${this._x} and Y: ${this._y}`);
    }

    get x() {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }
}

let point: Point = new Point(1, 2);
point.x = 3;
point.drawPoint();