import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponents} from "./pages/main-page.components";
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import {FormsModule} from "@angular/forms";


/**
* @description Si queremos usar las directivas como *ngFor, *bgIf en nuestros componente de angular.
 * tenemos que importar CommonModule
* */
@NgModule({
  declarations: [
    MainPageComponents,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[MainPageComponents],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
