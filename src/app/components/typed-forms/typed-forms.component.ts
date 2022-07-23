import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormControl, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

interface Address {
  city?: FormControl<string>;
  state?: FormControl<string>;
  postalCode?: FormControl<string>;
}
interface UserForm {
  name: FormControl<string>;
  age: FormControl<string>;
  address?: FormGroup<Address>;
}

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

  userForm = new FormGroup<UserForm>({
    name: new FormControl(),
    age: new FormControl(),
    address: new FormGroup<Address>({
      city: new FormControl(),
      state: new FormControl(),
      postalCode: new FormControl(),
    }),
  });

  submit() {
    console.log(this.userForm.value);
    // const { address, age, name } = this.userForm.value;
    // const { city, state, postalCode } = address;
  }

}
