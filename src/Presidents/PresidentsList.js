import React, { Component } from "react";
import {
    ListGroup,
    ListGroupItem
  } from "react-bootstrap"

class PresidentsList extends Component {
  render() {
    const { presidents } = this.props;
    //alert(presidents);
    if (presidents.length === 0) {
      return <p>Loading! No president yet!</p>;
    }

    const presidentsDisplay = presidents.map(president => {

      return (
        <div className="col-sm-6 col-md-4" key={president._id}>  
            <ListGroup>
                <ListGroupItem>
                <h6>{president.President}</h6> 
                </ListGroupItem>
            </ListGroup> 
            <br></br>                           
        </div>
      );
    });

    return (
      <section>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">{presidentsDisplay}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default PresidentsList;