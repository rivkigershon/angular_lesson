import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  realColors: string[] = [];
  allGuesses: string[][] = [];
  butNewGame: boolean = false;
  insertNewGuess(currentGuess: string[]): void {
    this.allGuesses.push([currentGuess[0], currentGuess[1], currentGuess[2], currentGuess[3]]);
  }
  updateRealColors(colors: string[]): void {
    this.realColors = colors;
  }
  winner(win: boolean): void {
    this.butNewGame = true;
  }
  newGame(): void {
    this.allGuesses = [];
    this.butNewGame = false;
  }
}
