class Bank {
    // The underscore prefix is a convention used to indicate that the member is intended to be private
    private _name:string
    private _balance:number

    constructor(name:string, balance:number) {
        this._name = name
        this._balance = balance
    }

    // retrieve name and balance
    get name():string {
        return this._name;
    }

    get balance():number {
        return this._balance
    }

    deposit(amount:number):void {
        if (amount <= 0) {
            throw console.error("must be a positive number");
        }
        this._balance += amount
        console.log(`${this._name} balance has been added by ${amount}. Total balance: ${this._balance}`)
    }

    withdraw(amount:number):void {
        if (amount <= 0 || this._balance <= amount) {
            throw console.error("Your cannot withdraw the money!");
        }
        this._balance -= amount
        console.log(`${this._name} has total of ${this._balance}, and just withdraw ${amount}`)
    }
}

const rizq = new Bank("rizq", 10000)
rizq.withdraw(500)
rizq.deposit(200)