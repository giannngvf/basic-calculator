# Basic Calculator

## Description
This project is a simple calculator implemented using HTML, CSS, and JavaScript. It supports basic arithmetic operations, memory functions, and binary conversion. The calculator has a user-friendly interface and provides immediate feedback for all operations.

## Features
- **Basic Arithmetic Operations**: Perform addition, subtraction, multiplication, and division.
- **Binary Conversion**: Convert decimal numbers to binary.
- **Memory Functions**: Store, recall, add to, and subtract from memory.
- **Clear and Delete Functions**: Clear the entire input or delete the last character.

## Components
1. **HTML/CSS Interface**:
   - A visually appealing and responsive calculator interface designed using HTML and CSS.
   - Buttons for digits, operations, memory functions, clear, delete, and equals.

2. **JavaScript Functionality**:
   - **Event Listener for Button Clicks**: Handles user interactions by adding event listeners to calculator buttons.
   - **Input Handling**: Functions to append digits to the current input and handle decimal points.
   - **Operation Setting**: Functions to set the current arithmetic operation and prepare inputs for evaluation.
   - **Evaluation and Calculation**: Functions to evaluate arithmetic expressions and calculate results.
   - **Memory Operations**: Functions to handle memory storage, recall, addition, and subtraction.
   - **Binary Conversion**: Function to convert the current input to binary.

## Code Overview

### Variables and Constants
- `display`: The display element to show input and results.
- `operators`: Array of supported arithmetic operators.
- `currentInput`, `currentOperation`, `previousInput`: Variables to manage the current state of the input and operations.
- `resetInput`: Boolean to control when to reset the current input.
- `memory`: Variable to store the memory value.

### Event Listener for Button Clicks
- Listens for clicks on calculator buttons and triggers corresponding functions based on the button's characteristics.

### Function: appendToCurrentInput(val)
- Appends a value to the current input.
- Prevents multiple decimal points in the input.
- Resets input if necessary.

### Function: setOperation(op)
- Sets the current arithmetic operation.
- Evaluates the previous input if applicable.

### Function: evaluate()
- Evaluates the current arithmetic expression based on the set operation.
- Returns the result as a string.

### Function: clearAll()
- Clears all inputs and resets the display.

### Function: calculateResult()
- Calculates the result of the current arithmetic expression and updates the display.

### Function: handleMemoryOperation(id)
- Handles memory operations: clear, recall, add, and subtract.
