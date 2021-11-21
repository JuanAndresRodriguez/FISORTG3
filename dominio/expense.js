class Expense {
	constructor(name, amount, date, currency, category, isMonthly) {
		this.name = name;
        this.amount = amount;
        this.date = new Date(date);
        this.currency = currency;
        this.category = category;
        this.isMonthly = isMonthly;
        this.type = 'Expense';
	}

	getExpense() {
		return {
		name: this.name,
        amount: this.amount,
        date: this.date,
        currency: this.currency,
        category: this.category,
        isMonthly: this.isMonthly,
		};
	}
  
}

module.exports = Expense;
  