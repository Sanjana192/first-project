import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivsComponent } from './subdivs.component';

describe('SubdivsComponent', () => {
  let component: SubdivsComponent;
  let fixture: ComponentFixture<SubdivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
