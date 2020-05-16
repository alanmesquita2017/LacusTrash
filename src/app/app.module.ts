//import { EmpresasModule } from './empresas/empresas.module';
//import { RotasModule } from './rotas/rotas.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClienteModule } from './cliente/cliente.module';
import {EmpresasModule} from './empresas/empresas.module';
import {ColetaModule} from './coleta/coleta.module';
import { AppRoutingModule} from './app.routing.module' ;
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';
//import { Moment } from 'moment';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClienteModule,
    EmpresasModule,
    ColetaModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule
    //Moment
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
