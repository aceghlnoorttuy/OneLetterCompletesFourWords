import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var options = [];
var questionWords = [];


app.get("/", (req, res) => {
  var score = 0;
  var catfish = 'bat';
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


const left_right = [
  [['bulb', 'comb', 'blob' ],
  [ 'bite', 'both', 'band', 'belt', 'boss' ]],
   [ [
      'bake', 'five', 'nine', 'cute',
      'huge', 'tree', 'race', 'rice',
      'lace', 'game', 'tide', 'ride',
      'hide', 'hope', 'come', 'able',
      'base', 'come', 'came', 'face',
      'five', 'fire', 'fine', 'game',
      'gone', 'have', 'here', 'life',
      'like', 'love', 'move', 'more',
      'nose', 'sale'
    ],
    [ 'exit', 'each', 'evil', 'even', 'ever' ]
  ],
  [
    [ 'cash', 'each', 'fish', 'push' ],
    [
      'huge', 'hide',
      'hope', 'have',
      'hair', 'here',
      'hear'
    ]
  ],
  [
    [ 'back', 'bank', 'cook', 'dark', 'kick' ],
    [ 'keep', 'kick', 'kill' ]
  ],
  [
    [
      'cool', 'ball',
      'bell', 'cool',
      'evil', 'feel',
      'fell', 'girl',
      'kill', 'pull',
      'sell'
    ],
    [ 'list', 'lace', 'life', 'like', 'love' ]
  ],
  [
    [ 'beam', 'from', 'calm' ],
    [ 'mars', 'main', 'move', 'meet', 'more' ]
  ],
  [
    [ 'been', 'even', 'iron', 'main', 'open' ],
    [ 'nine', 'need', 'nose', 'near' ]
  ],
  [ [ 'zero', 'also', 'into' ], [ 'open', 'only' ] ],
  [ [ 'keep', 'jump' ], [ 'push', 'pull' ] ],
  [
    [
      'ever',
      'four', 'fair',
      'hair', 'hear',
      'near'
    ],
    [ 'race', 'rice', 'ride' ]
  ],
  [
    [
      'list', 'best',
      'exit', 'coat',
      'chat', 'fact',
      'meet'
    ],
    [ 'tree', 'tide' ]
  ]
]
for (let i = 0; i < left_right.length; i++){
  for (let j=0; j< 2; j++){
    for (let k = 0; k < left_right[i][j][k]; k++){
      left_right[i][j][k] = left_right[i][j][k].toLowerCase();
    }
  }
};


  
var rLPos = Math.floor(Math.random() * left_right.length);

var rPos = 1;
var rPos2 = 1;
var lPos = 1;
var lPos2 = 1;
while (lPos === lPos2){
  lPos = Math.floor(Math.random() * left_right[rLPos][0].length);
  lPos2 = Math.floor(Math.random() * left_right[rLPos][0].length);}
while (rPos === rPos2){
  rPos = Math.floor(Math.random() * left_right[rLPos][1].length);
  rPos2 = Math.floor(Math.random() * left_right[rLPos][1].length);};

var left1 = (left_right[rLPos][0][lPos]).slice(0,3);
var right1 = (left_right[rLPos][1][rPos]).slice(1,4);
var left2 = (left_right[rLPos][0][lPos2]).slice(0,3);
var right2 = (left_right[rLPos][1][rPos2]).slice(1,4);
var questionWords = [];
questionWords.push(left1, right1, left2, right2);
questionWords.push(left_right[rLPos][0][lPos].slice(3,4));
while (questionWords.length < 9){
  let herring = alphabet[Math.floor(Math.random() * 26)];
  questionWords.push(herring);
  var questionSetWords = new Set(questionWords);
  questionWords = Array.from(questionSetWords);
};
var options = [];
options.push(questionWords[8]);
options.push(questionWords[7]);
options.push(questionWords[6]);
options.push(questionWords[5]);
options.push(questionWords[4]);
options.sort();
console.log(`Score${score}`);

  res.render("solution.ejs", {allInfo: questionWords, possibleAnswer: options, fishcat: catfish, sCore: score});
});

app.post("/submit", (req, res) => {

  var theirAnswer = req.body["playerAnswer"];
  var actualAnswer = req.body["actualanswer"];
  var catfish = "frog";
  var sCore = req.body["sCore"];
  console.log(`Score = ${sCore}`)

  res.render("solution.ejs", {whatDidTheyPut: theirAnswer, correctAnswer: actualAnswer, fishcat: catfish, scOre: sCore}) 
});

app.post("/playagain", (req, res) => {
  var catfish = 'bat';
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var scare = req.body["sCore"];
  console.log(`dsfkj${scare}`);

const left_right = [
  [
    [ 'club', 'crab', 'grab' ],
    [
      'baby', 'back', 'ball', 'band',
      'bank', 'bark', 'barn', 'base',
      'bath', 'bear', 'beat', 'bees',
      'bell', 'best', 'bike', 'bird',
      'bite', 'blue', 'boat', 'body',
      'boil', 'bold', 'bone', 'book',
      'boot', 'born', 'boss', 'bowl',
      'boys', 'brag', 'bull', 'bump',
      'burn', 'bush', 'busy', 'buzz'
    ]
  ],
  [
    [
      'band', 'bird', 'bold', 'card',
      'cold', 'feed', 'find', 'food',
      'fund', 'glad', 'gold', 'good',
      'hand', 'hard', 'head', 'hold',
      'kind', 'land', 'lead', 'loud',
      'need', 'pond', 'read', 'road',
      'sand', 'seed', 'send', 'sold',
      'told', 'used', 'wild', 'wind',
      'wood', 'word', 'yard'
    ],
    [
      'dads', 'dams', 'dark',
      'date', 'dawn', 'days',
      'deer', 'desk', 'dive',
      'dock', 'does', 'doll',
      'done', 'door', 'down',
      'draw', 'drop', 'duck',
      'dust'
    ]
  ],
  [
    [
      'able', 'base', 'bike', 'bite', 'blue', 'bone',
      'cake', 'cane', 'cape', 'care', 'case', 'code',
      'come', 'cone', 'cute', 'date', 'dive', 'done',
      'face', 'fine', 'fire', 'five', 'free', 'game',
      'gate', 'gave', 'give', 'gone', 'have', 'here',
      'hide', 'hole', 'home', 'hope', 'huge', 'kite',
      'knee', 'late', 'life', 'like', 'line', 'live',
      'love', 'made', 'make', 'maze', 'mice', 'mine',
      'more', 'name', 'nice', 'nose', 'note', 'once',
      'page', 'pile', 'pine', 'race', 'ride', 'rise',
      'rose', 'safe', 'same', 'save', 'size', 'some',
      'sure', 'take', 'tape', 'tide', 'time', 'tire',
      'tree', 'true', 'type', 'wave', 'were', 'wide',
      'wine', 'wire', 'wise', 'zone'
    ],
    [
      'each', 'earn',
      'east', 'easy',
      'eggs', 'even',
      'ever', 'exit'
    ]
  ],
  [
    [ 'golf', 'half', 'leaf', 'roof', 'self' ],
    [
      'face', 'fact', 'fair', 'fall',
      'farm', 'fast', 'feed', 'feet',
      'felt', 'find', 'fine', 'fire',
      'fish', 'five', 'flag', 'flat',
      'flip', 'flow', 'food', 'foot',
      'form', 'fort', 'four', 'free',
      'frog', 'fuel', 'full', 'fund'
    ]
  ],
  [
    [
      'brag', 'flag',
      'frog', 'king',
      'long', 'ring',
      'sing', 'song',
      'wing'
    ],
    [
      'gain', 'game', 'gate',
      'gave', 'gift', 'girl',
      'give', 'glad', 'glow',
      'goat', 'goes', 'gold',
      'golf', 'gone', 'good',
      'grab', 'gray', 'grow'
    ]
  ],
  [
    [
      'bath', 'bush',
      'each', 'fish',
      'much', 'path',
      'push', 'rush',
      'such', 'wash',
      'wish', 'with'
    ],
    [
      'hair', 'half', 'hand',
      'hard', 'hats', 'have',
      'head', 'hear', 'heat',
      'help', 'here', 'hide',
      'hill', 'hint', 'hold',
      'hole', 'home', 'hope',
      'host', 'huge', 'hunt',
      'hurt'
    ]
  ],
  [
    [
      'back', 'bank', 'bark', 'book',
      'cook', 'dark', 'desk', 'dock',
      'duck', 'jack', 'look', 'luck',
      'mark', 'milk', 'neck', 'park',
      'peak', 'pick', 'rock', 'seek',
      'sink', 'task', 'walk', 'week',
      'work'
    ],
    [
      'keep', 'kids',
      'kind', 'king',
      'kite', 'knee',
      'knit', 'know'
    ]
  ],
  [
    [
      'ball', 'bell', 'boil',
      'bowl', 'bull', 'cool',
      'doll', 'fall', 'fuel',
      'full', 'girl', 'hill',
      'mail', 'meal', 'pool',
      'pull', 'sail', 'tall',
      'tell', 'tool', 'wall',
      'well', 'will'
    ],
    [
      'land', 'last', 'late',
      'lead', 'leaf', 'left',
      'legs', 'less', 'life',
      'lift', 'like', 'line',
      'lion', 'list', 'live',
      'long', 'look', 'lost',
      'lots', 'loud', 'love',
      'luck'
    ]
  ],
  [
    [
      'calm', 'farm',
      'form', 'room',
      'swim', 'team',
      'them', 'warm',
      'zoom'
    ],
    [
      'made', 'mail', 'make',
      'many', 'mark', 'mars',
      'maze', 'meal', 'mean',
      'meet', 'melt', 'mice',
      'milk', 'mine', 'more',
      'most', 'much', 'must'
    ]
  ],
  [
    [
      'barn', 'born', 'burn', 'chin',
      'corn', 'dawn', 'down', 'earn',
      'even', 'gain', 'lion', 'mean',
      'open', 'plan', 'rain', 'seen',
      'soon', 'spin', 'than', 'then',
      'thin', 'town', 'turn', 'upon',
      'when'
    ],
    [
      'name', 'near',
      'neck', 'need',
      'news', 'nice',
      'nose', 'note'
    ]
  ],
  [ [ 'also', 'into', 'zero' ], [ 'once', 'only', 'open' ] ],
  [
    [
      'bump', 'camp', 'chip',
      'chop', 'clip', 'drop',
      'flip', 'help', 'jump',
      'keep', 'shop', 'slip',
      'stop', 'trip', 'whip'
    ],
    [
      'page', 'pair', 'park',
      'part', 'pass', 'past',
      'path', 'peak', 'pear',
      'peas', 'pets', 'pick',
      'pies', 'pile', 'pine',
      'plan', 'play', 'pond',
      'pool', 'post', 'pull',
      'push'
    ]
  ],
  [
    [
      'bear', 'deer', 'door',
      'ever', 'fair', 'four',
      'hair', 'hear', 'near',
      'pair', 'pear', 'star',
      'user', 'wear', 'where',
      'year', 'your'
    ],
    [
      'race', 'rain', 'read',
      'rest', 'ride', 'ring',
      'rise', 'road', 'rock',
      'roof', 'room', 'rose',
      'rush'
    ]
  ],
  [
    [
      'ants', 'arms', 'bees', 'boss',
      'boys', 'cars', 'cats', 'cubs',
      'dads', 'dams', 'days', 'does',
      'eggs', 'goes', 'hats', 'jars',
      'kids', 'legs', 'less', 'lots',
      'mars', 'news', 'pass', 'peas',
      'pets', 'pies', 'this', 'ways',
      'wins'
    ],
    [
      'safe', 'sail', 'salt', 'same',
      'sand', 'save', 'seat', 'seed',
      'seek', 'seen', 'self', 'send',
      'shop', 'show', 'shut', 'sing',
      'sink', 'size', 'slip', 'slow',
      'snow', 'soft', 'sold', 'some',
      'song', 'soon', 'sort', 'spin',
      'spot', 'star', 'stay', 'stop',
      'such', 'suit', 'sure', 'swim'
    ]
  ],
  [
    [
      'aunt', 'beat', 'best', 'boat', 'boot',
      'cast', 'chat', 'coat', 'cost', 'dust',
      'east', 'exit', 'fact', 'fast', 'feet',
      'felt', 'flat', 'foot', 'fort', 'gift',
      'goat', 'heat', 'hint', 'host', 'hunt',
      'hurt', 'just', 'knit', 'last', 'left',
      'lift', 'list', 'lost', 'meet', 'melt',
      'most', 'must', 'part', 'past', 'post',
      'quit', 'rest', 'salt', 'seat', 'shut',
      'soft', 'sort', 'spot', 'suit', 'want',
      'went', 'what'
    ],
    [
      'take', 'tall', 'tape',
      'task', 'team', 'tell',
      'than', 'them', 'then',
      'they', 'thin', 'this',
      'tide', 'time', 'tiny',
      'tire', 'told', 'tool',
      'town', 'tree', 'trip',
      'true', 'turn', 'type'
    ]
  ],
  [
    [
      'crew', 'crow',
      'draw', 'flow',
      'glow', 'grow',
      'know', 'show',
      'slow', 'snow',
      'view'
    ],
    [
      'walk', 'wall', 'want',  'warm',
      'wash', 'wave', 'ways',  'wear',
      'week', 'well', 'went',  'were',
      'what', 'when', 'where', 'which',
      'whip', 'why',  'wide',  'wild',
      'will', 'wind', 'wine',  'wing',
      'wins', 'wire', 'wise',  'wish',
      'with', 'wood', 'word',  'work'
    ]
  ],
  [
    [
      'away', 'baby', 'body',
      'busy', 'city', 'clay',
      'easy', 'gray', 'many',
      'only', 'play', 'stay',
      'they', 'tiny', 'very'
    ],
    [ 'yard', 'year', 'your' ]
  ]
]
for (let i = 0; i < left_right.length; i++){
  for (let j=0; j< 2; j++){
    for (let k = 0; k < left_right[i][j][k]; k++){
      left_right[i][j][k] = left_right[i][j][k].toLowerCase();
    }
  }
};


  
var rLPos = Math.floor(Math.random() * left_right.length);

var rPos = 1;
var rPos2 = 1;
var lPos = 1;
var lPos2 = 1;
while (lPos === lPos2){
  lPos = Math.floor(Math.random() * left_right[rLPos][0].length);
  lPos2 = Math.floor(Math.random() * left_right[rLPos][0].length);}
while (rPos === rPos2){
  rPos = Math.floor(Math.random() * left_right[rLPos][1].length);
  rPos2 = Math.floor(Math.random() * left_right[rLPos][1].length);};

var left1 = (left_right[rLPos][0][lPos]).slice(0,3);
var right1 = (left_right[rLPos][1][rPos]).slice(1,4);
var left2 = (left_right[rLPos][0][lPos2]).slice(0,3);
var right2 = (left_right[rLPos][1][rPos2]).slice(1,4);
var questionWords = [];
questionWords.push(left1, right1, left2, right2);
questionWords.push(left_right[rLPos][0][lPos].slice(3,4));
while (questionWords.length < 9){
  let herring = alphabet[Math.floor(Math.random() * 26)];
  questionWords.push(herring);
  var questionSetWords = new Set(questionWords);
  questionWords = Array.from(questionSetWords);
};
var options = [];
options.push(questionWords[8]);
options.push(questionWords[7]);
options.push(questionWords[6]);
options.push(questionWords[5]);
options.push(questionWords[4]);
options.sort();

  res.render("solution.ejs", {allInfo: questionWords, possibleAnswer: options, fishcat: catfish, sCore:scare});
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

