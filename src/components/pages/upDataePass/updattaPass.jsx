import React from 'react';
import styles from './upDatta.module.css'


function UppDatePassword() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h5>
                    Update Password
                </h5>
            </div>
            <div className={styles.inputContainer}>
                <div >
                    <label>Current Password</label><br/>
                    <input type="text" placeholder=' Current Password'/>
                </div>
                <div>
                    <label>New Password</label><br/>
                    <input type="text" placeholder=' New Password'/>
                </div>
                <div>
                    <label>Confirm New Password</label><br/>
                    <input type="text" placeholder=' Confirm New Password'/>
                </div>
                <div className={styles.buttonContainer}> 
                    <button className={styles.buttonContainer}>
                    Update Password
                    </button>
                </div>
            </div>

        </div>
    );
}

export default UppDatePassword;