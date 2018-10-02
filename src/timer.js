'use strict'

class Timer {

  /**
   * [constructor description]
   * @return {[type]} [description]
   */
  constructor(){
  }

  /**
   * [time description]
   * @return {[type]} [description]
   */
  get time(){
    return Date.now() || +new Date()
  }
}

module.exports = Timer
