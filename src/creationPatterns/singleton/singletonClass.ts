export class MasterLogger {
    private static instance: MasterLogger | null = null;
    private pendingLogs: string[] = [];
  
    private constructor() {
        // Private constructor to prevent direct construction calls with the `new` operator.
    }

    public static getInstance(): MasterLogger {
        if (!MasterLogger.instance) {
            MasterLogger.instance = new MasterLogger();
        }
        return MasterLogger.instance;
    }

    public log(message: string): void {
        this.pendingLogs.push(message);
        console.log(`Logged: ${message}`);
    }
  
    public sendLogs(): void {
        if (this.pendingLogs.length === 0) {
            console.log('No logs to send.');
            return;
        }

        console.log('Sending logs:', this.pendingLogs);
  
        this.pendingLogs = [];
    }
}
