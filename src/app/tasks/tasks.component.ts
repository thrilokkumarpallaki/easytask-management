import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) selectedUserName!: string;
  @Input({required: true}) userId!: string;
  isAddingTasking = false;

  constructor(private taskService: TaskService) {}

  onStartAddTask() {
    this.isAddingTasking = true;
  }

  onCloseAddTask() {
    this.isAddingTasking = false;
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
}
