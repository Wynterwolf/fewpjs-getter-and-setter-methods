// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return 2 * Math.PI * this.radius
    }
    get area(){
        return Math.PI * this.radius * this.radius
    }
    set diameter(diam){
        this.radius = diam/2
    }
    set circumference(num){
        this.radius = (num/3.14)/2
    }

    // set area(){
    //     this._area = area
    // }
}