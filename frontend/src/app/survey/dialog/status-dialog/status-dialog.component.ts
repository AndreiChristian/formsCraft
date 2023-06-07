import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.scss'],
})
export class StatusDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
