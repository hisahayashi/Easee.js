/*!
 * Ease.js v0.1.0
 * easing animation helper
 * MIT license
 */
'use strict'

import Ease from './ease.js'

window.Ease = Ease

let ease = new Ease()
window.ease = ease

var p1 = ease.add(1500, 0, 560, 'Linear')
// console.log(p1)
