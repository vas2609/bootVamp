import React from 'react';
import styles from './Register.module.css'
import {  useState } from 'react';


function emailIsValid(val) {
    return val.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
}

function RegisterPage(props) {

    let [inpuvalue, setInputValue] = useState('');
    let [error, setError] = useState('');
    let [validEmail, setValidEmail] = useState('');
    let [passLenght, setPassLenght] = useState('');

    let handleChanh = (event) => {
        let { name, value } = event.target;

        setInputValue({
            ...inpuvalue,
            [name]: value
        })
    }

    let handleClick = () => {
        let body = inpuvalue;
        let { password, confirmPassword, email } = inpuvalue;
        if (!inpuvalue || confirmPassword !== password) {
            setError({
                ...error,
                error: '* You must be affiliated with the bootcamp in some way in order to add it to DevCamper.'
            })
            return
        }
        else {
            if (emailIsValid(email) === null) {
                setValidEmail({
                    ...validEmail,
                    validEmail: 'invalid email'
                })
                return
            }
            else {
                if (Object.values(password).length < 6) {
                    setPassLenght({
                        ...passLenght,
                        passLenght: 'password`  is shorter than the minimum allowed 6'
                    })
                    return
                }
            }
            fetch('http://devcamp-api-node.herokuapp.com/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
                .then((res) => res.json())
                .then((respons) => {
                    if (respons.error) {
                        throw respons.error
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
            <div className={styles.container}></div>
            <div className={styles.title}>
                Register
           </div>
            <div className={styles.description}>
                Register to list your bootcamp or rate, review and favorite bootcamps
           </div>
            <div className={styles.nameFild}>
                name
                <input
                    name='name'
                    onChange={handleChanh}
                    type='text'
                    placeholder=' Enter Full Name'
                />
            </div>
            <div className={styles.emailFild}>
                Email Address
                <input
                    name='email'
                    onChange={handleChanh}
                    type='email' placeholder=' Enter email'
                />
            </div>
            <div className={styles.passFild}>
                Password
                <input
                    name='password'
                    onChange={handleChanh}
                    type='password'
                    placeholder=' Enter password'
                />
            </div>
            <div className={styles.confirmFild}>
                Confirm Password
                <input
                    name='confirmPassword'
                    onChange={handleChanh}
                    type='password'
                    placeholder=' Confirm Password'
                />
            </div>
            <div className={styles.roleContainer}>
            </div>
            <div className={styles.roleFild}>
                User Role
           </div>
            <div className={styles.roleSelect1}>


                <input
                    onChange={handleChanh}
                    type="radio"
                    name="selected"
                />
                <label>Regular User (Browse, Write reviews, etc)</label><br />


                <input
                    onChange={handleChanh}
                    type="radio"
                    name="selected"
                />
                <label>Bootcamp Publisher</label><br />


            </div>
            <div>
                <button
                    onClick={handleClick}
                    className={styles.registerButton}
                >
                    Register
                   </button>
                <div className={styles.errorContainer}>
                    <h4>
                        {Object.values(error)}
                    </h4>
                    <h4>
                        {Object.values(validEmail)}
                    </h4>
                    <h4>
                        {Object.values(passLenght)}
                    </h4>
                </div>


            </div>
        </div>
    );
}

export default React.memo(RegisterPage);