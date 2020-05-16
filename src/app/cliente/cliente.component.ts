//import { Component, OnInit } from '@angular/core';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ClienteDTO} from './clienteDTO';
import {NgForm} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {ClienteService} from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
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
export class ClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  //lista de clientes 
  clientes: ClienteDTO[];

  cliente: ClienteDTO =  {
    id: null,
    nomeFantasia: null,
    cnpj: null,
    telefone: null,
    endereco: null,
    razaoSocial: null,
  };

  displayedColumns: string[] = ['Nome Fantasia', 'CNPJ', 'Telefone', 'Endereço', 'Razão Social', 'Ações'];
  dataSource;

  @ViewChild
    (MatSort, {static: true}) sort: MatSort;

  errorMessage; sid: string;

  clientes2: ClienteDTO[];


  ngOnInit(): void {
    this.clienteService.list().subscribe(dados => {
      this.clientes = dados;
      this.dataSource = new MatTableDataSource(this.clientes);
      this.setarLista(this.clientes);
      this.dataSource.sort = this.sort;
    });
  }

  onSubmit(f: NgForm) {
    this.cliente = (f.value);
    console.log(this.cliente);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(f.value);
  }

  editar(cliente: ClienteDTO) {
    console.log(cliente);
  }

  setarLista(clientes: ClienteDTO[]) {
    this.clientes2 = clientes;
    console.log(this.clientes2);
  }

}
