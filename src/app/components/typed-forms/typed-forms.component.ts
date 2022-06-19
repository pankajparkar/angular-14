import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    name: new FormControl<string>(''),
    age: new FormControl<number | null>(null),
    address: new FormGroup({
      city: new FormControl<string>(''),
      state: new FormControl<string>(''),
      postalCode: new FormControl<number | null>(null),
    }),
  });

  submit() {
    console.log(this.userForm.value);
    const { address, age, name } = this.userForm.value
    // if (address !== undefined) {
    //   const { city, state, postalCode } = address;
    // }
  }

}
