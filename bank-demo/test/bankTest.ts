// Import the Bank class
import Bank from "../src/bank";

const bank = new Bank();

console.log("User Story 1:");
// Scenario 1: Successful account creation
const account1 = bank.createAccount("John Doe", 29, "455765343");
if (typeof account1 === 'object' && account1.accountNumber === "455765343") {
    console.log("Scenario 1 passed: Account created successfully");
} else {
    console.log("Scenario 1 failed");
}

// Scenario 2: Failed account creation (Duplicate account number)
const account2 = bank.createAccount("Jane Doe", 25, "455765343");
if (typeof account2 === 'string' && account2 === "Error: Account number already exists.") {
    console.log("Scenario 2 passed: Duplicate account number rejected");
} else {
    console.log("Scenario 2 failed");
}


// Create an account first
bank.createAccount("John Doe", 29, "455765343");

console.log("User Story 2:");
// Scenario 1: Successful deposit
const deposit1 = bank.deposit("455765343", 500);
if (deposit1.includes("Deposit successful")) {
    console.log("Scenario 1 passed: Successful deposit");
} else {
    console.log("Scenario 1 failed");
}

// Scenario 2: Failed deposit due to invalid account
const deposit2 = bank.deposit("999999999", 200);
if (deposit2 === 'Error: Account does not exist.') {
    console.log("Scenario 2 passed: Invalid account deposit rejected");
} else {
    console.log("Scenario 2 failed");
}

// Scenario 3: Failed deposit due to invalid amount (negative deposit)
const deposit3 = bank.deposit("455765343", -100);
if (deposit3 === 'Error: Deposit amount must be positive.') {
    console.log("Scenario 3 passed: Negative deposit rejected");
} else {
    console.log("Scenario 3 failed");
}

// Scenario 4: Failed deposit due to invalid amount (zero deposit)
const deposit4 = bank.deposit("455765343", 0);
if (deposit4 === 'Error: Deposit amount must be positive.') {
    console.log("Scenario 4 passed: Zero deposit rejected");
} else {
    console.log("Scenario 4 failed");
}

console.log("User Story 3:");
// Add money to the account for withdrawal
bank.deposit("455765343", 1000); 

// Scenario 1: Successful withdrawal
const withdraw1 = bank.withdraw("455765343", 500);
if (withdraw1.includes("Withdrawal successful")) {
    console.log("Scenario 1 passed: Successful withdrawal");
} else {
    console.log("Scenario 1 failed");
}

// Scenario 2: Failed withdrawal due to insufficient funds
const withdraw2 = bank.withdraw("455765343", 6000);
if (withdraw2 === 'Error: Insufficient funds.') {
    console.log("Scenario 2 passed: Insufficient funds withdrawal rejected");
} else {
    console.log("Scenario 2 failed");
}

// Scenario 3: Failed withdrawal due to invalid account
const withdraw3 = bank.withdraw("999999999", 200);
if (withdraw3 === 'Error: Account does not exist.') {
    console.log("Scenario 3 passed: Invalid account withdrawal rejected");
} else {
    console.log("Scenario 3 failed");
}

// Scenario 4: Failed withdrawal due to invalid amount (negative withdrawal)
const withdraw4 = bank.withdraw("455765343", -100);
if (withdraw4 === 'Error: Withdrawal amount must be positive.') {
    console.log("Scenario 4 passed: Negative withdrawal rejected");
} else {
    console.log("Scenario 4 failed");
}

console.log("User Story 4:")

// Scenario 1: Successful balance check
const balance1 = bank.checkBalance("455765343");
if (balance1 === 'Current balance: 1000') {
    console.log("Scenario 1 passed: Balance checked successfully");
} else {
    console.log("Scenario 1 failed");
}

// Scenario 2: Failed balance check due to invalid account
const balance2 = bank.checkBalance("999999999");
if (balance2 === 'Error: Account does not exist.') {
    console.log("Scenario 2 passed: Invalid account balance check rejected");
} else {
    console.log("Scenario 2 failed");
}
