import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';
import { DetalleJuegoComponent } from './pages/detalle-juego/detalle-juego.component';

export const routes: Routes = [
{
    path:'',
    component: InicioComponent
},{
    path:'lista',
    component: ListaComponent
},{
    path:'juego/:id',
    component: DetalleJuegoComponent
},
];
