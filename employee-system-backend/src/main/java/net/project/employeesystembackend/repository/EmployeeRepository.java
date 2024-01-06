package net.project.employeesystembackend.repository;

import net.project.employeesystembackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Sort;

import java.util.List;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
