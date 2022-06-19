import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-title-strategy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-title-strategy.component.html',
  styleUrls: ['./page-title-strategy.component.scss']
})
export class PageTitleStrategyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
