import { Component, OnInit } from '@angular/core';
import {Guia} from '../../shared/models/guia.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  card = false;
  guias: Guia[] = [];
  private _urlJson: string = 'assets/db/angular.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Guia[]>(this._urlJson)
      .subscribe( response => {
        this.guias = response;
        this.modoExibicao();
      });
  }

  modoExibicao() {
    this.card = !this.card;
  }

}
