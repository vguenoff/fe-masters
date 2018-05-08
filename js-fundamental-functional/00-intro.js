var person = [];
var plea = 'Would she';
person.name = 'Mrs. White';

var who = person.name;
console.log(who); // 'Mrs. White'

person.name = 'Mr. White';
console.log(who); // 'Mrs. White' storing a value by reference

console.log(who.story); // undefined
console.log(typeof person === 'object'); // true
console.log(Array.isArray(person)); // true

console.log(person);
person['plea'] = 'I would never';
console.log(person.plea);
