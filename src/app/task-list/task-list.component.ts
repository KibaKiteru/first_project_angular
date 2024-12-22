import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/Forms';
import { TaskService } from '../task.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, FormsModule, NgClass, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})



export class TaskListComponent {
	constructor (public taskService: TaskService) {}
}
