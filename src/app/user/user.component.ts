import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Decorator based inputs
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  // Decorator based output 
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
