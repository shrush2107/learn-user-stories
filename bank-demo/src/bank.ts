interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

export default class Bank {
    private accounts: BankAccount[] = [];

    /**
     * Finds a bank account by its account number.
     * 
     * @private
     * @param {string} accountNumber - The account number to search for.
     * @returns {BankAccount | undefined} - The bank account object if found, otherwise undefined.
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * Creates a new bank account.
     * 
     * @public
     * @param {string} name - The name of the account holder.
     * @param {number} age - The age of the account holder.
     * @param {string} accountNumber - The unique account number for the new account.
     * @returns {BankAccount | string} - Returns the new BankAccount object if successful, or an error message if the account number already exists.
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount | string {
        // Check if the account number already exists
        if (this.findAccount(accountNumber)) {
            return 'Error: Account number already exists.';
        }

        // Create a new account if the account number is unique
        const newAccount: BankAccount = {
            name: name,
            age: age,
            accountNumber: accountNumber,
            balance: 0, // Initial balance is 0
        };

        this.accounts.push(newAccount);
        return newAccount;
    }


    /**
     * Deposits a specified amount of money into an account.
     * 
     * @public
     * @param {string} accountNumber - The account number of the account to deposit money into.
     * @param {number} amount - The amount of money to deposit. Must be a positive number.
     * @returns {string} - Returns a success message with the updated balance if successful, or an error message if the account does not exist or the amount is invalid.
     */

    // Public method to deposit money into an account
    public deposit(accountNumber: string, amount: number): string {
    const account = this.findAccount(accountNumber);

    // Check if the account exists
    if (!account) {
        return 'Error: Account does not exist.';
    }

    // Check if the deposit amount is valid
    if (amount <= 0) {
        return 'Error: Deposit amount must be positive.';
    }

    // Deposit the amount and update the balance
    account.balance += amount;
    return `Deposit successful. New balance: ${account.balance}`;
    }


    /**
     * Returns all bank accounts.
     * 
     * @public
     * @returns {BankAccount[]} - An array of all BankAccount objects.
     */
    public getAccounts(): BankAccount[] {
        return this.accounts;
    }
}
