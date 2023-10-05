import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function UpdateEmployee() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/employees/${id}`).then(res => {
            res.json().then(employee => {
            setData({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            })
        })
    })
    },[])

    async function updateEmployee(e) {
        e.preventDefault();
        let employee = {
            firstName: data.firstName,
            lastName: data.lastName,
            emailId: data.emailId
        }
        console.log(JSON.stringify(employee))
    }

    function cancel() {
        window.location.href="http://localhost:3000/employees";
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Update Employee</h3>
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
                                <button className='btn btn-success' onClick={updateEmployee} type='submit'>Save</button>
                                <button className='btn btn-danger' onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployee