export enum Topping {
    PEPPORONI = 'PEPPORONI',
    SAUSAGE = 'SAUSAGE',
    MUSHROOM = 'MUSHROOM',
    ONION = 'ONION',
    PINEAPPLE = 'PINEAPPLE',
    BACON = 'BACON',
    HAM = 'HAM',
    OLIVE = 'OLIVE',
    BELLPEPPER = 'BELLPEPPER',
    JALAPENO = 'JALAPENO',
}

export enum Crust {
    THIN = 'THIN',
    THICK = 'THICK'
}

export enum Size {
    SM = 'SM',
    MD = 'MD',
    LG = 'LG'
}

export enum Sauce {
    ALFREDO = 'ALFREDO',
    MARINARA = 'MARINARA',
    BBQ = 'BBQ'
}

export enum Cut {
    SQUARE = 'SQUARE',
    TRIANGLE = 'TRIANGLE'
}

export interface IPizza {
    toppings: Topping[]
    crust: Crust.THIN | Crust.THICK
    size: Size.SM | Size.MD | Size.LG
    sauce: Sauce.ALFREDO | Sauce.MARINARA | Sauce.BBQ
    cut: Cut.SQUARE | Cut.TRIANGLE
}