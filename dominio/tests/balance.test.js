const { TestWatcher } = require('@jest/core');
const Balance = require('../balance');
const Income = require('../income');
const Expense = require('../expense');

let cuenta = new Balance();
let sueldo = new Income("Sueldo",600,"2021-10-07","UYU",true);
let renner = new Expense("renner",200,"2021-10-09","UYU","Ropa",true);

test('add income to balance',() => {
    cuenta.addIncomeToBalance(sueldo.getIncome());
    expect(cuenta.balanceMoney).toBe(600)
});
test('add expense to balance',() =>{
    cuenta.addExpenseToBalance(renner.getExpense());
    expect(cuenta.balanceMoney).toBe(400);
    
});
test('check income array list',()=>{
    expect(cuenta.incomeList.length).toBe(1)
});
test('check expense array list',()=>{
    expect(cuenta.expensesList.length).toBe(1)
});
