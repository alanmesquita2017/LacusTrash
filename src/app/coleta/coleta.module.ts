import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColetaComponent } from './coleta.component';
import { ColetaDetalheComponent } from './coleta-detalhe/coleta-detalhe.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ColetaRoutingModule} from './coleta.routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {ColetaService} from './coleta.service';
import {HttpClientModule} from '@angular/common/http';
 




@NgModule({
  declarations: [ColetaComponent, ColetaDetalheComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ColetaRoutingModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    ColetaService
  ],
})
export class ColetaModule { }

