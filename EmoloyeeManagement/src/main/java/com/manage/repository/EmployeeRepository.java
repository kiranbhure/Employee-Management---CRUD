package com.manage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manage.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
