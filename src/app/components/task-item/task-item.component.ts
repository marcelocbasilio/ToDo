import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../../Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgStyle
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter<Task>();

  faTimes = faTimes;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }
}
