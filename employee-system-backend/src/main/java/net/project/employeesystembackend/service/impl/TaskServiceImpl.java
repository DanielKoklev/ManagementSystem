package net.project.employeesystembackend.service.impl;

import lombok.AllArgsConstructor;
import net.project.employeesystembackend.dto.TaskDto;
import net.project.employeesystembackend.entity.Task;
import net.project.employeesystembackend.exception.ResourceNotFoundException;
import net.project.employeesystembackend.mapper.TaskMapper;
import net.project.employeesystembackend.repository.TaskRepository;
import net.project.employeesystembackend.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    @Override
    public TaskDto addTask(TaskDto taskDto) {
        Task task = TaskMapper.mapToTask(taskDto);
        Task savedTask = taskRepository.save(task);
        return TaskMapper.mapToTaskDto(savedTask);

    }

    @Override
    public TaskDto getTaskById(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Task with " + taskId + " id is not found!"));

        return TaskMapper.mapToTaskDto(task);
    }


    @Override
    public List<TaskDto> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();

        return tasks.stream().map(TaskMapper::mapToTaskDto).collect(Collectors.toList());
    }

    @Override
    public TaskDto updateTask(TaskDto updatedTaskDto, Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Task with " + taskId + " id is not found!"));
        task.setTitle(updatedTaskDto.getTitle());
        task.setDescription(updatedTaskDto.getDescription());
        task.setFinished(updatedTaskDto.isFinished());

        Task updatedTaskObject = taskRepository.save(task);
        return TaskMapper.mapToTaskDto(updatedTaskObject);
    }

    @Override
    public void deleteTask(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Task with " + taskId + " id is not found!"));

        taskRepository.deleteById(taskId);
    }

    @Override
    public TaskDto finishedTask(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Task with " + taskId + " id is not found!"));

        task.setFinished(Boolean.TRUE);

        Task updatedTask = taskRepository.save(task);

        return TaskMapper.mapToTaskDto(updatedTask);
    }

    @Override
    public TaskDto unfinishedTask(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResourceNotFoundException("Task with " + taskId + " id is not found!"));

        task.setFinished(Boolean.FALSE);

        Task updatedTask = taskRepository.save(task);

        return TaskMapper.mapToTaskDto(updatedTask);
    }
}
