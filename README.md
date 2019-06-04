# Ease.js


## Usage


1. Include `ease.js`.

```html
<script type="text/javascript" src="../dist/ease.js"></script>
```

or

```
$ npm install easejs
```

2. Basic code.

```javascript
// create Ease
var ease = new Ease();

// add tween item
var item = ease.add(1500, 0, 100, 'InOutSine');

// start tween item
item.run();

// animation loop
loop(){

  // update Ease
  ease.update();

  // get changed value
  console.log(item.get());

  requestAnimationFrame(loop);
};

// animation start
loop();
```
