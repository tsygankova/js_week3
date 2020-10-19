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

const pumpkin = {name: '🎃', price: 50, quantity: 12};
const strawberry = {name: '🍓', price: 70};
const cherry = {name: '🍒', price: 60};
const cranberry  = {name: '🤩', price: 110};

const cart = {
items: [{name: '🎃', price: 50, quantity: 1},{name: '🍓', price: 70, quantity: 1}],

getItems (){
    return this.items;
},

add (product){ 
    product.quantity = 1;
    // this.items.push (product);

for (const item in this.items){
    console.log (item);
    for (const item of this.items){
        if (item.name === product.name){
            console.log ('this product is already in the cart');
            item.quantity +=1;
            return this.items;   
        }
        this.items.push (product);
       
    }
}
},

remove (productName) {
for (let i = 0; i < this.items.length; i +=1){
    if (productName === this.items[i].name){
        console.log ('Нашли и убираем немедленно!');
        this.items.splice (i,1);
        console.table (this.items);
    }}},

clear () {
    this.items = [];
},

countTotalPrice (){
    let total = 0;
    for (let item of this.items){
        console.log (item);
        total += item.price * item.quantity;
    }
return total;
},

increaseQuantity (productName) {
    console.table (this.items);
for (const item in this.items){
    if (item.name === productName){
        item.quantity += 1;
        console.table (this.items);
    }
}
}


}

console.table (cart.getItems());
cart.add (pumpkin);
// cart.add (cherry);
// cart.add (cranberry);

console.table (cart.getItems());

// cart.remove ('🎃')

// cart.clear();
// console.table (cart.getItems());

console.log ('total price is', cart.countTotalPrice())

cart.increaseQuantity ('🎃')


