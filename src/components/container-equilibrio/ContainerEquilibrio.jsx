import React from "react";
import "./container-equilibrio.css";
import ResultTile from "./ResultTile";
import EquilibrioTile from "./EquilibrioTile";

const ContainerEquilibrio = (props) => {
  const { users, expenses } = props;
  const individualExpenses = [];

  // Results

  let totalExpenses = 0;

  expenses.map(expense => {
    totalExpenses += parseInt(expense.value);
    return expense.individualExpenses.map(individualExpense => {
      return individualExpenses.push(individualExpense);
    })
  })

  const results = users.map(user => {
    const expenses = individualExpenses.filter(individualExpense => {
      return (individualExpense.from._id === user._id || individualExpense.to._id === user._id)
    })
    return {
      id: user._id,
      name: user.name,
      expenses: expenses,
    }
  })

  results.map(result => {
    let total = 0;
    result.expenses.map(expense => {
      if (expense.from._id === result.id) {
        return total += expense.value;
      } else {
        return total -= expense.value;
      }
    })
    return result.total = total;
  })

  // Equilibrios

  let equilibrios = {};
  let usersArray = [...users];

  for (let i = 0; i < usersArray.length; i++) {
    for (let j = 0; j < usersArray.length; j++) {
      if (usersArray[i] !== usersArray[j]) {
        equilibrios[`${usersArray[i]._id}&${usersArray[j]._id}`] = {
          from: {
            id: usersArray[i]._id,
            name: usersArray[i].name,
          },
          to: {
            id: usersArray[j]._id,
            name: usersArray[j].name,
          },
          value: 0,
        };
      }
    }
    usersArray.splice(i, 1);
  }

  for (let key in equilibrios) {
    individualExpenses.map(element => {
      if (key.split('&').indexOf(element.from._id) === 0 && key.split('&').indexOf(element.to._id) === 1) {
        return equilibrios[key].value += element.value;
      } else if (key.split('&').indexOf(element.from._id) === 1 && key.split('&').indexOf(element.to._id) === 0) {
        return equilibrios[key].value -= element.value;
      }
    })
  }

  equilibrios = Object.entries(equilibrios);

  return (
    <div className="equilibrio-container">
      <div className="result-container">
        <p className="title is-4 equilibrio-subtitle">Resumo</p>
        {results.map((element, index) => (
          <ResultTile key={index} result={element} total={totalExpenses}/>
        ))}
      </div>
      <div className="how-to-container">
        <p className="title is-4 equilibrio-subtitle">Como equilibrar ?</p>
        {equilibrios.map((element, index) => (
          <EquilibrioTile key={index} element={element}/>
        ))}
      </div>
    </div>
  );
}

export default ContainerEquilibrio;
