import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useState } from 'react';
import Snack from '../../components/Snack/Snack';

const SignUp = () => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [con_password,setCon_Password] = useState("");
    
    const navigate =  useNavigate();

    const [snackName,setSnackName] = useState(false);
    const [snackEmail,setSnackEmail] = useState(false);
    const [snackPass,setSnackPass] = useState(false);

    const validateEmail = () => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const validatePassword = () => {
        return password.length>=8;
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(username==="")
        {
            setSnackName(true);
        }
        else if(!validateEmail())
        {
            setSnackEmail(true);
        }
        else if(!validatePassword() || password!==con_password)
        {
            setSnackPass(true);
        }
        else
        {
            alert("Signup successful");
            navigate("/login");
        }
    }
    

    return (
        <div className='signup-main signup-flex'>
            <div className='signup-card signup-flex'>
                <form onSubmit={handleSubmit} className='signup-form signup-flex'>
                    
                    <h1>SIGN UP</h1>
                    <input type="text" className='signup-input' placeholder='Username'
                    name='username'
                    onChange={(event) => {setUsername(event.target.value)}}
                    autoFocus/>
                    <input type="text" className='signup-input' placeholder='Email'
                    name='email'
                    onChange={(event) => {setEmail(event.target.value)}}/>
                    <input type="password" className='signup-input' placeholder='Password with atleast 8 characters'
                    name='password'
                    onChange={(event) => {setPassword(event.target.value)}}/>
                    <input type="password" className='signup-input' placeholder='Confirm Password'
                    name='con_password'
                    onChange={(event) => {setCon_Password(event.target.value)}}/>
                    <button type="submit" className='signup-sub'>Sign Up</button>
                    <p>Already have an account <Link className='signup-txt' to='/login'>Sign in</Link></p>

                    <Snack message="Wrong username" open={snackName} handleClose={() => {setSnackName(false)}}/>
                    <Snack message="Wrong email" open={snackEmail} handleClose={() => {setSnackEmail(false)}}/>
                    <Snack message="Wrong password" open={snackPass} handleClose={() => {setSnackPass(false)}}/>

                </form>
            </div>
        </div>
    )
}

export default SignUp