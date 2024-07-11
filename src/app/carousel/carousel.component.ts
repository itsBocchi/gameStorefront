import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit} from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';
import { RouterLink, Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.games = this.gameService.getGames();
    this.updateDisplayCount();
  }
  trackById(index: number, game: Game): number {
    return game.id;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateDisplayCount();
  }
  
  nextSet(): void {
    this.currentIndex += 1;
    if (this.currentIndex >= this.games.length) {
      this.currentIndex = 0;
    }
  }

  updateDisplayCount(): void {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 816) {
        this.displayCount = 1;
      } else if (width >= 816 && width < 1146) {
        this.displayCount = 2;
      } else if (width >= 1146 && width < 1476) {
        this.displayCount = 3;
      } else if (width >= 1476 && width < 1806) {
        this.displayCount = 4;
      } else if (width >= 1806 && width < 2136){
        this.displayCount = 5;
      } else if (width >= 2136 && width < 2466){
        this.displayCount = 6;
      } else if (width >= 2466 && width < 2796){
        this.displayCount = 7;
      } else if (width >= 2796 && width < 3126){
        this.displayCount = 8;
      } else if (width >= 3126 && width < 3456){
        this.displayCount = 9;
      } else {
        this.displayCount = 10;
      }
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

  deleteGame(id: number): void {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este juego?');
    if (confirmDelete) {
      this.gameService.deleteGame(id);
      this.games = this.gameService.getGames(); // Actualizar la lista de juegos después de eliminar
    }
  }
}
