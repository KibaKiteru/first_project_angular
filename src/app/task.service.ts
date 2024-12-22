import { Injectable } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
		
	tasks : Task[] = [{name : "truc", state: true}, 
		{name : "bidul", state: true}, 
		{name : "machin", state: true}, 
		{name : "choiète", state: true}];

	newTask : string = "";

	constructor() { }
	
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

	getTasks() : Task[]
	{
		return this.tasks;
	}
  
}
