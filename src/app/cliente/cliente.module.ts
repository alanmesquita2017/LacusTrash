import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ClienteRoutingModule} from './cliente.routing.module';
//import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {ClienteService} from './cliente.service';
import {HttpClientModule} from '@angular/common/http';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component'; // <-- NgModel lives here

//import { MomentDateAdapter} from '@angular/material/MomentDateAdapter';
 

@NgModule({
  declarations: [ClienteComponent, ClienteDetalheComponent],//[ClienteComponent,AlunoDetalheComponent]
  exports: [
    ClienteComponent
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
    ClienteRoutingModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule
    //MomentDateAdapter
  ],
  providers: [
    ClienteService
  ],
})
export class ClienteModule { }
