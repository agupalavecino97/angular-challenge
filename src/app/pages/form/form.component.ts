import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { PersonModalComponent } from 'src/app/components/person-modal/person-modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [BsModalRef]
})
export class FormComponent{
  

  person: Person = new Person();
  public modalRef!: BsModalRef;

  
  
  constructor(public fb: FormBuilder, private modalService: BsModalService) {}

  personForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phoneNumber: [''],
    salary: [''],
  })  

  onSubmit() {
    if (!this.personForm.valid) {
      alert('Complete data');
    } else {
      if(this.personForm.value != null) {
        this.modalRef = this.modalService.show(PersonModalComponent, {
          initialState: {
            person: new Person(
              1, 
              this.personForm.value.email ? this.personForm.value.email : '', 
              this.personForm.value.firstName ? this.personForm.value.firstName : '', 
              this.personForm.value.lastName ? this.personForm.value.lastName : '', 
              this.personForm.value.phoneNumber ? this.personForm.value.phoneNumber : '', 
              this.personForm.value.salary ? this.personForm.value.salary : '')
          }
        });
      }      
    }
  }
}
