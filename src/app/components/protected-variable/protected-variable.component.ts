import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protected-variable',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>
      Protected: {{ message }}
    </h1>
  `,
  styleUrls: ['./protected-variable.component.scss']
})
export class ProtectedVariableComponent {
  protected message = 'My Protected Varaible';
}
