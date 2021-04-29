import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  @Output() win: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() guessColors: string[] = [];
  @Input() realColors: string[] = [];

  marks: string[] = [];
  count: number = 0;
  helpGuessColors: string[] = [];
  degelWinner: boolean = false;
  constructor() { }
  winner(): void {
    alert(":)אלופה ניצחת");
    this.win.emit(true);
  }
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.count = 0;
    this.helpGuessColors = [];
    this.marks = [];
    this.guessColors.forEach((g) => {
      this.helpGuessColors.push(g);
    });
    this.realColors.forEach((c, index: number) => {
      if (c == this.guessColors[index]) {
        this.marks.push("black");
        this.helpGuessColors[index] = "";
        this.count++;
      }
    });
    this.realColors.forEach((c) => {
      this.helpGuessColors.forEach((g) => {
        if (c == g)
          this.marks.push("red");
      });
    });
    if (this.count == 4)
      this.winner();
  }
}
