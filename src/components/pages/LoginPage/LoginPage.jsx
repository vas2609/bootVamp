import React, { useState } from 'react';
import styles from './Login.module.css'
import { Link } from 'react-router-dom';

function LoginPage(props) {

    let [error, setError] = useState('');

    let [inputValues, setInputValues] = useState('');



    let handleChange = (event) => {
        let { name, value } = event.target
      

        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    let handleClick = () => {
        if (!inputValues.email || !inputValues.password) {
            setError({
                ...error,
                error: 'Please provide an email and password'
            })
        } else {
           
            fetch('http://devcamp-api-node.herokuapp.com/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputValues)
            })
                .then((res) => res.json())
                .then((response) => {
                    if (response.error) {
                        throw response.error
                    }
                    props.history.push('/')
                    
                })
                .catch((e) => {
                    console.log(e);
                })
        }

    }

    return (
        <div>
            <div className={styles.loginPage}>
            </div>
            <div className={styles.title}>Login</div>
            <div className={styles.description}>Log in to list your bootcamp or rate, review and favorite bootcamps</div>
            <div className={styles.inputs}>
            </div>
            <div className={styles.input1}>
                Email Address
            <input
                    onChange={handleChange}
                    name='email'
                    type='email'
                    placeholder=' Email'
                />
            </div>
            <div className={styles.input2}>
                Password
            <input
                    onChange={handleChange}
                    name='password'
                    type='password'
                    placeholder=' Password'
                />
            </div>
            <div>
                <button
                    onClick={handleClick}
                    className={styles.logButton}
                >
                    Login
                </button>
            </div>
            <div className={styles.forget}>
                <h4>
                    Forgot Password? 
                </h4>
                <Link to='/forgetPassword'> Reset Password </Link>

            <div className={styles.errrorMesage}>
            <h5>
                {Object.values(error)}
            </h5>
            </div>
            </div>


         
        </div>
    );
};

export default LoginPage;