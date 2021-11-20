const Income = require('../income');

let ingreso = new Income("sueldo", 20000, "2021-11-19", "pesos", true);

const d = new Date("2021-11-19");

const obj = {
    name: "sueldo",
    amount: 20000,
    date: d,
    currency: "pesos",
    isMonthly: true,
  };


test("obtener el ingreso", () => {
    expect(ingreso.getIncome().name).toBe(obj.name);
    expect(ingreso.getIncome().amount).toBe(obj.amount);
    expect(ingreso.getIncome().date).toEqual(obj.date);
    expect(ingreso.getIncome().currency).toBe(obj.currency);
    expect(ingreso.getIncome().isMonthly).toBe(obj.isMonthly);
});