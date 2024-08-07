import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) taskInfo!: Task;

  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.taskInfo.id);
  }
  
}
