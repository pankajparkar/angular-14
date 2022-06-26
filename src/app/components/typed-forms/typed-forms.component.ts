import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-typed-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.scss']
})
export class TypedFormsComponent {

  userForm = new FormGroup({
    name: new UntypedFormControl(''),
    age: new UntypedFormControl(''),
    address: new FormGroup({
      city: new UntypedFormControl(),
      state: new UntypedFormControl(),
      postalCode: new UntypedFormControl(),
    }),
  });

  submit() {
    console.log(this.userForm.value);
    const { } = this.userForm.value;
  }

}
