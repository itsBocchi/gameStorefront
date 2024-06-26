import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})

export class InicioComponent {

  // Esto aún no sirve
  
  /*juegos = [
    {id: 1, nombre: 'Elden Ring',imagenUrl: 'elden_ring.jpeg'}
  ];

  constructor(private router: Router){}
  
  verDetalle(id: number) {
    this.router.navigate(['/detalle-juego', id]);
  } */
  
}
