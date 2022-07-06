import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserActionsComponent } from './home-user-actions.component';

describe('HomeUserActionsComponent', () => {
  let component: HomeUserActionsComponent;
  let fixture: ComponentFixture<HomeUserActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
