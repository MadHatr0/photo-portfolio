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

  ngAfterViewInit(): void {
    const imageContainer = this.container.nativeElement;

    imageContainer.addEventListener('mousemove', (e: MouseEvent) => {
      const radius = 100; // half of the radius. This puts the cursor in the center
      const rect = imageContainer.getBoundingClientRect();
      const mX = e.clientX - rect.left - radius;
      const mY = e.clientY - rect.top - radius;
      const underImage = imageContainer.querySelector('.under-image') as HTMLElement;
      const elementsAtCursor: any[] = document.elementsFromPoint(e.clientX, e.clientY);

      imageContainer.style.setProperty('--cursor-x', `${mX}px`)
      imageContainer.style.setProperty('--cursor-y', `${mY}px`)

      if (elementsAtCursor.includes(underImage)) {
        const underImageRec = underImage.getBoundingClientRect();
        const relX = (e.clientX - underImageRec.left) / underImageRec.width;
        const relY = (e.clientY - underImageRec.top) / underImageRec.height;

        underImage.style.clipPath = `circle(100px at ${relX * 100}% ${relY * 100}%)`
        underImage.style.opacity = '1'
      } else {
        underImage.style.opacity = '0'
      }
    })
  }
}
