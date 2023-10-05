
import React, { useEffect, useState } from 'react'

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/employees").then(response => {
            response.json().then(employees => {
                setEmployees(employees);
            });
        });
    }, []);     
    
    
    function editEmployee(id) {
        window.location.href=`/add-employee/${id}`
    }
    function addEmployee() {
        window.location.href="/add-employee/-1"
    }

    function deleteEmployee(id) {
        fetch("http://localhost:8080/employees").then(res => {
            setEmployees(employees.filter(employee => employee.id !== id));
        });
    }

    function viewEmployee(id) {
        window.location.href=`/view-employee/${id}`;
    }
    
  return (
    <div className='container'>
        <h2 className='text-center'>Employees List</h2>
        <div className='row btn-row'>
            <button className='btn btn-primary' onClick={addEmployee}>Add Employee</button>
        </div>
        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.length > 0 && employees.map(
                            employee => 
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <button onClick={() => editEmployee(employee.id)} className='btn btn-info'>Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={() => deleteEmployee(employee.id)} className='btn btn-danger'>Delete</button>
                                        <button style={{marginLeft: "10px"}} onClick={() => viewEmployee(employee.id)} className='btn btn-info'>View</button>
                                    </td>
                                </tr>   
                        )

                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
