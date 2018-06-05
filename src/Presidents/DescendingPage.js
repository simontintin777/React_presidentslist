import React, { Component } from "react";
import axiosInstance from "../utils/axiosInstance";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PresidentsList from "./PresidentsList";
import {
  Grid
} from "react-bootstrap"

class DescendingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      presidentsList: [],
    };
  }

  async loadPresidentsList() {
    const url = "/presidents/descending";
    const response = await axiosInstance.get(url);
    const resultList = response.data;
    //alert("2333333333"+JSON.stringify(resultList));
    this.setState({ 
      presidentsList: resultList
    });
  }
  
  componentWillMount() {
    this.loadPresidentsList();
  }

  render() {
    //alert("Hello -- ");
    return (
      <div className="PresidentsList">
        <Grid>
          <PresidentsList presidents={this.state.presidentsList} />
        </Grid>
      </div>
    );
  }
}
export default DescendingPage;
