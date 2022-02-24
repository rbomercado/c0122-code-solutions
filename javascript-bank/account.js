/* exported Account */
function Account(number, holder, transactions) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && (Number.isInteger(amount) === true)) {
    var depositObject = new Transaction('deposit', amount);
    this.transactions.push(depositObject);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && (Number.isInteger(amount) === true)) {
    var withdrawObject = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawObject);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
