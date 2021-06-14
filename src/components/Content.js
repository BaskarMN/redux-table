import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList } from '../actions/userActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

class Content extends Component {  
  
  constructor(props) {
    super(props);
    this.state = {

    }
}
  componentDidMount() {
    this.props.getUserList();
  }

  render() {    
    const { userObj } = this.props;
    console.log('userobj', userObj)
    return (
      <div className="main">        
        <TableContainer component={Paper}>
          <Table>
          <TableHead>
          <TableRow>            
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
          </TableRow>
        </TableHead> 
        <TableBody>
          {userObj.data && userObj.data.data.map((data, i) => (<TableRow key={i}>
          <TableCell align="center">{data.first_name}</TableCell>
          <TableCell align="center">{data.last_name}</TableCell>
          <TableCell align="center">{data.email}</TableCell>
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
  getUserList
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