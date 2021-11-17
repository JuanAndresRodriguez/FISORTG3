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
    deleteIncomeFromList(incomeToDelete){
        this.deleteAux(this.incomeList,incomeToDelete);
    }
    deleteExpenseFromList(expenseToDelete){
        this.deleteAux(this.expensesList,expenseToDelete);
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
                    if( Number(elementToDelete[key]) == Number(element[key]))
                        return true;
                    else{
                        shouldDelete = false;
                            return false;
                    }
                }
                else{
                    if(elementToDelete[key] == element[key])
                            return true
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

<<<<<<< HEAD
module.exports = Balance;
  
=======

export default Balance  
>>>>>>> feature/delete_from_list
