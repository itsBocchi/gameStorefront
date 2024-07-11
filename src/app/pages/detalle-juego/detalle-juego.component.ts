import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-juego.component.html',
  styleUrl: './detalle-juego.component.scss'
})
export class DetalleJuegoComponent implements OnInit{
  game: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam; // Convertir a número
      this.game = this.gameService.getGame(id);
    } else {
      this.game = undefined;
    }
  }
}
