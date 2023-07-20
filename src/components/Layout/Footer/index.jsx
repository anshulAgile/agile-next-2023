import React from 'react'
import styles from './style.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            <ul className='d-flex'>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>
    )
}

export default Footer