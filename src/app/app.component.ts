import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      a {
        cursor: pointer;
        height: 50px;
      }

      .list-group-item:active {
        opacity: 0.7 !important;
      }
    `]
})
export class AppComponent {

  // color array
  public colors: string[] = ['rgb(251, 3, 3)', 'rgb(250, 250, 3)', 'rgb(3, 129, 3)', 'rgb(79, 2, 134)', 'rgb(176, 217, 231)', 'rgb(53, 80, 90)'];

  // Plays a sound by receiving the note number.
  playSound(n: number): void{
    const audio = new Audio();
    audio.src = `../assets/sounds/note${n}.wav`;
    audio.load();
    audio.play();
  }

}
