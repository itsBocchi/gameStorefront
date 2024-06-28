import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {id: 1, name: 'ELDEN RING', image: "eldenring.jpg"},
    {id: 2, name: 'CYBERPUNK 2077', image: 'cyberpunk.jpg' },
    {id: 3, name: 'THE LEGEND OF ZELDA: TEARS OF THE KINGDOM', image: 'totk.png' },
    {id: 4, name: 'FALLOUT 4', image: 'fallout4.jpg'},
    {id: 5, name: 'THE WITCHER 3: WILD HUNT', image: 'tw3.jpg'},
    {id: 6, name: 'DOOM', image: 'doom.jpg'},
    {id: 7, name: 'HALO: MASTER CHIEF COLLECTION', image: 'halo.jpg'},
    {id: 8, name: 'DEATH STRANDING', image: 'deathstranding.jpg'},
    {id: 9, name: 'GRAND THEFT AUTO 5', image: 'gta5.jpg'},
    {id: 10, name: 'HOLLOW KNIGHT', image: 'hollowknight.jpg'},
    {id: 11, name: 'BIOSHOCK INFINITE', image: 'bioshock_inf.jpg'}
  ];

  constructor() { }

  getGames(): Game[]{
    return this.games;
  }

  getGame(id: number): Game | undefined {
    return this.games.find(game => game.id === id);
  }
  
}
