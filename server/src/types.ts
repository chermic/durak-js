import { CARD_SUITS } from "./cardsConfig";

export interface CardRank {
  value: number;
  name: string;
}

export type CardSuit = 'SPADES' | 'HEARTS' | 'DIAMONDS' | 'CLUBS';
export type CardRanks = CardRank[];

interface DeckCard extends CardRank {
  suit: CardSuit;
}

export type Deck = DeckCard[];

export interface Player {
  cards: DeckCard[];
  currentPlayerTurn: boolean;
}