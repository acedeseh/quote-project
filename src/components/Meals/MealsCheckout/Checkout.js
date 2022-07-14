import React, { useRef, useState } from 'react'
import classes from './Checkout.module.css'


const isEmpty = value => value.trim() === ''
const isFiveDigits = value => value.trim().length === 5

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        number: true,
        address: true,
        postalCode: true,
    })
    const nameInputRef = useRef()
    const numberInputRef = useRef()
    const addressInputRef = useRef()
    const postalCodeInputRef = useRef()


    const confirmOrderHanlder = (e) => {
        e.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredNumber = numberInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredPostalCode = postalCodeInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredNumberIsValid = !isEmpty(enteredNumber)
        const enteredAddressIsValid = !isEmpty(enteredAddress)
        const enteredPostalCodeIsValid = isFiveDigits(enteredPostalCode)

        setFormInputValidity({
            name: enteredNameIsValid,
            number: enteredNumberIsValid,
            address: enteredAddressIsValid,
            postalCode: enteredPostalCodeIsValid,
        })

        const formIsValid = enteredNameIsValid && enteredNumberIsValid && enteredAddressIsValid && enteredPostalCodeIsValid;

        if (!formIsValid) {
            return;
        }
        props.onConfirm({
            name: enteredName,
            number: enteredNumber,
            address: enteredAddress,
            postalCode: enteredPostalCode,
        })
    }

    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;

    const numberControlClasses = `${classes.control} ${formInputValidity.number ? '' : classes.invalid}`;

    const addressControlClasses = `${classes.control} ${formInputValidity.address ? '' : classes.invalid}`

    const postalCodeControlClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`

    return (
        <form className={classes.form} onSubmit={confirmOrderHanlder}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={numberControlClasses}>
                <label htmlFor='number'>No Hp</label>
                <input type='type' id='number' ref={numberInputRef} />
                {!formInputValidity.number && <p>Please enter a valid number</p>}
            </div>
            <div className={addressControlClasses}>
                <label htmlFor='address'>Alamat</label>
                <input type='text' id='address' ref={addressInputRef} />
                {!formInputValidity.address && <p>Please enter a valid address</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor='kode Pos'>Kode Pos</label>
                <input type='text' id='kode pos' ref={postalCodeInputRef} />
                {!formInputValidity.postalCode && <p>Please enter a valid postal code (5 digits)!</p>}
            </div>
            <div className={classes.actions}>
                <button className={classes.submit}>Order</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default Checkout