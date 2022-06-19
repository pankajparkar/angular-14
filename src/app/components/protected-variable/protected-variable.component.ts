import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protected-variable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './protected-variable.component.html',
  styleUrls: ['./protected-variable.component.scss']
})
export class ProtectedVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
