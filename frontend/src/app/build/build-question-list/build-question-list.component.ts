import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/survey';
import { BuildService } from '../build.service';

@Component({
  selector: 'app-build-question-list',
  templateUrl: './build-question-list.component.html',
  styleUrls: ['./build-question-list.component.scss'],
})
export class BuildQuestionListComponent implements OnInit {
  questions$: Observable<Question[]> = new Observable();

  constructor(private buildService: BuildService) {}

  ngOnInit(): void {
    this.questions$ = this.buildService.questions$;
  }
}
