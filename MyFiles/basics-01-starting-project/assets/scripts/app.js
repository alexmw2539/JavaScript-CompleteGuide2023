const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
 return parseInt(userInput.value);
}

function createAndWriteOutput(operater, resultBeforeCalc, calcNumber) {
 const calcDescription = `${resultBeforeCalc} ${operater} ${calcNumber}`;
 outputResult(currentResult, calcDescription);
}

function writetolog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
     };
     logEntries.push(logEntry);
     console.log(logEntries); 
}

function add() {
 const enteredNumber = getUserNumberInput();
 const initialResult = currentResult;
 currentResult += enteredNumber;
 createAndWriteOutput('+', initialResult, enteredNumber);
writetolog('ADD',initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writetolog('SUBTRACT',initialResult, enteredNumber, currentResult);
} 

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writetolog('MULTIPLY',initialResult, enteredNumber, currentResult);
} 

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writetolog('DIVIDE',initialResult, enteredNumber, currentResult);
} 

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);