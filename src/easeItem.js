'use strict'

import EASING from './easing.js'
import Timer from './timer.js'

class EaseItem {

  /**
   * [constructor description]
   * @param  {[type]} _id       [description]
   * @param  {[type]} _duration [description]
   * @param  {[type]} _from     [description]
   * @param  {[type]} _to       [description]
   * @param  {[type]} _easing   [description]
   * @return {[type]}           [description]
   */
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
    this.complete = ()=>{}
  }

  /**
   * [remove description]
   * @return {[type]} [description]
   */
  remove(){
    this.isActive = false
    delete this.timer
  }

  /**
   * [get description]
   * @return {[type]} [description]
   */
  get(){
    return this.value
  }

  /**
   * [run description]
   * @return {[type]} [description]
   */
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

  /**
   * [stop description]
   * @return {[type]} [description]
   */
  stop(){
    this.isActive = false
    this.steppingTime = this.timer.time - this.startTime
    return this
  }

  /**
   * [reset description]
   * @return {[type]} [description]
   */
  reset(){
    this.isActive = true
    this.startTime = this.timer.time
    return this
  }

  /**
   * [update description]
   * @param  {[type]} _time [description]
   * @return {[type]}       [description]
   */
  update(_time){
    if(this.isActive){
      this.currentTime = _time - this.startTime

      if(this.currentTime > this.duration){
        this.currentTime = this.duration
        this.isActive = false

        if(typeof this.onComplete == 'function'){

        }
      }

      this.value = EASING[this.easing](this.currentTime, this.from, this.to, this.duration)
    }
  }

  onComplete(_callback, _args){
    if(typeof _callback == 'function'){
      _callback.call(this, _args)
    }
  }

}

export default EaseItem
