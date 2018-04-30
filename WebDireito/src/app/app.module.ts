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
import { DicasJuridicasComponent } from './dicas-juridicas/dicas-juridicas.component';
import { EventosComponent } from './eventos/eventos.component';
import { DireitoArteComponent } from './direito-arte/direito-arte.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroducaoComponent,
    ArtigoComponent,
    LoginComponent,
    QuemSomosComponent,
    UniNewsComponent,
    SobreComponent,
    MundoJuridicoComponent,
    DicasJuridicasComponent,
    EventosComponent,
    DireitoArteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
