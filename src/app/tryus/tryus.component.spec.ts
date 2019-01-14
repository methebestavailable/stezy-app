import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryusComponent } from './tryus.component';

describe('TryusComponent', () => {
  let component: TryusComponent;
  let fixture: ComponentFixture<TryusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
