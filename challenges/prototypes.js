/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/


CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
}

// let test = new CuboidMaker(1,2,3);
// console.log(test.volume());
  
  /* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

CuboidMaker.prototype.surfaceArea = function() {
  let result = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  return result;
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

let cuboid = new CuboidMaker(4, 5, 5);
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130