import { choice, remove } from './helpers'
import fruits from './food'



const fruit = choice(fruits);


console.log(`I’d like one ${fruit}, please.`);

console.log(`Here you go: ${fruit}`);

console.log('Delicious! May I have another?');

remove(fruits, fruit);

const fruitsLeft = fruits.join(", ")

console.log(`I’m sorry, we’re all out. We have ${fruitsLeft} left.`)


console.log(`I’m sorry, we’re all out. We have ${fruits.length} fruits left.`)