import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from './home/home.module';
import {SobreMimModule} from './sobre-mim/sobre-mim.module';
import {JavaModule} from './java/java.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    SobreMimModule,
    JavaModule

  ]
})
export class PagesModule { }
