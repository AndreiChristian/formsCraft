import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Survey } from '../models/survey';
@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private SurveySubject = new BehaviorSubject<Survey[]>([]);
  public surveyList$ = this.SurveySubject.asObservable();

  constructor() {}

  addSurvey(survey: Survey) {
    const currentSurveys: Survey[] = this.SurveySubject.getValue();
    const newSurveys: Survey[] = [...currentSurveys, survey];
    this.SurveySubject.next(newSurveys);
  }

  deleteSurvey(id: number) {
    const currentSurveys: Survey[] = this.SurveySubject.getValue();
    const newSurveys = currentSurveys.filter((s) => s.id !== id);
    this.SurveySubject.next(newSurveys);
  }
}
