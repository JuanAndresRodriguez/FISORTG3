import Expense from "./expense";

class Category extends Expense {
    constructor(catName, color, cantElem){
        super(name);
        super(amount);
        super(date);
        super(currency);
        super(category);
        super(isMonthly);
        this.catName = catName;
        this.color = color;
        this.cantElem = cantElem;
    }

    getCategoryName(){
        return this.catName;
    }

    getCategoryColor(){
        return this.color;
    }

    getCategoryCantElem(){
        return this.cantElem;
    }

    setCatName(x){
        this.catName = x;
    }

    setColor(x){
        this.color = x;
    }

    setCantElem(x){
        this.cantElem = x;
    }

}