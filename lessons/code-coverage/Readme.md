### tests/function.test.js
Write the missing checks to test the getDaysInMonth(month, year) function. The function returns the number of days in the specified month in the specified year. Arguments:

- month is a number from 1 to 12. If a non-existent month is specified, the function returns null.
- year is a number. The function takes into account whether a leap year or a regular year is specified, and returns the corresponding number of days in February.

Example of the function:

```javascript
getDaysInMonth(4, 2023); // 30
```
You can organize the work in this exercise as follows:

1. Run the make test-coverage command in the terminal, and generate a report on code coverage by tests.

2. Examine the resulting statistics, pay attention to the Uncovered Line column. It shows which lines in the function code are not covered by tests.

3. The code of the function that needs to be covered by tests is located in the implementations/getDaysInMonth.js directory. Study its implementation and understand what is happening in the uncovered lines. This will help you understand what other cases need to be tested.

4. Add tests for the functionality not covered by the tests.

The testing will be considered successful if the tests "fail" on the incorrect versions of the functions. If any of the incorrect implementation options pass, this will mean that the function is not covered by the tests, and the solution will not be counted.