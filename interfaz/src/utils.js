

export const changeVisibleSection = (target) => {
    document.querySelector('section.full-screen.active')?.classList.remove('active');
    document.querySelector(`section#${CSS.escape(target)}`)?.classList.add('active');
};

export const openFabSpeedDial = (fabButton) => {
    fabButton.classList.toggle('close');
    let income = document.querySelector('.mdc-fab.income');
    let expense = document.querySelector('.mdc-fab.expense');
    income.classList.toggle('fade-in');
    expense.classList.toggle('fade-in');  
};

export const addEventBalanceButtons = (fabButton) => {
    let income = document.querySelector('.mdc-fab.income');
    let expense = document.querySelector('.mdc-fab.expense');
    income.addEventListener('click', (event) => {
        changeVisibleSection('Ingreso');
        changeAppTitle('Ingreso');
        openFabSpeedDial(fabButton);
    });
    expense.addEventListener('click', (event) => {
        changeVisibleSection('Gasto');
        changeAppTitle('Gasto');
        openFabSpeedDial(fabButton);
    });
}

export const changeMenuIcon = (topAppBarElement,drawer) => {
    let iconContainer = topAppBarElement.getElementsByClassName('mdc-top-app-bar__navigation-icon')[0];
    let icon = iconContainer.innerHTML;
    iconContainer.innerHTML = (icon == 'menu') ? 'arrow_back' : 'menu';
    drawer.open = !drawer.open;
};

export const changeAppTitle = (newTitle) => {
    let appTitle = document.getElementsByClassName('mdc-top-app-bar__title')[0];
    appTitle.innerHTML = newTitle;

};

//update the history list
export const updateHistory = (incomes,expenses) => {
    var containerIncome = document.querySelector(`#Historial #income .content .history-container`);
    containerIncome.innerHTML = '';
    getSortedTransactions(incomes).forEach((element) => {
        let entry = document.createElement("div");
        entry.innerHTML += `\
        <div class="entry">\
            <div class="image-placeholder">\
                <div class="circle">${element.name[0].toUpperCase()}</div>\
            </div>\
            <div class="middle-info">\
                <div class="amount income">$${element.amount} </div>\
                <div class="item-name">${element.name}</div>\
            </div>\
            <div class="right-info">\
                <div class="date income">${element.date.getDate()}/${element.date.getMonth()+1}/${element.date.getFullYear()}</div>\
            </div>\
        </div>`;
        containerIncome.appendChild(entry)
    });
    var containerExpense = document.querySelector(`#Historial #expense .content .history-container`);
    containerExpense.innerHTML = '';
    getSortedTransactions(expenses).forEach((element) => {
        let entry = document.createElement("div");
        entry.innerHTML += `\
        <div class="entry">\
            <div class="image-placeholder">\
                <div class="circle">${element.name[0].toUpperCase()}</div>\
            </div>\
            <div class="middle-info">\
                <div class="amount expense">$${element.amount} </div>\
                <div class="item-name">${element.name}</div>\
            </div>\
            <div class="right-info">\
                <div class="date expense">${element.date.getDate()}/${element.date.getMonth()+1}/${element.date.getFullYear()}</div>\
                <div class="category">${element.category}</div>\
            </div>\
        </div>`;
        containerExpense.appendChild(entry)
    });
    let sortedAll = getSortedTransactions(incomes.concat(expenses));
    var containerSumary = document.querySelector(`#Inicio .summary`);
    containerSumary.innerHTML = '';
    for (let index = 0; index < 5; index++) {
        let entry = document.createElement("div");
        entry.innerHTML += `\
        <div class="entry">\
            <div class="image-placeholder">\
                <div class="circle">${sortedAll[index].name[0].toUpperCase()}</div>\
            </div>\
            <div class="middle-info">\
                <div class="amount expense">$${sortedAll[index].amount} </div>\
                <div class="item-name">${sortedAll[index].name}</div>\
            </div>\
            <div class="right-info">\
                <div class="date expense">${sortedAll[index].date.getDate()}/${sortedAll[index].date.getMonth()+1}/${sortedAll[index].date.getFullYear()}</div>\
                <div class="category">${sortedAll[index].category}</div>\
            </div>\
        </div>`;
        containerSumary.appendChild(entry);
        console.log('entry');
    }

};

export const updateSummary = () => {

}

export const getExpenseData = (page,category,checkbox) => {
    let name = page.querySelector('.mdc-text-field #name');
    let amount = page.querySelector('.mdc-text-field #amount');
    let date = page.querySelector('.mdc-text-field #date');
    if (verifyForm(name,amount,date,category)){
        let expenseData= []
        expenseData['name'] = name.value;
        expenseData['amount'] = parseInt(amount.value);
        expenseData['date'] = date.value;
        expenseData['monthly'] = checkbox.checked;
        expenseData['category'] = category.value;
        cleanInput(name, amount, date, checkbox, category);
        return expenseData;
    } else {
        alert('Ingrese todos los datos');
    }  
  }
export const getIncomeData = (page,checkbox) => {
    let name = page.querySelector('.mdc-text-field #name');
    let amount = page.querySelector('.mdc-text-field #amount');
    let date = page.querySelector('.mdc-text-field #date');
    if (verifyForm(name,amount,date)){
        let incomeData= []
        incomeData['name'] = name.value;
        incomeData['amount'] = parseInt(amount.value);
        incomeData['date'] = date.value + 'T00:00-0800';
        incomeData['monthly'] = checkbox.checked;
        cleanInput(name, amount, date, checkbox);
        return incomeData;
    } else {
        alert('Ingrese todos los datos');
    }  
  }

export const getSortedTransactions = (list) => {
    return list.sort((a,b) => b.date - a.date)
};
export const getSortedTransactionsByTime = (list) => {
    return list.sort((a,b) => a.date - b.date)
};

export const getTotalExpenses = (expensesList) => {
    let total = 0;
    expensesList.forEach((expense) => {
        total += expense.amount;
    });
    console.log(total);
    return total;
}

export const updateTotalExpenses = (expensesList) => {
   let container = document.querySelector('#Inicio .container .amount');
   container.innerText = `$${getTotalExpenses(expensesList).toLocaleString("es-US")}`;
}


export const cleanInput = (name, amount, date, monthly, category = undefined) => {
    name.value = '';
    amount.value = '';
    date.value = '';
    monthly.checked = false;
    if (typeof category !== 'undefined') category.selectedIndex = -1;
};

export const verifyForm = (name, amount, date, category = undefined) => {
    let isValid = true;
    if (!name.value){name.parentElement.classList.add('mdc-text-field--invalid'); isValid = false;}
    if (!amount.value){amount.parentElement.classList.add('mdc-text-field--invalid'); isValid = false;}
    if (!date.value){date.closest('label').classList.add('mdc-text-field--invalid'); isValid = false;}
    if (typeof category !== 'undefined' && category.value == ''){category.valid = false; isValid = false;}
    return isValid;    
}

export const displayBalance = (balance) => {
    let container = document.querySelector('.balance-amount');
    container.innerText =`$${balance.getBalanceMoney().toLocaleString("es-US")}`;
}