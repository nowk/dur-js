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

  it("FIX returns 59 seconds", function() {
    {
      var d = new Duration(59000);
      assert.equal(0, d.minutes());
      assert.equal(59, d.seconds());
    }

    {
      var d = new Duration(60000);
      assert.equal(1, d.minutes());
      assert.equal(0, d.seconds());
    }
  });

  it("decrements the existing duration", function() {
    var d = new Duration(15465601000);
    d.decrement(1000);
    assert.equal(179, d.days());
    assert.equal(0, d.hours());
    assert.equal(0, d.minutes());
    assert.equal(0, d.seconds());
    assert.equal(0, d.milliseconds());

    var e = new Duration(1000);
    d.decrement(e);
    assert.equal(178, d.days());
    assert.equal(23, d.hours());
    assert.equal(59, d.minutes());
    assert.equal(59, d.seconds());
    assert.equal(0, d.milliseconds());
  });
});
