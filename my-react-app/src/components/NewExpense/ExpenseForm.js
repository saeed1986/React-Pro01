import React, { useState } from "react";
import './ExpenseForm.css';
import Expenses from "../Expenses/Expenses";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
        // enteredTitle: '',
        // enteredAmount: '',
        // enteredDate: ''

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
        // instead of this one, we can set user input like the other one
        // setEnteredTitle(event.target.value);
        // The second approach
        // setUserInput({
            // ...userInput,
            // enteredTitle: event.target.value,
            // });

            // The third approach and the better approach as the second approach
            // setUserInput((prevState) => {
                // return { ...prevState, enteredTitle: event.target.value}
            // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
            // return { ...prevState, enteredAmount: event.target.value}
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
            // return { ...prevState, enteredDate: event.target.value}
    }


    const submitHandler = (event) => {
        event.preventDefault(); // this is javaScript and we don't want to have reloading the web page
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    }

    return (
        // default browser behaviour - Built-in function instead of to use for button
        <form onSubmit={submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='text' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;