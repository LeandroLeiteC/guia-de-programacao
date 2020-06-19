import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from './home/home.module';
import {SobreMimModule} from './sobre-mim/sobre-mim.module';
import {JavaModule} from './java/java.module';
import {AngularModule} from './angular/angular.module';
import {GitGithubModule} from './git-github/git-github.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    SobreMimModule,
    JavaModule,
    AngularModule,
    GitGithubModule

  ]
})
export class PagesModule { }
