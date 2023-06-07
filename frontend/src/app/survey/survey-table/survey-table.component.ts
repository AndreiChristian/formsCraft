import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.scss'],
})
export class SurveyTableComponent implements OnInit {
  displayedColumns: string[] = [
    'index',
    'title',
    'questions',
    'status',
    'responses',
    'metrics',
    'edit',
    'created',
    'actions',
  ];
  dataSource: SurveyTableDataSource;

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.dataSource = new SurveyTableDataSource(this.surveyService);
  }
}
export class SurveyTableDataSource extends DataSource<Survey> {
  constructor(private surveyService: SurveyService) {
    super();
  }

  connect(): Observable<Survey[]> {
    return this.surveyService.surveyList$;
  }

  disconnect() {}
}
