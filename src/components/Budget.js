// imports react hook useContect
// 
import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext'; 

const Budget = () =>{
    

    // Accepts the objext and returns the context value for budget
    const { budget } = useContext(AppContext);

    return (

    // Div uses bootstrap alert class to add gray background
    // By adding some text or hard coding value
    <div className='alert alert-secondary'>
        <span>Budget: ${budget}</span>
    </div>
    );

}; 



export default Budget; 