import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-demo', pathMatch: 'full' },
  { path: 'login-demo', component: LoginComponent },
  { path: 'home-demo', component: HomeComponent },
  { path: 'login-prod', component: ErrorComponent },
  { path: 'home-prod', component: ErrorComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
