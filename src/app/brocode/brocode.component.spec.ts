import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrocodeComponent } from './brocode.component';

describe('BrocodeComponent', () => {
  let component: BrocodeComponent;
  let fixture: ComponentFixture<BrocodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrocodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
