class Saving {
    constructor(name, amount,date, currency, isMonthly){
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.currency = currency;
        this.isMonthly = isMonthly;
    }
    getSaving() {
		return {
		name: this.name,
        amount: this.amount,
        currency: this.currency,
        isMonthly: this.isMonthly,
		};
	}
}
export default Saving;