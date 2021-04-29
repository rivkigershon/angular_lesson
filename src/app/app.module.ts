import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowColorsComponent } from './show-colors/show-colors.component';
import { ColorsToGuessComponent } from './colors-to-guess/colors-to-guess.component';
import { GuessComponent } from './guess/guess.component';
import { MarkComponent } from './mark/mark.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowColorsComponent,
    ColorsToGuessComponent,
    GuessComponent,
    MarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
