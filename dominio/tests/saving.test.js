const Balance = require('../balance');
const Income = require('../income');
const Expense = require('../expense');
const Saving = require('../saving');

let cuenta = new Balance();
let saving = new Saving("saving",30,"2021-10-09","UYU",true);
let saving2 = new Saving("saving2",30,"2021-10-09","UYU",true);

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