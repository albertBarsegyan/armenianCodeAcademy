/* Book should have:
fields
title
author(Author)
price
quantity
methods
getters forfields
setters forfields
getProfit() - which calculates the profit from the book based on the price and quantity.
toString()*/
class Book {
  constructor({ title, author, price, quantity } = {}) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }
  set title(tit) {
    this._title = tit;
  }
  set author(auth) {
    this._author = auth;
  }
  set price(pri) {
    this._price = pri;
  }
  set quantity(quant) {
    return (this._quantity = quant);
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get price() {
    return this._price;
  }
  get quantity() {
    return this._quantity;
  }
  get getProfit() {
    return this.price * this.quantity;
  }
}

let bookInfo = {
  title: 'Bed girl',
  author: 'Joe Bidon',
  price: 10.4,
  quantity: 10,
};
let book = new Book(bookInfo);
book.quantity = 15;
console.log(book);
console.log(book.getProfit);
