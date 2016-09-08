```javascript
var lastDateOfMonth = require('last-date-of-month')
var assert = require('assert')

// January 31, 2016
assert.equal(lastDateOfMonth(2016, 1), 31)

// February 28, 2015
assert.equal(lastDateOfMonth(2015, 2), 28)

// February 29, 2016, a leap year
assert.equal(lastDateOfMonth(2016, 2), 29)
```
