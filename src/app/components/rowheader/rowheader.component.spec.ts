import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowheaderComponent } from './rowheader.component';

describe('RowheaderComponent', () => {
  let component: RowheaderComponent;
  let fixture: ComponentFixture<RowheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
