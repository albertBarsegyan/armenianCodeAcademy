class Book {
  constructor({ title, author, price, quantity } = {}) {
    this._title =
      typeof title !== 'string' ? `${title} type is not string` : title;
    this._author =
      typeof author !== 'object' ? `${author} type is not object` : author;
    this._price =
      typeof price !== 'number' ? `${price} type is not number` : price;
    this._quantity =
      typeof quantity !== 'number'
        ? `${quantity} type is not number`
        : quantity;
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

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(email)
      ? email
      : 'wrond email address';
    this._gender = gender;
    this.toString = function () {
      return `Ms. ${this.name}`;
    };
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }
}

let biden = new Author('Biden', 'biden@gmail.com', 'male');

let bookInfo = {
  title: 'Bed girl',
  author: biden,
  price: 10.4,
  quantity: 10,
};
let book = new Book(bookInfo);
book.quantity = 15;
// console.log(book);
// console.log(book.getProfit);

const Human = {
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

class Parent {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  getName() {
    return this._name;
  }
}
class Child extends Parent {
  constructor(...props) {
    super(...props);
  }
}
let c = new Child('Mike', 25);
console.log(c.getName());
