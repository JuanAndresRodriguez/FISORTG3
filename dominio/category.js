class Category {
    constructor(catName, catType, catFreq, color, cantElem){
       
        this.catName = catName;
        this.catType = catType;
        this.catFreq = catFreq;
        this.color = color;
        this.cantElem = cantElem;
    }

    getCategoryName(){
        return this.catName;
    }

    getCategoryType(){
        return this.catType;
    }

    getCategoryFrequency(){
        return this.catFreq;
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

    setCatType(x){
        this.catType = x;
    }

    setCatFreq(x){
        this.catType = x;
    }

    setColor(x){
        this.color = x;
    }

    setCantElem(x){
        this.cantElem = x;
    }

}



module.exports = Category;