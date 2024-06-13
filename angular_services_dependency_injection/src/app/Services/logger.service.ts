export class LoggerService{
    loggerMessage(name: string, status: string){
        console.log(`A new user created with ${name} and status ${status}.`)
    }
}