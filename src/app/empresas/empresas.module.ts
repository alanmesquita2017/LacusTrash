import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas.component';
import { EmpresasDetalheComponent } from './empresas-detalhe/empresas-detalhe.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {EmpresasRoutingModule} from './empresas.routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {EmpresasService} from './empresas.service';
import {HttpClientModule} from '@angular/common/http';
//import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component'; // <-- NgModel lives here



@NgModule({
  declarations: [EmpresasComponent, EmpresasDetalheComponent],
  exports: [
    EmpresasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EmpresasRoutingModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    EmpresasService
  ],
})
export class EmpresasModule { }



