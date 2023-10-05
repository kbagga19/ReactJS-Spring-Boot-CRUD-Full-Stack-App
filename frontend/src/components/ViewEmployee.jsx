import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewEmployee() {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/employees/${id}`).then(res => {
            res.json().then(data => {
                setData(data);
            });
        });
    }, [])

    return (
        <div>
            <br />
            <div className='card col-md-6 offset-md-3 disp'>
                <h3 className='text-center'>View Employee Details</h3>
                <div className='card-body'>
                    <div className='content'>
                        <label>Employee First Name: </label>
                        <div>{data.firstName}</div>
                    </div>
                    <div className='content'>
                        <label>Employee Last Name: </label>
                        <div>{data.lastName}</div>
                    </div>
                    <div className='content'>
                        <label>Employee Email Id: </label>
                        <div>{data.emailId}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee
