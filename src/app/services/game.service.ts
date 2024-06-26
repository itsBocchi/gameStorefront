import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {id: 1, name: 'Elden Ring'}
  ];

  constructor() { }

  getGames(): Game[]{
    return this.games;
  }

  getGame(id: number): Game | undefined {
    return this.games.find(game => game.id === id);
  }
}
