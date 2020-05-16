import { ColetaDetalheComponent } from './coleta-detalhe/coleta-detalhe.component';
import {RouterModule, Routes} from '@angular/router';
import {ColetaComponent} from './coleta.component';
import { NgModule, Component } from '@angular/core';


const coletaRouts: Routes = [
  {path: 'coleta', component: ColetaComponent},
  {path: 'coletaDetalhe', component: ColetaDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(coletaRouts)],
  exports: [RouterModule]
})
export class ColetaRoutingModule {

}
