import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-optional-injector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './optional-injector.component.html',
  styleUrls: ['./optional-injector.component.scss']
})
export class OptionalInjectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
