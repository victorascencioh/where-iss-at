import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingIssComponent } from './searching-iss.component';

describe('SearchingIssComponent', () => {
  let component: SearchingIssComponent;
  let fixture: ComponentFixture<SearchingIssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingIssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingIssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
