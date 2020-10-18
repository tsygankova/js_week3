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
const pumpkin = {name: 'pumpkin', price: 50}
const strawberry = {name: 'strawberry', price: 70}
const cherry = {name: 'cherry', price: 60}
const cranberry = {name: 'cranberry', price: 110}

const cart = {
items: [],
getItems(){
    return this.items;
},

add (product){
    product.quantity = 1;
    this.items.push (product);
    console.table (product);
},

remove (productName){
    console.log (productName);
    for (const item of this.items) {
   console.log (item);
   if (productName === item.name){
       console.log ('Finally found!')
   }
    }
}

}

cart.add (strawberry);
cart.add (pumpkin);
cart.add (cherry);
cart.add (cranberry);

cart.remove ('pumpkin');

