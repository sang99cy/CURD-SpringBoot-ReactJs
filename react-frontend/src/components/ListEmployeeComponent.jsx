import React, { Component } from 'react'
import '../App.css';
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [],
                name: ''

        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.onChangeSearchEmployees=this.onChangeSearchEmployees.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    onChangeSearchEmployees(e){
        const name=e.target.value;
       this.setState({
           name: name
       });
    }
    SearchEmployee() {
        EmployeeService.getEmployeeByName(this.state.name).then(res => {
            this.setState({
                employees: res.data
            });
            console.log(res.data);
        }).catch(e =>{
            console.log(e);
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                     <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                         <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                     </div>
                     <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                         <div class="row">
                             <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                 <input type="text" id="search" value={this.state.name} onChange={this.onChangeSearchEmployees} name="name"
                                        className="form-control" placeholder="Tìm kiếm..."/>
                             </div>
                             <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                 <button type="button" className="btn btn-primary" onClick={this.SearchEmployee(this)}>Tìm kiếm</button>
                             </div>
                         </div>
                     </div>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
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
}

export default ListEmployeeComponent
