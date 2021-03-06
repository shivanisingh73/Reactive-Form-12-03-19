import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() {
  }
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]+')]),
    line1: new FormControl(''),
    line2: new FormControl(''),
    state: new FormControl(''),
    district: new FormControl(''),
    pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),

  });
  ngOnInit() {
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    alert("Submitted")
    console.warn(this.registerForm.value);
  }
}
