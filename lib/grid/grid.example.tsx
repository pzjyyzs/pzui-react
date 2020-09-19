import * as React from 'react';
import Col from './col';
import Grid from './grid';
import Row from './row';
import './grid.example.scss'
const GridExample:React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Grid>
                <Row className='row row-background'>
                    <Col>
                        123
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row className='row row-background'>
                    <Col size="6">
                        col-6
                    </Col>
                    <Col size="6">col-6</Col>
                </Row>
            </Grid>
            <Grid>
                <Row className='row row-background'>
                    <Col size="4">
                        col-4
                    </Col>
                    <Col size="4">col-4</Col>
                    <Col size="4">col-4</Col>
                </Row>
            </Grid>
        </React.Fragment>
    )
}

export default GridExample;