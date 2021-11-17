import "./styles/index.scss"
import Expense from "../../dominio/expense"
import Income from "../../dominio/income";
import Balance from "../../dominio/balance";


<<<<<<< HEAD
 //preloaded test info
=======
let cuenta = new Balance;
let sueldo = new Income("Sueldo",60000,"2021-10-07","UYU",true);
let sueldo2 = new Income("Sueldo2",50,"2021-10-07","UYU",true);
let sueldo3 = new Income("Sueldo2",50,"2021-10-07","UYU",true);
let renner = new Expense("renner",200,"2021-10-09","UYU","Ropa",true);
let renner2 = new Expense("renner2",200,"2021-10-09","UYU","Ropa",true);




cuenta.addIncomeToBalance(sueldo);
cuenta.addIncomeToBalance(sueldo2);
console.log(cuenta.getIncomeList());
cuenta.deleteIncomeFromList(sueldo3);
console.log(cuenta.getIncomeList());
cuenta.addExpenseToBalance(renner);
cuenta.addExpenseToBalance(renner2);
console.log(cuenta.getExpensesList());
cuenta.deleteExpenseFromList(renner);
console.log(cuenta.getExpensesList());


// console.log(sueldo[1]);

/** preloaded test info
>>>>>>> feature/delete_from_list
function logSaldo(balance){
    console.log("tu saldo actual es de: " + balance.balanceMoney);
};

let cuenta = new Balance();
logSaldo(cuenta);
let sueldo = new Income("Sueldo",60000,"2021-10-07","UYU",true);
cuenta.addIncomeToBalance(sueldo.getIncome());
logSaldo(cuenta);
let renner = new Expense("renner",200,"2021-10-09","UYU","Ropa",true);
cuenta.addExpenseToBalance(renner.getExpense());
logSaldo(cuenta);
let web = new Income("Web",20000,"2021-10-08","UYU",true);
cuenta.addIncomeToBalance(web.getIncome());
logSaldo(cuenta);
let sub = new Expense("sub",180,"2021-10-07","UYU","Ropa",true);
cuenta.addExpenseToBalance(sub.getExpense());
logSaldo(cuenta);

let history = cuenta.getIncomeList().concat(cuenta.getExpensesList());
let sortedHistory = history.sort((a,b) => a.date - b.date);
console.log(sortedHistory);


sortedHistory.forEach((element) => {
    var ul = document.getElementsByClassName('history');
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(element.name +": "+ element.amount + " " + element.currency));
    ul[0].appendChild(li);
})


