// // объекты и методы

// const hotel = {
//     name: 'Lagoon',
//     seaLine: true,
//     guests: 120,
//     updateName (newName){
//         this.name = newName
//         newName = 'Orion'
//         console.log (name)
//     }}

// hotel.name = 'Orion2'
// console.log (hotel.name)
// console.log (hotel)

// hotel.staff = ['Mary', 'Piotr', 'Sergey']
// console.log (hotel)


// // перебор объекта for ... in

const feedback = {
    good: 5,
    neutral: 10,
    negative: 3
};

// let totalFeedback = 0;

// for (const key in feedback){
//     console.log (feedback[key]);
//     console.log (totalFeedback);
//     totalFeedback += feedback[key];
// };

// console.log (totalFeedback);

// // порядок перебора не гарантируется

// //Object

const keys = Object.keys (feedback)
console.log (keys)

let totalFeedback = 0;

for (const key of keys){
    console.log (key)
    totalFeedback +=feedback[key];
}

console.log (totalFeedback);

// const parameters = Object.keys (hotel);
// console.log (parameters);
// console.log (parameters.length);

//Object.values()

const values  = Object.values (feedback);
console.log (values)

let allFeedback = 0;
for (let value of values){
    allFeedback += value
}

console.log (allFeedback)

//Object.entries ()

const entries = Object.entries (feedback)
console.table (entries)

// поиск в объекте

const friends = [
    {name: 'Mango', online: false},
    {name: 'Victor', online: true},
    {name: 'Sam', online: true},
    {name: 'Piotr', online: false}
]

// for (let friend of friends){
//     const nameToFind = 'Sam';
//     if (friend.name === nameToFind){
//         console.log ('GOOOOOOOO');
//         break;
//     }
// }

// const findFriend = function (allFriends, nameToFind){
//     for (let friend of allFriends){
// console.table (allFriends)
// if (friend.name === nameToFind){ console.log ('we did it!');
// break;} console.log ('Sorry, buddy! We did not find anything')
//     }
// }

// findFriend (friends, 'Mango')
// findFriend (friends, 'Elizabeth')


// // имена всех друзей
// const getNames = function (allFriends) {
// for (let friend of allFriends)
//  console.log (friend.name)}

//  getNames (friends)

 //имена всех друзей онлайн
const getNamesOnline = function (allFriends){
    let names = []
    for (let friend of allFriends){
        if (friend.online) {console.log (friend.name);
        }
    }
}

console.log (getNamesOnline (friends))
