import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageHomeComponent } from './garage-home.component';

describe('GarageHomeComponent', () => {
  let component: GarageHomeComponent;
  let fixture: ComponentFixture<GarageHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageHomeComponent]
    });
    fixture = TestBed.createComponent(GarageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
