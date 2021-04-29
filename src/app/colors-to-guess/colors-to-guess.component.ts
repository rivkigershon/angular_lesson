import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { colors } from 'src/data/colors';

@Component({
  selector: 'app-colors-to-guess',
  templateUrl: './colors-to-guess.component.html',
  styleUrls: ['./colors-to-guess.component.css']
})
export class ColorsToGuessComponent implements OnInit {
  @Output() realColors: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() butNewGame: boolean = false;

  constructor() { }
  colorsChoose: string[] = [];
  colorsToGuess(): void {
    if (!this.butNewGame) {
      for (let i = 0; i < 4; i++) {
        this.colorsChoose[i] = colors[Math.floor(Math.random() * 6)];
        console.log(this.colorsChoose[i]);
      }
      this.realColors.emit(this.colorsChoose);
    }
  }
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.colorsToGuess();
  }
}