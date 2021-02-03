import React, { useState } from "react";
import './AdminPage.scss';
import {Nav} from "../components/NavBar/index";
import Modal from "react-modal";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

Modal.setAppElement('#root');

const useStyles = makeStyles(theme =>({
    button: {
        //margin: theme.spacing(1),
        color: theme.palette.primary.main = "white",
        backgroundColor: theme.palette.primary.main = "#282c34",

        "&:hover":{
            color: theme.palette.primary.main = "white",
            backgroundColor: theme.palette.primary.main = "#808080",
        }
    },
}))

const TempPage = () => {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tempId, setTempId] = useState(1);

  const users = [
      {id: 1, userName: 'John', roles: ["ADMIN", "TECH", "FINANCE", "SALES", "HR"]},
      {id: 2, userName: 'Jane', roles: ["FINANCE", "TECH", "HR"]},
      {id: 3, userName: 'Max', roles: ["HR"]},
      {id: 4, userName: 'Andrea', roles: ["FINANCE", "ADMIN", "SALES", "HR", "TECH"]},
      {id: 5, userName: 'Gary', roles: ["SALES"]},
      {id: 6, userName: 'Kate', roles: ["FINANCE", "SALES"]},
      {id: 7, userName: 'Bruce', roles: ["TECH", "FINANCE", "ADMIN"]},
      {id: 8, userName: 'Selena', roles: ["FINANCE", "TECH", "SALES", "ADMIN", "HR"]},
  ]

  const deleteUser = () => {
    alert('This Deletes The User from the Database');
  };

  const handleEditClick = (event) => {
    setModalIsOpen(true);
    setTempId(event.target.value - 1);
    console.log(tempId);
  }

  const handleCancelClick = () => {
    setModalIsOpen(false)
  }

  const addRole = () => {
    alert('This Modifies the Databse by Adding the Users new Role');
  }

  const subtractRole = () => {
    alert('This Modifies the Database by Removing the Users Role');
  };

  const handleSaveClick = async () => {
    setModalIsOpen(false);
    alert('This would Save the Database Changes');
  }

  return (
      <div>
        <div>
            <Nav/>
        </div>
        <div className="container">
            <h1 className="pageHeader">Account Management</h1>
            <table className="table">
                <thead className="columnHeader">
                    <tr className="columns">
                    <th scope="col">ID</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Roles</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {users?.map((user, index) => (
                        <tr className="rows" key={index}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.roles?.map((role, index2) => (
                              <table className="subTable" key={index2}>
                                <tbody><tr><td className="roles">{role}</td></tr></tbody>
                              </table>))}
                            </td>

                            <td>
                            <button className="editBtn" value={user.id} onClick={handleEditClick}>Edit</button>
                            <button className="deleteBtn" onClick={() => deleteUser()}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                <Button className={classes.button} variant="contained" size="small" href="/Dashboard" >
                  Return to Dashboard
                </Button>
            </div>
        </div>
        <div>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
              },
              content: {
                position: 'absolute',
                top: '225px',
                left: '675px',
                right: '650px',
                //bottom: '160px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
              }
            }}>
            <h2 className="modalHeader">Edit User #: {users[tempId].id}</h2>
            <p className="modalBodyA">
              <label>User Name: {users[tempId].userName}</label>
            </p>
            <div className="modalBodyB">
              <label>
                User Roles
              </label>
              <ul>
                {users[tempId].roles.map((e, i) => (
                    <div key={i}>
                        <li>{e}</li>
                        <button onClick={() => subtractRole()}>Remove</button>
                    </div>
                ))}
              </ul>
              <br />
              <input type="text"></input><button onClick={() => addRole()}>Add</button>
            </div>
            <div>
              <button className="closeModal" onClick={handleCancelClick}>Cancel</button>
              <button className="saveModal" onClick={() => handleSaveClick()}>Save</button>
            </div>
          </Modal>
        </div>
    </div>
  );
};

export default TempPage;