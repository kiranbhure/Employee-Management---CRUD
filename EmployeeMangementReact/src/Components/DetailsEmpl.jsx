import { useParams } from "react-router"
import { useState } from "react";
import { useEffect } from "react";
import EmployeeService from "../Services/EmployeeService";

export default function DetailsEmpl() {

    const {id} = useParams();
    const [employee, setEmployee] = useState([]);
    const {firstName, lastName, emailId} = employee;

    useEffect( ()=>{
        EmployeeService.getEmployeeById(id).then((res)=>{
            setEmployee(res.data);
        })
    },[id])

    return (

        <>
            <div className="container">
                <div className="card mt-5">
                    <div className="card text-black">
                        <table className="table-bordered fs-4">
                            <thead>

                            </thead>

                            <tbody>
                                <tr>
                                    <td><strong> First Name: </strong></td>
                                    <td> {firstName} </td>
                                </tr>
                                <tr>
                                    <td> <strong> Last Name: </strong> </td>
                                    <td> {lastName} </td>
                                </tr>
                                <tr>
                                    <td> <strong> Email: </strong> </td>
                                    <td> {emailId} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}