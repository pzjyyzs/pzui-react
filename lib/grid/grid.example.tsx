import * as React from 'react';
import Col from './col';
import Grid from './grid';
import Row from './row';

const GridExample:React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Grid>
                <Row>
                    <Col>
                        123
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col size="6">
                        col-6
                    </Col>
                    <Col size="6">col-6</Col>
                </Row>
            </Grid>
        </React.Fragment>
    )
}

export default GridExample;