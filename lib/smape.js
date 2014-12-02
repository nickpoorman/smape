/**
 * function for smape calculations
 * https://en.wikipedia.org/wiki/Symmetric_mean_absolute_percentage_error
 * range is (0, 200)
 */

module.exports = function smape(dataset) {
  var datum;
  var sum = 0;
  for (var i = dataset.length - 1; i >= 0; i--) {
    datum = dataset[i];
    sum += Math.abs(datum.actual - datum.predicted) / ((Math.abs(datum.actual) + Math.abs(datum.predicted)) / 2);
  };
  return (sum / dataset.length) * 100;
}
