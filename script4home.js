/*Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), 
которая принимает объект сотрудников и 
возвращает имя самого продуктивного 
(который выполнил больше всех задач). 
Сотрудники и кол-во выполненных задач содержатся как свойства объекта 
в формате "имя":"кол-во задач".*/

const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    let bestEmployee = Object.keys (employees)[0] = "";
    let bestResult = Object.values (employees)[1] = "";
    for (let [employee, result] of Object.entries (employees)){
        if (result > bestResult){
            bestResult = result;
            bestEmployee = employee;}
        }
        return bestEmployee;

  };
  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  //console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  //console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    david: 21,
    kiwi: 19,
    lux: 147,
    chelsy: 38,
  }
  //console.log(findBestEmployee(sellers)); 
  // 'lux'  

  const cleaners ={

  }

  console.log (findBestEmployee (developers))
  console.log (findBestEmployee (supports))
  console.log (findBestEmployee (sellers))
  console.log (findBestEmployee(cleaners))