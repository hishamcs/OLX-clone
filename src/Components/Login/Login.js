import React,{useState, useContext} from 'react';
import {FirebaseContext} from '../../store/Context'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=> {
      history.push('/')
    }).catch((error) => {
      alert(error.message)
    })
    
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            id="fname"
            name="email"
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
