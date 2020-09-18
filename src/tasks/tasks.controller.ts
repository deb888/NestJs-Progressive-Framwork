import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.model';
import { createTaskDto } from './dto/create-tasks-dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {

    }

    @Get()
    getAllTasks(): Tasks[] {
        return this.taskService.getAllTasks();
    }
    @Post()
    createtasks(@Body() createTasksDto:createTaskDto){

        return this.taskService.createTasks(createTasksDto);

    }

}
