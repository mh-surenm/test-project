import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotaimentComponent } from './infotaiment.component';

describe('InfotaimentComponent', () => {
  let component: InfotaimentComponent;
  let fixture: ComponentFixture<InfotaimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfotaimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfotaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
