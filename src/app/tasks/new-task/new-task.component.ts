import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  private taskService = inject(TaskService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onCancelAddTask() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }, this.userId);

    this.close.emit();
  }
}
