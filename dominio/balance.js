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
    getSavingMoney(){
        return this.savingMoney;
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
    }
    addIncomeToBalance(income) {
        this.incomeList.push(income);
        this.balanceMoney += income.amount;
    }
    addSavingToList(saving){
        this.savingList.push(saving);
        this.savingMoney += saving.amount;
    }
    deleteIncomeFromList(incomeToDelete){
        this.deleteAux(this.incomeList,incomeToDelete);
    }
    deleteExpenseFromList(expenseToDelete){
        this.deleteAux(this.expensesList,expenseToDelete);
    }
    deleteSavingFromList(savingToDelete){
        this.deleteAux(this.savingList,savingToDelete);
    }
    deleteAux(list,elementToDelete){
        //iterate through the list
        let elementDeleted = false;
        for(let i = 0; i < list.length && !elementDeleted; i++){
            let element = list[i];
            let shouldDelete = true;
            
            //iterate through the element
            Object.keys(elementToDelete).every(key => {
                if(key == 'date'){
                    if(elementToDelete[key].toDateString() == element[key].toDateString()){
                        return true;
                    }
                    else{
                        shouldDelete = false;
                        return false;
                    }
                }
                else{
                    if(elementToDelete[key] == element[key]){
                        return true
                    }
                    else{
                        shouldDelete = false;
                        return false;
                    }
                }
            });
            if(shouldDelete){
                list.splice(i,1);
                elementDeleted = true;
                break;
            }
        }   
    }
}
module.exports = Balance;
  
