import * as React from 'react';
import Col from './col';
import Grid from './grid';
import Row from './row';

const GridExample:React.FunctionComponent = () => {
    return (
      <Grid>
          <Row>
              <Col>
              123</Col>
          </Row>
      </Grid>
    )
}

export default GridExample;