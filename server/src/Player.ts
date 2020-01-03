import { Player as PlayerI } from './types';

class Player implements PlayerI {
  private currentPlayerTurn = false;
  private cards = [];
}