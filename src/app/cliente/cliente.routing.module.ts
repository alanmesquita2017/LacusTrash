import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import {RouterModule, Routes} from '@angular/router';
import {ClienteComponent} from './cliente.component';
import { NgModule, Component } from '@angular/core';
//import { from } from 'rxjs';



const clienteRouts: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'clienteDetalhe', component: ClienteDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(clienteRouts)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {

}
