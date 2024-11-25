import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-register',
  templateUrl: './post-register.component.html',
  styleUrls: ['./post-register.component.scss']
})
export class PostRegisterComponent implements OnInit {

  userRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userRegisterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      userName: ['', Validators.required, Validators.minLength(5)],
      password: ['', Validators.minLength(7)]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.userRegisterForm.valid){
      
    }
  }

}
