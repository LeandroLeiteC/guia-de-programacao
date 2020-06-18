import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  javaRedirect() {
    this.router.navigate(['/java']);
  }

  gitRedirect() {
    this.router.navigate(['/git-github']);
  }

  angularRedirect() {
    this.router.navigate(['/angular']);
  }
}
