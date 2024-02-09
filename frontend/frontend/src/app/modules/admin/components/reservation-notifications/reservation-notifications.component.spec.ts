import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationNotificationsComponent } from './reservation-notifications.component';

describe('ReservationNotificationsComponent', () => {
  let component: ReservationNotificationsComponent;
  let fixture: ComponentFixture<ReservationNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationNotificationsComponent]
    });
    fixture = TestBed.createComponent(ReservationNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
