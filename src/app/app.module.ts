import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelojModule } from './reloj/reloj.module';
import { ListaComponent } from './clientes/lista/lista.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RelojModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
