Write tests for the set(obj, path, value) function that returns an object in which it modifies or adds a value at the specified path.

This function mutates the object, so each test run will make changes to the original object. Build the testing so that the tests are independent of each other, and each check is performed against the original object.

```javascript
const object = { a: [{ b: { c: 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z); // => 5
```