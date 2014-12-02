# smape

Symmetric mean absolute percentage error (SMAPE).

# usage
## smape(dataset)

Calculate the Mean absolute percentage error for a dataset.

# example

```javascript
var smape = require('smape');
var dataset = [{
  actual: 112.3,
  predicted: 124.7
}, {
  actual: 108.4,
  predicted: 103.7
}, {
  actual: 148.9,
  predicted: 116.6
}, {
  actual: 117.4,
  predicted: 78.5
}];

smape(dataset)
// 17.55115979430067
```


# License

(The MIT License)

Copyright (c) 2014 Nick Poorman <mail@nickpoorman.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
