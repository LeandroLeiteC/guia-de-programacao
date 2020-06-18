import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {JavaComponent} from './pages/java/java.component';
import {SobreMimComponent} from './pages/sobre-mim/sobre-mim.component';
import {AngularComponent} from './pages/angular/angular.component';
import {GitGithubComponent} from './pages/git-github/git-github.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'java',
    component: JavaComponent
  },
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path: 'git-github',
    component: GitGithubComponent
  },
  {
    path: 'sobre-mim',
    component: SobreMimComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
