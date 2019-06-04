# Easee.js

[![npm version](https://badge.fury.io/js/easee.js.svg)](https://badge.fury.io/js/easee.js)

## Usage


### 1. Import `Easee.js`.

#### ES6

```
$ npm i easee.js
```

```html
<script type="module">
import Easee from '../src/easee.js';
var easee = new Easee();
</script>
```

or

#### Script Load

```html
<script type="text/javascript" src="../dist/easee.js"></script>
<script type="text/javascript">
var easee = window.easee;
</script>
```


### 2. Basic code.

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

<a href="http://hisayoshihayashi.com/0/easee/example/" target="_blank">Example is here</a>


