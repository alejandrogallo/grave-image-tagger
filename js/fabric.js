var imageWidth = window.innerWidth;
var imageHeight = window.innerHeight;

var words = [
  {text: 'S = k log W', x: 0.3759, y: 0.0845},
  {text: 'Ludwig', x: 0.4360, y: 0.6096},
  {text: 'Boltzmann', x: 0.4190, y: 0.6458},
  {text: '1884-1986', x: 0.4190, y: 0.6813},
  {text: 'Henriette', x: 0.1044, y: 0.7927},
  {text: 'Boltzmann', x: 0.0939, y: 0.8209},
];

var canvas = new fabric.Canvas('container');
console.log(canvas);
console.log(imageWidth);
console.log(imageHeight);

//var stage = new Konva.Stage({
  //container: 'container',
  //width: imageWidth,
  //height: imageHeight
//});

//var imageLayer = new Konva.Layer();
//var textLayer = new Konva.Layer();

//function addNewWord() {
  //words.push({ text: "New Word", x: 0.5, y: 0.5 });
  //console.log(words);
  //addWord(words[words.length - 1]);
  //stage.draw();
//}

function addWord(word) {

  var text = new fabric.IText(word.text, {
    left: word.x * imageWidth,
    top: word.y * imageHeight,
    word: word,
    strokeWidth: 2,
    stroke: '#aa0000',
  });

  canvas.add(text);

}

//var img = new Image();
//img.onload = function() {

  //var graveImage = new Konva.Image({
    //x: 0,
    //y: 0,
    //image: img,
    //width: imageWidth,
    //height: imageHeight,
  //});

  //imageLayer.add(graveImage);
  //imageLayer.draw();

//};
//img.src = 'images/grave.jpeg';

words.forEach(function(word, index){
  addWord(word);
});

canvas.requestRenderAll();
canvas.renderAll();

//stage.add(imageLayer, textLayer);

//textLayer.on('dragstart', function(evt) {
  //var shape = evt.target;
  //stage.draw();
//});

//textLayer.on('dblclick', function(evt) {
  //var shape = evt.target;
  //console.log(shape.attrs.x/imageWidth);
  //console.log(shape.attrs.y/imageHeight);
  //console.log(words[0]);
//});

//stage.on('dragend', function(evt) {
  //var shape = evt.target;
  //stage.draw();
  //// set the word attributes also
  //shape.attrs.word.x = shape.attrs.x / imageWidth;
  //shape.attrs.word.y = shape.attrs.y / imageHeight;
//});

//stage.on('wheel', function(evt) {
  //console.log("wheeling");
  ////console.log(evt.deltaY);
  //console.log(evt);
  //var dScale = evt.ev.deltaY > 0 ? 0.1 : -0.1;
  //stage.scale({x: stage.scaleX() + dScale, y:stage.scaleY() + dScale});
  //stage.draw();
//});
