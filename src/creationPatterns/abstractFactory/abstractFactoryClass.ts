

interface IShippingInformation {
    shippingInformation: {
        sender: string,
        recipient: string,
        shippingId: number
    }
}

// Abstract Factory Interface
interface IShippingFactory {
    createAccountingEngine(): IAccountingEngine
    createLabelingEngine(): ILabelEngine
}

// Abstract Product Interfaces
interface IAccountingEngine {
    calculateCost(miles: number, baseRate: number, customsFee?: number, internationalHandling?: number): {
        cost: number
    }
}

interface ILabelEngine {
    generateLabel(sender: string, recipient: string, shippingId: number, customsFee?: number): IShippingInformation
}

// Concrete Factories
class DomesticShippingFactory implements IShippingFactory {
    createAccountingEngine(): IAccountingEngine {
        return new DomesticAccountingEngine()
    }

    createLabelingEngine(): ILabelEngine {
        return new DomesticLabelEngine()
    }
}

class InternationalShippingFactory implements IShippingFactory {
    createAccountingEngine(): IAccountingEngine {
        return new InternationalAccountingEngine()
    }

    createLabelingEngine(): ILabelEngine {
        return new InternationalLabelEngine()
    }
}

// Concrete Products (Accounting Engines)
class DomesticAccountingEngine implements IAccountingEngine {
    calculateCost(miles: number, baseRate: number): { cost: number } {
        const cost = miles * baseRate
        return { cost }
    }
}

class InternationalAccountingEngine implements IAccountingEngine {
    calculateCost(miles: number, baseRate: number, customsFee: number, internationalHandling: number): { cost: number } {
        const cost = (miles * baseRate) + customsFee + internationalHandling
        return { cost }
    }
}

// Concrete Products (Labeling Engines)
class DomesticLabelEngine implements ILabelEngine {
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

class InternationalLabelEngine implements ILabelEngine {
    generateLabel(sender: string, recipient: string, shippingId: number, customsFee: number): IShippingInformation {
        return {
            shippingInformation: {
                sender,
                recipient,
                shippingId
            },
            customsFee
        } as IShippingInformation
    }
}

// This pattern is particularly useful in larger systems with multiple product families
