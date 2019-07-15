import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from '../../services/task.service';

import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  hide: boolean;

  constructor(public taskService: TaskService) {
    this.hide = true;
  }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    if (confirm('Are you sure you want to delete it?')) {
      this.taskService.deleteTask(task);
    }
  }

}
