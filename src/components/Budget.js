import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        
        if (newBudgetValue >= 20000) {
            alert("Le budget ne doit pas dépasser 20 000.");
            setNewBudget(2000); // Réinitialise le budget à 20 000 si la valeur est trop élevée.
        } else {
            setNewBudget(newBudgetValue);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {props.currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} disabled={newBudget >= 20000}></input>
        </div>
    );
};

export default Budget;
