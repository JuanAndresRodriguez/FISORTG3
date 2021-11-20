const Balance = require('../balance');
const Income = require('../income');
const Expense = require('../expense');
const Saving = require('../saving');

let cuenta = new Balance();
let dataSaving ={
    'name': 'saving',
    'amount': 30,
    'date' : '2021-10-09',
    'currency' : 'UYU',
    'monthly' : true
};
let dataSaving2 ={
    'name': 'saving2',
    'amount': 30,
    'date' : '2021-10-09',
    'currency' : 'UYU',
    'monthly' : true
};
let saving = new Saving(dataSaving);
let saving2 = new Saving(dataSaving2);

//saving tests
test('check add saving',()=>{
    cuenta.addSavingToList(saving.getSaving());
    expect(cuenta.getSavingList().length).toBe(1);
});
test('check saving balance',()=>{
    expect(cuenta.getSavingMoney()).toBe(30);
});
test('delete wrong saving from balance',()=>{
    cuenta.deleteSavingFromList(saving2);
    expect(cuenta.getSavingList().length).toBe(1);
});