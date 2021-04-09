import React , {useState} from 'react';
import styles from './forget.module.css';
import {Link} from 'react-router-dom'

function ForgetPassword(props){

    let[inputValue, setValue] = useState('')

    let handlehange = (event) =>{
        let{name, value} = event.target.value;
        setValue({
            ...inputValue,
            [name]:value
        })
    }

    let handleClick = () =>{
        if (!inputValue){
            return
        }
        props.history.push('/uppDatePass')
    } 
    return(
        <div className={styles.container}>
            <div className={styles.link}>
                <Link to='login' >Back to login</Link>
                <div className={styles.headerContainer}>
                    <h5>
                    Reset Password
                    </h5>
                </div>
                <div className={styles.titleContainer}>
                    <p>
                    Use this form to reset your password using the registered email address.
                    </p>
                </div>
                <div className={styles.inputContainer}>
                    <label>Enter Email</label><br/>
                    <input type='email' placeholder='Enter address' name='email' onChange={handlehange}/>
                </div>
                <div className={styles.buttonContainer}>
                    <button
                    onClick={handleClick} 
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ForgetPassword;