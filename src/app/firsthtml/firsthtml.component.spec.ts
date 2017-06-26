import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsthtmlComponent } from './firsthtml.component';

describe('FirsthtmlComponent', () => {
  let component: FirsthtmlComponent;
  let fixture: ComponentFixture<FirsthtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsthtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsthtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
