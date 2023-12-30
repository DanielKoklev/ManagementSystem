package net.project.employeesystembackend.mapper;

import net.project.employeesystembackend.dto.TaskDto;
import net.project.employeesystembackend.entity.Task;

public class TaskMapper {

    public static TaskDto mapToTaskDto(Task task){
        return new TaskDto(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.isFinished()
        );
    }

    public static Task mapToTask(TaskDto taskDto) {
        return new Task(
                taskDto.getId(),
                taskDto.getTitle(),
                taskDto.getDescription(),
                taskDto.isFinished()
        );
    }
}
