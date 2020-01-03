import { CardRanks, CardSuit } from "./types";

export const CARD_RANKS: CardRanks = [
  {
    value: 1,
    name: '6',
  },
  {
    value: 2,
    name: '7',
  },
  {
    value: 3,
    name: '8',
  },
  {
    value: 4,
    name: '9',
  },
  {
    value: 5,
    name: '10',
  },
  {
    value: 6,
    name: 'Jack',
  },
  {
    value: 7,
    name: 'Queen',
  },
  {
    value: 8,
    name: 'King',
  },
  {
    value: 9,
    name: 'Ace',
  },
];

export const CARD_SUITS: CardSuit[] = ['SPADES', 'HEARTS', 'DIAMONDS', 'CLUBS'];

export const TRAMP_VALUE = 9;