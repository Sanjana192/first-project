import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercarosalComponent } from './headercarosal.component';

describe('HeadercarosalComponent', () => {
  let component: HeadercarosalComponent;
  let fixture: ComponentFixture<HeadercarosalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadercarosalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercarosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
