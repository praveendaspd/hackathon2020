import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressorListComponent } from './progressor-list.component';

describe('TutorialsListComponent', () => {
  let component: ProgressorListComponent;
  let fixture: ComponentFixture<ProgressorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
