
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  chooseProduct: any = [];
  chooseProductSize: any;
  registerForm: FormGroup;
  submitted = false;
  mobileNumber: any = '';
  verifyOtp: any

  constructor(private _router: Router, private _fb: FormBuilder,
    private _auth: AuthService) {
    this.registerForm = _fb.group({
      name: [''],
      email: [''],
      phone: ['',Validators.required],
      password: [''],
      gstin: [''],
      org_pan: [''],
      org_name: [''],
      org_address: [''],
      pref_product: [''],
      pref_product_size: [''],
      user_type: [''],
      company_gst: [''],
      company_linked_address: [''],
      company_pan: [''],
      company_name: [''],
      business_nature: [''],
      first_name: [''],
      last_name: [''],
      addressone: [''],
      address_proof_file: [],
      cancel_cheque_file: []
    })
  }
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {

  }

  onSelectCheckBox(event: any) {
    console.log(event.target.value);
    this.chooseProduct = event.target.value;
  };
  choosProductSize(event: any) {
    console.log(event.target.value);
    this.chooseProductSize = event.target.value;
  };
  getOpt() {
    let mobileNu = {
      mobile_no: this.mobileNumber
    }
    this._auth.getOtp(mobileNu).subscribe(res => {
      console.log(res);
    })
  };
  verifyoTp(event: any) {
    this.verifyOtp = event.target.value;
  }
  checkVerifyOtp() {
    alert(this.verifyOtp);

  };
  submitRegister() {
    if (this.registerForm.invalid) {
      alert('Invalid form')
    } else {
      this.submitted = true;
      this.registerForm.value.pref_product_size = this.chooseProductSize;
      this.registerForm.value.pref_product = this.chooseProduct;
      console.log(this.registerForm.value);
    }
  }
}
