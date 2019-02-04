var imageWidth = window.innerWidth;
var imageHeight = window.innerHeight;

var words = [
  {text: 'S = k log W', x: 0.3703161985874567, y: 0.0799198473282443, angle: 0, scale: 0.679},
  {text: 'Ludwig', x: 0.42274993280096057, y: 0.5974786459108805, angle: 0, scale: .7389499335145734},
  {text: 'Boltzmann', x: 0.3931527705630742, y: 0.6396931297709924, angle: 0, scale: .7791036584618672},
  {text: '1884-1986', x: 0.426751937984496, y: 0.681299, angle: 0, scale: .4942830881376083},
  {text: 'Henriette', x: 0.09819958032403475, y: 0.7947335662423932, angle: 0, scale: .5867089692336507},
  {text: 'Boltzmann', x: 0.09389999999999969, y: 0.8209, angle: 0, scale: .5396232857447284},
  {text: 'זה הוא, כן', x: 0.408, y: 0.1488, angle: 0, scale: .5396232857447284},
  {text: 'он сдесь', x: 0.62, y: 0.19, angle: 42, scale: .5396232857447284},
];

var canvas = new fabric.Canvas('container');
console.log(canvas);
console.log(imageWidth);
console.log(imageHeight);

function addNewWord() {
  words.push({ text: "New Word", x: 0.5, y: 0.5, angle: 0, scale: 1 });
  addWord(words[words.length - 1]);
}

function addWord(word) {
  var text = new fabric.IText(word.text, {
    left: word.x * imageWidth,
    top: word.y * imageHeight,
    angle: word.angle,
    word: word,
    strokeWidth: 1,
    opacity: .9,
    transparentCorners: false,
    stroke: '#aa0000',
  }).scale(word.scale);
  canvas.add(text);
  text.on('moving', function (evt) {
    console.log([evt.target.top/imageHeight,
    evt.target.left/imageWidth,
    evt.target.angle,
    evt.target.scaleX
    ]
    );
  });
}

var graveImage;
var img = new Image();
img.onload = function() {
  console.log("string");
  console.log(img.naturalHeight);
  console.log(img.naturalWidth);

  graveImage = new fabric.Image(img, {
    left: 0,
    top: 0,
    angle: 0,
    width: img.naturalWidth,
    height: img.naturalHeight,
    scaleX: 1,
    scaleY: 1,
    hasControls: false,
    selectable: false,
    lockMovementX: true,
    lockMovementY: true,
    backgroundColor: '#fdfdfd',
  });
  graveImage.scaleX = imageWidth/img.naturalWidth;
  graveImage.scaleY = imageHeight/img.naturalHeight;

  console.log(graveImage.width);
  canvas.add(graveImage);

  words.forEach(function(word, index){
    addWord(word);
  });

};
img.src = 'images/grave.jpeg';


//fabric.Image.fromURL('images/grave.jpeg', function(img) {

  //canvas.add(img.set({
    //left: 0,
    //top: 0,
    //hasControls: false,
    //selectable: false,
    //lockMovementX: true,
    //lockMovementY: true,
    //backgroundColor: '#fdfdfd',
    //width: imageWidth,
    //height: 20,
  //}));

  //words.forEach(function(word, index){
    //addWord(word);
  //});

//});

canvas.requestRenderAll();
canvas.renderAll();

