import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}
  get characters(): Character[] {
    return this.dbzService.characterList;
  }
  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacter(id);
    
  }
}
