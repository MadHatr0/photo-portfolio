import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from './utilities/image/image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'photo-portfolio';
}
