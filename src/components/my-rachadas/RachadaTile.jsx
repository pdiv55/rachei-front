import React from "react";
import Link from "../link/Link";
import "./my-rachadas.css";

const RachadaTile = (props) => {
  const { rachada, users, expenses } = props;

  return (
    <div className="rachada-tile">
      <Link to={{
        pathname: `/rachada/${rachada._id}`,
        state: {
          rachada: rachada,
          users: users,
          expenses: expenses,
        }
      }} >
        <article className="notification">
          <p className="title is-5">{rachada.name}</p>
          <p className="subtitle is-7">{rachada.creationDate}</p>
          <p className="subtitle is-6">Total</p>
        </article>
      </Link>
    </div>
  );
}

export default RachadaTile;
