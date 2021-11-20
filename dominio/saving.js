class Saving {
    constructor(dataArray){
        this.name = dataArray['name'];
        this.amount = dataArray['amount'];
        this.date = new Date(dataArray['date']);
        this.currency = dataArray['currency'];
        this.isMonthly = dataArray['monthly'];
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
module.exports = Saving;