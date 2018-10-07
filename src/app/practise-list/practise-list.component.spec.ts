import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseListComponent } from './practise-list.component';

describe('PractiseListComponent', () => {
  let component: PractiseListComponent;
  let fixture: ComponentFixture<PractiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractiseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
