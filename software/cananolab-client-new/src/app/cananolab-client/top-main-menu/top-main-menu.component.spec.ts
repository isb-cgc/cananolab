import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMainMenuComponent } from './top-main-menu.component';

describe('TopMainMenuComponent', () => {
  let component: TopMainMenuComponent;
  let fixture: ComponentFixture<TopMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMainMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
