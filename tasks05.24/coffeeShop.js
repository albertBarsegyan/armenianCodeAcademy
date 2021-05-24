/* Tasks
CoffeeShop
Properties:
name: a string (basically, of the shop)
menu: an array of items (of object type), with each item containing the item (name of the item), type
(whether food or a drink) and price.
orders: an empty array
Methods:
addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise,
return "This item is currently unavailable!"
fulfillOrder: if the orders array is not empty,return "The {item} is ready!". If the orders array is
empty,return "All orders have been fulfilled!" listOrders:returns the list of orders taken, otherwise, an
empty array.
dueAmount:returns the total amount due forthe orders taken.
cheapestItem:returns the name of the cheapest item on the menu.
drinksOnly:returns only the item names of type drink from the menu.
foodOnly:returns only the item names of type food from the menu.
IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.*/
let menu = [
  {
    name: 'coca_cola',
    type: 'drink',
    price: 2.4,
  },
  {
    name: 'pizza',
    type: 'food',
    price: 3,
  },
  {
    name: 'cheese',
    type: 'food',
    price: 1.8,
  },
  {
    name: 'coffee',
    type: 'drink',
    price: 2,
  },
];

class CoffeeShop {
  constructor(name, menu = []) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder = function (foodName) {
    let checkMenu = checkIfFoodExist(this.menu, foodName);
    if (typeof checkMenu === 'object') {
      this.orders.push(checkMenu);
    } else {
      return checkMenu;
    }
  };
  listOrders = function () {
    let res = [];
    this.orders.forEach((food) => res.push(food.name));
    return res;
  };
  fulfillOrder = function () {
    let res = this.orders.shift();

    return res
      ? `The ${res.name} is ready.`
      : 'All orders have been fulfilled!';
  };
  dueAmount = function () {
    let res = [];
    this.orders.forEach((item) => {
      res.push(item.price);
    });
    return res.reduce((acc, item) => acc + item, 0);
  };
  cheapestItem = function () {
    let cheapestProduct = [];
    this.menu.forEach((item) => {
      cheapestProduct.push(item.price);
    });
    return Math.min(...cheapestProduct);
  };
  drinksOnly() {
    let drinks = [];
    this.menu.forEach((item) => {
      if (item.type === 'drink') {
        drinks.push(item.name);
      }
    });
    return drinks;
  }
  foodOnly() {
    let food = [];
    this.menu.forEach((item) => {
      if (item.type === 'food') {
        food.push(item.name);
      }
    });
    return food;
  }
}

function checkIfFoodExist(menu, foodName) {
  let res;

  for (const iterator of menu) {
    if (iterator.name === foodName.toLowerCase()) {
      res = iterator;
    }
  }
  return res ?? '"This item is currently unavailable!"';
}

let p = new CoffeeShop('Mike', menu);
p.addOrder('coffee');
p.addOrder('coca_cola');
// console.log(p.fulfillOrder());
// console.log(p.fulfillOrder());
// console.log(p.listOrders());
console.log(p.dueAmount());
console.log(p.cheapestItem());
console.log(p.drinksOnly());
console.log(p.foodOnly());
