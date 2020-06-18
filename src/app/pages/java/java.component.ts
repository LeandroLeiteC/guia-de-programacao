import { Component, OnInit } from '@angular/core';
import {Guia} from '../../shared/models/guia.model';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  card = true;
  guias: Guia[] = [
    {
      titulo: 'Como ler arquivos',
      descricao: 'Aprenda a ler arquivos, como utilizar as collections e um pouco de orientação ao objeto!',
      url: 'https://github.com/LeandroLeiteC/desafio-LerArquivos'
    },
    {
      titulo: 'Servlet',
      descricao: 'Aprenda a mexer com servlet',
      url: 'https://github.com/LeandroLeiteC/servlet'
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  modoExibicao() {
    this.card = !this.card;
  }
}
