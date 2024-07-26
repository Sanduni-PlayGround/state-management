import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  @Input()
  value: number = 50;

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>();

  updateValue(value: number){
    this.valueChange.emit(value);
  }
}
