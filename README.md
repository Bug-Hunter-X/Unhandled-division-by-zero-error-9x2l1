# Unhandled Division by Zero in Dapp Arithmetic Function

This repository demonstrates a common error in decentralized applications (Dapps): unhandled exceptions.  Specifically, it shows an example of an arithmetic function that doesn't handle division by zero, leading to unexpected behavior and potential vulnerabilities.

## The Bug

The `divide` function in `bug.js` does not properly handle the case where the denominator (`b`) is zero. This results in an uncaught `Error` being thrown when the function is called with `b` set to 0, potentially crashing the Dapp or causing unexpected behavior.

## The Solution

The `bugSolution.js` file provides a corrected version of the `divide` function. This improved version includes a check for `b` being zero. If `b` is zero, instead of throwing an error, the function returns a user-friendly error message or a default value.  This prevents unexpected termination of the Dapp and handles the error gracefully.

This example highlights the importance of robust error handling in Dapps to ensure stability, security and a better user experience.