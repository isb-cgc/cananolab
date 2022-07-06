import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CananolabClientComponent } from './cananolab-client.component';

describe('CananolabClientComponent', () => {
  let component: CananolabClientComponent;
  let fixture: ComponentFixture<CananolabClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CananolabClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CananolabClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
