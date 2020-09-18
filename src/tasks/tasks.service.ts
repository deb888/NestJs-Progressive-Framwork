import { Injectable } from '@nestjs/common';
import { Tasks, TasksStatus } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';
import { createTaskDto } from './dto/create-tasks-dto';
@Injectable()
export class TasksService {
    private task: Tasks[] = [];


    getAllTasks() {
        return this.task;
    }


    createTasks(createTasksDto:createTaskDto) :Tasks{
        let {title,description} =createTasksDto;
        let tasks: Tasks = {
            id:uuidv4(),
            title,
            description,
            status: TasksStatus.OPEN
        }
        this.task.push(tasks);
        return  tasks;

    }
}
