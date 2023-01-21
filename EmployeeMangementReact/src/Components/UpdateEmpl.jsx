import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import EmployeeService from '../Services/EmployeeService';

const UpdateEmpl = () => {
    const navigation = useNavigate();
    const {id} = useParams();
    const [employee, setEmployee] = useState({firstName:'', lastName:'', emailId:''});

    useEffect( ()=>{
        const go = async ()=>{
            try {
                let empl = EmployeeService.getEmployeeById(id);
                empl.then(res=>{
                    setEmployee(res.data);
                })
                
            } catch (error) {
                console.log(error);
            }
        }
        go();
    },[id]);

    let name, value;
    const changeHandler = (e)=> {
        name = e.target.name;
        value = e.target.value;
        setEmployee({...employee, [name]: value});
    }

    const updateEmployee = ()=>{
        EmployeeService.updateEmployeeById(id, employee);
        return navigation("/");
    }

    const cancel = ()=> {
        return navigation("/");
    }

    return(
        <>
            <div id="ceId" className="container">
                <div className="row ">
                    <div className="card col-md-6 offset-md-3 r">
                        <h3 className="text-center mt-3"> Update Employee</h3>
                        <div className="card-body">
                            <form action="">
                                {/* firstName field */}
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input placeholder="First Name" name="firstName" value={employee.firstName} onChange={changeHandler} type="text" className="form-control" />
                                </div>

                                {/* lastName field */}
                                <div className="form-group my-3">
                                    <label>Last Name</label>
                                    <input placeholder="Last Name" name="lastName" value={employee.lastName} onChange={changeHandler} type="text" className="form-control" />
                                </div>

                                {/* email field */}
                                <div className="form-group mb-4">
                                    <label>Email Id</label>
                                    <input placeholder="Email Id" name="emailId" value={employee.emailId} onChange={changeHandler} type="text" className="form-control" />
                                </div>

                                <button className="btn btn-success mb-3" onClick={updateEmployee}>Save</button>
                                <button className="btn btn-danger mb-3" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateEmpl;