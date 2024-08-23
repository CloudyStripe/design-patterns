import { Crust, Cut, Sauce, Size, Topping, IPizza } from "./types"

//Builder 
interface IPizzaBuilder {
    addTopping(topping: Topping): IPizzaBuilder
    setCrust(crust: Crust.THICK | Crust.THIN): IPizzaBuilder
    setSize(size: Size.SM | Size.MD | Size.LG): IPizzaBuilder
    setSauce(sauce: Sauce.ALFREDO | Sauce.MARINARA | Sauce.BBQ): IPizzaBuilder
    setCut(cut: Cut.SQUARE | Cut.TRIANGLE): IPizzaBuilder
    bake(): Pizza
}

//Concrete Builder
class PizzaOver implements IPizzaBuilder {
    
    pendingOrder: IPizza

    constructor(){
        this.pendingOrder = {
            toppings: [],
            crust: Crust.THIN,
            size: Size.SM,
            sauce: Sauce.MARINARA,
            cut: Cut.SQUARE
        }
        
    }

    addTopping(topping: Topping){
        this.pendingOrder.toppings.push(topping)
        return this
    }

    setCrust(crust: Crust.THICK | Crust.THIN){
        this.pendingOrder.crust = crust
        return this
    }

    setSize(size: Size.SM | Size.MD | Size.LG){
        this.pendingOrder.size = size
        return this
    }

    setSauce(sauce: Sauce.ALFREDO | Sauce.MARINARA | Sauce.BBQ){    
        this.pendingOrder.sauce = sauce
        return this
    }

    setCut(cut: Cut.SQUARE | Cut.TRIANGLE){
        this.pendingOrder.cut = cut
        return this
    }

    bake(){
        const pizzaOrder: IPizza = {
            toppings: this.pendingOrder.toppings,
            crust: this.pendingOrder.crust,
            size: this.pendingOrder.size,
            sauce: this.pendingOrder.sauce,
            cut: this.pendingOrder.cut
        }
        return new Pizza(pizzaOrder)
    }    
}

//Product
class Pizza implements IPizza {
    
    toppings: Topping[]
    crust: Crust.THIN | Crust.THICK
    size: Size.SM | Size.MD | Size.LG
    sauce: Sauce.ALFREDO | Sauce.MARINARA | Sauce.BBQ
    cut: Cut.SQUARE | Cut.TRIANGLE

    constructor(pizzaOrder: IPizza){   
        this.toppings = pizzaOrder.toppings
        this.crust = pizzaOrder.crust
        this.size = pizzaOrder.size
        this.sauce = pizzaOrder.sauce
        this.cut = pizzaOrder.cut
    }

    eat(){
        console.log('You take a bite of the pizza') 
        console.log('Yum!')
    }

}