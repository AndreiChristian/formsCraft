import { Component, Input } from '@angular/core';
import { BuildService } from '../build.service';
import { Question } from 'src/app/models/survey';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-build-actions',
  templateUrl: './build-actions.component.html',
  styleUrls: ['./build-actions.component.scss'],
})
export class BuildActionsComponent {
  constructor(private buildService: BuildService) {}

  @Input() drawer: MatDrawer;

  onAddNewQuestion() {
    // const newQuestion: Question = {
    //   id: Math.random(),
    //   type: 'text',
    // };
    // this.buildService.addQuestion(newQuestion);
    this.drawer.toggle();
  }
}
