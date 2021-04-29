import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  @Output() newGuessAdded: EventEmitter<string[]> = new EventEmitter<string[]>();
  guessColors: string[] = ["", "", "", ""];
  constructor() { }
  ngOnInit(): void {
  }
  valueChanged(event: any, i: number) {
    this.guessColors[i] = event.target.value;
  }
  addGuess(): void {
    this.newGuessAdded.emit(this.guessColors);
    this.guessColors = ["", "", "", ""];
  }

}