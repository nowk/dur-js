/* jshint node: true */

var assert = require("chai").assert;
var Duration = require("..");

describe("duration", function() {
  it("returns the calculation of each unit", function() {
    var d = new Duration(15541441943);
    assert.equal(179, d.days());
    assert.equal(21, d.hours());
    assert.equal(4, d.minutes());
    assert.equal(1, d.seconds());
    assert.equal(943, d.milliseconds());
  });

  it("returns the calculations as a total", function() {
    var d = new Duration(15541441943);
    assert.equal(180, d.inDays());
    assert.equal((179 * 24) + 22, d.inHours());
    assert.equal((((179 * 24) + 21) * 60) + 5, d.inMinutes());
    assert.equal((((((179 * 24) + 21) * 60) + 4) * 60) + 2, d.inSeconds());
    assert.equal(15541441943, d.inMilliseconds());
  });
});
