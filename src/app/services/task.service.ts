import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Title } from '../../../node_modules/@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  getTasks() {
    let tasks_local = localStorage.getItem('tasks');
    if (tasks_local !== null) {
      this.tasks = JSON.parse(tasks_local);
    }
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i,1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        break;
      }
    }
  }

}
