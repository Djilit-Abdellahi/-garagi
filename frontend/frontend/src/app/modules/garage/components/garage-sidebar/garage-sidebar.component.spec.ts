import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageSidebarComponent } from './garage-sidebar.component';

describe('GarageSidebarComponent', () => {
  let component: GarageSidebarComponent;
  let fixture: ComponentFixture<GarageSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageSidebarComponent]
    });
    fixture = TestBed.createComponent(GarageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
