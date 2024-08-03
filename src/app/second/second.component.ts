import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {ThirdComponent} from "./third/third.component";
import {ValueService} from "../service/value.service";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [
    ThirdComponent
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  value: number = 30;
  valueService = inject(ValueService);


  constructor() {
    this.valueService.getValue().subscribe(value => this.value);
  }
}
