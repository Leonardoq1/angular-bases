import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  /**
  * @description Aquí estamos declarando el decorador Output que define una
   * salida del componente que el componente padre puede suscribirse para escuchar.
  * */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  /**
   * @description Aquí estamos agregando los initial values para usarlo en los inputs.
   * */
  public character: Character = {name: '', power: 0};

  emitCharacter(): void {
    // console.log(this.character);

    // Validamos que no vaya valores vacios
    if (this.character.name.length === 0) return;

    // Emitimos el valor
    this.onNewCharacter.emit(this.character)

    this.character = {name: '', power: 0};

  }

}
