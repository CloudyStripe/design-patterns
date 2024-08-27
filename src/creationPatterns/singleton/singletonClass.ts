export class MasterLogger {
    static instance: MasterLogger;
    private pendingLogs: string[];
  
    private constructor() {
      this.pendingLogs = [];
      if (!MasterLogger.instance) {
        MasterLogger.instance = new MasterLogger();
      }
      
      console.log('MasterLogger instance already created');
      return MasterLogger.instance;
    }

    log(message: string): void {
      this.pendingLogs.push(message);
      console.log(`Logged: ${message}`);
    }
  
    sendLogs(): void {
      if (this.pendingLogs.length === 0) {
        console.log('No logs to send.');
        return;
      }

      console.log('Sending logs:', this.pendingLogs);
  
      this.pendingLogs = [];
    }
}