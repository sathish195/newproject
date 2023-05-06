import React, { useState } from 'react';
import './App.css';
import e from 'express';
import { TextField } from '@mui/material';

function App() {
  const [data, setData] = useState({
    name: '',
    Number: '',
    email: '',
    password: ''
  })
  const { name, Number, email, password } = data;
  const changHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div className="App">
      <h1>signup</h1>
      <form onSubmit={changHandler} method="post" id="form">
        <fieldset className="fieldset">
          {/* <TextField id="outlined-basic" size = "small" dt="Outlined" variant="outlined" /> */}
          <dl>
            <dt>Enter Your First Name:</dt> <dd><input id="first-name" type="text" name="name" value={name} required onChange={changHandler} /></dd>
            <dt >Enter Your Number:</dt> <dd><input id="last-name" type="Number" name="Number" value={Number} required onChange={changHandler} /></dd>
            <dt>Enter Your Email:</dt> <dd><input id="email" type="email" name='email' value={email} required onChange={changHandler} /></dd>
            <dt >Create a New Password:</dt> <dd><input id="new-password" type="password" pattern="[a-z0-5]{8,}" name='password' value={password} required onChange={changHandler} /></dd>
          </dl>
        </fieldset>
        <input type="button" onClick={submitHandler} value="submit" />
      </form>
    </div>

  );
}

export default App;
