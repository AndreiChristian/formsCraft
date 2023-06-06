import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildQuestionItemComponent } from './build-question-item.component';

describe('BuildQuestionItemComponent', () => {
  let component: BuildQuestionItemComponent;
  let fixture: ComponentFixture<BuildQuestionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildQuestionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildQuestionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
