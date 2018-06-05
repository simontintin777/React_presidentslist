import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap"
import "./App.css";
import Presidents from "./Presidents";
import errorHandler from "./errorHandler";
import StartView from "./Presidents/StartPage";

class App extends Component {
  render() {
    // alert("Hello -- ");
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h1>{this.props.title}</h1>
            <cite className="colorNames">
              Brought to you by {this.props.author} on{" "}
              {this.props.now.toDateString()}
            </cite>
            <h3>React Framework to test the cloud APIs from Azure</h3>
          </div>

          <div className="App-body">
            <br></br>
            <Grid>
              <Row>

                <Col align="left" xs={12} sm={6} md={3}>
                  <nav>
                    <h5><Link to="/presidents/ascending" style={{ textDecoration: 'none' }}>Sort Ascending</Link></h5>
                    <p>Ascending list of all US presidents.</p>

                    <h5><Link to="/presidents/descending" style={{ textDecoration: 'none' }}>Sort descending</Link></h5>
                    <p>Ascending list of all US presidents.</p>

                    <h5><Link to="/" style={{ textDecoration: 'none' }}>Back to Home</Link></h5>
                  </nav>
                </Col>

                <Col xs={12} sm={6} md={9}>
                  
                    <Switch>
                      <Route path="/presidents/" component={Presidents} />
                      <Route exact path="/" component={StartView} />
                      <Route path="/" component={errorHandler} />                      
                    </Switch>
                 
                </Col>

              </Row>
            </Grid>
          </div>
          <br></br>
        </div>
      </Router>
    );
  }
}



export default App;

