class Category {
    constructor(catName, catType, color, cantElem){
       
        this.catName = catName;
        this.catType = catType;
        this.color = color;
        this.cantElem = cantElem;
    }

    getCategoryName(){
        return this.catName;
    }

    getCategoryType(){
        return this.catType;
    }



    getCategoryColor(){
        return this.color;
    }

    getCategoryCantElem(){
        return this.cantElem;
    }

    sumarCantidad(){
        this.cantElem += 1;
    }
}



module.exports = Category;