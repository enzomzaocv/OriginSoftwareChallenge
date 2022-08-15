import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PinvalidationComponent } from './pinvalidation/pinvalidation.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ReporteComponent } from './reporte/reporte.component';
import { BalanceComponent } from './balance/balance.component';
import { RetiroComponent } from './retiro/retiro.component';
import { TecladoComponent } from './teclado/teclado.component';
import { OperacionesComponent } from './operaciones/operaciones.component';

import { CardapiService } from './services/cardapi.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PinvalidationComponent,
    ErrorpageComponent,
    ReporteComponent,
    BalanceComponent,
    RetiroComponent,
    TecladoComponent,
    OperacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    CardapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
