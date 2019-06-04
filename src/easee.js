/*!
 * Easee.js v0.1.0
 * easing animation helper
 * MIT license
 */
'use strict'

import EASING from './easing.js'
import Timer from './timer.js'
import EaseItem from './easeItem.js'

class Easee {

  /**
   * [constructor description]
   * @return {[type]} [description]
   */
  constructor(){
    // variables
    this.easeList = {}
    this.easeListCount = 0
    this.timer = new Timer()
  }

  /**
   * [add description]
   * @param {[type]} _duration [description]
   * @param {[type]} _from     [description]
   * @param {[type]} _to       [description]
   * @param {[type]} _easing   [description]
   */
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

  /**
   * [remove description]
   * @param  {[type]} item [description]
   * @return {[type]}      [description]
   */
  remove(item){
    let id = item.id
    this.easeList[id].remove()
    delete this.easeList[id]
  }

  /**
   * [update description]
   * @return {[type]} [description]
   */
  update(){
    let time = this.timer.time
    for (const key of Object.keys(this.easeList)) {
      this.easeList[key].update(time)
    }
  }

  /**
   * [getListId description]
   * @return {[type]} [description]
   */
  getListId(){
    return this.easeListCount
  }

}

export default Easee
