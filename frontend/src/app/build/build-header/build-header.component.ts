import { Component } from '@angular/core';
import { SurveyHeader } from '../../models/survey';

@Component({
  selector: 'app-build-header',
  templateUrl: './build-header.component.html',
  styleUrls: ['./build-header.component.scss'],
})
export class BuildHeaderComponent {
  formHeader: SurveyHeader = {
    title: 'Untitled Survey',
    description: 'No description',
  };
}
