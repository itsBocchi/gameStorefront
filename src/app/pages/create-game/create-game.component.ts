import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-create-game',
  standalone: true,
  imports: [CommonModule, 
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatButton,
    MatIcon,
  ],
  templateUrl: './create-game.component.html',
  styleUrl: './create-game.component.scss'
})
export class CreateGameComponent {
  form:FormGroup;
  title="Agregar Juego";
  
  constructor(private formBuilder:FormBuilder,
    private gameService:GameService,
    private activatedRouter: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
  ){
    // Construir form con sus validators.
    this.form = this.formBuilder.group({
      name:['', [Validators.required, Validators.maxLength(50)]],
      description:['', [Validators.required, Validators.maxLength(2000)]],
    });
  }
  // Guardar información del Form.
  save(){
    // Comprobar si el Form no cumple alguna validación.
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    const name = this.form.get('name')?.value;
    const description = this.form.get('description')?.value;
    // Intentar agregar el juego a Game[] en el GameService, se devuelve a lista luego junto a un SnackBar confirmando que se agrego.
    try{
      this.gameService.addGames(name, description);
      this.snackBar.open('Se añadió el juego correctamente', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition:'top',
      });
      this.form.reset();

      setTimeout(() =>{
        this.router.navigate(['/lista']);
      }), 3000;
      // En caso de que no pueda agregarlo envía un error ocupando un SnackBar.
    } catch (error) { 
      this.snackBar.open('Error al agregar juego', 'Cerrar',{
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition:'top',
      });
    }
  }
}
