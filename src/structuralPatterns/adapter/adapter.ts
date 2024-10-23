//allows objects with incompatible interfaces to collaborate

interface IPaymentProcessor {
    processPayment(amount: number): boolean;
    refundPayment(transactionID: number): boolean;
}

interface ILegacyPaymentProcessor {
    makePayment(amount: number): string; // returns transactionID
    refundTransaction(transactionID: number): boolean;
}

//Modern system that we typially use

export class PaymentProcessor implements IPaymentProcessor {
    
    private userID: number;

    constructor(userID: number) {
        this.userID = userID;
    }

    processPayment(amount: number): boolean {
        console.log(`Payment processed for user ${this.userID} with amount ${amount}`);
        return true;
    }

    refundPayment(transactionID: number): boolean {
        console.log(`Payment refunded for user ${this.userID} with transactionID ${transactionID}`);
        return true;
    }

}

//Old system that we want to adapt (Adaptee)

export class LegacyPaymentProcessor implements ILegacyPaymentProcessor {
    private userID: number;

    constructor(userID: number) {
        this.userID = userID;
    }

    makePayment(amount: number): string {
        console.log(`Payment processed with amount ${amount}`);
        return '123456';
    }

    refundTransaction(transactionID: number): boolean {
        console.log(`Payment refunded with transactionID ${transactionID}`);
        return true;
    }
}

//Adapter

export class LegacyPaymentProcessorAdapter implements IPaymentProcessor {
    private legacyPaymentProcessor: LegacyPaymentProcessor;

    constructor(userID: number, legacyPaymentProcessor: LegacyPaymentProcessor) {
        this.legacyPaymentProcessor = legacyPaymentProcessor;
    }

    processPayment(amount: number): boolean {
        this.legacyPaymentProcessor.makePayment(amount);
        return true;
    }

    refundPayment(transactionID: number): boolean {
        this.legacyPaymentProcessor.refundTransaction(transactionID);
        return true;
    }
}