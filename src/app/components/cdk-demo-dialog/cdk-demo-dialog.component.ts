import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cdk-demo-dialog',
  standalone: true,
  imports: [
    CommonModule,
    CdkMenuModule,
    DialogModule,
    MatButtonModule,
  ],
  templateUrl: './cdk-demo-dialog.component.html',
  styleUrls: ['./cdk-demo-dialog.component.scss']
})
export class CdkDemoDialogComponent implements OnInit {

  constructor(
    readonly dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
  }

}
