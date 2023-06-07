import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/survey';
import { BuildService } from '../build.service';

@Component({
  selector: 'app-build-question-item',
  templateUrl: './build-question-item.component.html',
  styleUrls: ['./build-question-item.component.scss'],
})
export class BuildQuestionItemComponent {
  @Input() question: Question;
  @Input() i: number;

  constructor(private buildService: BuildService) {}

  onDelete(id: number) {
    this.buildService.deleteQuestion(id);
  }

  onDuplicate(question: Question) {
    this.buildService.duplicate(question);
  }
}
