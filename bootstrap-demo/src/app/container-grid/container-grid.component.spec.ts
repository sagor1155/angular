import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerGridComponent } from './container-grid.component';

describe('ContainerGridComponent', () => {
  let component: ContainerGridComponent;
  let fixture: ComponentFixture<ContainerGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
