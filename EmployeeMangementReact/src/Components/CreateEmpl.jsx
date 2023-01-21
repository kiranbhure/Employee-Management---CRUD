import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

const CreateEmpl = () => {

    const navigate  = useNavigate();
    const [empl, setEmpl] = useState({firstName:'', lastName:'', emailId:''});

    let name, value;

    const handleInput = (e)=> {
        name = e.target.name;
        value = e.target.value;
        setEmpl({...empl, [name]: value});
    }

    const saveEmployee = async (e)=>{
        e.preventDefault();
        let employee = {firstName : empl.firstName, lastName : empl.lastName, emailId : empl.emailId};
        await EmployeeService.createEmployee(employee);
        return navigate("/");
    }

    return(
        <>
            <div id="ceId" className="container">
                <div className="row ">
                    <div className="card col-md-6 offset-md-3 r">
                        <h3 className="text-center mt-3"> Add Employee</h3>
                        <div className="card-body">
                            <form method="POST" action="">
                                {/* firstName field */}
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input placeholder="First Name" name="firstName" value={empl.firstName}  onChange={handleInput} type="text" className="form-control" />
                                </div>

                                {/* lastName field */}
                                <div className="form-group my-3">
                                    <label>Last Name</label>
                                    <input placeholder="Last Name" name="lastName" value={empl.lastName} onChange={handleInput} type="text" className="form-control" />
                                </div>

                                {/* email field */}
                                <div className="form-group mb-4">
                                    <label>Email Id</label>
                                    <input placeholder="Email Id" name="emailId" value={empl.emailId} onChange={handleInput} type="text" className="form-control" />
                                </div>

                                <button className="btn btn-success mb-3" onClick={saveEmployee}>Save</button>
                                <Link className="btn btn-danger mb-3" to="/" style={{marginLeft: "10px"}}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateEmpl;