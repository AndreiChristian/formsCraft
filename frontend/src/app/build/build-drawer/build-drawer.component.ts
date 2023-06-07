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
  options: string[] = [''];

  constructor(private buildService: BuildService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const newQuestion: Question = {
      id: Math.random(),
      type: form.value.type,
      title: form.value.title,
      description: form.value.description,
      required: form.value.required != '',
      options: [...this.options],
    };

    console.log(this.options);

    this.buildService.addQuestion(newQuestion);

    form.resetForm();
    this.options = [];
    this.drawer.close();
  }

  onAddOption() {
    this.options.push('');
  }

  onDeleteOption(index: number) {
    this.options.splice(index, 1);
  }
}
