

interface IShippingInformation {
    sender: string,
    recipient: string,
    shippingId: number
}

//Abstract Factory Interface

interface IShippingFactory {
    accountingEngine(miles: number): number
    labelingEngine(sender: string, recipient: string, shippingId: number): ILabel | InternationalLabel
}

//Abstract Product

interface ILabel {
    shippingInformation: IShippingInformation
}

//Abstract Product

interface InternationalLabel extends ILabel {
    customs: number
}

class DomesticShippingFactory implements IShippingFactory {

    accountingEngine(miles: number): number {
        return 5
    }

    labelingEngine(sender: string, recipient: string, shippingId: number): ILabel {
        return {
            shippingInformation: {
                sender: sender,
                recipient: recipient,
                shippingId: shippingId
            }
        }
    }
}

class InternationalShippingFactory implements IShippingFactory {

    accountingEngine(miles: number): number {
        return 5
    }

    labelingEngine(sender: string, recipient: string, shippingId: number): InternationalLabel {
        return {
            shippingInformation: {
                sender: sender,
                recipient: recipient,
                shippingId: shippingId,
            },
            customs: 5
        }
    }
}


//wouldn't make sense in smaller systems







