

interface IShippingInformation {
    shippingInformation: {
        sender: string,
        recipient: string,
        shippingId: number
    }
}

//Abstract Factory Interface
interface IShippingFactory {
    createAccountingEngine(): IAccountingEngine | IInternationalAccountingEngine
    createLabelingEngine(): ILabelEngine | IInternationalLabelEngine
}

//Abstract Product
interface IAccountingEngine {
    calculateCost(miles: number, baseRate: number): {
        cost: number
    }
}

interface IInternationalAccountingEngine {
    calculateCost(miles: number, baseRate: number, customsFee: number, internationalHandling: number): {
        cost: number
    }
}

//Abstract Product

interface ILabelEngine {
    generateLabel(sender: string, recipient: string, shippingId: number): IShippingInformation
}

interface IInternationalLabelEngine {
    generateLabel(sender: string, recipient: string, shippingId: number, customsFee: number): IShippingInformation & {
        customsFee: number
    }
}

//Concrete Factory

class DomesticShippingFactory implements IShippingFactory {

    createAccountingEngine(): IAccountingEngine {
        return new AccountingEngine()
    }

    createLabelingEngine(): ILabelEngine {
        return new LabelEngine()
    }
}

//Concrete Factory

class InternationalShippingFactory implements IShippingFactory {

    createAccountingEngine(): IInternationalAccountingEngine {
        return new InternationalAccountingEngine()
    }

    createLabelingEngine(): IInternationalLabelEngine {
        return new InternationalLabelEngine()
    }
}

//Concrete Product (Accounting Engines)

class AccountingEngine implements IAccountingEngine {

    calculateCost(miles: number, baseRate: number): { cost: number } {
        const cost = miles * baseRate
        return {
            cost
        }
    }

}

class InternationalAccountingEngine implements IInternationalAccountingEngine {

    calculateCost(miles: number, baseRate: number, customsFee: number, internationalHandling: number): { cost: number } {
        const cost = (miles * baseRate) + customsFee + internationalHandling
        return {
            cost
        }
    }

}

//Concrete Product (Labeling Engines)

class LabelEngine implements ILabelEngine {
    generateLabel(sender: string, recipient: string, shippingId: number): IShippingInformation {
        return {
            shippingInformation: {
                sender,
                recipient,
                shippingId
            }
        }
    }
}

class InternationalLabelEngine implements IInternationalLabelEngine {
    generateLabel(sender: string, recipient: string, shippingId: number, customsFee: number): IShippingInformation & { customsFee: number } {
        return {
            shippingInformation: {
                sender,
                recipient,
                shippingId
            },
            customsFee
        }
    }
}




//wouldn't make sense in smaller systems







