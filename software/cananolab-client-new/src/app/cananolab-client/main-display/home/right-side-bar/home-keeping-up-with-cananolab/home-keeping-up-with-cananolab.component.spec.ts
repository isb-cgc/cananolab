import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKeepingUpWithCananolabComponent } from './home-keeping-up-with-cananolab.component';

describe('HomeKeepingUpWithCananolabComponent', () => {
  let component: HomeKeepingUpWithCananolabComponent;
  let fixture: ComponentFixture<HomeKeepingUpWithCananolabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeKeepingUpWithCananolabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKeepingUpWithCananolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
