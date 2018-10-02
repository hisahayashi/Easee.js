/*!
 * Ease.js v0.1.0
 * easing animation helper
 * MIT license
 */
'use strict'

const EASING = require('./easing.js')
const Timer = require('./timer.js')
const EaseItem = require('./easeItem.js')

class Ease {

  constructor(){
    // variables
    this.easeList = {}
    this.easeListCount = 0
    this.timer = new Timer()
  }

  add(_duration, _from, _to, _easing){
    let id = this.getListId()
    let duration = Number(_duration)
    let from = Number(_from)
    let to = Number(_to - _from)
    let easing = (typeof EASING[_easing] == 'function')? _easing : 'Linear'

    let item = new EaseItem(id, duration, from, to, easing)
    this.easeList[id] = item

    this.easeListCount++

    return item
  }

  remove(item){
    this.easeList[item.id].remove()
    delete this.easeList[item.id]
    item = null
  }

  update(){
    let time = this.timer.time
    for (const key of Object.keys(this.easeList)) {
      this.easeList[key].update(time)
    }
  }

  getListId(){
    return this.easeListCount
  }

}

module.exports = Ease
