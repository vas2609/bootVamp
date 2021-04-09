import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css'
import img from '../../support/Vectorlogo.svg'
import { NavLink } from 'react-router-dom';


function Navbar() {

    let [login, setLogin] = useState(null);

    useEffect(() => {
        fetch('http://devcamp-api-node.herokuapp.com/api/v1/auth/me', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmYxNTNkNzY0NDc3MDAxNWFiMTlkYiIsImlhdCI6MTYxNzk1NzU2MywiZXhwIjoxNjIwNTQ5NTYzfQ.1SwOD4ltanz5N8r8taUqpcJphDOCRvfqsAmbqhcI_tg"
            }
        })
            .then(res => res.json())
            .then(res => {
             
                setLogin({
                    ...login,
                    login: res
                })
            })
    }, [])




    return (
        <div className={styles.wrapp}>
            <div className={styles.logo}>
                <img src={img} alt="logo" />
                <NavLink to='/' className={styles.textLogo}>DevCamper</NavLink>
            </div>
            <div>
                {
                    !login ?
                        <>
                            <NavLink to='/login' className={styles.login}>
                                Login
                   </NavLink>
                            <NavLink to='/registertion' className={styles.register}>
                                Register
                    </NavLink></> :
                        <>
                            <NavLink to='/Bootcamps' className={styles.brows}>
                                Browse Bootcamps
                   </NavLink>
                            <div className={styles.name}>
                                {login.login.data.name}
                            </div>
                        </>
                }

            </div>
        </div>
    );
}

export default Navbar;