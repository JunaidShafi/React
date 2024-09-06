let isHappy = false;
let message = isHappy ? "I am Happy" : "I am not Happy";
console.log(message);
// Spread Operator
function name(x, y, z) {
  console.log(x + y + z);
}
const ape = [2, 3, 4];
name(...ape);
