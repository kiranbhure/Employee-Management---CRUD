import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

const ListEmpl = () =>{
  const navigation = useNavigate();
  const [employee, setEmployee] = useState([]);

  useEffect( ()=>{
    EmployeeService.getEmployee().then((res)=>{
        setEmployee(res.data);
    })
  },[])

  const editEmployee = (id) => {
    navigation(`/update-employee/${id}`);
  }

  const deleteEmployee = (id) =>{
    EmployeeService.deleteEmployeeById(id);
    setEmployee(employee.filter(afterDelet => afterDelet.id !== id ));
  }

  return(
      <>  
      <h2 className="text-center">Employee List</h2>
      <div className="container">
      <div className="row">
        <div className="container px-0">
          <Link className="btn btn-primary btn-group-sm my-3" to="/add-employee">Add Employee</Link>
        </div>
        <table className="table table-striped table-bordered table-responsive">
          <thead className="text-center">
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {
              employee.map(
                employee => (
                  <tr key = {employee.id}>
                    <td>  {employee.firstName} </td>
                    <td> {employee.lastName} </td>
                    <td> <Link to={`/show-details/${employee.id}`} > {employee.emailId} </Link> </td>
                    <td className="text-center"> 
                      <button onClick={ ()=> editEmployee(employee.id) } className="btn btn-info">Update</button>
                      <button style={{marginLeft:'10px'}} onClick={ ()=> deleteEmployee(employee.id) } className="btn btn-danger">Delete</button> 
                    </td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default ListEmpl;