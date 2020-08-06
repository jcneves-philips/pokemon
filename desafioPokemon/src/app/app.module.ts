import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApiService} from './Home/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './Home/tela-principal/tela-principal.component';
import { TelaDoisComponent } from './Home/tela-dois/tela-dois.component';
import {HttpClientModule} from '@angular/common/http';
import { PrincipalComponent } from './principal/principal.component';
@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    TelaDoisComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
