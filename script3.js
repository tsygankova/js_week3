/*Оператор in и метод push
Напиши функцию getAllPropValues(arr, prop), 
которая получает массив объектов и имя свойства.

Функция возвращает массив значений определенного свойства prop 
из каждого объекта в массиве.

Используй метод push для добавления значения в массив 
и оператор in для проверки наличия свойства в объекте.
*/

function getAllPropValues (array, prop) {
    let newArray = [];
    let emptyArray = [];
    for (let i = 0; i < array.length; i +=1){
        for (let key in array[i]){
            if (prop in array[i]) {
            if (key = prop){
                newArray.push(array[i][prop])
                break
            } return emptyArray}}}
return newArray;
}


  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  
  console.log(getAllPropValues(products, 'name'));
  
  console.log(getAllPropValues(products, 'quantity'));
  
  console.log(getAllPropValues(products, 'category'));


  