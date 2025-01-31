```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed"; // Or return a default value like 0 or NaN
  }
  return a / b;
}

module.exports = {add, subtract, multiply, divide};
```