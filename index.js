/* jshint node: true */

// time durations
var nanosecond  = exports.nanosecond  = 1;
var microsecond = exports.microsecond = 1000 * nanosecond;
var millisecond = exports.millisecond = 1000 * microsecond;
var second      = exports.second      = 1000 * millisecond;
var minute      = exports.minute      = 60 * second;
var hour        = exports.hour        = 60 * minute;


/*
 * expose
 */

module.exports = Duration;

/*
 * Duration
 *
 * @param {Number} t (tine in int as millisecond)
 * @api public
 * @constructor
 */

function Duration(t) {
  this.t = t;
}

// raw float calculations
var fn = {
  days: function() {
    return this.t / ((hour / millisecond) * 24);
  },
  hours: function() {
    return this.t / (hour / millisecond);
  },
  minutes: function() {
    return this.t / (minute / millisecond);
  },
  seconds: function() {
    return this.t / microsecond;
  }
};

/*
 * days returns the *remaining* days
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.days = function() {
  return  Math.floor(fn.days.call(this));
};

/*
 * hours returns the *remaining* hours
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.hours = function() {
  return Math.floor(fn.hours.call(this) % 24);
};

/*
 * minutes returns the *remaining* minutes
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.minutes = function() {
  return Math.floor(fn.minutes.call(this) % 60);
};

/*
 * seconds returns the *remaining* seconds
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.seconds = function() {
  return Math.floor(fn.seconds.call(this) % 10);
};

/*
 * milliseconds returns the remaning milliseconds
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.milliseconds = function() {
  return this.t % microsecond;
};

/*
 * inDays returns the duration in days (rounded)
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.inDays = function() {
  return  Math.ceil(fn.days.call(this));
};

/*
 * inHours returns the duration in hours (rounded)
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.inHours = function() {
  return Math.ceil(fn.hours.call(this));
};

/*
 * inMinutes returns the duration in minutes (rounded)
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.inMinutes = function() {
  return Math.ceil(fn.minutes.call(this));
};

/*
 * inSeconds returns the duration in seconds (rounded)
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.inSeconds = function() {
  return Math.ceil(fn.seconds.call(this));
};

/*
 * inMilliseconds returns the original number used to create the duration
 *
 * @return {Number}
 * @api public
 */

Duration.prototype.inMilliseconds = function() {
  return this.t;
};


