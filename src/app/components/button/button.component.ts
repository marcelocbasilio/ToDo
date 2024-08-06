import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgStyle} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgStyle, CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClicked = new EventEmitter();


  onClick() {
    this.btnClicked.emit(this.text);
  }
}
