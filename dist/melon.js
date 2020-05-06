"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.name = this.constructor.name;
    }
    toString() {
        let element = this.name
            .split("melon")
            .filter((e) => e !== "")[0];
        if (this.name === "Melolemonmelon") {
            element = "Water";
        }
        return `Element: ${element}\nSort: ${this.melonSort}\n`;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}
exports.Watermelon = Watermelon;
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}
exports.Firemelon = Firemelon;
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}
exports.Earthmelon = Earthmelon;
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return super.toString() + `Element Index: ${this.elementIndex()}`;
    }
}
exports.Airmelon = Airmelon;
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.counter = 0;
        this.elements = [Watermelon, Firemelon, Earthmelon, Airmelon];
    }
    morph() {
        this.counter++;
    }
    toString() {
        return new this.elements[this.counter % 4](this.weight, this.melonSort).toString();
    }
}
exports.Melolemonmelon = Melolemonmelon;
