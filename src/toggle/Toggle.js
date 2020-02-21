import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleMessage } from "./actions";

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility && <p>Only see me when toggled</p>}
    <button onClick={toggleMessage}>Toggle Me</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
