// src/app/pages/update-game/update-game.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DetalleJuegoComponent } from '../detalle-juego/detalle-juego.component';

@Component({
  selector: 'app-update-game',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButton,
    MatIcon
  ],
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.scss']
})
export class UpdateGameComponent {
  form: FormGroup;
  title: string = "Edita tu juego"

  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(2000)]],
    });

    // Load game details using the id from the route
    const gameId = this.activatedRoute.snapshot.params['id'];
    const game = this.gameService.getGame(gameId);
    if (game) {
      this.form.patchValue(game);
    }
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const updatedGame = this.form.value;
    updatedGame.id = this.activatedRoute.snapshot.params['id'];
    // Update the game using the game service
    this.gameService.updateGame(updatedGame).then(() => {
      this.snackBar.open('Game updated successfully', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }).catch(error => {
      this.snackBar.open('Error updating game', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
    // wait a second a redirect to DetalleJuegoComponent
    setTimeout(() => {
      this.router.navigate(['/juego', updatedGame.id]);
    }, 1000);
  }
}