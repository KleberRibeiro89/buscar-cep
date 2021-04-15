import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { VisualizarCepComponent } from './visualizar-cep/visualizar-cep.component';


@NgModule({
  declarations: [
    AppComponent,
    VisualizarCepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
