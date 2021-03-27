import React from 'react'

import styles from '../styles/components/form.module.css'

function Form() {
    return(
        <div className={styles.container} >
            <form className={styles.form}>
                <img className={styles.calculator} src="calculadora.png" />

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}> Seus dados </legend>
                    <label className={styles.label}> Nome completo </label>
                    <input className={styles.input} type="text"/>
                </fieldset>

                <fieldset className={styles.fieldset}> 
                    <label className={styles.label}> Salário atual </label>
                    <input className={styles.input} type="number" placeholder="Exemplo 1000,00" min="0" />
                </fieldset>

                 <fieldset className={styles.fieldset}> 
                    <label className={styles.label}> Reajuste salárial </label>
                    <input className={styles.input} type="number" placeholder="Exemplo 10" min="0" />
                </fieldset>
                
                <div className={styles.containerButton}>
                    <button className={styles.containerButton_button}> Calcular </button> 

                    <div className={styles.containerButton_title}>
                        <img src="warning.svg" alt="Warning" />
                        <span> 
                            Importante! <br/>
                            Preencher todos os campos 
                        </span>
                    </div>
                </div>

                <p className={styles.novoSalario}> Novo salário: </p>
            </form>
        </div>
    )
}

export default Form