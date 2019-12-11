class Point {
    constructor(x, y) {
        this.x = x;

        this.y = y;
    }

    getX() {

        return this.x;
    }

    setX(x) {

        this.x = x;
    }

    getY() {

        return this.y;
    }

    setY(y) {

        this.y = y;
    }
}

class Line {

    constructor(p1, p2) {

        this.point1 = p1;

        this.point2 = p2;
    }

    getLength() {

        return Math.sqrt(Math.pow((this.point2.x - this.point1.x), 2) + Math.pow((this.point2.y - this.point1.y), 2));
    }

    setPosition(x1, y1, x2, y2) {

        this.point1 = new Point(x1, x2);

        this.point2 = new Point(x2, y2);
    }

    getP1() {

        return this.point1;
    }

    set_p1(point) {

        this.point1 = point;
    }

    get_p2() {

        return this.point2;
    }

    set_p2(point) {

        this.point2 = point;
    }
}

class Circle extends Point {

    constructor(x, y, r) {

        super(x, y);

        this.r = r;
    }

    getRadius() {
        return this.r;
    }

    setR(r) {

        this.r = r;
    }

    getCircumfer() {

        return 2 * Math.PI * this.r;
    }

    getDiameter() {

        return 2 * this.r;
    }

    getS() {

        return Math.PI * Math.pow(this.r, 2);
    }
}

class Rect extends Line {

    constructor(p1, p2, tiltAngle) {

        super(p1, p2);

        this.tiltAngle = tiltAngle;
    }

    getTiltAngle() {

        return tiltAngle;
    }

    setTiltAngle(tiltAngle) {

        this.tiltAngle = tiltAngle;
    }

    getDiagonal() {

        return this.getLength();
    }

    get_LengthSideA() {

        return this.point2.y - this.point1.y;
    }

    get_LengthSideB() {

        return this.point2.x - this.point1.x;
    }

    get_s() {

        return this.get_LengthSideA * this.get_LengthSideB();
    }

    getPerimeter() {

        return (this.get_LengthSideA + this.get_LengthSideB) * 2;
    }
}

class Ellipse extends Point {

    constructor(x, y, r1, r2) {

        super(x, y);

        this.r1 = r1;

        this.r2 = r2;
    }

    getS() {

        return Math.PI * this.r1 * this.r2;
    }
}

console.log("Точка");

let p = new Point(3, 10);

console.log(p.x + ", " + p.y);

p.setY(5);

console.log(p.getY());

console.log("Линия");

let line = new Line(new Point(0, 0), new Point(10, 20));

console.log(line.getLength());

console.log(line.get_p2().y);

console.log("Окружность");

let circle = new Circle(3, 8, 10);

console.log(circle.getCircumfer());

console.log(circle.getDiameter());

circle.setR(15);

console.log(circle.getDiameter());

console.log(circle.getS());

console.log("Прямоугольник");

let rect = new Rect(new Point(0, 0), new Point(10, 5), 0);

console.log(rect.getDiagonal());

console.log(rect.getPerimeter());

console.log(rect.get_LengthSideA() + ", " + rect.get_LengthSideB());

console.log("Эллипс");

let ellipse = new Ellipse(5, 5, 10, 5);

console.log(ellipse.getS());

ellipse.setX(4);
ellipse.setY(4);

console.log(ellipse.getX() + ", " + ellipse.getY());