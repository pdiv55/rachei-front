import React from "react";
import "../despesa-form/despesa-form.css";

const MemberCheckbox = (props) => {
  const { checked, user, handleUser } = props;

  const onClickCheckBox = (event) => {
    handleUser(user._id, event.target.checked);
  }

  return (
    <div className="checkbox-tile">
      <input type="checkbox" name="member" className="checkbox" onClick={onClickCheckBox} defaultChecked={checked}/>
      <label className="label-checkbox">{user.name}</label>
    </div>
  );
}

export default MemberCheckbox;
