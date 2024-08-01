// Variables and constants
const display = document.getElementById('display');
const operators = ['+', '−', '×', '÷'];
let currentInput = '';
let currentOperation = '';
let previousInput = '';
let resetInput = false;
let memory = 0;

// Event listener for button clicks
document.querySelector('.buttons').addEventListener('click', (event) => {
    const button = event.target;
    const value = button.textContent;

    // Button actions based on their characteristics
    if (button.classList.contains('functional')) {
        if (button.id === 'binary') {
            try {
                // Convert current input to binary
                const decimalNumber = parseFloat(currentInput); // Parse the decimal input
                const binaryRepresentation = decimalNumber.toString(2); // Convert to binary
                display.value = binaryRepresentation; // Display the binary value
            } catch (error) {
                display.value = 'Error';
            }
        
        } else if (button.id === 'clear') {
            clearAll();
        } else if (button.id === 'del') {
            // Remove last character from current input
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (button.id.startsWith('memory')) {
            handleMemoryOperation(button.id);
        }
    } else if (operators.includes(value)) {
        setOperation(value);
    } else if (value === '=') {
        calculateResult();
    } else {
        appendToCurrentInput(value);
    }
});

// Function to append values to the current input
function appendToCurrentInput(val) {
    if (val === '.' && currentInput.includes('.')) {
        return;
    }

    if (resetInput) {
        currentInput = '';
        resetInput = false;
    }

    currentInput += val;
    display.value = currentInput;
}

// Function to set the arithmetic operation
function setOperation(op) {
    if (previousInput && currentInput && currentOperation) {
        previousInput = evaluate();
        display.value = previousInput;
        currentInput = '';
    } else if (currentInput && !previousInput) {
        previousInput = currentInput;
        currentInput = '';
    }

    currentOperation = op;
    resetInput = true;
}

// Function to evaluate arithmetic expressions
function evaluate() {
    let result = 0;
    const pInput = parseFloat(previousInput);
    const cInput = parseFloat(currentInput);

    if (currentOperation === '+') {
        result = pInput + cInput;
    } else if (currentOperation === '−') {
        result = pInput - cInput;
    } else if (currentOperation === '×') {
        result = pInput * cInput;
    } else if (currentOperation === '÷') {
        if (cInput !== 0) {
            result = pInput / cInput;
        } else {
            clearAll();
            return;
        }
    } else {
        return;
    }

    return result.toString();
}

// Function to clear all inputs and display
function clearAll() {
    currentInput = '';
    currentOperation = '';
    previousInput = '';
    display.value = '';
}

// Function to calculate the result of arithmetic expression
function calculateResult() {
    if (previousInput && currentInput && currentOperation) {
        currentInput = evaluate();
        display.value = currentInput;
        previousInput = currentInput;
        currentOperation = '';
        resetInput = true;
    }
}

// Function to handle memory operations
function handleMemoryOperation(id) {
    if (id === 'memory-clear') {
        memory = 0;
    } else if (id === 'memory-recall') {
        display.value = memory.toString();
        currentInput = memory.toString();
        resetInput = true;
    } else if (id === 'memory-plus') {
        if (currentInput) {
            memory += parseFloat(currentInput);
        }
    } else if (id === 'memory-minus') {
        if (currentInput) {
            memory -= parseFloat(currentInput);
        }
    }
}