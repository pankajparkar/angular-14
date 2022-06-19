import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.scss']
})
export class InjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
