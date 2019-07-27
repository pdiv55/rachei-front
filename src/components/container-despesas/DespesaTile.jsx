import React from "react";
import Link from "../link/Link";
import "./container-despesas.css";

const DespesaTile = (props) => {
  const { rachada, users, expense } = props;
  return (
    <Link to={{
      pathname: `/despesa-form/${expense._id}`,
      state: {
        users: users,
        rachada: rachada,
        expense: expense,
        isEdit: true,
      }
      }} className="notification despesa-tile">
      <div className="info-tile">
        <p>{expense.name}</p>
        <p>{expense.from.name}</p>
      </div>
      <div className="info-tile">
        <p>{expense.date}</p>
        <p>{expense.value}</p>
      </div>
    </Link>
  );
}

export default DespesaTile;
