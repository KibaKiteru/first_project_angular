import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';

import { FormsModule } from '@angular/Forms';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, FormsModule, NgClass],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})



export class TaskListComponent {
	"tasks" : Task[] = [{name : "truc", state: true}, 
		{name : "bidul", state: true}, 
		{name : "machin", state: true}, 
		{name : "choiète", state: true}];

	"newTask" : string;

	addTask(): void {

		if(this.newTask.trim() !== ""){

			this.tasks.push({name: this.newTask, state: true});
			this.newTask = "";
		}
	} 

	deleteTask(index : number):void{
		this.tasks.splice(index, 1);
	}

	changeState(index : number): void{
		this.tasks[index].state = !this.tasks[index].state;
	}

}
