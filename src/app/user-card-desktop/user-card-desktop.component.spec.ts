import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardDesktopComponent } from './user-card-desktop.component';

describe('UserCardDesktopComponent', () => {
  let component: UserCardDesktopComponent;
  let fixture: ComponentFixture<UserCardDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
