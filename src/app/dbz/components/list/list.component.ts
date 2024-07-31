import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  /**
   * Input() - Nos sirve para recibir algo de mundo exterios o de un componente padre.
   * */
  @Input({required: true})
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ];

  /**
   * @description Declaramos nuestra propiedad de evento que deseemos emitir a nuestro
   * componente padre.
   * */

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string): void {
    if (!id) return;

    this.onDelete.emit(id)
  }


}
