import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLinkActive, RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatButton, 
            MatIconButton, MatButtonModule, 
            MatMenuModule, MatMenuItem, FormsModule,
            RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchGame: string = '';
  isGameDetailPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isGameDetailPage = this.router.url.includes('/juego/');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
