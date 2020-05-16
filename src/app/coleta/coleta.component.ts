import {Component, OnInit, ViewChild} from '@angular/core';
import {ColetaDTO} from './coletaDTO';
import {NgForm} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {ColetaService} from './coleta.service';

@Component({
  selector: 'app-coleta',
  templateUrl: './coleta.component.html',
  styleUrls: ['./coleta.component.css'],
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
export class ColetaComponent implements OnInit {

  constructor(private coletaService: ColetaService) { }

   //lista de Coletas 
   coletas: ColetaDTO[];

   coleta: ColetaDTO =  {
    id: null,
   //empresaCotacao:EmpresasDTO[];
   pesagemMaterial:null,
   qualidadeMaterial: null,
   dataColeta: null, 
   localizacaoCliente:null,
  };

  displayedColumns: string[] = ['Pesagem Material ', 'Qualidade Material', 'Data Da Coleta', 'Localização Cliente', 'Ações'];
  dataSource;

  @ViewChild
    (MatSort, {static: true}) sort: MatSort;

  errorMessage; sid: string;

  coletas2: ColetaDTO[];


  ngOnInit(): void {
    this.coletaService.list().subscribe(dados => {
      this.coletas = dados;
      this.dataSource = new MatTableDataSource(this.coletas);
      this.setarLista(this.coletas);
      this.dataSource.sort = this.sort;
    });
  }

  onSubmit(f: NgForm) {
    this.coleta = (f.value);
    console.log(this.coleta);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(f.value);
  }

  editar(coleta: ColetaDTO) {
    console.log(coleta);
  }

  setarLista(coletas: ColetaDTO[]) {
    this.coletas2 = coletas;
    console.log(this.coletas2);
  }


}



