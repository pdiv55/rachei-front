import React from "react";
import Link from "../link/Link";
import "./container-despesas.css";

const DespesaTile = (props) => {
  const { expense } = props;

  return (
    <Link to="/despesa-form" className="notification despesa-tile">
      <div className="info-tile">
        <p>{expense.name}</p>
        <p>Paid by</p>
      </div>
      <div className="info-tile">
        <p>{expense.date}</p>
        <p>{expense.value}</p>
      </div>
    </Link>
  );
}

export default DespesaTile;
