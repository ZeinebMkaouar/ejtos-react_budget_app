import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: -10, // Decrease by 10, adjust this value as needed
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.currency}{props.cost}</td>
            <td><AiFillPlusCircle size='2.2em' color="green" onClick={increaseAllocation}></AiFillPlusCircle></td>
            <td><AiOutlineMinusCircle size='2.2em' color="red" onClick={decreaseAllocation}></AiOutlineMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
