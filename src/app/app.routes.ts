import { Routes,  RouterModule  } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';
import { DetalleJuegoComponent } from './pages/detalle-juego/detalle-juego.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { UpdateGameComponent } from './pages/update-game/update-game.component';


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
},{
    path: 'create_game',
    component: CreateGameComponent
},{path: 'update_game/:id',
    component: UpdateGameComponent
},
];
