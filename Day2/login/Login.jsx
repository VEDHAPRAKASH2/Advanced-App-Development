import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import Snack from '../../components/Snack/Snack';

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const navigate = useNavigate();
    
    const [snackPass,setSnackPass] = useState(false);
    const [snackEmail,setSnackEmail] = useState(false);

    const validateEmail = () => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const validatePassword = () => {
        return password.length>=8;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail())
        {
            setSnackEmail(true);
        }
        else if(!validatePassword())
        {
            setSnackPass(true);
        }
        else
        {
            navigate("/");
        }
    }

    return (
        <div className='login-main login-flex'>
            <div className='login-card login-flex'>
                <form onSubmit={handleSubmit} className='login-form login-flex'>
                    
                    <h1>LOGIN</h1>
                    <input type="text" className='login-input' placeholder='Email' name='email' onChange={(event) => {setEmail(event.target.value)}}
                    autoFocus/>
                    <input type="password" className='login-input' placeholder='Password' name='password'
                    onChange={(event) => {setPassword(event.target.value)}}/>
                    <button type="submit" className='login-sub'>Login</button>
                    <p>Don't have an account <Link className='login-txt' to='/signup'>Register</Link></p>
                    
                    <Snack message="Wrong email" open={snackEmail} handleClose={()=>{setSnackEmail(false)}}/>
                    <Snack message="Wrong password" open={snackPass} handleClose={()=>{setSnackPass(false)}}/>
                        
                </form>
            </div>
        </div>
    )
}

export default Login;