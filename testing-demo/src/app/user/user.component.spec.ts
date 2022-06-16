import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user name as in userService', () => {
    let userService = new UserService();
    expect(userService.user.name).toEqual(component.user.name);
  })

  it('should have user name as in userService', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  })

  it('should display username if logged in', () => {
    component.userLoggedIn = true;
    fixture.detectChanges();
    let template = fixture.debugElement.nativeElement;
    expect(template.querySelector('p').textContent).toContain(component.user.name);
  })

  it('shouldn\'t display username if not logged in', () => {
    component.userLoggedIn = false;
    fixture.detectChanges();
    let template = fixture.debugElement.nativeElement;
    expect(template.querySelector('p').textContent).not.toContain(component.user.name);
  })
});
