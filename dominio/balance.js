class Balance {
	constructor() {
        this.balanceMoney = 0;
		this.expensesList = [];
        this.incomeList = [];
	}

	getBalanceMoney() {
		return this.balanceMoney;
	}
    getExpensesList(){
        return this.expensesList;
    }
    getIncomeList(){
        return this.incomeList;
    }
    addExpenseToBalance(expense) {
        this.expensesList.push(expense);
        this.balanceMoney -= expense.amount;
    }
    addIncomeToBalance(income) {
        this.incomeList.push(income);
        this.balanceMoney += income.amount;
    }
  
}

module.exports = Balance;
  