package net.project.employeesystembackend.service;

import net.project.employeesystembackend.dto.TaskDto;

import java.util.List;

public interface TaskService {

    TaskDto addTask(TaskDto todoDto);

    TaskDto getTaskById(Long id);

    List<TaskDto> getAllTasks();

    TaskDto updateTask(TaskDto todoDto, Long id);

    void deleteTask(Long id);

    TaskDto finishedTask(Long id);

    TaskDto unfinishedTask(Long id);
}
