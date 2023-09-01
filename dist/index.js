"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_name, _price, _description, _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = _id;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
class User {
    constructor(_name, _age, _id = (0, uuid_1.v4)(), _cart = []) {
        this._name = _name;
        this._age = _age;
        this._id = _id;
        this._cart = _cart;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    addToCart(item) {
        console.log(`${this.name} has added ${item.name} to cart\n`);
        this.cart.push(item);
        this.cart.sort((n1, n2) => {
            if (n1.price > n2.price) {
                return 1;
            }
            if (n1.price < n2.price) {
                return -1;
            }
            return 0;
        });
    }
    removeFromCart(shopItem) {
        let count = this.cart.filter(item => item === shopItem).length;
        this.cart.splice(this.cart.indexOf(shopItem), count);
        console.log(`Removing all ${shopItem.name}'s from cart...\n`);
    }
    removeQuantity(shopItem, quantity) {
        this.cart.splice(this.cart.indexOf(shopItem), quantity);
        console.log(`Removing x${quantity} ${shopItem.name}'s from cart...\n`);
    }
    calcTotal() {
        let total = 0;
        this.cart.forEach(item => {
            total += item.price;
        });
        return `${this.name}'s total is: ${total}\n`;
    }
    printCart() {
        console.log(`${this.name}'s Cart: `);
        this.cart.forEach(item => {
            console.log("      " + item.name);
        });
        console.log(" ");
    }
}
class Shop {
    constructor(_item = []) {
        this._item = _item;
        this.item.push(new Item('Light Saber', 39.99, 'May the force be with you'));
        this.item.push(new Item('MacBook Pro', 1599.99, 'Finish tasks at the speed of light'));
        this.item.push(new Item('Wireless Mouse', 64.99, 'Click your way to the top of the leaderboards'));
    }
    get item() {
        return this._item;
    }
    set item(value) {
        this._item = value;
    }
}
let shop = new Shop();
let User1 = new User('Trevon', 28);
User1.addToCart(shop.item[0]);
User1.addToCart(shop.item[2]);
User1.addToCart(shop.item[0]);
User1.addToCart(shop.item[2]);
User1.addToCart(shop.item[1]);
User1.addToCart(shop.item[2]);
User1.printCart();
console.log(User1.calcTotal());
User1.removeFromCart(shop.item[0]);
User1.printCart();
console.log(User1.calcTotal());
User1.removeQuantity(shop.item[2], 2);
User1.printCart();
console.log(User1.calcTotal());
