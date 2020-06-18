import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreMimComponent } from './sobre-mim.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SobreMimComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class SobreMimModule { }
