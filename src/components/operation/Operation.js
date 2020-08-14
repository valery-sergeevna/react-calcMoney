import React from 'react';

const Operation = ({addTransaction, addDescription, addAmount, description, amount}) => (
        <section className ="operation">
            <h3>Новая операция</h3>
            <form id="form">
                <label>
                    <input 
                        type="text" 
                        className ="operation__fields operation__name" 
                        placeholder="Наименование операции"
                        onChange ={(e) => addDescription(e)} 
                        value = {description}>
                           
                    </input>
                </label>
                <label>
                    <input 
                        type="number" 
                        className ="operation__fields operation__amount" 
                        placeholder="Введите сумму"
                        onChange ={(e) => addAmount(e)}
                        value = {amount}>
                    
                    </input>
                </label>
                <div class="operation__btns">
                    <button onClick={() => addTransaction(false)} type="button" className ="operation__btn operation__btn-subtract">РАСХОД</button>
                    <button onClick={() => addTransaction(true)} type="button" className ="operation__btn operation__btn-add">ДОХОД</button>
                </div>
            </form>
        </section>
);

export default Operation;
