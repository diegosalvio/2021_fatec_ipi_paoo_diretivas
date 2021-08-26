import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoQuadroComponent } from './curso-quadro/curso-quadro.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoQuadroComponent,
    CursoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
