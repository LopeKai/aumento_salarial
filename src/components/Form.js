import React from 'react'

import styles from '../styles/components/form.module.css'

function Form() {
    
    function calculate() {
        let name = document.querySelector('input#name')
        let salary = document.querySelector('#salary')
        let newSalary = Number(salary.value)
        let increase = document.querySelector('#increase')
        let newIncrease = Number(increase.value)
        let novo = document.querySelector('#novo')
        let cal = ((newSalary * newIncrease) / 100)
        let current = cal + newSalary

        novo.innerHTML = `Senhor(a) ${name.value.toUpperCase()}, seu novo salário R$ ${current.toFixed(2).replace('.',',')}`
    }

    return(
        <div className={styles.container} >
            <form className={styles.form}>
                <img className={styles.calculator} src="calculadora.png" />

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}> Seus dados </legend>
                    <label for="name" className={styles.label}> Primeiro nome </label>
                    <input type="text" id="name" className={styles.input} required/>
                </fieldset>

                <fieldset className={styles.fieldset}> 
                    <label for="salary" className={styles.label}> Salário atual </label>
                    <input id="salary"  className={styles.input} type="number" placeholder="Exemplo 1000,00" min="0" onfocus="this.value='';" required />
                </fieldset>

                 <fieldset className={styles.fieldset}> 
                    <label for="increase" className={styles.label}> Reajuste salárial </label>
                    <input id="increase" className={styles.input} type="number" placeholder="Exemplo 10" min="0" onfocus="this.value='';" required />
                </fieldset>
                
                <div className={styles.containerButton}>
                    <input type="button" value="Calcular" onClick={calculate} className={styles.containerButton_button} />

                    <div className={styles.containerButton_title}>
                        <img src="warning.svg" alt="Warning" />
                        <span> 
                            Importante! <br/>
                            Preencher todos os campos 
                        </span>
                    </div>
                </div>
                <p id="novo" className={styles.novoSalario}> Novo salário: </p>
            </form>
        </div>
    )
}

export default Form