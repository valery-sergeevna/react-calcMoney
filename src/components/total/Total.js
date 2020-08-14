import React from 'react';

const Total = ({ income, expense, balance }) => {
    return(
        <section class="total">
            <header class="total__header">
                <h3>Баланс</h3>
                <p class="total__balance">{ balance } ₽</p>
            </header>
            <div class="total__main">
                <div class="total__main-item total__income">
                    <h4>Доходы</h4>
                    <p class="total__money total__money-income">
                        + { income } ₽
                    </p>
                </div>
                <div class="total__main-item total__expenses">
                    <h4>Расходы</h4>
                    <p class="total__money total__money-expenses">
                        - { expense } ₽
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Total;