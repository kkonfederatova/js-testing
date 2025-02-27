Write tests for the function take(items, n), which returns the first n elements from an array. By default, n is 1. If n is negative, an empty array is returned.

```javascript
take([], 2); // []
take([1, 2, 3]); // [1]
take([1, 2, 3], 2); // [1, 2]
take([4, 3], 9); // [4, 3]
take([4, 3], -1); // []
```
