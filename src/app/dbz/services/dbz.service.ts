import {Injectable} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {Character} from "../interfaces/character.interface";

console.log(uuid())

/**
 * @description Un servicio en Angular es una clase con una funcionalidad específica
 * que se utiliza para compartir datos, lógica de negocio y funcionalidades entre
 * diferentes componentes de una aplicación.
 * */
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Gokuu',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ]

  addCharacter(character: Character) {

    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter)

  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((c: Character) => c.id !== id)
  }
}
