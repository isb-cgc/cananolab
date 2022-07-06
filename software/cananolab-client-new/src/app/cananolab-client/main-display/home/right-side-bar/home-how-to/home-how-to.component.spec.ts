import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHowToComponent } from './home-how-to.component';

describe('HomeHowToComponent', () => {
  let component: HomeHowToComponent;
  let fixture: ComponentFixture<HomeHowToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHowToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHowToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
