// Import the Bank class
import Bank from "../src/bank";

const bank = new Bank();

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
