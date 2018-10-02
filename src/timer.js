'use strict'

class Timer {

  constructor(){
  }

  get time(){
    return Date.now() || +new Date()
  }
}

module.exports = Timer
