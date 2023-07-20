import React from 'react'
import styles from './style.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>Header
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>
    )
}

export default Header