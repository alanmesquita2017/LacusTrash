import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {ClienteComponent} from './cliente/cliente.component';


const appRouts: Routes = [
  
{ path: '', component: ClienteComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent }
//{path: 'cliente', component: ClienteComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
