import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  // TODO: Reformular como una lista de tareas
  task1: ITask = {
    title: 'Tarea 1',
    description: 'Description larga y extendida 1',
    done: false,
    level: Levels.Info
  }

  task2: ITask = {
    title: 'Tarea 2',
    description: 'Description larga y extendida 2',
    done: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask) {
    // TODO: Sustituir por un Splice para eliminar de la lista de tareas
    alert(`Se procede a eliminar la terea: ${task.title}`)
  }

}
