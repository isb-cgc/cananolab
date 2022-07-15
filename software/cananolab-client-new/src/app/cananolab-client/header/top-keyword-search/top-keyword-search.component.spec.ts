import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopKeywordSearchComponent } from './top-keyword-search.component';

describe('TopKeywordSearchComponent', () => {
  let component: TopKeywordSearchComponent;
  let fixture: ComponentFixture<TopKeywordSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopKeywordSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopKeywordSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
