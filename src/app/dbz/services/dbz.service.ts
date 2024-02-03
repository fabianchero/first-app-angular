import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 100,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 80,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characterList.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    this.characterList = this.characterList.filter(
      (character) => character.id !== id
    );
  }
}
