import {HashMap} from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('lava lamp', 'red');
test.set('night sky', 'dark blue');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('sea lion', 'gray');
test.set('seal', 'white');
test.set('car', 'metal');
test.set('banana', 'red');
test.set('moon', 'silver');
test.set('sunny day', 'orange');
test.set('fire place', 'dark red');
test.set('November', "orange")
test.set('January', 'blue')
console.log(test.length());
console.log(test.get("ice cream"));
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.has("lava lamp"));
console.log(test.remove("sunny day"));
console.log(test.length());
console.log(test.clear());
console.log(test.length());
