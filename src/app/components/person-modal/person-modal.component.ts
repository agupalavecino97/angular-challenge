import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.scss']
})
export class PersonModalComponent {
  
  @Input() person: Person = new Person();

  constructor(public bsModalRef: BsModalRef) {}

}
