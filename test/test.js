import test from 'ava'
import Easee from '../src/easee.js'

let easings = [
  'linear', 'in.quad', 'out.quad', 'inout.quad', 'in.cubic', 'out.cubic', 'inout.cubic', 'in.quart', 'out.quart', 'inout.quart', 'in.quint', 'out.quint', 'inout.quint', 'in.sine', 'out.sine', 'inout.sine', 'in.expo', 'out.expo', 'inout.expo', 'in.circ', 'out.circ', 'inout.circ', 'in.elastic', 'out.elastic', 'inout.elastic', 'in.back', 'out.back', 'inout.back', 'in.bounce', 'out.bounce', 'inout.bounce'
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
  let p1 = ease.add(1500, 0, 560, 'linear')
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
  let p1 = ease.add(1500, 0, 560, 'linear')
  p1.run()

  function loop(){
    ease.update()
    // requestAnimationFrame(loop)
  }

  loop()

  t.pass()
})
