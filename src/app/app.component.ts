import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeadlineComponent } from './headline/headline.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarouselComponent, HeadlineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'gameStorefront';
  searchGame: string = '';
}
