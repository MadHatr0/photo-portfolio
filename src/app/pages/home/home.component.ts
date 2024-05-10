import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('homeImageContainer') container!: ElementRef;
  @ViewChild('magikCursor') magikCursor!: ElementRef;

  ngAfterViewInit(): void {
    const imageContainer = this.container.nativeElement;
    const magikCursor = this.container.nativeElement;


    imageContainer.addEventListener('mousemove', (e: MouseEvent) => {
      const radius = 50; // half of the radius. This puts the cursor in the center
      const rect = imageContainer.getBoundingClientRect(); // get bounds of image container
      const mX = e.clientX - rect.left - radius; // set cursor position
      const mY = e.clientY - rect.top - radius; // set cursor position
      console.log(`mX: ${mX}, mY: ${mY}`)
      imageContainer.style.setProperty('--cursor-x', `${mX}px`)
      imageContainer.style.setProperty('--cursor-y', `${mY}px`)

      const underImage = imageContainer.querySelector('.under-image') as HTMLElement;
      underImage.style.opacity = '0'

      // // allows the magik-cursor to follow mouse movement
      // magikCursor.style.left = `${mX}px`
      // magikCursor.style.top = `${mY}px`

      const doMagik: any = document.elementsFromPoint(e.clientX, e.clientY);
      if (doMagik.some((e: any) => e === underImage)) {
        underImage.style.opacity = '1';
      }
    })
  }
}
