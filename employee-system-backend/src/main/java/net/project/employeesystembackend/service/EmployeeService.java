package net.project.employeesystembackend.service;

import net.project.employeesystembackend.dto.EmployeeDto;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployeeDto(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    // List<EmployeeDto> getAllEmployeesSortedById(Sort.Direction direction);

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto);

    void deleteEmployee(Long employeeId);
}