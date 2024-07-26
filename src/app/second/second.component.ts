import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThirdComponent} from "./third/third.component";

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
  @Input()
  value: number = 30;

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>();

  updateValue(value: number){
    this.valueChange.emit(value)
  }
}
