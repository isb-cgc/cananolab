import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftStaticMenuComponent } from './left-static-menu.component';

describe('LeftStaticMenuComponent', () => {
  let component: LeftStaticMenuComponent;
  let fixture: ComponentFixture<LeftStaticMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftStaticMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftStaticMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
