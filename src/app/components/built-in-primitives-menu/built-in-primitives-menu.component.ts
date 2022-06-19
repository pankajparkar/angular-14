import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-built-in-primitives-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in-primitives-menu.component.html',
  styleUrls: ['./built-in-primitives-menu.component.scss']
})
export class BuiltInPrimitivesMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
