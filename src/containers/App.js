import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { onFetchData } from "../actions/index";

class App extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="App">
        Redux Saga
        {/* {this.props.data.people.map((el, i) => <h3 key={i}>{el.name}</h3>)} */}
        <button onClick={this.props.onFetchData}>Get Data</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.data };
};

export default connect(mapStateToProps, {
  onFetchData
})(App);
