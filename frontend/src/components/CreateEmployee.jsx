import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function CreateEmployee() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    })
    const {id} = useParams();

    useEffect(() => {
        if (id == -1) {
            return;
        } else {
            fetch(`http://localhost:8080/employees/${id}`).then(res => {
                res.json().then(employee => {
                    setData({
                        firstName: employee.firstName,
                        lastName: employee.lastName,
                        emailId: employee.emailId
                    });
                });
            })
        }
    },[])

    function cancel() {
        window.location.href="/employees";
    }

    async function saveEmployee(e) {
        e.preventDefault();
        let employee = {
            firstName: data.firstName,
            lastName: data.lastName,
            emailId: data.emailId
        }

        if (id == -1) {
            const response = await fetch("http://localhost:8080/employees", {
                method: "POST",
                body: JSON.stringify(employee),
                headers: {'Content-Type':'application/json'}
            });
            if (response.status == 200) {
                window.location.href="/employees";
            }
        } else {
            fetch(`http://localhost:8080/employees/${id}`, {
                method: "PUT",
                body: JSON.stringify(employee),
                headers: {'Content-Type':'application/json'}
            }).then(res => {
                window.location.href="/employees";
            })
        }    
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3 cont'>
                        {
                            id == -1 && (
                                <h3 className='text-center'>Add Employee</h3>
                            )
                        }
                        {
                            id != -1 && (
                                <h3 className='text-center'>Update Employee</h3>
                            )
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name:</label>
                                    <input placeholder='First Name' name='firstName' className='form-control'
                                    value={data.firstName} onChange={(e) => setData({...data, firstName:e.target.value})}/>
                                </div>

                                <div className='form-group'>
                                    <label>Last Name:</label>
                                    <input placeholder='Last Name' name='lastName' className='form-control'
                                    value={data.lastName} onChange={(e) => setData({...data, lastName:e.target.value})}/>
                                </div>

                                <div className='form-group'>
                                    <label>Email Address:</label>
                                    <input placeholder='Email Address' name='emailId' className='form-control'
                                    value={data.emailId} onChange={(e) => setData({...data, emailId:e.target.value})}/>
                                </div>
                            </form>
                                <button className='btn btn-success sub-btn' onClick={saveEmployee} type='submit'>Save</button>
                                <button className='btn btn-danger sub-btn' onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployee
