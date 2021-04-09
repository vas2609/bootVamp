import React, { Component } from 'react';
import Cards from '../../Cards/Cards';
import styles from './Bootcamps.module.css';


class BootCamps extends Component {
    state = {
        data: [],
        pagesize: 5,
        totalacount: 0,
        currentPage: 1,

    }
    componentDidMount() {

        fetch('http://devcamp-api-node.herokuapp.com/api/v1/bootcamps', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                } else {
                    this.setState({
                        data: response.data,
                        pagesize: response.count,
                        currentPage: response.pagination
                    })
         
                }
            })
            .catch((error) => {
                new Error('Bad Request', error)
            })

    }

    render() {

        let pagesCount = Math.ceil(this.state.totalacount / this.state.pagesize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let { data, totalacount } = this.state
        return (
            <div className={styles.container}>
                {data.map((el, index) => {
               
                    return (
                        <div key={index}>
                            <Cards
                                prop={el}
                                rateing={8.5}
                            />
                        </div>
                    );
                })}

                <div className={styles.filterContainer}>
                </div>
                <div className={styles.header}>
                    By Location
               <span className={styles.inputContainer} >
                        <input type='text' placeholder=' Miles From' className={styles.input1} />
                        <input type='text' placeholder=' Enter Zipcode' className={styles.input2} />
                    </span>
                    <button className={styles.findButton}>
                        Find Bootcamps
                   </button>
                </div>
                <div className={styles.container2}>
                    <div className={styles.filterHider}>
                        Filter
                           <div className={styles.selectContainer}>
                            Rating
                               <input type='number' step="1" placeholder='Any' className={styles.numberInput1} />
                        </div>
                        <div className={styles.selectContainer}>
                            Budget
                                   <input type='number'step="1" placeholder=' Any' className={styles.numberInput2} />
                        </div>
                        <div className={styles.sendButton}>
                            <button className={styles.findButton2}>
                                Find Bootcamps
                                   </button>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.prev} disabled={totalacount === 0}>Previous</button>

                    {pages.map((e, i) => {
                        return (
                            <div key={i} >
                                <button className={styles.buttons}>{e}</button>
                            </div>
                        );
                    })}
                    <button className={styles.next} disabled={totalacount === 0}>Next</button>
                </div>
            </div>


        )
    }
}

export default BootCamps;