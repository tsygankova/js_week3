// объекты и методы

const hotel = {
    name: 'Lagoon',
    seaLine: true,
    guests: 120,
    updateName (newName){
        this.name = newName
        newName = 'Orion'
        console.log (name)
    }}

hotel.name = 'Orion2'
console.log (hotel.name)
console.log (hotel)

hotel.staff = ['Mary', 'Piotr', 'Sergey']
console.log (hotel)


// перебор объекта for ... in

const feedback = {
    good: 5,
    neutral: 10,
    negative: 3
};

let totalFeedback = 0;

for (const key in feedback){
    console.log (feedback[key]);
    console.log (totalFeedback);
    totalFeedback += feedback[key];
};

console.log (totalFeedback);

// порядок перебора не гарантируется

//Object

const keys = Object.keys (feedback)
console.log (keys)

const parameters = Object.keys (hotel);
console.log (parameters);
console.log (parameters.length);

for (const key in keys){
    console.log (keys);
}
