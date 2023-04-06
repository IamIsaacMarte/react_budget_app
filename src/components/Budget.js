// imports react hook useContect
// 
import React, { useContext} from 'react';

import { AppContext } from '../context/AppContext'; 

const BUDGET_MAX_VALUE = 20000;

const Budget = () =>{
    
    // Accepts the objext and returns the context value for budget
    const { budget, totalExpenses, currency, dispatch } = useContext(AppContext);

    const budgetHandler = (event) => {
        const newBudgetValue = Number(event.target.value);

        // condition ensures the value entered is a number and not empty
        if (Number.isNaN(newBudgetValue)) {
        alert('Please enter a valid number.');
        return;
        }

        // condition checks budget value entered is an integer
        if (!Number.isInteger(newBudgetValue)) {
        alert('Please enter an integer number.');
        return;
        }

        if (newBudgetValue < totalExpenses) {
        alert(
            "The value cannot exceed remaining funds" 
            + currency 
            + totalExpenses
            );
        

        } else {
            if (newBudgetValue > BUDGET_MAX_VALUE) {
                alert('The budget cannot exceed the max budget of 20000' );  
            }

            dispatch({
                type: 'SET_BUDGET',
                payload: newBudgetValue,
            });
        }
  };

    return (

    // Div uses bootstrap alert class to add gray background
    // By adding some text or hard coding value
    <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input
          required='required'
          type='number'
          id='budget'
          value={budget}
          style={{ size: 10}}
          onChange={budgetHandler} />
        
    </div>
    );

}; 



export default Budget; 