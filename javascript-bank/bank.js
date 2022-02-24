/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  var newAccount = new Account(this.nextAccountNumber, holder);
  if (balance > 0 && (Number.isInteger(balance) === true)) {
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  if (number < this.accounts.length + 1) {
    return this.accounts[number - 1];
  }

  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    totalAssets = totalAssets + this.accounts[i].getBalance();
  }
  return totalAssets;
};
