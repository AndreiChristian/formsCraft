import { Component, Input, OnInit } from '@angular/core';
import { BuildService } from '../build.service';
import { Question } from 'src/app/models/survey';
import { MatDrawer } from '@angular/material/sidenav';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-build-drawer',
  templateUrl: './build-drawer.component.html',
  styleUrls: ['./build-drawer.component.scss'],
})
export class BuildDrawerComponent implements OnInit {
  @Input() drawer: MatDrawer;

  selected: string;

  constructor(private buildService: BuildService) {}

  ngOnInit(): void {}

  onAddNewQuestion() {
    const newQuestion: Question = {
      id: Math.random(),
      type: this.selected,
      title: '',
      description: '',
      required: false,
    };
    this.buildService.addQuestion(newQuestion);
    this.drawer.close();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const newQuestion: Question = {
      id: Math.random(),
      type: form.value.type,
      title: form.value.title,
      description: form.value.description,
      required: form.value.required != '',
    };
    this.buildService.addQuestion(newQuestion);
  }
}
