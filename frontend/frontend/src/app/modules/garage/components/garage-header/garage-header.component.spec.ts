import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageHeaderComponent } from './garage-header.component';

describe('GarageHeaderComponent', () => {
  let component: GarageHeaderComponent;
  let fixture: ComponentFixture<GarageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageHeaderComponent]
    });
    fixture = TestBed.createComponent(GarageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
