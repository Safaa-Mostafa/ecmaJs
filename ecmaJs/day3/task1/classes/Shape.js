export class Shape {
    constructor(n) {
        this.name = n;
        if (this.constructor == Shape) {
            throw "this is abstract";
        }
    }
    calcArea() {
        
    }
    parameter() {

    }
    toString() {

    }
}