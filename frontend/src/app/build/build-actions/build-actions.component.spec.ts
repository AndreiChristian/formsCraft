import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildActionsComponent } from './build-actions.component';

describe('BuildActionsComponent', () => {
  let component: BuildActionsComponent;
  let fixture: ComponentFixture<BuildActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
