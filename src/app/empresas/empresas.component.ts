
import {Component, OnInit, ViewChild} from '@angular/core';
import {EmpresasDTO} from './empresasDTO';
import {NgForm} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {EmpresasService} from './empresas.service';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
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
export class EmpresasComponent implements OnInit {

  constructor(private empresasService: EmpresasService) { }

  //lista de Empresas 
  empresass: EmpresasDTO[];

  empresas: EmpresasDTO =  {
    id: null,
    nomeFantasia:null,
    cnpj: null,
    telefone: null,
    endereco: null,
    razaoSocial: null,
    materiaisTrabalhados:null,
    cotacao: null,
    numeroDeColeta: null,

  };

  displayedColumns: string[] = ['Nome Fantasia', 'CNPJ', 'Telefone', 'Endereço', 'Razão Social',
  'Materiais Trabalhados','Cotação' ,'Numero De Coleta','Ações'];
  dataSource;

  @ViewChild
    (MatSort, {static: true}) sort: MatSort;

  errorMessage; sid: string;

  empresas2: EmpresasDTO[];


  ngOnInit(): void {
    this.empresasService.list().subscribe(dados => {
      this.empresass = dados;
      this.dataSource = new MatTableDataSource(this.empresass);
      this.setarLista(this.empresass);
      this.dataSource.sort = this.sort;
    });
  }

  onSubmit(f: NgForm) {
    this.empresas = (f.value);
    console.log(this.empresas);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(f.value);
  }

  editar(empresas: EmpresasDTO) {
    console.log(empresas);
  }

  setarLista(empresass: EmpresasDTO[]) {
    this.empresas2 = empresass;
    console.log(this.empresas2);
  }

}



