import { EmpresasDetalheComponent } from './empresas-detalhe/empresas-detalhe.component';
import {RouterModule, Routes} from '@angular/router';
import {EmpresasComponent} from './empresas.component';
import { NgModule, Component } from '@angular/core';
//import { from } from 'rxjs';



const empresasRouts: Routes = [
  {path: 'empresas', component: EmpresasComponent},
  {path: 'empresasDetalhe', component: EmpresasDetalheComponent},
];


@NgModule({
  imports: [RouterModule.forChild(empresasRouts)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule {

}
