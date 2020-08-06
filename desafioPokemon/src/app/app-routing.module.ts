import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TelaPrincipalComponent} from './Home/tela-principal/tela-principal.component';
import {TelaDoisComponent} from './Home/tela-dois/tela-dois.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
 
  {path:'principal',component:PrincipalComponent,
    children:[
      {path: 'tela-principal', component:TelaPrincipalComponent},
      {path: 'tela-dois',component:TelaDoisComponent},
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
