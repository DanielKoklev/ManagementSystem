import axios from "axios"

const EMPLOYEE_REST_API_URL = 'http://localhost:8080/api/employees'

export const listEmployees = () => axios.get(EMPLOYEE_REST_API_URL)

export const sortEmployeesById = (order) => {
    const url = `${EMPLOYEE_REST_API_URL}?sort=id,${order}`
    return axios.get(url)
}

export const createEmployee = (employee) => axios.post(EMPLOYEE_REST_API_URL, employee)

export const getEmployee = (employeeId) => axios.get(EMPLOYEE_REST_API_URL + '/' + employeeId)

export const updateEmployee = (employeeId, employee) => axios.put(EMPLOYEE_REST_API_URL + '/' + employeeId, employee)

export const deleteEmployee = (employeeId) => axios.delete(EMPLOYEE_REST_API_URL + '/' + employeeId)