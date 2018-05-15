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
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';


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
    DireitoArteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
