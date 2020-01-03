import { CARD_SUITS, CARD_RANKS, TRAMP_VALUE } from './cardsConfig';
import { CardSuit, CardRanks, Deck } from './types';

export const getTrump = (): CardSuit => {
  const randomIndex = Math.floor(Math.random() * CARD_SUITS.length);
  return CARD_SUITS[randomIndex];
};

const shuffleDeck = (deck: Deck): Deck => {
  const shuffledDeck = [...deck];
  const deckLength = shuffledDeck.length;
  for (let i = 0; i < deckLength; i++) {
    const randomIndex = Math.floor(Math.random() * deckLength);
    const tmp = shuffledDeck[i];
    shuffledDeck[i] = shuffledDeck[randomIndex];
    shuffledDeck[randomIndex] = tmp;
  }

  return shuffledDeck;
};

export const getNewDeck = (trump: CardSuit): Deck => {
  const deck: Deck = [];
  CARD_RANKS.forEach((cardRank) => {
    CARD_SUITS.forEach((cardSuit) => {
      if (trump === cardSuit) {
        deck.push({
          ...cardRank,
          value: cardRank.value + TRAMP_VALUE,
          suit: cardSuit,
        });
      } else {
        deck.push({
          ...cardRank,
          suit: cardSuit,
        });
      }
    });
  });

  return shuffleDeck(deck);
}