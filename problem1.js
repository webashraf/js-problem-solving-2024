// ? 1. Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.


const people = [
    { name: 'Sokina', age: 30, gender: 'female' },
    { name: 'Ali', age: 25, gender: 'male' },
    { name: 'Ashraf', age: 28, gender: 'male' },
    { name: 'Jorina', age: 22, gender: 'female' },
    { name: 'Tamim', age: 35, gender: 'male' }
];

function getMaleNames(peopleArray) {
    // Filter male person
    const malePersons =  peopleArray
        .filter(person => person.gender === 'male') 
        
       return  malePersons.map(person => person.name); 
}

const maleNames = getMaleNames(people);
console.log(maleNames);
