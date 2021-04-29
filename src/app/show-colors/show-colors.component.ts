import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-colors',
  templateUrl: './show-colors.component.html',
  styleUrls: ['./show-colors.component.css']
})
export class ShowColorsComponent implements OnInit {
  @Input() guessColors: string[] = ["", "", "", ""];
  constructor() { }
  ngOnInit(): void {
  }

}


