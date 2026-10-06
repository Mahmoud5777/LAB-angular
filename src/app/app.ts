import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Template } from './template/template';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { Login } from './login/login';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Template,AngularFireModule,AngularFireAuthModule,Login,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'LAB';
  b: boolean = false;

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.b = this.router.url.includes('/login');
    });
  }
}