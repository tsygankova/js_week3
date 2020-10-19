/* работаем с корзиной товаров:
getItems()
add(product)
remove (productName)
clear()
countTotalPrice()
increaseQueanity(productName)
decreaseQuantity(productName)

{name: 'pumpkin', price: 50}
{name: 'strawberry', price: 70}
{name: 'cherry', price: 60}
{name: 'cranberry', price: 110}
*/

const pumpkin = {name: '🎃', price: 50};
const strawberry = {name: '🍓', price: 70};
const cherry = {name: '🍒', price: 60};
const cranberry  = {name: '🤩', price: 110};

const cart = {
items: [],

add (product){
for (const item in this.items){
    product.quantity = 1;
    if (item.name === product.name){
        console.log ('такой продукт уже есть, увеличиваем количество!')
        product.quantity +=1;
    } this.items.push (product);
    console.log (this.items)}
},
}

console.log (cart.add ({name: '🎃', price: 50}));