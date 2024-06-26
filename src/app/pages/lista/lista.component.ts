import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service'; 
import { Game } from '../../models/game.model';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService){}

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }
}
