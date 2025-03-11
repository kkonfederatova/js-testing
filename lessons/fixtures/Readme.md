Test a function that converts various input formats to HTML output.

```javascript
// yml/json/csv are supported
const html1 = toHtmlList('/path/to/yaml/file');
const html2 = toHtmlList('/path/to/json/file');
const html3 = toHtmlList('/path/to/csv/file');
```
The function takes a file path and returns HTML as a string.

Each of the input files for this function contains a list of elements that form the <ul> element.