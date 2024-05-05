import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a picture tag', () => {
    const pictureTag = fixture.nativeElement;
    expect(pictureTag.querySelector('picture').toBeTruthy)
  })
});
