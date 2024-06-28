import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';
import { RouterLink, Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIcon],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  games: Game[] = [];

  currentIndex = 0;
  displayCount = 5;

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }
  trackById(index: number, game: Game): number {
    return game.id;
  }
  
  
  nextSet(): void {
    this.currentIndex += 1;
    if (this.currentIndex >= this.games.length) {
      this.currentIndex = 0;
    }
  }
  
  previousSet(): void {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.games.length - 1;
    }
  }
  
  getCurrentSet(): Game[] {
    let endIndex = this.currentIndex + this.displayCount;
    let set = this.games.slice(this.currentIndex, endIndex);
  
    // Ajustar si el conjunto es menor que el tamaño de visualización
    if (set.length < this.displayCount) {
      let wrapAroundCount = this.displayCount - set.length;
      set = set.concat(this.games.slice(0, wrapAroundCount));
    }
  
    return set;
  }
  
  navigateToGameDetails(id: number): void {
    this.router.navigate(['/juego', id]);
  }
}
