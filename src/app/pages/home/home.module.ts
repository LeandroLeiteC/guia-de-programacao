import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {TitleModule} from '../../shared/title/title.module';



@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    TitleModule
  ]
})
export class HomeModule { }
