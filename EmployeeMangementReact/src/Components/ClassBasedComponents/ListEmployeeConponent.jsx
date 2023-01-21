import React, { Component } from 'react'
import EmployeeService from '../../Services/EmployeeService'
import { withRouter } from '../withRouter'

class  ListEmployeeConponent extends Component {
  constructor(props){
      super(props)

      this.state = {
          employees: []
      }
      this.addEmployee = this.addEmployee.bind(this);
      this.editEmployee = this.editEmployee.bind(this);
  }

  componentDidMount(){
    EmployeeService.getEmployee().then((res) => {
      this.setState({employees : res.data});
    });
  }

  addEmployee(){
    this.props.navigate('/add-employee');
  }

  editEmployee(id){
    this.props.navigate(`/update-employee/${id}`);
  }

  render() {
    return (
      <>  
        <h2 className="text-center">Employee List</h2>
        <div className="container">
        <div className="row">
          <div className="container px-0">
            <button className="btn btn-primary btn-group-sm my-3" onClick={this.addEmployee}>Add Employee</button>
          </div>
          <table className="table table-striped table-bordered ">
            <thead className="text-center">
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.employees.map(
                  employees => (
                  <tr key = {employees.id}>
                    <td>  {employees.firstName} </td>
                    <td> {employees.lastName} </td>
                    <td> {employees.emailId} </td>
                    <td className="text-center"> 
                        <button onClick={ ()=> this.editEmployee(employees.id) } className="btn btn-info">Update</button> 
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
}


export default withRouter(ListEmployeeConponent);