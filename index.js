class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }
    set diameter(n){
        this.radius = n / 2
    }
    get circumference(){
        return this.diameter * Math.PI
    }
    set circumference(n){
        this.radius = n/Math.PI/2
    }
    get area(){
        return this.radius ** 2 * Math.PI
    }
    set area(a){
        const n = a / Math.PI
        this.radius = Math.sqrt(n)
    }
}