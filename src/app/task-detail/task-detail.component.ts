import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {
	public taskService: TaskService = new TaskService();
	public id : number;
	constructor(private route: ActivatedRoute)
	{
		this.id = Number(this.route.snapshot.paramMap.get('index'));
	}
   
}
