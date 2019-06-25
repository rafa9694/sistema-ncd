import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'laboratorio', component: LaboratorioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
