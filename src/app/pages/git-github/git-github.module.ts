import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitGithubComponent } from './git-github.component';
import {CardGuiasModule} from '../../shared/card-guias/card-guias.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TitleModule} from '../../shared/title/title.module';



@NgModule({
  declarations: [GitGithubComponent],
  imports: [
    CommonModule,
    CardGuiasModule,
    TitleModule,
    NgbModule
  ]
})
export class GitGithubModule { }
