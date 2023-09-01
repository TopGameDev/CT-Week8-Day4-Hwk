import { v4 as uuidv4 } from "uuid";

class Item{
    
    constructor(
        private _name: string,
        private _price: number,
        private _description: string,
        private _id: string = uuidv4(),
        ){}

        public get description(): string {
            return this._description;
        }
        public set description(value: string) {
            this._description = value;
        }
        public get price(): number {
            return this._price;
        }
        public set price(value: number) {
            this._price = value;
        }
        public get name(): string {
            return this._name;
        }
        public set name(value: string) {
            this._name = value;
        }
        public get id(): string {
            return this._id;
        }
        public set id(value: string) {
            this._id = value;
        }
}

class User{

    constructor(
        private _name: string,
        private _age: number,
        private _id: string = uuidv4(),
        private _cart: Item[] = [],
    ){}

    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public addToCart(item:Item){
        console.log(`${this.name} has added ${item.name} to cart\n`)
        this.cart.push(item)
        this.cart.sort((n1, n2) => {
            if (n1.price > n2.price){
                return 1;
            }
            if (n1.price < n2.price){
                return -1;
            }
            return 0
        })
    }

    public removeFromCart(shopItem:Item){
        let count = this.cart.filter(item => item === shopItem).length
        this.cart.splice(this.cart.indexOf(shopItem), count)
        console.log(`Removing all ${shopItem.name}'s from cart...\n`)
    }

    public removeQuantity(shopItem:Item, quantity:number){
        this.cart.splice(this.cart.indexOf(shopItem), quantity)
        console.log(`Removing x${quantity} ${shopItem.name}'s from cart...\n`)  
    }

    public calcTotal(){
        let total = 0
        this.cart.forEach(item => {
            total += item.price
        })
        return `${this.name}'s total is: ${total}\n`
    }

    public printCart(){
        console.log(`${this.name}'s Cart: `)
        this.cart.forEach(item => {
            console.log("      " + item.name)
        })
        console.log(" ")
    }

}

class Shop{
    
    constructor(
        private _item: Item[] = []
    ){
        this.item.push(new Item('Light Saber', 39.99, 'May the force be with you'))
        this.item.push(new Item('MacBook Pro', 1599.99, 'Finish tasks at the speed of light'))
        this.item.push(new Item('Wireless Mouse', 64.99, 'Click your way to the top of the leaderboards'))
    }
    public get item(): Item[] {
        return this._item;
    }
    public set item(value: Item[]) {
        this._item = value;
    }
}

let shop = new Shop();
let User1 = new User('Trevon', 28)
User1.addToCart(shop.item[0])
User1.addToCart(shop.item[2])
User1.addToCart(shop.item[0])
User1.addToCart(shop.item[2])
User1.addToCart(shop.item[1])
User1.addToCart(shop.item[2])
User1.printCart()
console.log(User1.calcTotal())
User1.removeFromCart(shop.item[0])
User1.printCart()
console.log(User1.calcTotal())
User1.removeQuantity(shop.item[2], 2)
User1.printCart()
console.log(User1.calcTotal())


