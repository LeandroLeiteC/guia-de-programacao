import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() subtitle: string = 'Um guia básico para iniciantes';

  constructor() { }

  ngOnInit(): void {
  }

}
