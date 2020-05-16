import { Component, OnInit } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {EmpresasDTO} from '../empresasDTO';
import {NgForm} from '@angular/forms';
import {EmpresasService} from '../empresas.service';


@Component({
  selector: 'app-empresas-detalhe',
  templateUrl: './empresas-detalhe.component.html',
  styleUrls: ['./empresas-detalhe.component.css'],
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
export class EmpresasDetalheComponent implements OnInit {

  constructor(private empresasService: EmpresasService,) { }

  empresas: EmpresasDTO =  {
    id: null,
    nomeFantasia: null,
    cnpj: null,
    telefone: null,
    endereco: null,
    razaoSocial: null,    
    materiaisTrabalhados: null,
    cotacao:null,
    numeroDeColeta:null,
  };

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.empresas = (f.value);
    if (this.empresas.id === null) {
      console.log('id null', this.empresas);
      this.empresasService.saveEmpresas(this.empresas);
    } else {
      this.empresasService.updateEmpresas(this.empresas);
    }
  }


}








