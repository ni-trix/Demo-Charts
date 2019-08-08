import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersDesktopComponent } from './list-users-desktop.component';

describe('ListUsersDesktopComponent', () => {
  let component: ListUsersDesktopComponent;
  let fixture: ComponentFixture<ListUsersDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
