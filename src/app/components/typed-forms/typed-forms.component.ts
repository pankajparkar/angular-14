import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typed-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.scss']
})
export class TypedFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
