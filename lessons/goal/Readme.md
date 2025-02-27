Write tests for the function get(obj, key, defaultValue). This function retrieves a value from an object if the key exists in that object. Otherwise, it returns defaultValue.

```javascript
// https://lodash.com/docs#get
get({ hello: 'world' }, 'hello'); // world
get({ hello: 'world' }, 'hello', 'kitty'); // 'world'
get({}, 'hello', 'kitty'); // 'kitty'
```

Tests should be built on the same principle as described in the lesson theory: checking via if and excluding in case of test failure.
