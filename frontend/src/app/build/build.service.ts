import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../models/survey';

@Injectable({
  providedIn: 'root',
})
export class BuildService {
  private questionsSubject = new BehaviorSubject<Question[]>([]);
  public questions$ = this.questionsSubject.asObservable();

  constructor() {}

  addQuestion(newQuestion: Question) {
    const newQuestionArray: Question[] = [
      ...this.questionsSubject.getValue(),
      newQuestion,
    ];
    this.questionsSubject.next(newQuestionArray);
  }

  deleteQuestion(id: number) {
    const newQuestionArray: Question[] = this.questionsSubject
      .getValue()
      .filter((q) => q.id !== id);

    this.questionsSubject.next(newQuestionArray);
  }

  duplicate(question: Question) {
    const newQuestion: Question = {
      ...question,
      id: Math.random(),
    };
    this.addQuestion(newQuestion);
  }
}
