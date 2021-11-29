import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formContact: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formContact = this.formBuilder.group({
      name: ['', Validators.required],
      issue: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      message: ['', Validators.required],
      country: ['', Validators.required],
      client: [false, Validators.required],
      supplier: [false, Validators.required]
    });
    this.formContact.controls.client.valueChanges.subscribe(() => {
      this.formContact.controls.supplier.reset(false, { emitEvent: false });
    });
    this.formContact.controls.supplier.valueChanges.subscribe(() => {
      this.formContact.controls.client.reset(false, { emitEvent: false });
    });
  }

  ngOnInit(): void { }

  submitContact(): void {
    const formData = this.formContact.value;
    formData.client = formData.client === 'true';
    formData.supplier = formData.supplier === 'true';
  }

}
