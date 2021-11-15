class Balance {
	constructor() {
        this.balanceMoney = 0;
        this.savingMoney = 0;
		this.expensesList = [];
        this.incomeList = [];
        this.savingList = [];
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
    getSavingList(){
        return this.savingList;
    }

    addExpenseToBalance(expense) {
        this.expensesList.push(expense);
        this.balanceMoney -= expense.amount;
        this.checkSavingBalance();
    }
    addIncomeToBalance(income) {
        this.incomeList.push(income);
        this.balanceMoney += income.amount;
    }
    addSavingToList(saving){
        this.savingList.push(saving);
        this.savingMoney += saving.amount;
    }

    checkSavingBalance(){
        let balanceWithSaving = this.balanceMoney - this.savingMoney;
        if(balanceWithSaving < 0) alert('te pasaste de tus ahorros');
        else if(balanceWithSaving < 500) alert('estas cerca de pasarte de los ahorrios')
    }
}

export default Balance;
  