import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList, deleteUser, editUser, addUser } from '../actions/userActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
    }
  }

  componentDidMount() {
    this.props.getUserList();
  }

  submitData = () => {
    if (this.state.first_name && this.state.last_name && this.state.email && !this.state.id) {
      const newUser = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
      };
      this.props.addUser(newUser);
    } else if (this.state.first_name && this.state.last_name && this.state.email && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      };
      this.props.editUser(updatedDetails);
    } else {
      alert('Enter User Details.');
    }
    this.clearData();
  }

  editDetails = (data) => {
    this.setState({
      id: data.id,
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name
    })
  }

  deleteUser = (id) => {    
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteUser(id);
    }
  }

  handleFirstNameChange = (e) => {
    this.setState({
      first_name: e.target.value
    });
  }

  handleLastNameChange = (e) => {
    this.setState({
      last_name: e.target.value
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  clearData = () => {
    this.setState({
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
    });
  }

  resetPage = () =>{
    this.props.getUserList();
  }

  render() {
    const { userObj } = this.props;        
    return (
      <div className="main">
        <div>
          First Name : <Input onChange={this.handleFirstNameChange} value={this.state.first_name} type="text" placeholder="First Name" /> <br />
          Last Name :  <Input onChange={this.handleLastNameChange} value={this.state.last_name} type="text" placeholder="Last Name" /><br />
          Email :  <Input onChange={this.handleEmailChange} value={this.state.email} type="email" placeholder="Email" /><br /> <br/>
          {this.state.id ? 
          <Button variant="contained" color="primary" onClick={this.submitData}>UPDATE</Button> 
          : <Button variant="contained" color="primary" onClick={this.submitData}>ADD</Button>} &nbsp; 
          <Button variant="contained" color="secondary" onClick={this.clearData}>CLEAR</Button> &nbsp; 
          <Button variant="contained" color="primary" onClick={this.resetPage}>RESET</Button>          
        </div>
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userObj.data && userObj.data.data.map((data, i) => (<TableRow key={i + 1}>
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell align="center">{data.first_name}</TableCell>
                <TableCell align="center">{data.last_name}</TableCell>
                <TableCell align="center">{data.email}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => this.editDetails(data)}>EDIT</Button> &nbsp;
                  <Button variant="outlined" onClick={() => this.deleteUser(data.id)}>DELETE</Button>
                </TableCell>
              </TableRow>))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userObj: state.user
  }
}

const mapDispatchToProps = {
  getUserList,
  deleteUser,
  editUser,
  addUser
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 'bolder',
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

export default connect(mapStateToProps, mapDispatchToProps)(Content);