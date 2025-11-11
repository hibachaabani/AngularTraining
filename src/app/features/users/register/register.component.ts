import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  gForm: FormGroup;
  constructor() {
    }
    ngOnInit() {
    this.gForm = new FormGroup({
      firstName: new FormControl('',
                    [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('',
                    [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
    }

    save(){
    let user=this.gForm.getRawValue();
    //user push service => backend
    }
}
