import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildQuestionListComponent } from './build-question-list.component';

describe('BuildQuestionListComponent', () => {
  let component: BuildQuestionListComponent;
  let fixture: ComponentFixture<BuildQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildQuestionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
