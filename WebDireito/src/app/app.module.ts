import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { ArtigoComponent } from './artigo/artigo.component';
import { LoginComponent } from './login/login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { UniNewsComponent } from './uni-news/uni-news.component';
import { SobreComponent } from './sobre/sobre.component';
import { MundoJuridicoComponent } from './mundo-juridico/mundo-juridico.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    IntroducaoComponent,
    ArtigoComponent,
    LoginComponent,
    QuemSomosComponent,
    UniNewsComponent,
    SobreComponent,
    MundoJuridicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
