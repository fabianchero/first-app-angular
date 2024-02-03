import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 38;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getSomeTimes(): string {
    return `${this.name}` + ` ` + `${this.age}`;
  }

  changenHeroName() {
    this.name = 'spiderman';
  }
  changenHeroAge() {
    this.age = 17;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 38;

  }
}
