import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees, sortEmployeesById } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const [sortOrder, setSortOrder] = useState('asc')
    const navigator = useNavigate()

    useEffect(() => {
        fetchEmployees();
    }, [sortOrder]);

    function fetchEmployees() {
        if (sortOrder) {
            sortById(sortOrder);
          } else {
            getAllEmployees();
          }
        };

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function sortById(order) {
        sortEmployeesById(order).then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function handleSortChange(e) {
        setSortOrder(e.target.value)
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id)

        deleteEmployee(id).then((response) => {
            getAllEmployees()
        }).catch(error => {
            console.error(error)
        })
    }
  
    return (
    <div className='container'>
        <h2 className='text-center'>All Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee </button>
        <div>
            <label>Sort by ID:</label>
                <select value={sortOrder} onChange={handleSortChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
            </select>
        </div>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th> Id </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Email </th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info'
                                onClick={() => updateEmployee(employee.id)}>
                                Update
                                </button>

                                <button className='btn btn-danger'
                                onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>
                                Delete
                                </button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent