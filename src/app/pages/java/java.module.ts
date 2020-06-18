import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaComponent } from './java.component';
import {CardGuiasModule} from '../../shared/card-guias/card-guias.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [JavaComponent],
  imports: [
    CommonModule,
    CardGuiasModule,
    NgbModule
  ]
})
export class JavaModule { }
