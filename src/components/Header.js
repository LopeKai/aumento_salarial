import React from 'react'

import styles from '../styles/components/header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <h1 className={styles.header_title}> Calculando seu Salário</h1>
        </header>
    )
}

export default Header