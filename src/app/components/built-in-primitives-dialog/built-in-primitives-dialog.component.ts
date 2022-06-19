import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-built-in-primitives-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in-primitives-dialog.component.html',
  styleUrls: ['./built-in-primitives-dialog.component.scss']
})
export class BuiltInPrimitivesDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
