import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {id: 1, name: 'ELDEN RING', cover_img: "eldenring.jpg", details_img:"elden_ring.jpeg", description: "Un épico RPG de mundo abierto creado por FromSoftware y George R. R. Martin."},
    {id: 2, name: 'CYBERPUNK 2077', cover_img: 'cyberpunk.jpg', details_img:"cyberpunk.jpg", description: "Un juego de rol de acción ambientado en un oscuro futuro distópico con alta tecnología."},
    {id: 3, name: 'THE LEGEND OF ZELDA: TEARS OF THE KINGDOM', details_img:"totk.jpg", cover_img: 'totk.png', description: "La esperada secuela de Breath of the Wild con nuevas aventuras en Hyrule."},
    {id: 4, name: 'FALLOUT 4', cover_img: 'fallout4.jpg', details_img:"fallout4.jpg", description: "Un RPG de mundo abierto ambientado en un mundo post-apocalíptico devastado por la guerra nuclear."},
    {id: 5, name: 'THE WITCHER 3: WILD HUNT', cover_img: 'tw3.jpg', details_img:"tw3.jpg", description: "Un RPG de acción con un mundo vasto y misiones envolventes basado en las novelas de Andrzej Sapkowski."},
    {id: 6, name: 'DOOM', cover_img: 'doom.jpg', details_img:"doom.jpg", description: "Un frenético shooter en primera persona donde enfrentas hordas de demonios del infierno."},
    {id: 7, name: 'HALO: MASTER CHIEF COLLECTION', cover_img: 'halo.jpg', details_img:"halo_mcc.jpg", description: "Una colección de los títulos icónicos de Halo remasterizados para consolas modernas."},
    {id: 8, name: 'DEATH STRANDING', cover_img: 'deathstranding.jpg', details_img:"death-stranding.jpg", description: "Un juego de acción y exploración único dirigido por Hideo Kojima con una historia enigmática."},
    {id: 9, name: 'GRAND THEFT AUTO 5', cover_img: 'gta5.jpg', details_img:"gta5.jpg", description: "Un sandbox de acción y aventura con una narrativa ramificada y un mundo abierto masivo."},
    {id: 10, name: 'HOLLOW KNIGHT', cover_img: 'hollowknight.jpg', details_img:"hollow_knight.jpg", description: "Un juego de acción y aventura en 2D con exploración y combates en un mundo subterráneo."},
    {id: 11, name: 'BIOSHOCK INFINITE', cover_img: 'bioshock_inf.jpg', details_img:"bioshock_inf.jpg", description: "Una aventura narrativa en un entorno utópico volador con mecánicas de shooter en primera persona."}
  ];

  constructor() { }

  getGames(): Game[]{
    return this.games;
  }

  getGame(id: number): Game | undefined {
    return this.games.find(game => game.id === id);
  }

  
}
