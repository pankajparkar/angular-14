import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extended-diagnostics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extended-diagnostics.component.html',
  styleUrls: ['./extended-diagnostics.component.scss']
})
export class ExtendedDiagnosticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
