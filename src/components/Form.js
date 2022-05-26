import {useState} from 'react'

import React from 'react'
import styles from '../styles/components/form.module.css'

function Form() {

    function calculate() {
        let salary = document.querySelector('#salary')
        let newSalary = Number(salary.value)
        let increase = document.querySelector('#increase')
        let newIncrease = Number(increase.value)
        let novo = document.querySelector('#novo')
        let cal = Number((newSalary * newIncrease) / 100)
        let current = cal + newSalary

        novo.innerHTML = `Novo salário ${new Intl.NumberFormat('pt-br', {style: 'currency',currency: 'BRL'}).format(current)}`

        setValueSalary('')
        setValueIncrease('')
    }

    const [valueSalary, setValueSalary] = useState([])
    const [valueIncrease, setValueIncrease] = useState([])

    return (
        <div className={styles.container} >
            <form className={styles.form} autoComplete="off">
                <img className={styles.calculator} src="calculadora.png" alt="image calculadora" />

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}> Seus dados </legend>
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <label htmlFor="salary" className={styles.label}> Salário atual </label>
                    <input type="number" id="salary" value={valueSalary} onChange={(e) => setValueSalary(Number(e.target.value))} className={styles.input} placeholder="Exemplo: 1000"  required/>
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <label htmlFor="increase" className={styles.label}> % Reajuste salário </label> 
                    <input type="number"  value={valueIncrease}  onChange={(e)=> setValueIncrease(e.target.value)} id="increase" className={styles.input} min="0" placeholder="Exemplo: 10" required/>
                </fieldset>

                <div className={styles.containerButton}>
                    <input type="button" value="Calcular" onClick={calculate} className={styles.containerButton_button} />

                    <div className={styles.containerButton_title}>
                        <img src="warning.svg" alt="Warning" />
                        <span>
                            Importante! <br />
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