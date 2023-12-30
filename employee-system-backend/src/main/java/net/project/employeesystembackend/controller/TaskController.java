package net.project.employeesystembackend.controller;

import lombok.AllArgsConstructor;
import net.project.employeesystembackend.dto.TaskDto;
import net.project.employeesystembackend.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/tasks")
@AllArgsConstructor
public class TaskController {

    private TaskService taskService;


    @PostMapping
    public ResponseEntity<TaskDto> addTask(@RequestBody TaskDto taskDto){

        TaskDto savedTask = taskService.addTask(taskDto);

        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<TaskDto> getTask(@PathVariable("id") Long taskId){
        TaskDto taskDto = taskService.getTaskById(taskId);
        return new ResponseEntity<>(taskDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<TaskDto>> getAllTasks(){
        List<TaskDto> tasks = taskService.getAllTasks();
        return ResponseEntity.ok(tasks);
    }

    @PutMapping("{id}")
    public ResponseEntity<TaskDto> updateTask(@RequestBody TaskDto taskDto, @PathVariable("id") Long taskId){
        TaskDto updatedTask = taskService.updateTask(taskDto, taskId);
        return ResponseEntity.ok(updatedTask);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") Long taskId){
        taskService.deleteTask(taskId);
        return ResponseEntity.ok("Task deleted successfully!");
    }

    @PatchMapping("{id}/complete")
    public ResponseEntity<TaskDto> finishedTask(@PathVariable("id") Long taskId){
        TaskDto updatedTask = taskService.finishedTask(taskId);
        return ResponseEntity.ok(updatedTask);
    }

    @PatchMapping("{id}/in-complete")
    public ResponseEntity<TaskDto> unfinishedTask(@PathVariable("id") Long taskId){
        TaskDto updatedTask = taskService.unfinishedTask(taskId);
        return ResponseEntity.ok(updatedTask);
    }

}