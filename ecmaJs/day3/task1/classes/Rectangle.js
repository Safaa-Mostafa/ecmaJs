import {
    Square
} from './Square.js';

export class Rectangle extends Square {
constructor(l,w) {
    super(l);
    this.w = w;
    this.calcArea = () => {
        return l * w;
    }
    this.calcParameter = () => {
        return 2 * (l + w);
    }
    this.toString = () => {
        return `${this.calcArea() } ${this.calcParameter()}`
    }
}
}