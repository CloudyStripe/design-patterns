// Abstract Product
interface IProduct {
    name: string
    price: number
}   

// Creator
interface IProductFactory {
    createProduct(): IProduct
}

// Concrete Product
class ConcreteProduct implements IProduct {
    name: string
    price: number
}   

// Concrete Creator
class ConcreteProductFactory implements IProductFactory {
    createProduct(): IProduct {
        return new ConcreteProduct()
    }
}