import { CardSuit, Deck } from "./types";
import { getTrump, getNewDeck } from "./utils";

class Game {
  private deck: Deck = null;
  private players: Player[] = [];
  private isGameFinished = false;
  private trump: CardSuit = null;

  public startGame() {
    this.trump = getTrump();
    this.deck = getNewDeck(this.trump);
  }
}

export default Game;