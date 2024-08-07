import { Component, computed, EventEmitter, Input, input, Output, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type User } from './user.model';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from '../shared/card/card.component';

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

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
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // Sigal based inputs - Angular 16 feature
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // Decorator based output 
  @Output() select = new EventEmitter<string>();

  // Singal based output - Angular 16 feature
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
