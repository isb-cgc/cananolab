import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalizationComponent } from './functionalization.component';

describe('FunctionalizationComponent', () => {
  let component: FunctionalizationComponent;
  let fixture: ComponentFixture<FunctionalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
