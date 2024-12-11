// deposit some money
//determine number pf lines to bet
//collect a bet amount
//spin slot machine
//check if the user won
//give the user their winnings
//play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0 ) {
            console.log("invalid deposit amount, try again dude!")
        } else {
            return numberDepositAmount
        }
    }
  
};

 const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0  || numberOfLines > 3) {
            console.log("invalid number of lines, try again dude!");
        } else {
            return numberOfLines;
        }
    }
 };

 const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter the total bet: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0  || numberBet > balance) {
            console.log("invalid bet, try again dude!");
        } else {
            return numberBet;
        }
    }
 };

let balance = deposit();
console.log(`deposited amount: ${balance}`)

const numberOfLines = getNumberOfLines();
console.log(`numberOfLines: ${numberOfLines}`);


const bet = getBet(balance);
console.log(`Bet amount: ${bet}`);
