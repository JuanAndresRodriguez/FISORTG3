const { TestWatcher } = require('@jest/core');
const Balance = require('../balance');
const Income = require('../income');
const Expense = require('../expense');

let cuenta = new Balance();
let sueldo = new Income("Sueldo",600,"2021-10-07","UYU",true);
let sueldo2 = new Income("Sueldo2",40,"2021-10-07","UYU",true);
let sueldo3 = new Income("Sueldo",600,"2021-10-09","UYU",true);
let renner = new Expense("renner",200,"2021-10-09","UYU","Ropa",true);
let renner2 = new Expense("renner2",30,"2021-10-09","UYU","Ropa",true);

//check balance money
test('add income to balance',() => {
    cuenta.addIncomeToBalance(sueldo.getIncome());
    expect(cuenta.getBalanceMoney()).toBe(600)
});
test('add expense to balance',() =>{
    cuenta.addExpenseToBalance(renner.getExpense());
    expect(cuenta.getBalanceMoney()).toBe(400);
});
//check balance lists
test('check income array list',()=>{
    expect(cuenta.getIncomeList().length).toBe(1)
});
test('check expense array list',()=>{
    expect(cuenta.getExpensesList().length).toBe(1)
});


//delete income tests
test('check delete wrong income from balance',() =>{
    cuenta.deleteIncomeFromList(sueldo2);
    expect(cuenta.getIncomeList().length).toBe(1);
});
test('check delete wrong income by date from balance',() =>{
    cuenta.deleteIncomeFromList(sueldo3);
    expect(cuenta.getIncomeList().length).toBe(1);
});
test('check delete correct income from balance',() =>{
    cuenta.deleteIncomeFromList(sueldo);
    expect(cuenta.getIncomeList().length).toBe(0);
});
//delete expense tests
test('check delete wrong expense from balance',() =>{
    cuenta.deleteExpenseFromList(renner2);
    expect(cuenta.getExpensesList().length).toBe(1);
});
test('check delete correct expense from balance',() =>{
    cuenta.deleteExpenseFromList(renner);
    expect(cuenta.getExpensesList().length).toBe(0);
});