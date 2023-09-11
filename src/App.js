import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("$");

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <AppProvider value={{ selectedCurrency, setSelectedCurrency }}>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget currency= {selectedCurrency} />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget currency= {selectedCurrency} />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal currency= {selectedCurrency}/>
                    </div>
                    <div className='col-sm'>
                        <div className="form-group">
                            <label htmlFor="currencySelect">Currency:</label>
                            <select
                                id="currencySelect"
                                className="form-control"
                                value={selectedCurrency}
                                onChange={handleCurrencyChange}
                            >
                                <option value="$">$ Dollar</option>
                                <option value="£">£ Pound</option>
                                <option value="€">€ Euro</option>
                                <option value="₹">₹ Rupee</option>
                            </select>
                        </div>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList  currency={selectedCurrency}/>
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm  currency={selectedCurrency}/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
