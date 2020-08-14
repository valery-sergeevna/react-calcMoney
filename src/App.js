import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component {

    state = {
            transactions: [],
            description: '',
            amount: '',
            income: 0,
            expense: 0,
            balance: 0,
    };

    addTransaction = add => {
        const transactions = [...this.state.transactions];
        
        const transaction = {
            id: `cmr${(+new Date).toString(16)}`,
            description: this.state.description,
            amount: this.state.amount,
            add
        }

        transactions.push(transaction);
        this.setState({
            transactions,
            description: "",
            amount: "",
          });
          this.getBalance(add);
        };

    addAmount = e => {
        this.setState({amount: e.target.value});
    };
    addDescription = e =>{
        this.setState({description: e.target.value});
    };
    
    getTotal= () => {
        this.setState({ balance: this.state.income - this.state.expense });
      };
    
      getBalance = (add) => {
        add
          ? this.setState(
              { income: +this.state.amount + this.state.income },
              this.getTotal
            )
          : this.setState(
              { expense: +this.state.amount + this.state.expense },
              this.getTotal
            )
      }
    render() {
        return (
            <>
                <header>
                    <h1>Кошелек</h1>
                    <h2>Калькулятор расходов</h2>
                </header>

                <main>
                    <div className="container">
                        <Total 
                             balance={this.state.balance}
                             income={this.state.income}
                             expense={this.state.expense}
                        />
                        <History transactions = {this.state.transactions}/>
                        <Operation 
                            addTransaction={this.addTransaction} 
                            addAmount ={this.addAmount}
                            addDescription ={this.addDescription}
                            description = {this.state.description}
                            amount = {this.state.amount}
                        />
                    </div>
                </main>
            </>
        )
    }
}

export default App;
