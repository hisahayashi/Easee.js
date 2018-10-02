'use strict'

const EASING = require('./easing.js')
const Timer = require('./timer.js')

class EaseItem {

  constructor(_id, _duration, _from, _to, _easing){
    this.id = _id
    this.duration = _duration
    this.from = _from
    this.to = _to
    this.easing = _easing
    this.value = this.from

    this.timer = new Timer()
    this.startTime = 0
    this.currentTime = 0
    this.steppingTime = 0
    this.isActive = false
  }

  remove(){
    this.isActive = false
    delete this.timer
  }

  get(){
    return this.value
  }

  run(){
    this.isActive = true

    try{
      if(this.steppingTime === 0){
        this.startTime = this.timer.time
      }
      else{
        this.startTime = this.timer.time - this.steppingTime
      }
    }
    catch(e){
      console.error('Deleted.')
    }

    return this
  }

  stop(){
    this.isActive = false
    this.steppingTime = this.timer.time - this.startTime
    return this
  }

  reset(){
    this.isActive = true
    this.startTime = this.timer.time
    return this
  }

  update(_time){
    if(this.isActive){
      this.currentTime = _time - this.startTime

      if(this.currentTime > this.duration){
        this.currentTime = this.duration
        this.isActive = false
      }

      this.value = EASING[this.easing](this.currentTime, this.from, this.to, this.duration)
    }
  }

}

module.exports = EaseItem
