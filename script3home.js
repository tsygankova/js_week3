/*Суммирование значений свойств объекта
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
Функция считает общую сумму зарплаты работников и возвращает ее. 
Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
*/

const countTotalSalary = function (employees){

let salaries = Object.values(employees);
let total = 0;
for (const salary of salaries){
    total += salary;
}
return total
}

// Объекты и ожидаемый результат
const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
//console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
}
//console.log(countTotalSalary(supports));
// 500


console.log (countTotalSalary (developers));
console.log (countTotalSalary (supports));

