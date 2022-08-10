import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhatsNewComponent } from './home-whats-new.component';

describe('HomeWhatsNewComponent', () => {
  let component: HomeWhatsNewComponent;
  let fixture: ComponentFixture<HomeWhatsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhatsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhatsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
