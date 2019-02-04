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

function addNewWord() {
  words.push({ text: "New Word", x: 0.5, y: 0.5 });
  console.log(words);
  addWord(words[words.length - 1]);
}

function addWord(word) {
  var text = new fabric.IText(word.text, {
    left: word.x * imageWidth,
    top: word.y * imageHeight,
    word: word,
    strokeWidth: 1,
    stroke: '#aa0000',
  });
  canvas.add(text);
}

fabric.Image.fromURL('images/grave.jpeg', function(img) {

  canvas.add(img.set({
    left: 0,
    top: 0,
    hasControls: false,
    selectable: false,
    lockMovementX: true,
    lockMovementY: true,
    backgroundColor: 'blue',
    opacity: 0.4,
    width: imageWidth,
    height: imageHeight,
  }).scale(1));

  img.on('select', function(evt) {
    console.log('Moving');
    alert(evt.target);
  });

  words.forEach(function(word, index){
    addWord(word);
  });

});

canvas.requestRenderAll();
canvas.renderAll();

