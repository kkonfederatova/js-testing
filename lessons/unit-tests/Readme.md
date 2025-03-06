Write tests for the Validator object. This validator checks the correctness of data. It works as follows:

1. The addCheck(fn) method is used to add checks to the validator. Each check is a predicate function that takes the value being checked as input and returns either true or false depending on whether the value meets the validation requirements or not. Checks added to the validator accumulate. Each next added check complements the previous one.

2. The isValid(value) method is used by the Validator user to check that the value matches all added checks. If no checks have been added, any value is considered correct.

```javascript
// Create a validator object
const validator = makeValidator();
// Since no checks were added, any value is valid
validator.isValid('some value'); // true
// Add a check to the validator that the passed value is greater than 5
validator.addCheck((v) => v > 5);
// Add a check that the passed value is even
validator.addCheck((v) => v % 2 === 0);
// Check the values ​​for compliance with all added checks
validator.isValid(3); // false
validator.isValid(4); // false
validator.isValid(7); // false
validator.isValid(8); // true
validator.addCheck(/* add more checks */);
```