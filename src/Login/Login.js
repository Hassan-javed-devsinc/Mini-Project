import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div className="outer-con">
      <div className="inner-con">
        <form className="form">
          <input className="mail" type="text" placeholder="E-mail Address" />
          <input className="mail" type="password" placeholder="Password" />
          <button className="submit">SUBMIT</button>
          <button className="signin">SIGNIN</button>
        </form>
      </div>
    </div>
  );
}
