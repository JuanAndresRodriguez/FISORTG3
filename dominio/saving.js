class Saving {
    constructor(name, amount,date, currency, isMonthly){
        this.name = name;
        this.amount = amount;
        this.date = new Date(date);
        this.currency = currency;
        this.isMonthly = isMonthly;
    }
    getSaving() {
		return {
		name: this.name,
        amount: this.amount,
        date: this.date,
        currency: this.currency,
        isMonthly: this.isMonthly,
		};
	}
}
module.exports = Saving;