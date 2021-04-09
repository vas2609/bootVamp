import React from 'react';
import styles from './Card.module.css';
import img from '../../support/image1.png';


function Cards({ prop, rateing }) {

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.name}>
                    <div className={styles.rateingContainer}>
                    <p className={styles.rateing}>{rateing}</p>
                    </div>
                    

                    <p>{prop.name}</p>
                    <p className={styles.address}>{prop.address}</p>
                    <p className={styles.careers}>{prop.careers}</p>

                </div>

                <div className={styles.img}>
                    <img src={img} alt="no img" />
                </div>
            </div>
        </div>
    );
};

export default Cards;