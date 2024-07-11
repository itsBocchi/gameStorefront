import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service'; 
import { Game } from '../../models/game.model';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButton, MatFabAnchor, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [RouterModule, CommonModule, MatButton, MatIcon,MatFabButton, RouterLink, MatFabAnchor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
  games: Game[] = [];
  gamesInRows: Game[][] = [];

  constructor(private router: Router, 
      private gameService: GameService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames();
    this.hacerFilas();
  }

  trackById(game: Game): number {
    return game.id;
  }

  navigateToGameDetails(id: number): void {
    this.router.navigate(['/juego', id]);
  }

  private hacerFilas(): void {
    const itemsPerRow = 5;
    this.gamesInRows = [];

    for (let i = 0; i < this.games.length; i += itemsPerRow) {
      this.gamesInRows.push(this.games.slice(i, i + itemsPerRow));
    }
  }

  deleteGame(id: number): void {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este juego?');
    if (confirmDelete) {
      this.gameService.deleteGame(id);
      this.games = this.gameService.getGames(); // Actualizar la lista de juegos después de eliminar
    }
  }
}
