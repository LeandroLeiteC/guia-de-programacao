import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';
import {CardGuiasModule} from '../../shared/card-guias/card-guias.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TitleModule} from '../../shared/title/title.module';



@NgModule({
  declarations: [AngularComponent],
  imports: [
    CommonModule,
    CardGuiasModule,
    TitleModule,
    NgbModule
  ]
})
export class AngularModule { }
