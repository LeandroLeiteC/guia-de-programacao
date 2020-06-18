import {Component, Input, OnInit} from '@angular/core';
import {Guia} from '../models/guia.model';

@Component({
  selector: 'app-card-guias',
  templateUrl: './card-guias.component.html',
  styleUrls: ['./card-guias.component.css']
})
export class CardGuiasComponent implements OnInit {

  @Input() guias: Guia[];
  colunas: Guia[] = [];
  linhas: Guia[][] = [];
  constructor() { }

  ngOnInit(): void {
    const quantidade = this.guias.length;
    const times: number = +(quantidade / 3).toFixed(0);
    this.separarEmLinhas();
  }

  separarEmLinhas() {
    for (const guia of this.guias) {
      this.colunas.push(guia);
      if (this.colunas.length === 3) {
        this.linhas.push(this.colunas);
        this.colunas = [];
      }
    }
    this.linhas.push(this.colunas);
  }
}
