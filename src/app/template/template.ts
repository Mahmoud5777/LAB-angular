import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';


@Component({
  selector: 'app-template',
  imports: [MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,MatToolbarModule,MatSidenavModule,MatListModule,MatButtonModule,RouterOutlet,MatIconModule,MatMenuModule,RouterLink],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  logout(): void {
    this.authService.signOut().then(() => {
      this.router.navigate(['/']);
    }).catch((error: unknown) => {
      console.error('Logout failed', error);
    });
  }
}
