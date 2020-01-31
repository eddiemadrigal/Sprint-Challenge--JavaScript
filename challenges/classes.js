// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        let result = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
        return result;
    }
}

const cuboid = new CuboidMaker(4, 5, 5);

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(length, width, height) {
        super(length, width, height);
    }
    volume() {
        return this.length * this.height * this.width;
    }
    surfaceArea() {
        return 6 * this.length * this.length * this.height * this.height * this.width * this.width;
    }
}

let cubemaker = new CubeMaker(2, 2, 2);
console.log(cubemaker.volume());
console.log(cubemaker.surfaceArea());