import test from 'ava'
import Easee from '../src/easee.js'

let easings = [
  'Linear', 'InQuad', 'OutQuad', 'InOutQuad', 'InCubic', 'OutCubic', 'InOutCubic', 'InQuart', 'OutQuart', 'InOutQuart', 'InQuint', 'OutQuint', 'InOutQuint', 'InSine', 'OutSine', 'InOutSine', 'InExpo', 'OutExpo', 'InOutExpo', 'InCirc', 'OutCirc', 'InOutCirc', 'InElastic', 'OutElastic', 'InOutElastic', 'InBack', 'OutBack', 'InOutBack', 'InBounce', 'OutBounce', 'InOutBounce'
]

/**
 * [description]
 * @param  {[type]} t [description]
 * @return {[type]}   [description]
 */
test('Easee: New', t => {
  let ease = new Easee()
  t.pass()
})

/**
 * [description]
 * @param  {[type]} t [description]
 * @return {[type]}   [description]
 */
test('Easee: Add', t => {
  let ease = new Easee()
  let p1 = ease.add(1500, 0, 560, 'Linear')
  t.pass()
})

/**
 * [description]
 * @param  {[type]} t [description]
 * @return {[type]}   [description]
 */
test('Easee: Run', t => {
  let self = this
  let ease = new Easee()
  let p1 = ease.add(1500, 0, 560, 'Linear')
  p1.run()

  function loop(){
    ease.update()
    // requestAnimationFrame(loop)
  }

  loop()

  t.pass()
})
