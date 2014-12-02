var should = require('should');
var smape = require('../');

describe('smape', function() {

  it('should produce a valid symmetric mean absolute percentage error', function() {

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

    (Math.round(smape(dataset) * 10) / 10).should.equal(19.7);
  });

  it('should produce a valid symmetric mean absolute percentage error', function() {

    var dataset = [{
      actual: -2.83,
      predicted: -0.28
    }, {
      actual: -0.95,
      predicted: -0.90
    }, {
      actual: -0.88,
      predicted: -1.72
    }, {
      actual: 1.21,
      predicted: 1.92
    }, {
      actual: -1.67,
      predicted: -0.17
    }, {
      actual: 0.83,
      predicted: -0.04
    }, {
      actual: -0.27,
      predicted: 1.63
    }, {
      actual: 1.36,
      predicted: -0.12
    }, {
      actual: -0.34,
      predicted: 0.14
    }, {
      actual: 0.48,
      predicted: -1.96
    }, {
      actual: -2.83,
      predicted: 1.30
    }, {
      actual: -0.95,
      predicted: -2.51
    }, {
      actual: -0.88,
      predicted: -0.93
    }, {
      actual: 1.21,
      predicted: 0.39
    }, {
      actual: -1.67,
      predicted: -0.06
    }, {
      actual: -2.99,
      predicted: -1.29
    }, {
      actual: 1.24,
      predicted: 1.41
    }, {
      actual: 0.64,
      predicted: 2.37
    }];

    (Math.round(smape(dataset) * 1000) / 1000).should.equal(124.109);
  });

  it('should produce NaN due to divide by zero', function() {

    var dataset = [{
      actual: 0,
      predicted: 0
    }];

    smape(dataset).should.be.NaN;
  });
});
