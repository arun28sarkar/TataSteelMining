
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  verifyOtp: any;
  userType: any;
  businessType: any;
  addressProfe: any;
  cancelCheckBook: any;

  constructor(private _router: Router, private _fb: FormBuilder,
    private _auth: AuthService,private toastr: ToastrService) {
    this.registerForm = _fb.group({
      name: ['Arun'],
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
      address_proof_file: [''],
      cancel_cheque_file: ['']
    })
  }
  get f() { return this.registerForm.controls; }

  ngOnInit(): void {


  }

  selectCustomer(event: any) {
    console.log(event.target.value);
    this.userType = event.target.value;
  }
  onSelectCheckBox(event: any) {
    console.log(event.target.value);
    this.chooseProduct = event.target.value;
  };
  choosProductSize(event: any) {
    console.log(event.target.value);
    this.chooseProductSize = event.target.value;
  };
  selectBusiness(event: any) {
    console.log(event.target.value);
    this.businessType = event.target.value;
  }
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
  getAddrssProfe(event: any) {
    this.addressProfe = event.target.files[0].name;
  }
  getCancelcheck(event: any) {
    this.cancelCheckBook = event.target.files[0].name;
  }
  submitRegister() {
    if (this.registerForm.invalid) {
      this.toastr.error('Form should not be emty !','Oops')
    } else {
      this.registerForm.value.pref_product_size = this.chooseProductSize;
      this.registerForm.value.pref_product = this.chooseProduct;
      this.registerForm.value.user_type = this.userType;
      this.registerForm.value.business_nature = this.businessType;
      this.registerForm.value.address_proof_file = this.addressProfe;
      this.registerForm.value.cancel_cheque_file = this.cancelCheckBook;
      console.log(this.registerForm.value);

      this._auth.register(this.registerForm.value).subscribe(res => {
        console.log(res);
        this.toastr.success('Registered successfully','');
        this.registerForm.reset();
      }, error => {
        this.toastr.error('',error);
      })
    }
  }
}
