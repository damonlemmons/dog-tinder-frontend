import React, { Component } from 'react';
import {
  Grid, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'

class Dogs extends Component {
  render() {
    console.log(this.props);
    return (
    <Grid>
    <Row>
  <Col xs={12}>
          <ListGroup>
          {this.props.dogs.map((dog, index) =>{
            return (
              <ListGroupItem
                key={index}
                header={
                  <h4>
                    <span className='dog-name'>
                      {dog.name}
                    </span>
                    - <small className='dog-age'>{dog.age} years old</small>
                  </h4>
                }>
                <span className='dog-enjoys'>
                  {dog.enjoys}
                </span>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </Col>
    </Row>
    </Grid>
  );
  }
}

export default Dogs;
