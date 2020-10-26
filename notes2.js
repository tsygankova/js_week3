// // spread arrays

// const temperatures = [15, 34, -2, 56, 8];

// console.log (Math.min(...[15, 34, -2, 56, 8]));
// console.log (Math.max(...[15, 34, -2, 56, 8]));

// // const temperatures2 = [1,2,3];
// // const newTemperatures = temperatures.concat(temperatures2);

// // console.log(newTemperatures)

// const newTemp = [...temperatures, 1,2,3];
// console.log (newTemp);

// распыление нескольких массивов

// const lastWeekTemps = [2, 8, 9]
// const currentTemps = [12, 7, 9]
// const futureTemps = [2, 5, 7]

// const temp = [...lastWeekTemps, ...currentTemps, ...futureTemps ];
// console.log (temp);

// spray objects

const a = {x: 0, y: 2};
const b = {x: 7, z: 8};

const c = Object.assign ({}, a, b);
console.log (c);

// деструктуризация

// const hotel = {
//     stars: 5,
//     name: 'Lagoon',
//     capacity: 450,


// console.log ('stars: ', hotel.stars);
// console.log ('name: ', hotel.name);
// console.log ('capacity: ', hotel.capacity);

// const { name } = hotel;
// console.log (name);

// const { name123, capacity, stars } = hotel;
// console.log (name123, capacity, stars)

//дефолтное значение

// const { capacity = 0 } = hotel;
// console.log (capacity);

// const showHotelInfo = function ({ name, capacity, stars }){
//     console.log ({ name, capacity, stars })
// }

// showHotelInfo (hotel);

// //глубокая деструктуризация

// const user = {
//     login: 'tsyganek',
//     age: 37,
//     stats: {
//         friends: 1840,
//         subscribers: 1739,
//     }
// };

// const { login, age, ...restProps } = user;
// console.log (user)
// console.log (restProps)
