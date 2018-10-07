import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseDetailsComponent } from './practise-details.component';

describe('PractiseDetailsComponent', () => {
  let component: PractiseDetailsComponent;
  let fixture: ComponentFixture<PractiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
