import React, { Component } from "react";
import "../despesa-form/despesa-form.css";

class MemberCheckbox extends Component {
  render() {
    return (
      <div className="checkbox-tile">
        <input type="checkbox" name="member" className="checkbox" />
        <label className="label-checkbox">Membro</label>
      </div>
    );
  }
}

export default MemberCheckbox;
