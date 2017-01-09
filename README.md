# SimpleEasing.js


## Usage

```javascript
// easeing:String 'easeOutExpo'
// steps:Number 150
// begin:Number 0
// change:Number 500
var se = new SimpleEasing('easeOutExpo', 150, 0, 500);

se.onComplete = function(){
};

function update(){
  var value = se.getValue();
  console.log(value);
  
  requestAnimationFrame(update);
};

update();
```
