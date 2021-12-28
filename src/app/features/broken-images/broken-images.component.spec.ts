import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenImagesComponent } from './broken-images.component';

describe('BrokenImagesComponent', () => {
  let component: BrokenImagesComponent;
  let fixture: ComponentFixture<BrokenImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokenImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
