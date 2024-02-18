import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavorisComponent } from './user-favoris.component';

describe('UserFavorisComponent', () => {
  let component: UserFavorisComponent;
  let fixture: ComponentFixture<UserFavorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFavorisComponent]
    });
    fixture = TestBed.createComponent(UserFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
