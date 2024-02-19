import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGaragesComponent } from './user-garages.component';

describe('UserGaragesComponent', () => {
  let component: UserGaragesComponent;
  let fixture: ComponentFixture<UserGaragesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserGaragesComponent]
    });
    fixture = TestBed.createComponent(UserGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
