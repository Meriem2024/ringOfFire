export class Game {
  public players: string[] = []; // : string[] sagt dass variable ein array von strings ist ; = [] wertzuweisung/initialisierung: leeres array als startwert. sorgt dafür, dass variable direkt genutzt werden kann
  public stack: string[] = [];
  public playedCard: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.stack.push('spade_' + i);
      this.stack.push('hearts_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
    }
    shuffle(this.stack);
  }
}

function shuffle(array: string[]) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
