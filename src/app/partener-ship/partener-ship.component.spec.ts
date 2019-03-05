import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenerShipComponent } from './partener-ship.component';

describe('PartenerShipComponent', () => {
  let component: PartenerShipComponent;
  let fixture: ComponentFixture<PartenerShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenerShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenerShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
