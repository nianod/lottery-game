

// deposit some money
//determine number pf lines to bet
//collect a bet amount
//spin slot machine
//check if the user won
//give the user their winnings
//play again

const prompt = require("prompt-sync")(); //accepting user input

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Do you like gambling? pr maybe git a try? ", function(gamble) {
    if(gamble === "yes".toLowerCase){
        console.log("well let's continue");
        
    } else {
        exit();
    }
})
//Declaring Global Variables
const ROWS = 3;
const COLUMNS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}
const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}



deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter deposit amount: ");
        const numDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numDepositAmount) || numDepositAmount <= 0 ) {
            console.log("invalid deposit amount, try again dude!");
        } else {
            return numDepositAmount
        }
    }
  
};

 const getnumOfLines = () => {
    while(true) {
        const lines = prompt("Enter number of lines to bet on (1-3): ");
        const numOfLines = parseFloat(lines);
    
        if (isNaN(numOfLines) || numOfLines <= 0  || numOfLines > 3) {
            console.log("invalid number of lines, try again dude!");
        } else {
            return numOfLines;
        }
    }
 };

 const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total amount of bet per line based on your balance: ");
        const numBet = parseFloat(bet);
    
        if (isNaN(numBet) || numBet <= 0  || numBet > balance / lines) {
            console.log("Balance too low to complete the Action. Please recharge your account");
        } else {
            return numBet;
        }
    }
 };

 function playSpin() {
    const symbols = []; // reference data type which can be manipulated
    for (const[symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for(let i = 0; i < count; i++) {
            symbols.push(symbol)
        }

    };
    let elements = [[],[],[]];
     for(let i = 0; i < COLUMNS; i++){
        const elementsSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++) {
            const randomnum = Math.floor(Math.random() * elementsSymbols.length)
            const newSelectedSymbols = elementsSymbols[randomnum]
            elements[i].push(newSelectedSymbols);
            elementsSymbols.splice(randomnum, 1);
        }
    };

    return elements;
};

const playerWin = () => {
    while (true) {
        
    }
}

let balance = deposit();
console.log(`deposited amount: ${balance}`)

const numOfLines = getnumOfLines();
console.log(`numOfLines: ${numOfLines}`);

const bet = getBet(balance, numOfLines);
console.log(`Bet amount: ${bet}`);

const elements = playSpin();
console.log(elements);
