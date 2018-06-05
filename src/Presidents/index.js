import React, { Component } from "react";
import { BrowserRouter as  Router, Route,  Switch } from "react-router-dom";
import AscendingPage from "./AscendingPage";
import DescendingPage from "./DescendingPage";


class Presidents extends Component {

  render() {
    const { match } = this.props;
    const { url } = match;
//alert(url);
    return (
      
        <div className="row">
          <div className="col-md-12 ">
            <Switch>
              <Route path={`${url}/ascending`} component={AscendingPage} />
              <Route path={`${url}/descending`} component={DescendingPage} />
            </Switch>
          </div>
        </div>
      
    );
  }
}

export default Presidents;