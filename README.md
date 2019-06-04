# Easee.js


## Usage


1. Import `Easee.js`.

```html
<script type="text/javascript" src="../dist/easee.js"></script>
<script type="text/javascript">
var easee = window.easee;
</script>
```

or

```
$ npm install easeejs
```

```html
<script type="module">
import Easee from '../src/easee.js';
var easee = new Easee();
</script>
```

2. Basic code.

```javascript
// create Easee
var easee = new Easee();

// add tween item
var item = easee.add(1500, 0, 100, 'InOutSine');

// start tween item
item.run();

// animation loop
loop(){

  // update Easee
  easee.update();

  // get changed value
  console.log(item.get());

  requestAnimationFrame(loop);
};

// animation start
loop();
```
