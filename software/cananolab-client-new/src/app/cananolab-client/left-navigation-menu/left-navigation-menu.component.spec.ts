import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavigationMenuComponent } from './left-navigation-menu.component';

describe('LeftNavigationMenuComponent', () => {
  let component: LeftNavigationMenuComponent;
  let fixture: ComponentFixture<LeftNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavigationMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
