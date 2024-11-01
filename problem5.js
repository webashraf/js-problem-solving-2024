//  ? Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.


const person = [
    { name: 'Alice', age: 30, gender: 'female' },
    { name: 'Bob', age: 25, gender: 'male' },
    { name: 'Charlie', age: 28, gender: 'male' },
    { name: 'Diana', age: 22, gender: 'female' }
];


function updateAgeByName(personArray, name, newAge) {
    const person = personArray.find(person => person.name === name); 
    if (person) {
        person.age = newAge; 
    } else {
        console.log(`${name} is not found!!`);
    }
}


updateAgeByName(person, 'Bob', 50); 
console.log(person); 
