import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from '../survey.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';
import { StatusDialogComponent } from '../dialog/status-dialog/status-dialog.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

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

  constructor(
    private surveyService: SurveyService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource = new SurveyTableDataSource(this.surveyService);
  }

  openDeleteDialog(id: number) {
    this.dialog.open(DeleteDialogComponent, {
      data: id,
    });
  }

  onToggleStatus(event: MatSlideToggleChange) {
    console.log(event.checked);
    this.dialog.open(StatusDialogComponent, {
      data: event.checked,
    });
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
