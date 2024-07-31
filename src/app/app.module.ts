import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CounterModule} from "./counter/counter.module";
import {HeroesModule} from "./heroes/heroes.module";
import {DbzModule} from "./dbz/dbz.module";


/*
* Un modulo no es mas que una simple clase que tiene un decorador asi mismo se convierte en un agrupador.
* En otras palabras encapsula una funcionalidad de tal manera que si necesitamos compartirla nos las facilite
* */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [  // Lo modulos simepre iran en los imports
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
