import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule, } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';

import { CdkDemoDialogComponent } from '../cdk-demo-dialog/cdk-demo-dialog.component';

@Component({
  selector: 'app-cdk-demo',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    MatButtonModule,
  ],
  templateUrl: './cdk-demo.component.html',
  styleUrls: ['./cdk-demo.component.scss']
})
export class CdkDemoComponent implements OnInit {

  constructor(
    private dialog: Dialog,
  ) { }

  open() {
    this.dialog.open(CdkDemoDialogComponent);
  }

  ngOnInit(): void {
  }

}
