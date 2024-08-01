import {
    circle
} from "./Circle.js";
export class Square extends circle {
    constructor(l) {
        super(l);
        this.calcArea = () => {
            return l * l;
        }
        this.calcParameter = () => {
            return (l + l);
        }
        this.toString = () => {
            return `${this.calcArea() } ${this.calcParameter()}`
        }
    }
}