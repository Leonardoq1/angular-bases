import {NgModule} from "@angular/core";
import {HeroComponent} from "./hero/hero.component";
import {ListComponent} from "./list/list.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  imports:[CommonModule] // Si queremos que los *ngFor, *ngIf, etc. Funcionen se debe importador el CommonModule ya que el los contiene.
})

export class HeroesModule {

}
