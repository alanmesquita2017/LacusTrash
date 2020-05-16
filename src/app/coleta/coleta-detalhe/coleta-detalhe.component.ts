import { Component, OnInit } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {ColetaDTO} from '../coletaDTO';
import {NgForm} from '@angular/forms';
import {ColetaService} from '../coleta.service';

@Component({
  selector: 'app-coleta-detalhe',
  templateUrl: './coleta-detalhe.component.html',
  styleUrls: ['./coleta-detalhe.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class ColetaDetalheComponent implements OnInit {

  constructor(private coletaService: ColetaService) { }
  coleta: ColetaDTO =  {
    id: null,
    //empresaCotacao: null,
    pesagemMaterial: null,
    qualidadeMaterial: null,
    dataColeta: null,
    localizacaoCliente: null,
   
  };

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.coleta = (f.value);
    if (this.coleta.id === null) {
      console.log('id null', this.coleta);
      this.coletaService.saveColeta(this.coleta);
    } else {
      this.coletaService.updateColeta(this.coleta);
    }
  }


}

