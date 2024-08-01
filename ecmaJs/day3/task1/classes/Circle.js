import {
    Shape
} from "./Shape.js";
export class circle extends Shape {
    constructor(r) {
        super("circle");
        this.r = r;
        this.calcArea = () => {
            return Math.PI * this.r * this.r ;
        }
        this.calcParameter = () => {
            return 2*Math.PI *this.r;
        }
        this.toString = () => {
            return `${this.calcArea() } ${this.calcParameter()}`
        }
    }
}

