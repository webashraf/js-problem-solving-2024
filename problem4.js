// ? Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.


const cars = [
    { make: 'Toyota', model: 'Camry', year: 2019 },
    { make: 'Honda', model: 'Accord', year: 2020 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
    { make: 'Chevrolet', model: 'Malibu', year: 2021 },
    { make: 'Tesla', model: 'Model 3', year: 2022 }
];


function sortCarsByYear(carsArray) {
    return carsArray.sort((a, b) => a.year - b.year); 
}


const sortedCars = sortCarsByYear(cars);


console.log(sortedCars);