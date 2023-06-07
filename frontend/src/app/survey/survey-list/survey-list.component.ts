import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Survey } from 'src/app/models/survey';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss'],
})
export class SurveyListComponent implements OnInit {
  surveyList$: Observable<Survey[]>;

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.surveyList$ = this.surveyService.surveyList$;
  }
}
