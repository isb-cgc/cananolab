import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationComponent } from './curation.component';

describe('CurationComponent', () => {
  let component: CurationComponent;
  let fixture: ComponentFixture<CurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
