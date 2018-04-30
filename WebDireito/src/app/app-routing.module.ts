import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { SobreComponent } from './sobre/sobre.component';
import { MundoJuridicoComponent } from './mundo-juridico/mundo-juridico.component';
import { ArtigoComponent } from './artigo/artigo.component';
import { UniNewsComponent } from './uni-news/uni-news.component';
import { EventosComponent } from './eventos/eventos.component';
import { DireitoArteComponent } from './direito-arte/direito-arte.component';
import { DicasJuridicasComponent } from './dicas-juridicas/dicas-juridicas.component';


const routes: Routes = [

  { path: 'home', component: AppComponent },
  { path: 'QuemSomos', component: QuemSomosComponent },
  { path: 'Sobre', component: SobreComponent },
  { path: 'MundoJuridico', component: MundoJuridicoComponent },
  { path: 'Artigo', component: ArtigoComponent },
  { path: 'UniNews', component: UniNewsComponent },
  { path: 'Eventos', component: EventosComponent },
  { path: 'DireitoArtes', component: DireitoArteComponent },
  { path: 'DicasJuridicas', component: DicasJuridicasComponent }


];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
