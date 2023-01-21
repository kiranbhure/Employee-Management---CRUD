import React, { Component } from 'react'
import EmployeeService from '../../Services/EmployeeService';

export default class UpdateEmployee extends Component {

    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            firstName : '',
            lastName : '',
            emailId : ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res)=>{
            let employee = res.data;
            this.setState(
                {
                    firstName : employee.firstName,
                    lastName : employee.lastName,
                    emailId : employee.emailId
                }
            );
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName : this.state.firstName, lastName : this.state.lastName, emailId : this.state.emailId};
        console.log("employee => " + JSON.stringify(employee));
    }

    cancel(){
        this.props.navigate('/');
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName : event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName : event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId : event.target.value});
    }

    render() {
        return (
            <>
                <div id="ceId" className="container">
                    <div className="row ">
                        <div className="card col-md-6 offset-md-3 r">
                            <h3 className="text-center mt-3"> Add Employee</h3>
                            <div className="card-body">
                                <form action="">
                                    {/* firstName field */}
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.changeFirstNameHandler} type="text" className="form-control" />
                                    </div>

                                    {/* lastName field */}
                                    <div className="form-group my-3">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.changeLastNameHandler} type="text" className="form-control" />
                                    </div>

                                    {/* email field */}
                                    <div className="form-group mb-4">
                                        <label>Email Id</label>
                                        <input placeholder="Email Id" name="emailId" value={this.state.emailId} onChange={this.changeEmailHandler} type="text" className="form-control" />
                                    </div>

                                    <button className="btn btn-success mb-3" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger mb-3" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
