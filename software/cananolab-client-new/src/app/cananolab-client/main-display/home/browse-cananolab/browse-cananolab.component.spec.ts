import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCananolabComponent } from './browse-cananolab.component';

describe('BrowseCananolabComponent', () => {
  let component: BrowseCananolabComponent;
  let fixture: ComponentFixture<BrowseCananolabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseCananolabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCananolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
