import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from '../../carousel/carousel.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})

export class InicioComponent implements OnInit{
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }
  trackById(index: number, game: Game): number{
    return game.id;
  }
}
