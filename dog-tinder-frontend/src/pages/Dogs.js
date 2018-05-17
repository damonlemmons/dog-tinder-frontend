import React, { Component } from 'react';
import {
  Grid, Col, Row
} from 'react-bootstrap'

class Dogs extends Component {
  render() {
    console.log(this.props);
    return (
    <Grid>
      <Row>
        <Col>
            <div>Im a component</div>
        </Col>
      </Row>
    </Grid>
  );
  }
}

export default Dogs;
