import '../css/Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';



function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate("/");
        })
        .catch(e => alert(e.message));

    }

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(() =>{
            navigate("/");
        }
        )
        .catch(e => alert(e.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png'
                    alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>
                <form className='login__containerForm'>
                    <div className='login__containerFormItem'>
                        <label>E-mail</label>
                        <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}></input>
                    </div>
                    <div className='login__containerFormItem'>
                        <label>Password</label>
                        <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}></input>
                    </div>
                    <button className='signInButton' type='submit' onClick={login}>Sign in</button>
                </form>

                <h3>Don't have an account yet? Create one below!</h3>
                <button onClick={register}>Create new Amazon account</button>
            </div>
            
        </div>
    )
}

export default Login

