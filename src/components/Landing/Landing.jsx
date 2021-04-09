import React from 'react';
import styles from './Landing.module.css'
import img from '../../support/showcase1.png';

function LandPage() {
    return (
        <div className={styles.page}>
            <img src={img} alt='img'/>
            <div className={styles.headerText}>
                Find a Code Bootcamp
            </div>
            <div className={styles.description}>
                Find, rate and read reviews on coding bootcamps
            </div>
            <div>
                <input 
                placeholder=' Miles From'
                type="text" 
                className={styles.input1} 
                />
                <input 
                placeholder=' Enter Zipcode'
                type="text" 
                className={styles.input2} 
                />
            </div>
            <div>
                <button className={styles.button}>
                Find Bootcamps
                </button>
            </div>
        </div>
    );
};

export default LandPage;