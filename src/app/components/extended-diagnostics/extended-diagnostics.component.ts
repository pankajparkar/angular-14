import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-extended-diagnostics',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './extended-diagnostics.component.html',
  styleUrls: ['./extended-diagnostics.component.scss']
})
export class ExtendedDiagnosticsComponent implements OnInit {

  // testVariable = '';
  // test = '';

  html = `
    {
      "angularCompilerOptions": {
        "extendedDiagnostics": {
          // The categories to use for specific diagnostics.
          "checks": {
            // Maps check name to its category.
            "invalidBananaInBox": "error"
            "nullishCoalescingNotNullable": "error"
          },
          // The category to use for any diagnostics 
          // not listed in 'checks' above.
          "defaultCategory": "suppress"
        },
        ...
      },
      ...
    }
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
