import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Task} from "../../../Task";
import {ButtonComponent} from "../button/button.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    FormsModule, ButtonComponent, CommonModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask = new EventEmitter<Task>();
  description: string = '';
  category: string = '';
  completed: boolean = false;
  showAddTask: boolean = false;

  updateView(value: boolean) {
    this.showAddTask = value;
  }

  onSubmit() {
    if (!this.description) {
      alert('Adicione uma tarefa!')
      return;
    }

    const newTask = {
      description: this.description,
      category: this.category,
      completed: this.completed,
    }

    this.onAddTask.emit(newTask);

    this.description = '';
    this.category = '';
    this.completed = false;
  }
}
