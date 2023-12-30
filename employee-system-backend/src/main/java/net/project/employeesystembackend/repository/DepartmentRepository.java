package net.project.employeesystembackend.repository;

import net.project.employeesystembackend.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}