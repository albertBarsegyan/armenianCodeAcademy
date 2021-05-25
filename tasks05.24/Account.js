/* Create an Account class. Account should have:
fields
id
name
balance
getters for fields
setters - for name and balance
credit(amount) - which should add amount to balance and return the updated balance.
debit(amount) - which should subtract the amount from the balance, if amount is less than the
balance, otherwise output “Amount exceeded balance.”
transferTo(anotherAccount, amount) - which should subtract the amount from the account
balance and add it to the given anotherAccount and return the updated balance, if amount is less
than the balance, otherwise output “Amount exceeded balance.”
static method: identifyAccounts(accountFirst, accountSecond) - which gets two accounts
and identifies if they are the same or not comparing all fields.
toString() */

class Account {
  constructor(name, balance) {
    this._id = this.counter();
    this._name = name;
    this._balance = balance;
    this.credit = function (amount) {
      this._balance += amount;
      return this._balance;
    };
    this.debit = function (amount) {
      if (amount > this._balance) {
        return 'Amount exceeded balance.';
      } else {
        this._balance -= amount;
        return this._balance;
      }
    };
    this.transferTo = function (anotherAccount, amount) {
      if (this._balance < amount) {
        return 'Amount exceeded balance.';
      } else {
        this.debit(amount);
        anotherAccount.credit(amount);
        return this.balance;
      }
    };
    this.toString = function () {
      return `${this._name} account's account balance is
      $${this._balance}.`;
    };
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get balance() {
    return this._balance;
  }
  set name(n) {
    this._name = n;
  }
  set balance(bal) {
    this._balance = bal;
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst === accountSecond) {
      return true;
    } else {
      return false;
    }
  }
  counter() {
    Account._counter = (Account._counter || 0) + 1;
    return Account._counter;
  }
}

let account = new Account('Jake', 100);
let p = new Account('moki', 100);
let t = new Account('josh', 100);

p.transferTo(t, 50);

console.log(account.debit(10));
console.log(p.balance, t.balance);
