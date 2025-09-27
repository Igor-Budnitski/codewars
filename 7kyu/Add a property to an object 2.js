/*
* Write a function that adds a named property to an object. It must be possible to set the property to a new value.
* If the property already exists on the object, and error should be thrown.
* */

function addProperty(obj, prop, value) {
    if (obj.hasOwnProperty(prop)) throw "Error: Property already present";
    obj[prop] = value;
}

const user = {
    name: 'Igor',
    age: 23,
}


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("fds"));

console.log(user.toLocaleString());

const numbers = [1, 2, 3, 4, 5, 6];

const grouped = Object.groupBy(numbers, num =>
    num % 2 === 0 ? "even" : "odd"
);

console.log(grouped);
// {
//   odd: [1, 3, 5],
//   even: [2, 4, 6]
// }


const people = [
    { name: "Alice", age: 23 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 23 },
];

const byAge = Object.groupBy(people, person => person.age);

console.log(byAge);
/*
{
  23: [ { name: "Alice", age: 23 }, { name: "Charlie", age: 23 } ],
  30: [ { name: "Bob", age: 30 } ]
}
*/
