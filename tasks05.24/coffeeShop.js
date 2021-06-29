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
    let res = this.orders.map((order) => order.name);
    return res;
  };
  fulfillOrder = function () {
    let res = this.orders.shift();

    return res
      ? `The ${res.name} is ready.`
      : 'All orders have been fulfilled!';
  };
  dueAmount = function () {
    let amount = this.orders.reduce((acc, item) => {
      acc + item.price;
      return acc;
    }, 0);
    return amount;
  };
  cheapestItem = function () {
    let cheapestProduct = this.menu.reduce((acc, item) => {
      if (item.price < acc) {
        acc = item.price;
      }
      return acc;
    }, +Infinity);
    return cheapestProduct;
  };
  drinksOnly() {
    let food = this.menu.reduce((acc, item) => {
      if (item.type === 'drink') {
        acc.push(item.name);
      }
      return acc;
    }, []);
    return food;
  }
  foodOnly() {
    let food = this.menu.reduce((acc, item) => {
      if (item.type === 'food') {
        acc.push(item.name);
      }
      return acc;
    }, []);
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
console.log(p.listOrders());
console.log(p.dueAmount());
// console.log(p.cheapestItem());
// console.log(p.drinksOnly());
// console.log(p.foodOnly());
