import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssDetailsComponent } from './iss-details.component';

describe('IssDetailsComponent', () => {
  let component: IssDetailsComponent;
  let fixture: ComponentFixture<IssDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
