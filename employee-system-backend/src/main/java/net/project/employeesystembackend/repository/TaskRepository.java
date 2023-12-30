package net.project.employeesystembackend.repository;

import net.project.employeesystembackend.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
