import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { PinvalidationComponent } from './pinvalidation/pinvalidation.component';
import { ReporteComponent } from './reporte/reporte.component';
import { RetiroComponent } from './retiro/retiro.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'pin', component:PinvalidationComponent},
  {path:'operaciones', component:OperacionesComponent},
  {path:'balance', component:BalanceComponent},
  {path:'retiro', component:RetiroComponent},
  {path:'reporte', component:ReporteComponent},
  {path:'error', component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
