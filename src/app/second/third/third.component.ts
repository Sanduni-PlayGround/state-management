import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {ValueService} from "../../service/value.service";

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  value: number = 50;
  valueService: ValueService = inject(ValueService);

  updateValue(value: number){
    this.value = value;
    this.valueService.updateValue(value);
  }

  constructor() {
    this.valueService.getValue().subscribe(value => this.value);
  }
}
