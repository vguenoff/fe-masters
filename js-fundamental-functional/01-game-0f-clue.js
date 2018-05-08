// create an object using bracket and dot notation that represents
// the characters and realted data you may find in a agme of clue

var game = {};

game.murderer = '??';

game['weapons'] = [
    { type: 'lasers', location: 'lab' },
    { type: 'angry cats', location: 'lab' },
    { type: 'dish soap', location: 'lab' },
];

game.characters = [];
game.characters.push('Miss Scarlet');
console.log(game);
