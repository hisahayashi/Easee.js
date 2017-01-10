/*!
 * SimpleEasing v0.0.11
 * easing animation helper
 * MIT license
 */
var SimpleEasing = (function() {
  'use strict';

  /**
   * [SimpleEasing description]
   */
  SimpleEasing = function(ease, ti, sv, cv) {

    this.ease = ease;
    this.totalIterations = ti
    this.startValue = sv;
    this.changeInValue = cv;

    this.iteration = 0;
    this.value = 0;

    this.bPlay = false;
    this.onComplete = null;

    // easing type check
    if (this[this.ease] == undefined) {
      console.error('InValid: Easing name');
    } else {
      this.start();
    }
  };

  /**
   * [start description]
   * @return {[type]} [description]
   */
  function start() {
    this.bPlay = true;
    this.update();
  };

  /**
   * [stop description]
   * @return {[type]} [description]
   */
  function stop() {
    this.bPlay = false;

    if (typeof this.onComplete == 'function') {
      this.onComplete();
    }
  };

  /**
   * [update description]
   * @return {[type]} [description]
   */
  function update() {
    var that = this;

    this.value = this[this.ease](this.iteration, this.startValue, this.changeInValue, this.totalIterations);

    if (this.iteration < this.totalIterations) {
      this.iteration++;

      requestAnimationFrame(function() {
        that.update();
      });
    } else {
      this.stop();
    }
  };

  /**
   * [remove description]
   * @return {[type]} [description]
   */
  function remove() {

  };

  /**
   * [getValue description]
   * @return {[type]} [description]
   */
  function getValue() {
    return this.value;
  };

  function linearEase(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * currentIteration / totalIterations + startValue;
  };

  function easeInQuad(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (currentIteration /= totalIterations) * currentIteration + startValue;
  };

  function easeOutQuad(currentIteration, startValue, changeInValue, totalIterations) {
    return -changeInValue * (currentIteration /= totalIterations) * (currentIteration - 2) + startValue;
  };

  function easeInOutQuad(currentIteration, startValue, changeInValue, totalIterations) {
    if ((currentIteration /= totalIterations / 2) < 1) {
      return changeInValue / 2 * currentIteration * currentIteration + startValue;
    }
    return -changeInValue / 2 * ((--currentIteration) * (currentIteration - 2) - 1) + startValue;
  };

  function easeInCubic(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * Math.pow(currentIteration / totalIterations, 3) + startValue;
  };

  function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
  };

  function easeInOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
    if ((currentIteration /= totalIterations / 2) < 1) {
      return changeInValue / 2 * Math.pow(currentIteration, 3) + startValue;
    }
    return changeInValue / 2 * (Math.pow(currentIteration - 2, 3) + 2) + startValue;
  };

  function easeInQuart(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * Math.pow(currentIteration / totalIterations, 4) + startValue;
  };

  function easeOutQuart(currentIteration, startValue, changeInValue, totalIterations) {
    return -changeInValue * (Math.pow(currentIteration / totalIterations - 1, 4) - 1) + startValue;
  };

  function easeInOutQuart(currentIteration, startValue, changeInValue, totalIterations) {
    if ((currentIteration /= totalIterations / 2) < 1) {
      return changeInValue / 2 * Math.pow(currentIteration, 4) + startValue;
    }
    return -changeInValue / 2 * (Math.pow(currentIteration - 2, 4) - 2) + startValue;
  };

  function easeInQuint(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * Math.pow(currentIteration / totalIterations, 5) + startValue;
  };

  function easeOutQuint(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 5) + 1) + startValue;
  };

  function easeInOutQuint(currentIteration, startValue, changeInValue, totalIterations) {
    if ((currentIteration /= totalIterations / 2) < 1) {
      return changeInValue / 2 * Math.pow(currentIteration, 5) + startValue;
    }
    return changeInValue / 2 * (Math.pow(currentIteration - 2, 5) + 2) + startValue;
  };

  function easeInSine(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (1 - Math.cos(currentIteration / totalIterations * (Math.PI / 2))) + startValue;
  };

  function easeOutSine(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * Math.sin(currentIteration / totalIterations * (Math.PI / 2)) + startValue;
  };

  function easeInOutSine(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue / 2 * (1 - Math.cos(Math.PI * currentIteration / totalIterations)) + startValue;
  };

  function easeInExpo(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * Math.pow(2, 10 * (currentIteration / totalIterations - 1)) + startValue;
  };

  function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
  };

  function easeInOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
    if ((currentIteration /= totalIterations / 2) < 1) {
      return changeInValue / 2 * Math.pow(2, 10 * (currentIteration - 1)) + startValue;
    }
    return changeInValue / 2 * (-Math.pow(2, -10 * --currentIteration) + 2) + startValue;
  };

  function easeInCirc(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (1 - Math.sqrt(1 - (currentIteration /= totalIterations) * currentIteration)) + startValue;
  };

  function easeOutCirc(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * Math.sqrt(1 - (currentIteration = currentIteration / totalIterations - 1) * currentIteration) + startValue;
  };

  function easeInOutCirc(currentIteration, startValue, changeInValue, totalIterations) {
    if ((currentIteration /= totalIterations / 2) < 1) {
      return changeInValue / 2 * (1 - Math.sqrt(1 - currentIteration * currentIteration)) + startValue;
    }
    return changeInValue / 2 * (Math.sqrt(1 - (currentIteration -= 2) * currentIteration) + 1) + startValue;
  };

  function easeInElastic(currentIteration, startValue, changeInValue, totalIterations) {
    var overshoot = 1.70158;
    var p = 0;
    var a = changeInValue;
    if (currentIteration == 0) return startValue;
    if ((currentIteration /= totalIterations) == 1) return startValue + changeInValue;
    if (!p) p = totalIterations * .3;
    if (a < Math.abs(changeInValue)) {
      a = changeInValue;
      var overshoot = p / 4;
    } else {
      var overshoot = p / (2 * Math.PI) * Math.asin(changeInValue / a);
    }
    return -(a * Math.pow(2, 10 * (currentIteration -= 1)) * Math.sin((currentIteration * totalIterations - overshoot) * (2 * Math.PI) / p)) + startValue;
  };

  function easeOutElastic(currentIteration, startValue, changeInValue, totalIterations) {
    var overshoot = 1.70158;
    var p = 0;
    var a = changeInValue;
    if (currentIteration == 0) return startValue;
    if ((currentIteration /= totalIterations) == 1) return startValue + changeInValue;
    if (!p) p = totalIterations * .3;
    if (a < Math.abs(changeInValue)) {
      a = changeInValue;
      var overshoot = p / 4;
    } else {
      var overshoot = p / (2 * Math.PI) * Math.asin(changeInValue / a);
    }
    return a * Math.pow(2, -10 * currentIteration) * Math.sin((currentIteration * totalIterations - overshoot) * (2 * Math.PI) / p) + changeInValue + startValue;
  };

  function easeInOutElastic(currentIteration, startValue, changeInValue, totalIterations) {
    var overshoot = 1.70158;
    var p = 0;
    var a = changeInValue;
    if (currentIteration == 0) return startValue;
    if ((currentIteration /= totalIterations / 2) == 2) return startValue + changeInValue;
    if (!p) p = totalIterations * (.3 * 1.5);
    if (a < Math.abs(changeInValue)) {
      a = changeInValue;
      var overshoot = p / 4;
    } else {
      var overshoot = p / (2 * Math.PI) * Math.asin(changeInValue / a);
    }
    if (currentIteration < 1) {
      return -.5 * (a * Math.pow(2, 10 * (currentIteration -= 1)) * Math.sin((currentIteration * totalIterations - overshoot) * (2 * Math.PI) / p)) + startValue;
    }
    return a * Math.pow(2, -10 * (currentIteration -= 1)) * Math.sin((currentIteration * totalIterations - overshoot) * (2 * Math.PI) / p) * .5 + changeInValue + startValue;
  };

  function easeInBack(currentIteration, startValue, changeInValue, totalIterations, overshoot) {
    if (overshoot == undefined) {
      overshoot = 1.70158;
    }
    return changeInValue * (currentIteration /= totalIterations) * currentIteration * ((overshoot + 1) * currentIteration - overshoot) + startValue;
  };

  function easeOutBack(currentIteration, startValue, changeInValue, totalIterations, overshoot) {
    if (overshoot == undefined) {
      overshoot = 1.70158;
    }
    return changeInValue * ((currentIteration = currentIteration / totalIterations - 1) * currentIteration * ((overshoot + 1) * currentIteration + overshoot) + 1) + startValue;
  };

  function easeInOutBack(currentIteration, startValue, changeInValue, totalIterations, overshoot) {
    if (overshoot == undefined) {
      overshoot = 1.70158;
    }
    if ((currentIteration /= totalIterations / 2) < 1) return changeInValue / 2 * (currentIteration * currentIteration * (((overshoot *= (1.525)) + 1) * currentIteration - overshoot)) + startValue;
    return changeInValue / 2 * ((currentIteration -= 2) * currentIteration * (((overshoot *= (1.525)) + 1) * currentIteration + overshoot) + 2) + startValue;
  };

  function easeInBounce(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue - this.easeOutBounce(totalIterations - currentIteration, 0, changeInValue, totalIterations) + startValue;
  };

  function easeOutBounce(currentIteration, startValue, changeInValue, totalIterations) {
    if ((currentIteration /= totalIterations) < (1 / 2.75)) {
      return changeInValue * (7.5625 * currentIteration * currentIteration) + startValue;
    } else if (currentIteration < (2 / 2.75)) {
      return changeInValue * (7.5625 * (currentIteration -= (1.5 / 2.75)) * currentIteration + .75) + startValue;
    } else if (currentIteration < (2.5 / 2.75)) {
      return changeInValue * (7.5625 * (currentIteration -= (2.25 / 2.75)) * currentIteration + .9375) + startValue;
    } else {
      return changeInValue * (7.5625 * (currentIteration -= (2.625 / 2.75)) * currentIteration + .984375) + startValue;
    }
  };

  function easeInOutBounce(currentIteration, startValue, changeInValue, totalIterations) {
    if (currentIteration < totalIterations / 2) {
      return this.easeInBounce(currentIteration * 2, 0, changeInValue, totalIterations) * .5 + startValue;
    } else {
      return this.easeOutBounce(currentIteration * 2 - totalIterations, 0, changeInValue, totalIterations) * .5 + changeInValue * .5 + startValue;
    }
  };

  SimpleEasing.prototype = Object.create(new EventEmitter2());
  SimpleEasing.prototype.constructor = SimpleEasing;

  SimpleEasing.prototype.start = start;
  SimpleEasing.prototype.stop = stop;
  SimpleEasing.prototype.update = update;
  SimpleEasing.prototype.remove = remove;

  SimpleEasing.prototype.getValue = getValue;

  SimpleEasing.prototype.linearEase = linearEase;
  SimpleEasing.prototype.easeInQuad = easeInQuad;
  SimpleEasing.prototype.easeOutQuad = easeOutQuad;
  SimpleEasing.prototype.easeInOutQuad = easeInOutQuad;
  SimpleEasing.prototype.easeInCubic = easeInCubic;
  SimpleEasing.prototype.easeOutCubic = easeOutCubic;
  SimpleEasing.prototype.easeInOutCubic = easeInOutCubic;
  SimpleEasing.prototype.easeInQuart = easeInQuart;
  SimpleEasing.prototype.easeOutQuart = easeOutQuart;
  SimpleEasing.prototype.easeInOutQuart = easeInOutQuart;
  SimpleEasing.prototype.easeInQuint = easeInQuint;
  SimpleEasing.prototype.easeOutQuint = easeOutQuint;
  SimpleEasing.prototype.easeInOutQuint = easeInOutQuint;
  SimpleEasing.prototype.easeInSine = easeInSine;
  SimpleEasing.prototype.easeOutSine = easeOutSine;
  SimpleEasing.prototype.easeInOutSine = easeInOutSine;
  SimpleEasing.prototype.easeInExpo = easeInExpo;
  SimpleEasing.prototype.easeOutExpo = easeOutExpo;
  SimpleEasing.prototype.easeInOutExpo = easeInOutExpo;
  SimpleEasing.prototype.easeInCirc = easeInCirc;
  SimpleEasing.prototype.easeOutCirc = easeOutCirc;
  SimpleEasing.prototype.easeInOutCirc = easeInOutCirc;
  SimpleEasing.prototype.easeInElastic = easeInElastic;
  SimpleEasing.prototype.easeOutElastic = easeOutElastic;
  SimpleEasing.prototype.easeInOutElastic = easeInOutElastic;
  SimpleEasing.prototype.easeInBack = easeInBack;
  SimpleEasing.prototype.easeOutBack = easeOutBack;
  SimpleEasing.prototype.easeInOutBack = easeInOutBack;
  SimpleEasing.prototype.easeInBounce = easeInBounce;
  SimpleEasing.prototype.easeOutBounce = easeOutBounce;
  SimpleEasing.prototype.easeInOutBounce = easeInOutBounce;

  return SimpleEasing;
}());
