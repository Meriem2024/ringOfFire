export class Game {
  public players: string[] = []; // : string[] sagt dass variable ein array von strings ist ; = [] wertzuweisung/initialisierung: leeres array als startwert. sorgt dafür, dass variable direkt genutzt werden kann
  public stack: string[] = [];
  public playedCard: string[] = [];
  public currentPlayer: number = 0;
}
