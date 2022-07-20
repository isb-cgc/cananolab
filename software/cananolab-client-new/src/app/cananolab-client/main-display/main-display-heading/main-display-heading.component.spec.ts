import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisplayHeadingComponent } from './main-display-heading.component';

describe('MainDisplayHeadingComponent', () => {
  let component: MainDisplayHeadingComponent;
  let fixture: ComponentFixture<MainDisplayHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDisplayHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDisplayHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
