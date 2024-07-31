import {Component} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponents {

  constructor(private dbzService: DbzService) {
  }

  /**
   * @description aquí obtenemos los personajes qe están en nuestro servicio.
   * */
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  /**
   * @description aquí creamos un método donde llamamos a nuestro otro método qu esta en el servicio.
   * */
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id)
  }


  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character)
  }


}
