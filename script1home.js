/*Напиши скрипт, который, для объекта user, последовательно:

добавляет поле 'mood' со значением 'happy'
добавляет поле 'full time' со значением true
заменяет значение 'hobby' на 'skydiving'
заменяет значение 'premium' на false
в переменную message записывает содержимое объекта user:
для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
с помощью оператора for...of
в формате ключ:значение
c переносом строки ('\n')*/

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
 
user.mood = 'happy',
user['full time'] = true,
user.hobby = 'skydiving',
user['full time'] = true,
user.premium = false
 
const keys = Object.keys(user);

const entries = Object.entries (user);
for (const entry of entries){
const key = entry[0];
const value = entry [1];
message += `${key}: ${value} \n`}

console.log(message) 