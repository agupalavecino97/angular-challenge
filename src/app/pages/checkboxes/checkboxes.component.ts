import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent {
  option = signal(0);


  onOptionChange(opt: number) {
    this.option.update(val => val = opt);
  }
}
