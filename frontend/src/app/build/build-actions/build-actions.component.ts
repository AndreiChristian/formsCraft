import { Component, Input } from '@angular/core';
import { BuildService } from '../build.service';
import { Question, Survey } from 'src/app/models/survey';
import { MatDrawer } from '@angular/material/sidenav';
import { SurveyService } from 'src/app/survey/survey.service';

@Component({
  selector: 'app-build-actions',
  templateUrl: './build-actions.component.html',
  styleUrls: ['./build-actions.component.scss'],
})
export class BuildActionsComponent {
  constructor(
    private buildService: BuildService,
    private surveyService: SurveyService
  ) {}

  @Input() drawer: MatDrawer;

  onAddNewQuestion() {
    this.drawer.toggle();
  }

  onSaveSurvey() {
    const newSurvey: Survey = {
      header: {
        title: 'Title',
        description: 'Description',
      },
      questions: [],
      active: Math.random() > 0.5 ? true : false,
      created_at: new Date(),
      updated_at: new Date(),
      id: Math.random(),
    };
    this.surveyService.addSurvey(newSurvey);
  }
}
