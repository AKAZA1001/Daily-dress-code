import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./crudComponents/Components.css";
import LandingPage from "./crudComponents/LandingPage";
import HomePage from "./crudComponents/HomePage";
import AddUser from "./crudComponents/AddUser";
import UserLists from "./crudComponents/UserLists";
import Register from "./crudComponents/Register";
import Login from "./crudComponents/Login";
import Dashboard from "./crudComponents/Dashboard";

function App() {
  const navigate = useNavigate();
  const user = [
    {
      username: "user1",
      email: "1234@gmail.com",
      password: "789456",
      age: "23",
    },
  ];

  const [userList, setUserList] = useState([...user]);
  const [currentUser, setCurrentUser] = useState();
  const [index, setIndex] = useState();
  const EditUser = (user, index) => {
    setCurrentUser(user);
    setIndex(index);
    console.log(user);
    navigate("/adduser");
  };

  const UpdateUser = (updatedUser, id) => {
    const UserList = [...userList];
    console.log(id);
    UserList[id] = { ...updatedUser };
    setUserList([...UserList]);
    alert("user updated");
  };
  const Adduser = (user) => {
    setUserList([...userList, user]);

    alert("user added");
  };
  const DeleteUser = (id) => {
    const UserList = [...userList];
    const newUser = UserList.filter((user, index) => index !== id);
    setUserList(newUser);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register Adduser={Adduser} />} />
        <Route path="/login" element={<Login userList={userList} />} />
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route
          path="/adduser"
          element={
            <AddUser
              currentUser={currentUser}
              index={index}
              UpdateUser={UpdateUser}
              Adduser={Adduser}
            />
          }
        />
        <Route
          path="/userlists"
          element={
            <UserLists
              EditUser={EditUser}
              userList={userList}
              index
              DeleteUser={DeleteUser}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
