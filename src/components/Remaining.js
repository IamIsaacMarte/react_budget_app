/* The Remaining component uses assigns reduce function
to get a total of the cost and assigning a variable and 
displaying the variable in jsx */

import React, { useContext } from 'react'; 

import{ AppContext } from '../context/AppContext'; 

// when the user adds an expense the function causes 
// the state to update which also make the other connected components
// also update and re-render the context with the new value
const Remaining = () =>{

    const { expenses, budget } = useContext(AppContext); 
    const totalExpenses = expenses.reduce((total,item) => {
        return (total = total + item.cost); 
    }, 0); 

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'; 

    return (
        <div className={'alert ${alertType}'}>
            <span>Remaining: ${budget-totalExpenses}</span>
        </div>
    );

};

export default Remaining; 
