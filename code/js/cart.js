// var carts=[];
// var carts="http://localhost:3000/cart"
class cart{
    constructor(){};
    getID(){
        return this.id;
    }
    setID(id){
        this.id=id;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price=price;
    }

    getSL(){
        return this.sl;
    }
    setSL(sl){
        this.sl=sl;
    }
    getIMG(){
        return this.img;
    }
    setIMG(img){
        this.img = img;
    }
}